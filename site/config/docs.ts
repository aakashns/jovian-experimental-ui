import { MainNavItem, SidebarNavItem } from "@/types/nav";

interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "GitHub",
      href: "https://github.com/shadcn/ui",
      external: true,
    },
  ],
  sidebarNav: [
    // {
    //   title: "Getting Started",
    //   items: [
    //     {
    //       title: "Introduction",
    //       href: "/docs",
    //       items: [],
    //     },
    //     {
    //       title: "Installation",
    //       href: "/docs/installation",
    //       items: [],
    //     },
    //   ],
    // },
  ],
};
