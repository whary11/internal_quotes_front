import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw,
} from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { useConfigStore } from "@/stores/config";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/dashboard",
    component: () => import("@/layouts/main-layout/MainLayout.vue"),
    meta: {
      middleware: "auth",
    },
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("@/views/Dashboard.vue"),
        meta: {
          pageTitle: "Dashboard",
          breadcrumbs: ["Dashboards"],
        },
      }
    ],
  },
  {
    path: "/",
    redirect: "/cotizaciones",
    component: () => import("@/layouts/main-layout/MainLayout.vue"),
    meta: {
      middleware: "auth",
    },
    children: [
      {
        path: "/quote/create",
        name: "create-quote",
        component: () => import("@/views/quote/CreateQuote.vue"),
        meta: {
          pageTitle: "Cotizaciones",
          breadcrumbs: ["Cotizaciones",'Crear Cotización'],
        },
      },
      {
        path: "/quote/list",
        name: "view-quotes",
        component: () => import("@/views/quote/ViewQuotes.vue"),
        meta: {
          pageTitle: "Cotizaciones",
          breadcrumbs: ["Cotizaciones",'Ver cotizaciones'],
        },
      },
      
    ],
  },

  {
    path: "/",
    redirect: "/template/create",
    component: () => import("@/layouts/main-layout/MainLayout.vue"),
    meta: {
      middleware: "auth",
    },
    children: [
      {
        path: "/template/create",
        name: "create-template",
        component: () => import("@/views/templates/CreateTemplate.vue"),
        meta: {
          pageTitle: "Plantillas",
          breadcrumbs: ["Plantillas",'Crear plantilla'],
        },
      }
    ],
  },


  
  
  
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  const configStore = useConfigStore();

  // current page view title
  document.title = `${to.meta.pageTitle} - ${import.meta.env.VITE_APP_NAME}`;

  // reset config to initial state
  configStore.resetLayoutConfig();

  // verify auth token before each page change
  authStore.verifyAuth();

  // before page access check if page requires authentication
  if (to.meta.middleware == "auth") {
    if (authStore.isAuthenticated) {
      next();
    } else {
      next({ name: "sign-in" });
    }
  } else {
    next();
  }

  // Scroll page to top on every route change
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

export default router;
