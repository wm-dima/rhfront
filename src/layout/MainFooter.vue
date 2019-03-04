<template>
    <footer
      class="footer"
      :class="{
        [`footer-${type}`]: type,
        [`footer-${size}`]: size}"
      :data-background-color="backgroundColor">

      <template>
        <div class="container">
          <div class="content">
            <div class="md-layout">
              <div class="md-layout-item md-size-33 md-small-size-100">
                <h5>О REHAU</h5>
                <p>С 1948 года полимерные инновации REHAU успешно применяются в строительстве, производстве мебели, автомобилестроении и других индустриях промышленности и каждый день обеспечивают комфорт миллионов людей с позиции «невидимого чемпиона» - скрытые от глаз системы надежно несут свою службу. </p>
              </div>

              <div class="md-layout-item md-size-33 md-small-size-100">
                <h5>Мы в социальных сетях</h5>
                <div class="social-feed">
                  <div class="feed-line">
                    <i class="fab fa-twitter"></i>
                    <p>How to handle ethical disagreements with your clients.</p>
                  </div>
                  <div class="feed-line">
                    <i class="fab fa-instagram"></i>
                    <p>The tangible benefits of designing at 1x pixel density.</p>
                  </div>
                  <div class="feed-line">
                    <i class="fab fa-facebook-square"></i>
                    <p>A collection of 25 stunning sites that you can use for inspiration.</p>
                  </div>
                </div>
              </div>

              <div class="md-layout-item md-size-33 md-small-size-100">
                <h5>Instagram</h5>
                <div class="gallery-feed">
                  <img :src="img1" class="img img-raised rounded" alt="">
                  <img :src="img2" class="img img-raised rounded" alt="">
                  <img :src="img3" class="img img-raised rounded" alt="">
                  <img :src="img4" class="img img-raised rounded" alt="">

                  <img :src="img5" class="img img-raised rounded" alt="">
                  <img :src="img6" class="img img-raised rounded" alt="">
                  <img :src="img7" class="img img-raised rounded" alt="">
                  <img :src="img8" class="img img-raised rounded" alt="">
                </div>
              </div>
            </div>
          </div>

          <hr>

          <div class="flex flex-direction-row space-between">
            <nav>
              <ul>
                <li>
                  <router-link id="button1" :to="{ name: 'MainWorkerPage' }">О РЕХАУ</router-link>
                </li>
                <li>
                  <router-link id="button2" :to="{ name: 'MainWorkerPage' }">СОТРУДНИКАМ</router-link>
                </li>
                <li>
                  <router-link id="button3" :to="{ name: 'MainMontagePage' }">МОНТАЖНИКАМ</router-link>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    КОНТАКТЫ
                  </a>
                </li>
              </ul>
            </nav>
            <div class="copyright float-right">
              Copyright © {{ year }} Rehau.
            </div>
          </div>
        </div>
      </template>

    </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String,
    size: String
  },
  data() {
    return {
      year: new Date().getFullYear(),
      img1: require("@/assets/img/main/faces/card-profile6-square.jpg"),
      img2: require("@/assets/img/main/faces/christian.jpg"),
      img3: require("@/assets/img/main/faces/card-profile4-square.jpg"),
      img4: require("@/assets/img/main/faces/card-profile1-square.jpg"),
      img5: require("@/assets/img/main/faces/marc.jpg"),
      img6: require("@/assets/img/main/faces/kendall.jpg"),
      img7: require("@/assets/img/main/faces/card-profile5-square.jpg"),
      img8: require("@/assets/img/main/faces/card-profile2-square.jpg")
    };
  }
};
</script>
<style>
footer {
  margin-top: 25px;
}
</style>
