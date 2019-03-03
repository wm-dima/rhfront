<template>
    <main>
    <link rel="stylesheet" href="http://www.funstore.me/wp-content/themes/leglo/swiper/swiper.min.css">
    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons">
      <br>
      <br>
      <br>
      <div class="center-wrap">
        <div class="search-montazh">
          <h2>Найти сертифицированного монтажника</h2>
          <div>
            <div>Адрес обьекта</div>
            <div>Выберите тип обьекта</div>
            <div>Найти</div>
          </div>
        </div>
      </div>

<div style="height: 200px;"></div>

  <swiper1 ref="mySwiper1" :options="swiperOption">
    <!-- slides -->
    <swiper-slide1>I'm Slide 1</swiper-slide1>
    <swiper-slide1>I'm Slide 2</swiper-slide1>
    <swiper-slide1>I'm Slide 3</swiper-slide1>
    <swiper-slide1>I'm Slide 4</swiper-slide1>
    <swiper-slide1>I'm Slide 5</swiper-slide1>
    <swiper-slide1>I'm Slide 6</swiper-slide1>
    <swiper-slide1>I'm Slide 7</swiper-slide1>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-button-prev" id="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" id="swiper-button-next" slot="button-next"></div>
    <div class="swiper-scrollbar"   slot="scrollbar"></div>
  </swiper1>
