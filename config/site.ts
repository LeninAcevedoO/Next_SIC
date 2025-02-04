export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Control Interno",
  description: "Aplicativo diseñado para una nueva presentación del Sistema de Control Interno de infomedia.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Reportes",
      href: "/reports",
    },
    {
      label: "Ausencias",
      href: "/vacations",
    },
    {
      label: "Acerca de nosotros",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/home",
    },
    {
      label: "Reportes",
      href: "/reports",
    },
    {
      label: "Ausencias",
      href: "/vacations",
    },
    // {
    //   label: "Dashboard",
    //   href: "/dashboard",
    // },
    // {
    //   label: "Projects",
    //   href: "/projects",
    // },
    // {
    //   label: "Team",
    //   href: "/team",
    // },
    // {
    //   label: "Calendar",
    //   href: "/calendar",
    // },
    {
      label: "Comentarios",
      href: "/help-feedback",
    },
    {
      label: "Acerca de nosotros",
      href: "/about",
    },
    {
      label: "Perfil",
      href: "/profile",
    },
    {
      label: "Configuraciones",
      href: "/settings",
    },
    {
      label: "Cerrar sesión",
      href: "/login",
    },
  ],
  links: {
    github: "https://github.com/heroui-inc/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
