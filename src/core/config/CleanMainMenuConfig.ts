export interface MenuItem {
  heading?: string;
  sectionTitle?: string;
  route?: string;
  pages?: Array<MenuItem>;
  keenthemesIcon?: string;
  bootstrapIcon?: string;
  sub?: Array<MenuItem>;
}

const MainMenuConfig: Array<MenuItem> = [
  {
    pages: [
      {
        heading: "Dashboard",
        route: "/dashboard",
        keenthemesIcon: "element-11",
        bootstrapIcon: "bi-app-indicator",
      },

      {
        sectionTitle: "Cotizaciones",
        route: "/quotes",
        keenthemesIcon: "abstract-38",
        bootstrapIcon: "bi-printer",
        sub: [
          
          {
            heading: "Crear cotización",
            route: "/quote/create",
          },
          {
            heading: "Ver cotizaciones",
            route: "/quote/list",
          },
        ],
      },


      {
        sectionTitle: "Plantillas",
        route: "/template",
        keenthemesIcon: "abstract-38",
        bootstrapIcon: "bi-printer",
        sub: [
          
          {
            heading: "Crear plantilla",
            route: "/template/create",
          },
          // {
          //   heading: "Ver cotizaciones",
          //   route: "/quote/list",
          // },
        ],
      },
    ],
  },
  
];

export default MainMenuConfig;
