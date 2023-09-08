import { createRouter, createWebHistory } from "vue-router";
import HomeView from '@/components/routerViews/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/components/routerViews/AboutView.vue"),
      children: [
        // {
        //   path: "",
        //   redirect: "about/skills"
        // },
        {
          path: "skills",
          name: "aboutSkills",
          component: () => import("@/components/about/AboutSkills.vue")
        },
        {
          path: "mindset",
          name: "aboutMindset",
          component: () => import("@/components/about/Aboutmindset.vue")
        },
        {
          path: "story",
          name: "aboutStory",
          component: () => import("@/components/about/AboutStory.vue")
        },
      ]
    },
		{
      path: "/portfolio",
      name: "portfolio",
      component: () => import("@/components/routerViews/PortfolioView.vue"),
    },
    {
      path: '/portfolio/:id',
      name: 'projectDetail',
      component: () => import('@/components/portfolio/ProjectDetail.vue'),
      props: (route) => ({ ...route.params, id: parseInt(route.params.id) })
    },
		{
      path: "/contact",
      name: "contact",
      component: () => import("@/components/routerViews/ContactView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("@/components/routerViews/NotFound.vue"),
    },
  ],
  linkActiveClass: "active",
  // scrollBehavior(to, from, savedPosition){
  //   return savedPosition || {bottom: 0} 
  //   return {top: null, left: null, behavior: null}
  // }
});

export default router;