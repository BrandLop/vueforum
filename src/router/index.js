import PageHome from "@/components/PageHome";
import PageThreadShow from "@/components/PageThreadShow";
import PageNotFound from "@/components/PageNotFound";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: PageHome,
  },
  {
    path: "/thread/:id",
    name: "threadshow",
    component: PageThreadShow,
    props: true,
  },
  { 
		path: "/:pathMatch(.*)*", 
		name: "pagenotFound", 
		component: PageNotFound 
	}
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