<div style="height: 200px;"></div>



      <div class="main-screen">
        <div class="center-wrap">
          <div class="main-screen__wrap">
            <h1>REHAU PRO<br> 200% качества</h1>
            <p>Больше, чем просто</p>
          </div>
        </div>
      </div>
      <h2 class="main-screen__bottom">От скромных квартир до великолепных домов</h2>
      <div class="slider-grid-wrap slider-grid-wrap--home">
          <div class="slider-grid__prev"></div>
          <div class="slider-grid__next"></div>
          <div class="slider-grid">
            
            <div class="swiper-container">
                <div class="swiper-wrapper">
                <div class="swiper-slide slider-grid__item slider-grid__item--hight">
                  <div>
                    <img :src="gridSlider.img1" alt="">
                  </div>
                  <h3>Водоснабжение<br> и канализация</h3>
                </div>
                <div class="swiper-slide slider-grid__item">
                  <div>
                    <img :src="gridSlider.img2" alt="">
                    <h3>Тёплый пол</h3>
                  </div>
                  <div>
                    <img :src="gridSlider.img3" alt="">
                    <h3>Настенный/потолочный обогрев/охлаждение</h3>
                  </div>
                </div>
                <div class="swiper-slide slider-grid__item">
                  <div>
                    <img :src="gridSlider.img4" alt="">
                    <div class="slider-grid__item-wrap">
                      <h3>Обогрев открытых</h3>
                      <p>Проект: <span>Коттедж</span></p>
                      <a href="">Перейти</a>
                    </div>
                  </div>
                  <div>
                    <img :src="gridSlider.img5" alt="">
                    <h3>Радиаторное отопление</h3>
                  </div>
                </div>
                </div>
            </div>
            
            <div class="swiper-pagination"></div>

        </div>
      </div>
      <div class="home-features">
        <div class="center-wrap">
        <h2>Преимущества системы Rehau</h2>
        <div class="home-features__list">
          <div class="home-features__item">
            <h3>Надежность</h3>
            <p>Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a.</p>
          </div>
          <div class="home-features__item">
            <h3>Немецкое качество</h3>
            <p>Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a.</p>
          </div>
          <div class="home-features__item">
            <h3>Может ещё что-то?</h3>
            <p>Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a.</p>
          </div>
        </div>
        </div>
      </div>
      <div class="slider-where-wrap">
        <div class="center-wrap">
          <h2>Где бы не находился ваш объект…</h2>
          <div class="slider-where-container">
            <div class="slider-where__prev"></div>
            <div class="slider-where__next"></div>
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div>
                  <img :src="sliderWhere.img1" alt="">
                  <h3>Москва</h3>
                </div>
                <p>Монтажников:<span>19</span></p>
                <p>Монтажных организаций:<span>7</span></p>
              </div>
              <div class="swiper-slide">
                <div>
                  <img :src="sliderWhere.img2" alt="">
                  <h3>Санкт-Пертербург</h3>
                </div>
                <p>Монтажников:<span>17</span></p>
                <p>Монтажных организаций:<span>4</span></p>
              </div>
              <div class="swiper-slide">
                <div>
                  <img :src="sliderWhere.img3" alt="">
                  <h3>Минск</h3>
                </div>
                <p>Монтажников:<span>13</span></p>
                <p>Монтажных организаций:<span>8</span></p>
              </div>
              <div class="swiper-slide">
                <div>
                  <img :src="sliderWhere.img4" alt="">
                  <h3>Казань</h3>
                </div>
                <p>Монтажников:<span>21</span></p>
                <p>Монтажных организаций:<span>9</span></p>
              </div>
            </div>
          </div>
          </div>
        </div>

      </div>
      <div class="center-wrap">
        <div class="search-montazh">
          <h2>Найти сертифицированного монтажника</h2>
          <div>
            <div>Адрес обьекта</div>
            <div>Выберите тип обьекта</div>
            <div>Найти</div>
          </div>
        </div>
      </div>
      <div class="team-slider-wrap">
        <div class="center-wrap">
        <h2>…Наши монтажники всегда рядом</h2>
        <p class="team-slider__sub-title">Все специалисты проходят обязательную сертификацию для получения статуса «Монтажник REHAU».</p>
        </div>
        <div class="slider-grid-wrap slider-grid-wrap--team">
          <div class="slider-grid__prev"></div>
          <div class="slider-grid__next"></div>
          <div class="slider-grid">

            <div class="swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide slider-grid__item slider-grid__item--hight">
                  <div>
                    <img :src="teamSlider.img1" alt="">
                  </div>
                  <section class="slider-grid__info slider-grid__info--green">
                    <div>
                      <p><span>5</span>Отлично</p>
                      <div class="slider-grid__info-bottom"><span>28</span><span>28</span></div>
                    </div>
                    <h3>Иванов Иван</h3>
                  </section>
                  <section class="slider-grid__images"></section>
                </div>
                <div class="swiper-slide slider-grid__item">
                  <div>
                    <img :src="teamSlider.img2" alt="">
                  <section class="slider-grid__info slider-grid__info--gray">
                    <div>
                      <p><span>3</span>Средний</p>
                      <div class="slider-grid__info-bottom"><span>28</span><span>28</span></div>
                    </div>
                    <h3>Иванов-Сидоров Александр</h3>
                  </section>
                  <section class="slider-grid__images"></section>
                  </div>
                  <div>
                    <img :src="teamSlider.img3" alt="">
                  <section class="slider-grid__info slider-grid__info--gray">
                    <div>
                      <p><span>3</span>Средний</p>
                      <div class="slider-grid__info-bottom"><span>28</span><span>28</span></div>
                    </div>
                    <h3>Иванов Иван</h3>
                  </section>
                  <section class="slider-grid__images"></section>
                  </div>
                </div>
                <div class="swiper-slide slider-grid__item">
                  <div>
                    <img :src="teamSlider.img4" alt="">
                  <section class="slider-grid__info slider-grid__info--pink">
                    <div>
                      <p><span>5</span>Отлично</p>
                      <div class="slider-grid__info-bottom"><span>28</span><span>28</span></div>
                    </div>
                    <h3>Иванов Иван</h3>
                  </section>
                  <section class="slider-grid__images"></section>
                  </div>
                  <div>
                    <img :src="teamSlider.img5" alt="">
                  <section class="slider-grid__info slider-grid__info--pink">
                    <div>
                      <p><span>5</span>Отлично</p>
                      <div class="slider-grid__info-bottom"><span>28</span><span>28</span></div>
                    </div>
                    <h3>Иванов Иван</h3>
                  </section>
                  <section class="slider-grid__images"></section>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
      <div class="third-grid">
        <div class="third-grid__item">
          <div>
            <img :src="thirdGrid.img5" alt="">
            <p>Объект 1</p>
          </div>
        </div>
        <div class="third-grid__item">
          <div>
            <img :src="thirdGrid.img1" alt="">
            <p>Объект 2</p>
          </div>
        </div>
        <div class="third-grid__item">
          <div>
            <img :src="thirdGrid.img2" alt="">
            <p>Объект 3</p>
          </div>
        </div>
        <div class="third-grid__item">
          <div>
            <img :src="thirdGrid.img3" alt="">
            <p>Объект 4</p>
          </div>
        </div>
        <div class="third-grid__item">
          <div>
            <img :src="thirdGrid.img4" alt="">
            <p>Объект 5</p>
          </div>
        </div>
        <div class="third-grid__item">
          <div>
            <img :src="thirdGrid.img5" alt="">
            <p>Объект 6</p>
          </div>
        </div>
      </div>
    </main>
