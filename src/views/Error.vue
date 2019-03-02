<template>
  <div class="wrapper">
    <parallax class="page-header header-filter" parallax-active="false" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item md-size-100 text-center">
            <h1 class="title">500</h1>
            <h2 class="description">Внутренняя ошибка системы :(</h2>
            <h4 class="description">Ooooups! Что-то пошло не так.</h4>
          </div>
        </div>
      </div>
    </parallax>
  </div>
</template>

<script>
import Mixins from "@/plugins/basicMixins";

export default {
  mixins: [Mixins.HeaderImage],
  bodyClass: "error-page",
  data() {
    return {
      image: require("@/assets/img/clint-mckoy.jpg")
    };
  }
};
</script>

<style lang="scss">
</style>
