import { createRouter, createWebHistory } from "vue-router";

import MainLayout from "../components/layout/MainLayout.vue";
import Dashboard from "../views/dashboard/Dashboard.vue";
import EmployeeList from "../views/employee/employee-list/EmployeeList.vue";

import ImportLayout from "../components/layout/import-layout/ImportLayout.vue";
import EmployeeImport from "../views/employee/employee-import/EmployeeImport.vue";
import MISAPageNotFound from "../components/layout/MISAPageNotFound.vue";

const routes = [
  {
    path: "/",
    redirect: "/app/employee",
  },
  {
    path: "/app",
    name: "app",
    component: MainLayout,
    children: [
      {
        path: "/app/dashboard",
        name: "dashboard-app",
        component: Dashboard,
      },
      {
        path: "/app/employee",
        name: "employee-app",
        component: EmployeeList,
      },
    ],
  },
  {
    path: "/import",
    name: "import",
    component: ImportLayout,
    children: [
      {
        path: "/app/employee/import",
        name: "employee-import",
        component: EmployeeImport,
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: MISAPageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
