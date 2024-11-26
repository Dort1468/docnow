"use server";

import { clerkClient } from "@clerk/nextjs/server";
import { parseStringify } from "../utils";
import { liveblocks } from "../liveblocks";

export const getClerkUsers = async ({ userIds }: { userIds: string[] }) => {
  try {
    // 確保 userIds 不為空
    if (!userIds || userIds.length === 0) {
      return [];
    }

    const { data } = await clerkClient.users.getUserList({
      emailAddress: userIds,
    });

    // 確保 data 存在
    if (!data || !Array.isArray(data)) {
      console.log("未收到有效的使用者數據");
      return [];
    }

    const users = data
      .map((user) => ({
        id: user.id,
        name:
          user.firstName && user.lastName
            ? `${user.firstName} ${user.lastName}`
            : user.firstName || "未命名使用者",
        email: user.emailAddresses?.[0]?.emailAddress || "",
        avatar: user.imageUrl || "",
      }))
      .filter((user) => user.email); // 過濾掉沒有email的用戶

    // 確保按照原始 userIds 的順序排序，並過濾掉未找到的用戶
    const sortedUsers = userIds
      .map((email) => users.find((user) => user.email === email))
      .filter((user): user is NonNullable<typeof user> => user !== undefined);

    const parsedUsers = parseStringify(sortedUsers);

    // 確保 parseStringify 返回值正確
    return parsedUsers || [];
  } catch (error) {
    console.error(`Error fetching users: ${error}`);
    // 發生錯誤時返回空數組而不是 undefined
    return [];
  }
};

export const getDocumentUsers = async ({
  roomId,
  currentUser,
  text,
}: {
  roomId: string;
  currentUser: string;
  text: string;
}) => {
  try {
    const room = await liveblocks.getRoom(roomId);

    const users = Object.keys(room.usersAccesses).filter(
      (email) => email !== currentUser
    );

    if (text.length) {
      const lowerCaseText = text.toLowerCase();

      const filteredUsers = users.filter((email: string) =>
        email.toLowerCase().includes(lowerCaseText)
      );

      return parseStringify(filteredUsers);
    }

    return parseStringify(users);
  } catch (error) {
    console.log(`Error fetching document users: ${error}`);
  }
};
