<template>
    <main>
      <div class="center-wrap center-wrap--montazh">
        <div class="search-montazh">
          <h2>Найти сертифицированного монтажника</h2>
          <div>
            <md-field>
              <label>Адрес объекта</label>
              <md-input v-model="initial"></md-input>
            </md-field>

            <template>
              <div class="md-layout">
                <div class="md-layout-item md-size-250">
                  <div class="md-list">
                    <li class="md-list-item">
                      <a href="javascript:void(0)" class="md-list-item-router md-list-item-container md-button-clean dropdown">
                        <div class="md-list-item-content">
                          <drop-down direction="down">
                            <md-button slot="title" class="sadsad md-button md-button-link md-simple dropdown-toggle" data-toggle="dropdown">
                              <p>{{ulTitle}}</p>
                            </md-button>
                            <ul class="dropdown-menu">

                              <li v-for='Aul in theUL' @click='ulClick( Aul )'>
                                <a href="javascript:void(0)">
                                  <p>{{ Aul }}</p>
                                </a>
                              </li>
                            </ul>
                          </drop-down>
                        </div>
                      </a>
                    </li>
                  </div>
                </div>
              </div>
            </template>
            <router-link tag="md-button" class="md-primary" id="button" :to="'/'">Найти <md-icon >keyboard_arrow_right</md-icon></router-link>
          </div>
        </div>
      </div>

      <div class="main-screen">
        <div class="center-wrap">
          <div class="main-screen__wrap">
            <h1>REHAU PRO<br> 200% качества</h1>
            <p>Больше, чем просто монтаж</p>
          </div>
        </div>
      </div>
      <h2 class="main-screen__bottom">От скромных квартир до великолепных домов</h2>
      <div class="slider-grid-wrap slider-grid-wrap--home">
          <div class="slider-grid__prev"></div>
          <div class="slider-grid__next"></div>
          <div class="slider-grid">     
            <swiper class="swiper-container" ref="mySwiper1" :options="swiperOption1">
                <swiper-slide class="swiper-slide slider-grid__item slider-grid__item--hight">
                  <div>
                    <img :src="gridSlider.img1" alt="">
                  </div>
                  <h3>Водоснабжение<br> и канализация</h3>
                </swiper-slide>
                <swiper-slide class="swiper-slide slider-grid__item">
                  <div>
                    <img :src="gridSlider.img2" alt="">
                    <h3>Тёплый пол</h3>
                  </div>
                  <div>
                    <img :src="gridSlider.img3" alt="">
                    <h3>Настенный/потолочный обогрев/охлаждение</h3>
                  </div>
                </swiper-slide>
                <swiper-slide class="swiper-slide slider-grid__item">
                  <div>
                    <img :src="gridSlider.img4" alt="">
                    <div class="slider-grid__item-wrap">
                      <h3>Обогрев открытых</h3>
                      <p>Проект: <span>Коттедж</span></p>
                      <md-button class="md-simple">Перейти <md-icon >keyboard_arrow_right</md-icon></md-button>   
                    </div>
                  </div>
                  <div>
                    <img :src="gridSlider.img5" alt="">
                    <h3>Радиаторное отопление</h3>
                  </div>
                </swiper-slide>
            </swiper>

            
            <div class="swiper-pagination"  slot="pagination"></div>

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
          <swiper ref="mySwiper2" :options="swiperOption2">
              <swiper-slide class="swiper-slide">
                <div>
                  <img :src="sliderWhere.img1" alt="">
                  <h3>Москва</h3>
                </div>
                <p>Монтажников:<span>19</span></p>
                <p>Монтажных организаций:<span>7</span></p>
              </swiper-slide>
              <swiper-slide class="swiper-slide">
                <div>
                  <img :src="sliderWhere.img2" alt="">
                  <h3>Санкт-Пертербург</h3>
                </div>
                <p>Монтажников:<span>17</span></p>
                <p>Монтажных организаций:<span>4</span></p>
              </swiper-slide>
              <swiper-slide class="swiper-slide">
                <div>
                  <img :src="sliderWhere.img3" alt="">
                  <h3>Минск</h3>
                </div>
                <p>Монтажников:<span>13</span></p>
                <p>Монтажных организаций:<span>8</span></p>
              </swiper-slide>
              <swiper-slide class="swiper-slide">
                <div>
                  <img :src="sliderWhere.img4" alt="">
                  <h3>Казань</h3>
                </div>
                <p>Монтажников:<span>21</span></p>
                <p>Монтажных организаций:<span>9</span></p>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
      <div class="center-wrap">
        <div class="search-montazh">
          <h2>Найти сертифицированного монтажника</h2>
          <div>
            <md-field>
              <label>Адрес объекта</label>
              <md-input v-model="initial"></md-input>
            </md-field>

            <template>
              <div class="md-layout">
                <div class="md-layout-item md-size-250">
                  <div class="md-list">
                    <li class="md-list-item">
                      <a href="javascript:void(0)" class="md-list-item-router md-list-item-container md-button-clean dropdown">
                        <div class="md-list-item-content">
                          <drop-down direction="down">
                            <md-button slot="title" class="sadsad md-button md-button-link md-simple dropdown-toggle" data-toggle="dropdown">
                              <p>{{ulTitle}}</p>
                            </md-button>
                            <ul class="dropdown-menu">

                              <li v-for='Aul in theUL' @click='ulClick( Aul )'>
                                <a href="javascript:void(0)">
                                  <p>{{ Aul }}</p>
                                </a>
                              </li>
                            </ul>
                          </drop-down>
                        </div>
                      </a>
                    </li>
                  </div>
                </div>
              </div>
            </template>
            <router-link tag="md-button" class="md-primary" id="button" :to="'/'">Найти <md-icon >keyboard_arrow_right</md-icon></router-link>
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

            <swiper class="swiper-container" ref="mySwiper3" :options="swiperOption3">
                <swiper-slide class="swiper-slide slider-grid__item slider-grid__item--hight">
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
                </swiper-slide>
                <swiper-slide class="swiper-slide slider-grid__item">
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
                </swiper-slide>
                <swiper-slide class="swiper-slide slider-grid__item">
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
                </swiper-slide>
            </swiper>

          </div>
        </div>

      </div>
        <div class="center-wrap center-wrap--button">
        <router-link tag="md-button" class="md-primary" id="button" :to="'/'">Показать ещё<md-icon >keyboard_arrow_right</md-icon></router-link>
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
      <div class="center-wrap center-wrap--button">
        <router-link tag="md-button" class="md-primary" id="button" :to="'/'">Больше Объектов <md-icon >keyboard_arrow_right</md-icon></router-link>
      </div>
    </main>
