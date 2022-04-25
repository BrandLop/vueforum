import PageHome from "@/components/PageHome";
import PageThreadShow from "@/components/PageThreadShow";
import PageNotFound from "@/components/PageNotFound";
import sourceData from "@/data.json"
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
		beforeEnter (to,from,next) {
			const threadExist = sourceData.threads.find(thread => thread.id === to.params.id)
			if(threadExist){
				return next()
			} else {
				next({
					name: 'pagenotFound',
					params: {
						pathMatch: to.path.substring(1).split('/')
					},
					query: to.query,
					hash: to.hash
				})
			}
		}
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
