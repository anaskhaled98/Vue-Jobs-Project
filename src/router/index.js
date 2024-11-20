import { createWebHistory, createRouter } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import JobsView from "@/views/JobsView.vue";
import NotFoundView from "../views/NotFoundView.vue";
import AddJob from "../views/AddJob.vue";
import JobView from "../views/JobView.vue";
import EditJobView from "../views/EditJobView.vue";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/jobs", name: "jobs", component: JobsView },
  { path: "/jobs/:id", name: "job", component: JobView },
  { path: "/jobs/add", name: "add-job", component: AddJob },
  { path: "/jobs/edit/:id", name: "edit-job", component: EditJobView },
  { path: "/:catchAll(.*)", name: "not-found", component: NotFoundView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