</template>
<script>
  document.addEventListener("DOMContentLoaded", function(){
      setTimeout(function(){
      document.querySelector('.swiper-pagination-progressbar-fill').style.backgroundColor = "#dd0060";
      document.querySelector('.slider-grid__item-wrap button').addEventListener('click', function(){
        alert(123);
      });
    }, 2000);

  });
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'


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
      swiper,
      swiperSlide
    },

    bodyClass: "about-us",
    data () {
      return {
        initial: '',
        subscribe: null,
        image2: require("@/assets/img/main/ecommerce-header.jpg"),
        image5: require("@/assets/img/main/bg9.jpg"),
        speciality: "",
        name: null,
        email: null,
        image: require("@/assets/img/rehaufam.jpg"),
        team5: require("@/assets/img/main/city.jpg"),
        rehau1: require("@/assets/img/main/20667.png"),
        ulTitle: 'Выберите тип объекта',
        theUL: [
          'Танхаус',
          'Загородный дом',
          'Строительный комплекс',
          'Гараж',
        ],
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

        swiperOption1: {
        slidesPerView: 3,
          loop: true,
          autoHeight: true,
          grabCursor: true,
          pagination: {
              el: '.slider-grid-wrap .swiper-pagination',
              type: 'progressbar',
            },
              navigation: {
            nextEl: '.slider-grid-wrap--home .slider-grid__next',
            prevEl: '.slider-grid-wrap--home .slider-grid__prev',
            },
             autoplay: {
              delay: 5000,
            },
        },

        swiperOption2: {
          slidesPerView: 4,
          loop: true,
          autoHeight: true,
          spaceBetween: 20,
                        navigation: {
            nextEl: '.slider-where-container .slider-where__next',
            prevEl: '.slider-where-container .slider-where__prev',
            },
             autoplay: {
              delay: 5000,
            },
        },

        swiperOption3: {
        slidesPerView: 3,
          loop: true,
          autoHeight: true,
          grabCursor: true,
              navigation: {
            nextEl: '.slider-grid-wrap--team .slider-grid__next',
            prevEl: '.slider-grid-wrap--team .slider-grid__prev',
            },
             autoplay: {
              delay: 5000,
            },
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
      },
     swiper2() {
        return this.$refs.mySwiper2.swiper
      },
     swiper3() {
        return this.$refs.mySwiper3.swiper
      }
    },
    methods: {
      sectionTeam(image) {
        return {
          backgroundImage: `url(${image})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100%'
        };
      },
      ulClick( str ){
        this.ulTitle = str;
      }
    },
    created () {
    }
  }
</script>

<!-- <style lang="scss" scoped type="text/scss"> -->

<style lang="scss" scoped>

@import "@/assets/scss/material-kit/_colors.scss";

html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}


* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

h1,h2,h3,h4,h5,p {
  margin: 0px;
}

div.center-wrap {
  width: 100%;
  max-width: 1150px;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0px auto;
  &--button {
    text-align: center;
    padding-top: 40px;
    padding-bottom: 40px;
  }
}

.main-screen {
  margin-top: 70px;
  background: url('../../assets/images/home-bunner.png') no-repeat;
  background-size: cover;
  background-position: center;
  div.center-wrap {
    display: flex;
  }


  &__wrap {
    background: #fff;
    margin-left: auto;
    padding-top: 50px;
    padding-left: 30px;
    min-height: 200px;
    padding-bottom: 0px;
    padding-right: 35px;
    margin-bottom: 140px;
    width: 100%;
    max-width: 350px;
    box-shadow: 0 12px 20px -10px rgba(233,30,99,.1), 0 4px 20px 0 rgba(0,0,0,.3), 0 7px 8px -5px rgba(233,30,99,0.2);
    border-radius: 1px;
    margin-top: 230px;
    h1 {
      font-size: 32px;
      line-height: 31px;
      margin-bottom: 10px;
      font-weight: 900;
    }

    p {
      font-size: 20px;
       font-weight: 400;
       margin-top: 20px;
    }
  }

  &__bottom {
    line-height: 101px;
  }
}

h2 {
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
}

.slider-grid-wrap {
  position: relative;
  margin-bottom: 80px ;
}
.slider-grid {
  &__item {
    width: calc( 100% / 3  );
    position: relative;

    &--hight > div {
      padding-bottom: 139% !important;
    }

    > div {
      padding-bottom: calc( 139% / 2 );
      position: relative;
      &::before {
        content: "";
        position: absolute;
        display: block;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.27);
        z-index: 1;
      }
    }

    img {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    h3 {
      position: absolute;
      padding-left: 30px;
      bottom: 35px;
      color: #fff;
      font-weight: 700;
      font-size: 28px;  
      z-index: 2;
      text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
    }

  }
    &__item-wrap {
      position: absolute;
      left: 30px;
      z-index: 2;
      bottom: 35px;
      background: #fff;
      padding-left: 25px;
      padding-bottom: 45px;
      padding-top: 35px;
      padding-right: 80px;
      box-shadow: 0 12px 20px -10px rgba(233,30,99,.1), 0 4px 20px 0 rgba(0,0,0,.3), 0 7px 8px -5px rgba(233,30,99,.2);
      border-radius: 1px;
      .md-button.md-simple .md-ripple i  {
         color: $pink !important;
         &:hover {
          color: red !important;
         }
      }
      h3 {
        position: static;
        font-size: 28px;
        color: #000;
        padding-left: 0px;
        margin-bottom: 6px;
      }
      p {
        font-size: 18px;
        margin-bottom: 40px;
      }
      a {
        color: $pink;
        text-decoration: none;
        font-weight: 700;
        font-size: 20px;
      }
    }
}

.slider-grid__prev,
.slider-grid__next {
  width: 60px;
  height: 60px;
  position: absolute;
  top: calc( 50% - 30px );
  z-index: 2;
  outline: none !important;
  cursor: pointer;
}

.slider-grid__next {
  right: 0px;
  background: rgba(0,0,0,0.44) url('../../assets/images/arrow--next.svg') no-repeat;
  background-position: center;
  background-size: 20px;
}

.slider-grid__prev {
  left: 0px;
  background: rgba(0,0,0,0.44) url('../../assets/images/arrow--prev.svg') no-repeat;
  background-position: 45% center;
  background-size: 20px;
}

.swiper-pagination-progressbar span {
    background-color: $pink !important;
}

.swiper-pagination-progressbar {
    bottom: -44px !important;
    top: auto !important;
    height: 6px;
    border-radius: 1px;
    width: 300px;
    left: calc( 50% - 150px );
    background: #bfbfbf !important;
}


.home-features{
  background: url('../../assets/images/features-bg.png') no-repeat;
  background-size: cover;
  background-position: center;
  padding-top: 1px;
  padding-bottom: 120px;
  position: relative;

  &::before {
    content: "";
    width: 100%;
    height:  100%;
    background: rgba(0,0,0,0.7);
    position: absolute;
  }

  h2 {
    color: #fff;
    text-transform: uppercase;
    margin-top: 80px;
    margin-bottom: 70px;
    text-align: left;
    text-align: center;
    position: relative;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    position: relative;
  }

  &__item {
    width: calc(  ( 100% - 90px ) / 3   );
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      font-size: 16px;
      line-height: 21px;
      color: #fff;
      font-weight: 300;
      text-align: center;
    }

    &:nth-child(1)  h3::before {
      background: url('../../assets/images/features_shield.svg') no-repeat;
      background-size: contain;
      background-position: center;
      width: 46px;
      height: 46px;
      left: calc( 50% - 23px );
    }
    &:nth-child(2)  h3::before {
      background: url('../../assets/images/features__clock.svg') no-repeat;
      background-size: contain;
      background-position: center;
      width: 42px;
      height: 42px;
      left: calc( 50% - 21px );
    }

    &:nth-child(3)  h3::before {
      background: url('../../assets/images/features__quality.svg') no-repeat;
      background-size: contain;
      background-position: center;
      width: 43px;
      height: 43px;
      left: calc( 50% - 21px );
    }

  }

  h3 {
    font-size: 26px;
    color: #fff;
    font-weight: 700;
    position: relative;
    margin-bottom: 15px;
    padding-top: 70px;
    text-align: center;
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    &::before {
      content: "";
      position: absolute;
      top: 0px;
    }
  }

}


.slider-where-wrap {
  margin-bottom: 70px;
  h2 {
    margin-top: 70px;
    margin-bottom: 30px;
    text-align: left;
  }

  .swiper-slide {
    > div {
      position: relative;
      padding-bottom: 69.5%;
      box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
      img {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 2px;
      }
      margin-bottom: 8px;
    }
    h3 {
      position: absolute;
      font-size: 19px;
      font-weight: 500;
      line-height: 35px;
      padding-left: 15px;
      color: #fff;
      bottom: 0px;
      left: 0px;
      width: 100%;
      background: rgba(0,0,0,0.5);
    }

    p {
        font-weight: 500;
        color: #000;
        opacity: 0.9;
        font-size: 14px;
        &:last-child {
          margin-top: 2px;
        }
      span {
        font-weight: 800;
          color: $pink;
          font-size: 14px;
          padding-left: 5px;
        font-family: "Open";
      }
    }
  }
}


.slider-where__prev,
.slider-where__next {
  width: 20px;
  height: 20px;
  position: absolute;
  top: calc( 50% - 30px );
  z-index: 2;
  outline: none !important;
  cursor: pointer;
}

.slider-where__next {
  right: -45px;
  background: url('../../assets/images/arrow--next.svg') no-repeat;
  background-position: center;
  background-size: 20px;
}

.slider-where__prev {
  left: -45px;
  background: url('../../assets/images/arrow--prev.svg') no-repeat;
  background-position: 45% center;
  background-size: 20px;
}

.slider-where-container {
  position: relative;
}
  .sadsad  .md-ripple   {
    max-height: 42px !important;
    display: none;
  }
.center-wrap--montazh {
  padding-top: 190px;
}
.search-montazh {
  background: #ececec;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.24);
  border-radius: 3px;
  padding-left: 40px;
  padding-top: 20px;
  padding-right: 40px;
  padding-bottom: 35px;

  h2 {
    font-size: 26px;
    text-align: left;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    text-transform: inherit;
    font-weight: 900;
    margin-bottom: 15px;
  }


  > div {
    display: flex;
    height: 42px;
  }


  .md-layout {
    width: 40%;
    margin-right: 20px;
    border-bottom: 1px solid rgba(0,0,0,.2);
    margin-left: 0px !important;
    .md-ripple {
      display: none !important;
    }
    > div {
      padding: 0px;
    }
    * {
      width: 100%;
    }
  }

  .md-list-item-content {
    min-height: 42px !important;
  }

  .md-list {
    padding-top: 0px;
    padding-bottom: 0px;
  }

  .md-field {
    width: 42.5%;
    margin-bottom: 0px !important;
    margin-right: 20px;
    padding-left: 5px;
    input {
      height: 30px !important;
    }
  }

  label {
    padding-left: 5px;
    top: calc( 50% - 10px );
    font-size: 16px;
    font-weight: 300 !important;
    color: #979797 !important;
  }
}



.team-slider-wrap {
  background: #f2f2f2;
  margin-top: 70px;
  padding-top: 55px;
  h2 {
    margin-bottom: 25px;
    text-align: left;
  }

  .slider-grid__item>div:before {
    display: none;
  }
}

.team-slider__sub-title {
  font-size: 22px;
  margin-bottom: 50px;
}

.slider-grid__info {
  position: absolute !important;
  bottom: 0px !important;
  width: 100%;
  padding: 0px !important;
  display: flex;
  align-items: center;
  color: #fff;
  &--green {
      color: #fff;
      background-color: rgba(55, 165, 140, 0.89);
      > div {
          background-color: rgba(0, 0, 0, 0.4);
      }
  }

  &--gray {
      background-color: rgba(255, 255, 255, 0.702);
      > div {
          background-color: rgba(0, 0, 0, 0.5);
      }
      h3 {
        color: #111;
      }
  }

  &--pink {
      background-color: rgba(221, 0, 96, 0.769);
      > div {
          background-color: rgba(0, 0, 0, 0.35);
      }
  }

  h3 {
    position: static;
    font-size: 24px;
    text-shadow: none !important;
    line-height: 28px;
  }

  p {
    font-size: 15px;
    margin-bottom: 3px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      font-size: 27px;
      margin-right: 4px;
    }
  }
  > div {
    padding: 15px 20px;
  }
}

.slider-grid__info-bottom {
  span {
    font-size: 14px;
    position: relative;
    &:nth-child(1) {
      padding-left: 22px;
      margin-right: 10px;
      &::before {
        content: "";
        position: absolute;
        width: 18px;
        height: 18px;
        background: url('../../assets/images/review.svg') no-repeat;
        background-position: center;
        background-size: contain;
        left: 0px;
        top: calc( 50% - 8px );
      }
    }

    &:nth-child(2) {
      padding-left: 22px;
      &::before {
        content: "";
        position: absolute;
        width: 16px;
        height: 16px;
        background: url('../../assets/images/tools.svg') no-repeat;
        background-position: center;
        background-size: contain;
        left: 0px;
        top: calc( 50% - 8px );
      }
    }
  }
}


.third-grid {
  display: flex;
  flex-wrap: wrap;
  margin-top: 25px;
}

.third-grid__item {
  width: calc( 100% / 3 );
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.1);
    z-index: 1;
  }

  > div {
    padding-bottom: 69.5%;
    position: relative;
    img {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
    }

    p {
      text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
      color: #fff;
      font-size: 28px;
      bottom: 35px;
      left: 30px;
      font-weight: 700;
      position: absolute;
      z-index: 2
    }
  }
}

.slider-grid__images {
  width: 54px;
  height: 54px;
  background: rgba(0,0,0,0.65) url('../../assets/images/images.svg') no-repeat;
  background-position: center;
  background-size: 27px;
  left: 24px;
  top: 21px;
  position: absolute;

}

</style>
