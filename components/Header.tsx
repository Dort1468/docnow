import Link from "next/link";
import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div className={cn("header", className)} data-testid="header">
      <Link href="/" className="left-4 top-4">
        <Image
          src="/assets/icons/docnow-logo-trans.svg"
          alt="Logo with name"
          width={400}
          height={50}
          className="hidden md:block"
        />
        <Image
          src="/assets/icons/docnow-tran.svg"
          alt="Logo"
          width={140}
          height={50}
          className="mr-2 md:hidden"
        />
      </Link>
      {children}
    </div>
  );
};

export default Header;
