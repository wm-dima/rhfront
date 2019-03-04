import Vue from "vue"
import Router from "vue-router"

//  Main Pages
import Main from "./views/public/Main.vue"

//  Common pages
import Error from "./views/Error.vue"

import MainNavbar from "./layout/MainNavbar.vue"
import MainFooter from "./layout/MainFooter.vue"


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "index",
      components: { default: Main, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 0, navbarTransparent: false },
        footer: { type: "black", size: "big" }
      }
    },
    {
      path: "/error",
      name: "error",
      components: { default: Error },
      props: {
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