</template>
<script>

    import 'swiper/dist/css/swiper.css'
    import { swiper as swiper1, swiperSlide as swiperSlide1 } from 'vue-awesome-swiper'


  import { ProfileCard, InfoAreas, BlogCard } from "@/components";
  import { LoginCard, Modal } from "@/components";
  import Mixins from "@/plugins/basicMixins";





  export default {
    mixins: [
      Mixins.HeaderImage
    ],
    components: {
      ProfileCard,
      InfoAreas,
      LoginCard,
      Modal,
      InfoAreas,
      BlogCard,
      swiper1,
      swiperSlide1
    },

    bodyClass: "about-us",
    data () {
      return {
        subscribe: null,
        image2: require("@/assets/img/main/ecommerce-header.jpg"),
        image5: require("@/assets/img/main/bg9.jpg"),
        speciality: "",
        name: null,
        email: null,
        image: require("@/assets/img/rehaufam.jpg"),
        team5: require("@/assets/img/main/city.jpg"),
        rehau1: require("@/assets/img/main/20667.png"),
        thirdGrid: {
          img1: require("@/assets/images/third-grid2.png"),
          img2: require("@/assets/images/third-grid2.png"), 
          img3: require("@/assets/images/third-grid3.png"), 
          img4: require("@/assets/images/third-grid4.png"), 
          img5: require("@/assets/images/third-grid5.png") 
        },
        sliderWhere: {
          img1: require("@/assets/images/where1.png"),
          img2: require("@/assets/images/where2.png"), 
          img3: require("@/assets/images/where3.png"), 
          img4: require("@/assets/images/where4.png"), 
        },
        teamSlider: {
          img1: require("@/assets/images/team-slider1.png"),
          img2: require("@/assets/images/team-slider2.png"),
          img3: require("@/assets/images/team-slider3.png"),
          img4: require("@/assets/images/team-slider4.png"),
          img5: require("@/assets/images/team-slider5.png"),
        },
        gridSlider: {
          img1: require("@/assets/images/grid-slider1.jpg"),
          img2: require("@/assets/images/grid-slider2.jpg"),
          img3: require("@/assets/images/grid-slider3.jpg"),
          img4: require("@/assets/images/grid-slider4.jpg"),
          img5: require("@/assets/images/grid-slider5.png"),
        },
        objAddr: '',
        objType: '',
        swiperOption: {
          navigation: {
            nextEl: '#swiper-button-next',
            prevEl: '#swiper-button-prev',
          }
        }
      }
    },
    computed: {
      features5() {
        return {
          backgroundImage: `url(${this.image5})`
        };
      },
      imageSubscribe() {
        return {
          backgroundImage: `url(${this.image2})`
        };
      },
     swiper1() {
        return this.$refs.mySwiper1.swiper
      }
    },
    methods: {
      sectionTeam(image) {
        return {
          backgroundImage: `url(${image})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100%'
        };
      }
    },
    created () {
    }
  }
</script>
<style lang="scss" scoped type="text/scss">

html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:rgba(0,0,0,0)}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}[hidden],template{display:none}@font-face{font-family:Open;src:url(../../assets/fonts/opensanslight.ttf);font-weight:300}@font-face{font-family:Open;src:url(../../assets/fonts/opensans.ttf);font-weight:400}@font-face{font-family:Open;src:url(../../assets/fonts/opensanssemibold.ttf);font-weight:600}@font-face{font-family:Open;src:url(../../assets/fonts/opensansbold.ttf);font-weight:700}@font-face{font-family:Open;src:url(../../assets/fonts/opensansextrabold.ttf);font-weight:900}body{font-family:Roboto,Helvetica,Arial,sans-serif;color:#111}*{padding:0;-webkit-box-sizing:border-box;box-sizing:border-box}*,h1,h2,h3,h4,h5,p{margin:0}div.center-wrap{width:100%;max-width:1150px;padding-left:15px;padding-right:15px;margin:0 auto}.main-screen{margin-top:70px;background:url(../../assets/images/home-bunner.png) no-repeat;background-size:cover;background-position:50%}.main-screen div.center-wrap{display:-webkit-box;display:-ms-flexbox;display:flex}.main-screen__wrap{background:#fff;margin-left:auto;padding:50px 35px 55px;margin-bottom:140px;-webkit-box-shadow:0 12px 20px -10px rgba(233,30,99,.1),0 4px 20px 0 rgba(0,0,0,.3),0 7px 8px -5px rgba(233,30,99,.2);box-shadow:0 12px 20px -10px rgba(233,30,99,.1),0 4px 20px 0 rgba(0,0,0,.3),0 7px 8px -5px rgba(233,30,99,.2);border-radius:1px;margin-top:230px}.main-screen__wrap h1{font-size:40px;line-height:41px;margin-bottom:10px;font-weight:700}.main-screen__wrap p{font-size:25px}.main-screen__bottom{line-height:101px}h2{font-size:36px;font-weight:700;text-align:center;font-family:Roboto Slab;text-transform:uppercase}.slider-grid-wrap{position:relative}.slider-grid__item{width:33.33333%;position:relative}.slider-grid__item--hight>div{padding-bottom:139%!important}.slider-grid__item>div{padding-bottom:69.5%;position:relative}.slider-grid__item>div:before{content:"";display:block;background:rgba(0,0,0,.27);z-index:1}.slider-grid__item>div:before,.slider-grid__item img{position:absolute;top:0;left:0;width:100%;height:100%}.slider-grid__item img{-o-object-fit:cover;object-fit:cover}.slider-grid__item h3{position:absolute;padding-left:30px;bottom:35px;color:#fff;font-weight:700;font-size:28px;z-index:2;text-shadow:0 2px 4px rgba(0,0,0,.15)}.slider-grid__item-wrap{position:absolute;left:30px;z-index:2;bottom:35px;background:#fff;padding:35px 80px 45px 25px;-webkit-box-shadow:0 12px 20px -10px rgba(233,30,99,.1),0 4px 20px 0 rgba(0,0,0,.3),0 7px 8px -5px rgba(233,30,99,.2);box-shadow:0 12px 20px -10px rgba(233,30,99,.1),0 4px 20px 0 rgba(0,0,0,.3),0 7px 8px -5px rgba(233,30,99,.2);border-radius:1px}.slider-grid__item-wrap h3{position:static;font-size:28px;color:#272727;padding-left:0;margin-bottom:6px}.slider-grid__item-wrap p{font-size:18px;margin-bottom:40px}.slider-grid__item-wrap a{color:#dd0060;text-decoration:none;font-weight:700;font-size:20px}.slider-grid__next,.slider-grid__prev{width:60px;height:60px;position:absolute;top:calc(50% - 30px);z-index:2;outline:none!important;cursor:pointer}.slider-grid__next{right:0;background:rgba(0,0,0,.44) url(../../assets/images/arrow--next.svg) no-repeat;background-position:50%;background-size:20px}.slider-grid__prev{left:0;background:rgba(0,0,0,.44) url(../../assets/images/arrow--prev.svg) no-repeat;background-position:45%;background-size:20px}.swiper-pagination-progressbar{bottom:-44px!important;top:auto!important;height:6px;border-radius:1px;width:300px;left:calc(50% - 150px);background:#bfbfbf}.swiper-pagination-progressbar span{background:#dd0060!important}.slider-grid-wrap{margin-bottom:80px}.home-features{background:url(../../assets/images/features-bg.png) no-repeat;background-size:cover;background-position:50%;padding-top:1px;padding-bottom:120px;position:relative}.home-features:before{content:"";width:100%;height:100%;background:rgba(0,0,0,.7);position:absolute}.home-features h2{color:#fff;text-transform:uppercase;margin-top:80px;margin-bottom:70px;text-align:left;text-align:center;position:relative}.home-features__list{-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;position:relative}.home-features__item,.home-features__list{display:-webkit-box;display:-ms-flexbox;display:flex}.home-features__item{width:calc((100% - 90px)/3);-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.home-features__item p{font-size:16px;line-height:21px;color:#fff;font-weight:300;text-align:center}.home-features__item:first-child h3:before{background:url(../../assets/images/features_shield.svg) no-repeat;background-size:contain;background-position:50%;width:46px;height:46px;left:calc(50% - 23px)}.home-features__item:nth-child(2) h3:before{background:url(../../assets/images/features__clock.svg) no-repeat;background-size:contain;background-position:50%;width:42px;height:42px;left:calc(50% - 21px)}.home-features__item:nth-child(3) h3:before{background:url(../../assets/images/features__quality.svg) no-repeat;background-size:contain;background-position:50%;width:43px;height:43px;left:calc(50% - 21px)}.home-features h3{font-size:26px;color:#fff;font-weight:700;position:relative;margin-bottom:15px;padding-top:70px;text-align:center;text-shadow:0 2px 4px rgba(0,0,0,.25)}.home-features h3:before{content:"";position:absolute;top:0}.slider-where-wrap{margin-bottom:70px}.slider-where-wrap h2{margin-top:70px;margin-bottom:30px;text-align:left}.slider-where-wrap .swiper-slide>div{position:relative;padding-bottom:69.5%;-webkit-box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);margin-bottom:8px}.slider-where-wrap .swiper-slide>div img{position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover;border-radius:2px}.slider-where-wrap .swiper-slide h3{position:absolute;font-size:19px;font-weight:500;line-height:35px;padding-left:15px;color:#fff;bottom:0;left:0;width:100%;background:rgba(0,0,0,.5)}.slider-where-wrap .swiper-slide p{font-weight:500;color:#000;opacity:.9;font-size:14px}.slider-where-wrap .swiper-slide p:last-child{margin-top:2px}.slider-where-wrap .swiper-slide p span{font-weight:800;color:#dd0060;font-size:14px;padding-left:5px;font-family:Open}.slider-where__next,.slider-where__prev{width:20px;height:20px;position:absolute;top:calc(50% - 30px);z-index:2;outline:none!important;cursor:pointer}.slider-where__next{right:-45px;background:url(../../assets/images/arrow--next.svg) no-repeat;background-position:50%;background-size:20px}.slider-where__prev{left:-45px;background:url(../../assets/images/arrow--prev.svg) no-repeat;background-position:45%;background-size:20px}.slider-where-container{position:relative}.search-montazh{background:#ececec;-webkit-box-shadow:0 1px 3px 0 rgba(0,0,0,.24);box-shadow:0 1px 3px 0 rgba(0,0,0,.24);border-radius:3px;padding:20px 25px 35px}.search-montazh h2{font-size:26px;text-align:left;font-family:Roboto,Helvetica,Arial,sans-serif;text-transform:inherit;font-weight:900;margin-bottom:15px}.search-montazh>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.search-montazh>div div{line-height:40px;background:#fff;padding-left:15px;margin-right:20px;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.search-montazh>div div:last-child{margin-right:0;background:#dd0060;color:#fff;font-size:20px;font-weight:700}.team-slider-wrap{background:#f2f2f2;margin-top:70px;margin-bottom:100px;padding-top:55px}.team-slider-wrap h2{margin-bottom:25px;text-align:left}.team-slider-wrap .slider-grid__item>div:before{display:none}.team-slider__sub-title{font-size:22px;margin-bottom:50px}.slider-grid__info{position:absolute!important;bottom:0!important;width:100%;padding:0!important;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#fff}.slider-grid__info--green{color:#fff;background-color:rgba(55,165,140,.89)}.slider-grid__info--green>div{background-color:rgba(0,0,0,.4)}.slider-grid__info--gray{background-color:hsla(0,0%,100%,.702)}.slider-grid__info--gray>div{background-color:rgba(0,0,0,.5)}.slider-grid__info--gray h3{color:#111}.slider-grid__info--pink{background-color:rgba(221,0,96,.769)}.slider-grid__info--pink>div{background-color:rgba(0,0,0,.35)}.slider-grid__info h3{position:static;font-size:24px;text-shadow:none!important;line-height:28px}.slider-grid__info p{font-size:15px;margin-bottom:3px;text-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.slider-grid__info p span{font-size:27px;margin-right:4px}.slider-grid__info>div{padding:15px 20px}.slider-grid__info-bottom span{font-size:14px;position:relative}.slider-grid__info-bottom span:first-child{padding-left:22px;margin-right:10px}.slider-grid__info-bottom span:first-child:before{content:"";position:absolute;width:18px;height:18px;background:url(../../assets/images/review.svg) no-repeat;background-position:50%;background-size:contain;left:0;top:calc(50% - 8px)}.slider-grid__info-bottom span:nth-child(2){padding-left:22px}.slider-grid__info-bottom span:nth-child(2):before{content:"";position:absolute;width:16px;height:16px;background:url(../../assets/images/tools.svg) no-repeat;background-position:50%;background-size:contain;left:0;top:calc(50% - 8px)}.third-grid{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.third-grid__item{width:33.33333%;position:relative}.third-grid__item:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.1);z-index:1}.third-grid__item>div{padding-bottom:69.5%;position:relative}.third-grid__item>div img{position:absolute;top:0;left:0;width:100%;height:100%}.third-grid__item>div p{text-shadow:0 2px 4px rgba(0,0,0,.15);color:#fff;font-size:28px;bottom:35px;left:30px;font-weight:700;position:absolute;z-index:2}.slider-grid__images{width:54px;height:54px;background:rgba(0,0,0,.65) url(../../assets/images/images.svg) no-repeat;background-position:50%;background-size:27px;left:24px;top:21px;position:absolute}

</style>
