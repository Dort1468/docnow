import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "@/components/Header";

// Mock next/image
jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => (
    <img src={src} alt={alt} />
  ),
}));

// Mock next/link
jest.mock("next/link", () => ({
  __esModule: true,
  default: ({
    children,
    href,
  }: {
    children: React.ReactNode;
    href: string;
  }) => <a href={href}>{children}</a>,
}));

describe("Header Component", () => {
  it("renders the logo images correctly", () => {
    render(
      <Header>
        <div>Test Children</div>
      </Header>
    );

    // 檢查桌面版 Logo
    const desktopLogo = screen.getByAltText("Logo with name");
    expect(desktopLogo).toBeInTheDocument();
    expect(desktopLogo).toHaveAttribute(
      "src",
      "/assets/icons/docnow-logo-trans.svg"
    );
    // Next/Image 組件實際不會渲染 width 和 height 屬性到 DOM

    // 檢查手機版 Logo
    const mobileLogo = screen.getByAltText("Logo");
    expect(mobileLogo).toBeInTheDocument();
    expect(mobileLogo).toHaveAttribute("src", "/assets/icons/docnow-tran.svg");
  });

  it("renders the home link correctly", () => {
    render(
      <Header>
        <div>Test Children</div>
      </Header>
    );

    const homeLink = screen.getByRole("link");
    expect(homeLink).toHaveAttribute("href", "/");
  });

  it("renders children content", () => {
    const testContent = <div>測試內容</div>;
    render(<Header>{testContent}</Header>);

    expect(screen.getByText("測試內容")).toBeInTheDocument();
  });

  it("applies custom className when provided", () => {
    const customClass = "sticky left-0 top-0";
    render(
      <Header className={customClass}>
        <div>Test Children</div>
      </Header>
    );

    // 使用 container.firstChild 來獲取 header div
    const headerElement = screen.getByTestId("header");
    expect(headerElement).toHaveClass("header", customClass);
  });
});
