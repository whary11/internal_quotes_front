export interface MenuItem {
  heading?: string;
  sectionTitle?: string;
  route?: string;
  pages?: Array<MenuItem>;
  keenthemesIcon?: string;
  bootstrapIcon?: string;
  sub?: Array<MenuItem>;
  permission?:{
    showAll?:Boolean,
    permissions?:Array<String>,
    documentation?:String
  };
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
            permission: {
              showAll:true,
              permissions:['crear_cotizacion'],
              documentation:"Crear cotización"
            }
          },
          {
            heading: "Ver cotizaciones",
            route: "/quote/list",
            permission: {
              showAll:true,
              permissions:['ver_cotizaciones'],
              documentation:"Ver cotizaciones"
            }
          },
        ],
      },
    ],
  },
  
];

export default MainMenuConfig;
