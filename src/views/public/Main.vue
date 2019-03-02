<template>

  <div class="wrapper">

<div class="main mb-2">
   <!--   <div class="section section-about-office"> -->
        <div class="md-layout">
          <div class="md-layout-item md-size-60 md-medium-size-70 md-small-size-90 mx-auto"> 
  <!-- <div class="subscribe-line ">  -->
     <!-- <div class="section section-about-office topsearch"> -->
      <div class="container justify-content-center">

<!--        <div class="md-layout">
          <div class="md-layout-item md-size-100 md-small-size-100 md-xlarge-size-100 mx-auto text-center"> -->
           <md-card class="md-card-form-horizontal normalcard topmainsearch">
              <md-card-content> 
         <form action="" method="">
                  <div class="md-layout">
                      <div class="md-layout-item md-size-100 md-small-size-100 mx-auto">
                        <h4>Найти сертифицированного монтажника</h4>
                      </div>
                      <div class="md-layout-item md-size-40 md-small-size-100 mx-auto">
                        <md-field>
                          <!--<label for="objType">Адрес объекта</label> -->
                          <md-input v-model="objAddr" placeholder="Адрес объекта"></md-input>
                        </md-field>
                      </div>
                      <div class="md-layout-item md-size-40 md-small-size-100 mx-auto">
                        <md-field>
                          <!-- <label for="objType">Тип объекта</label> -->
                          <md-select v-model="objType" name="objType" id="objType" placeholder="Тип объекта">
                            <md-option value="1">Квартира</md-option>
                            <md-option value="2">Загородный дом</md-option>
                            <md-option value="3">Таунхаус</md-option>
                            <md-option value="4">Коммерческий объект</md-option>
                          </md-select>
                        </md-field>
                      </div>
                      <div class="md-layout-item md-size-20 text-center">
                        <router-link tag="md-button" class="md-primary mt-2" id="buttons" :to="{ name: 'search' }">Найти <md-icon >keyboard_arrow_right</md-icon></router-link>
                      </div>

              </div>
              </form>
           </md-card-content>
            </md-card> 
         </div>
        </div> 
      <!-- </div> -->
      <!-- </div>
      </div> -->
    <!--      </div> -->
    </div> 

        <div class="md-layout">
          <div class="md-layout-item md-size-100 mx-auto">
            <div class="section section-team-5  img1" :style="sectionTeam(rehau1)">
              <div class="maintext">
                <h2 class="text1">REHAU PRO</h2>
                <h2 class="text2">200% качества</h2>
                <h4 class="text3">Больше, чем просто монтаж</h4>
              </div>
            </div>
          </div>
        </div>

  </div>
    <!-- <div class="main main-raised mb-2"> -->


    <!-- Features 5 -->
        <div class="md-layout">
          <div class="md-layout-item md-size-80 md-medium-size-100 md-small-size-100 mx-auto">
    <div class="section section-features-5" :style="features5">
      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item md-size-66 md-small-size-100 mx-auto text-center">
            <h2 class="title">Ваша жизнь станет прекрасной</h2>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item md-size-33 md-small-size-100">
            <info-areas
              text-center
              icon="flip_to_back">
              <h4 class="info-title" slot="title">Теплый пол</h4>
              <div class="description" slot="content">
                <p>Оптимальное решение для создания благоприятного климата в Вашем доме – водяной теплый пол REHAU.</p>
              </div>
            </info-areas>
          </div>
          <div class="md-layout-item md-size-33 md-small-size-100">
            <info-areas
              text-center
              icon="hot_tub">
              <h4 class="info-title" slot="title">Коммуникации</h4>
              <div class="description" slot="content">
                <p>Rehau производит полный ассортимент труб и комплектующих для систем водоснабжения, отопления и канализации.</p>
              </div>
            </info-areas>
          </div>
          <div class="md-layout-item md-size-33 md-small-size-100">
            <info-areas
              text-center
              icon="dashboard">
              <h4 class="info-title" slot="title">Окна</h4>
              <div class="description" slot="content">
                <p>Компания Rehau предлагает технологии будущего, доступные уже сегодня. Окна для комфортной жизни.</p>
              </div>
            </info-areas>
          </div>
        </div>
        <div class="md-layout">
          <div class="md-layout-item md-size-33 md-small-size-100">
            <info-areas
              text-center
              icon="thumb_up">
              <h4 class="info-title" slot="title">Гарантия качества</h4>
              <div class="description" slot="content">
                <p>Срок службы инженерных систем Rehau не менее 50 лет. Подтверждено международными сертификатами.</p>
              </div>
            </info-areas>
          </div>
          <div class="md-layout-item md-size-33 md-small-size-100">
            <info-areas
              text-center
              icon="access_time">
              <h4 class="info-title" slot="title">Экономьте время</h4>
              <div class="description" slot="content">
                <p>Профессиональные сертифицированные монтажники быстро установят инженерные системы Rehau.</p>
              </div>
            </info-areas>
          </div>
          <div class="md-layout-item md-size-33 md-small-size-100">
            <info-areas
              text-center
              icon="attach_money">
              <h4 class="info-title" slot="title">Экономьте деньги</h4>
              <div class="description" slot="content">
                <p>Большой срок службы и надежность продукции Rehau позволяют существенно экономить на ремонте и обслуживании систеи.</p>
              </div>
            </info-areas>
          </div>
        </div>
      </div>
      </div>
      </div>
    </div>
    <!-- end Features 5 -->



        <div class="md-layout">
          <div class="md-layout-item md-size-80 md-medium-size-100 md-small-size-100 mx-auto">
      <div class="section section-about-office">
        <div class="container">
          <div class="md-layout text-center">
            <div class="md-layout-item md-size-66 md-small-size-100 mx-auto">
              <h2 class="title">От стандартных квартир до просторных домов</h2>
              <h4 class="description">Высокое качество инженерных систем Rehau позволяет решать задачи любой сложности. 
                Срок службы изделий Rehau - до 50 лет.
              </h4>
            </div>
          </div>
          <div class="md-layout">
            <div class="md-layout-item md-size-33 md-small-size-100">
              <img class="img-raised rounded" alt="Raised Image" :src="aboutOffice.aboutOffice1">
            </div>
            <div class="md-layout-item md-size-33 md-small-size-100">
              <img class="img-raised rounded" alt="Raised Image" :src="aboutOffice.aboutOffice2">
            </div>
            <div class="md-layout-item md-size-33 md-small-size-100">
              <img class="img-raised rounded" alt="Raised Image" :src="aboutOffice.aboutOffice3">
            </div>
            <div class="md-layout-item md-size-50 md-small-size-100">
              <img class="img-raised rounded" alt="Raised Image" :src="aboutOffice.aboutOffice4">
            </div>
            <div class="md-layout-item md-size-50 md-small-size-100">
              <img class="img-raised rounded" alt="Raised Image" :src="aboutOffice.aboutOffice5">
            </div>
          </div>
          </div>
          </div>

        </div>
      </div>


    <!-- Team 5 -->
        <div class="md-layout">
          <div class="md-layout-item md-size-80 md-medium-size-100 md-small-size-100 mx-auto">
    <div class="section section-team-5 section-image" :style="sectionTeam(team5)">
      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item md-size-66 md-small-size-100 mx-auto text-center">
            <h2 class="title">Сертифицированные монтажники</h2>
            <h5 class="description">Лучшие монтажники, сертифицированные компанией Rehau готовы выполнить Ваш проект.</h5>
          </div>
        </div>
        <div class="md-layout">
          <div class="md-layout-item md-size-50 md-small-size-100">
            <profile-card
              card-plain
              type="horizontal"
              :shadow-normal="false"
              :no-colored-shadow="true"
              :card-image="cardProfile3.cardProfile1">
              <template slot="cardContent">
                <h4 class="card-title">Иван Петров</h4>
                <h6 class="card-category text-muted">Индивидуальный монтажник</h6>
                <p class="card-description">Более 15 лет опыта монтажа инженерных систем Rehau</p>
              </template>
              <template slot="cardAction">
                <md-button href="javascript:void(0)" class="md-twitter md-just-icon md-simple md-white"><i class="fab fa-twitter"></i></md-button>
                <md-button href="javascript:void(0)" class="md-facebook md-just-icon md-simple md-white"><i class="fab fa-facebook"></i></md-button>
                <md-button href="javascript:void(0)" class="md-google md-just-icon md-simple md-white"><i class="fab fa-google"></i></md-button>
              </template>
            </profile-card>
          </div>
          <div class="md-layout-item md-size-50 md-small-size-100">
            <profile-card
              card-plain
              type="horizontal"
              :shadow-normal="false"
              :no-colored-shadow="true"
              :card-image="cardProfile3.cardProfile2">
              <template slot="cardContent">
                <h4 class="card-title">Петр Сидоров</h4>
                <h6 class="card-category text-muted">Индивидуальный монтажник</h6>
                <p class="card-description">Более 15 лет опыта монтажа инженерных систем Rehau</p>
              </template>
              <template slot="cardAction">
                <md-button href="javascript:void(0)" class="md-linkedin md-just-icon md-simple md-white"><i class="fab fa-linkedin"></i></md-button>
                <md-button href="javascript:void(0)" class="md-facebook md-just-icon md-simple md-white"><i class="fab fa-facebook"></i></md-button>
                <md-button href="javascript:void(0)" class="md-dribbble md-just-icon md-simple md-white"><i class="fab fa-dribbble"></i></md-button>
                <md-button href="javascript:void(0)" class="md-google md-just-icon md-simple md-white"><i class="fab fa-google"></i></md-button>
              </template>
            </profile-card>
          </div>
          <div class="md-layout-item md-size-50 md-small-size-100">
            <profile-card
              card-plain
              type="horizontal"
              :shadow-normal="false"
              :no-colored-shadow="true"
              :card-image="cardProfile3.cardProfile3">
              <template slot="cardContent">
                <h4 class="card-title">Иван и Петр Запашные</h4>
                <h6 class="card-category text-muted">ООО НОВЫЙ СВЕТ</h6>
                <p class="card-description">Более 15 лет опыта монтажа инженерных систем Rehau</p>
              </template>
              <template slot="cardAction">
                <md-button href="javascript:void(0)" class="md-youtube md-just-icon md-simple md-white"><i class="fab fa-youtube"></i></md-button>
                <md-button href="javascript:void(0)" class="md-twitter md-just-icon md-simple md-white"><i class="fab fa-twitter"></i></md-button>
                <md-button href="javascript:void(0)" class="md-instagram md-just-icon md-simple md-white"><i class="fab fa-instagram"></i></md-button>
              </template>
            </profile-card>
          </div>
          <div class="md-layout-item md-size-50 md-small-size-100">
            <profile-card
              card-plain
              type="horizontal"
              :shadow-normal="false"
              :no-colored-shadow="true"
              :card-image="cardProfile3.cardProfile4">
              <template slot="cardContent">
                <h4 class="card-title">Иван Васильев</h4>
                <h6 class="card-category text-muted">ООО РДС СТРОЙ</h6>
                <p class="card-description">Более 15 лет опыта монтажа инженерных систем Rehau</p>
              </template>
              <template slot="cardAction">
                <md-button href="javascript:void(0)" class="md-linkedin md-just-icon md-simple md-white"><i class="fab fa-linkedin"></i></md-button>
                <md-button href="javascript:void(0)" class="md-facebook md-just-icon md-simple md-white"><i class="fab fa-facebook"></i></md-button>
                <md-button href="javascript:void(0)" class="md-google md-just-icon md-simple md-white"><i class="fab fa-google"></i></md-button>
              </template>
            </profile-card>
          </div>
        </div>
        </div>
        </div>
      </div>
    </div>
    <!-- end Team 5 -->




    <div class="section section-blogs-1">
      <!-- Blogs 1 -->
      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item md-size-80 md-medium-size-100 md-small-size-100 mx-auto">
            <h2 class="title">Лучшие инженерные решения</h2>
            <br>
            <blog-card
              card-plain
              type="horizontal"
              :shadow-normal= "false"
              :no-colored-shadow= "false"
              :card-image="cardBlogPost.cardBlogPost1">
              <template slot="cardContent">
                <h6 class="card-category text-info">Премиум</h6>
                <h3 class="card-title">
                  <a href="javascript:void(0)">Система REHAU RAUTITAN для водоснабжения</a>
                </h3>
                <p class="card-description">
                  Это система для обеспечения питьевой (холодной) и горячей водой жилых и нежилых помещений. В основе системы лежат трубы из сшитого полиэтилена типа PE-Xa и полимерные фитинги с надвижной гильзой…
                  <a href="javascript:void(0)"> Читать далее </a>
                </p>
                <p class="author">
                  опубликовано
                  <a href="javascript:void(0)">
                    <b>Пресс-центр Rehau</b>
                  </a>, 2 дня назад
                </p>
              </template>
            </blog-card>
            <blog-card
              card-plain
              type="horizontal"
              reverse-row
              :shadow-normal= "false"
              :no-colored-shadow= "false"
              :card-image="cardBlogPost.cardBlogPost2">
              <template slot="cardContent">
                <h6 class="card-category text-danger">
                  <md-icon class="text-danger">trending_up</md-icon> Полулярное
                </h6>
                <h3 class="card-title">
                  <a href="javascript:void(0)">Cистема обогрева и охлаждения поверхностей</a>
                </h3>
                <p class="card-description">
                  При любой погоде в доме должен сохраняться комфортный микроклимат. При этом важно, чтобы система была не только производительной, но и энергоэффективной. Организуйте обогрев дома с помощью продукции «Рехау»…
                  <a href="javascript:void(0)"> Читать далее </a>
                </p>
                <p class="author">
                  опубликовано
                  <a href="javascript:void(0)">
                    <b>Пресс-центр Rehau</b>
                  </a>, 2 дня назад
                </p>
              </template>
            </blog-card>
          </div>
        </div>
      </div>
      <!-- End Blogs 1 -->
    </div>


    <!-- </div>  -->


    <div class="subscribe-line subscribe-line-image" :style="imageSubscribe">
      <div class="container justify-content-center">
        <div class="md-layout">
          <div class="md-layout-item md-size-100 mx-auto">
            <div class="text-center">
                <h3 class="title">Подпишитесь на наши новости</h3>
                <p class="description">
                    Подпишитесь и получайте новости каждую неделю! Не волнуйтесь, мы тоже не любим спам.
                </p>
            </div>
            <md-card class="md-card-form-horizontal">
              <md-card-content>
                <form action="" method="">
                  <div class="md-layout">
                    <div class="md-layout-item md-size-66 md-medium-size-66 md-xsmall-size-100">
                      <md-field class="md-form-group">
                        <md-icon>mail</md-icon>
                        <md-input v-model="subscribe" placeholder="Подписаться"></md-input>
                      </md-field>
                    </div>
                    <div class="md-layout-item md-size-33 md-medium-size-33 md-xsmall-size-100">
                      <md-button class="md-primary md-block">Подписаться</md-button>
                    </div>
                  </div>
                </form>
              </md-card-content>
            </md-card>
          </div>
        </div>
      </div>
    </div>



  </div>
</template>
<script>
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
      BlogCard
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
        cardBlogPost: {
          cardBlogPost1: require("@/assets/img/main/system/sys1.jpg"),
          cardBlogPost2: require("@/assets/img/main/system/sys2.jpg")
        },
        aboutOffice: {
          aboutOffice1: require("@/assets/img/main/pict-1-3.jpg"),
          aboutOffice2: require("@/assets/img/main/pict-1-4.jpg"),
          aboutOffice3: require("@/assets/img/main/pict-1-5.jpg"),
          aboutOffice4: require("@/assets/img/main/pict-1-1.jpg"),
          aboutOffice5: require("@/assets/img/main/pict-1-2.jpg")
        },
        cardProfile3: {
          cardProfile1: require("@/assets/img/main/card-profile1-square.jpg"),
          cardProfile2: require("@/assets/img/main/montage/mont1.jpg"),
          cardProfile3: require("@/assets/img/main/montage/mont4.jpg"),
          cardProfile4: require("@/assets/img/main/montage/mont3.jpg")
        },
        objAddr: '',
        objType: ''
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
  .topmainsearch {
    margin-top: 150px !important;
  }
  .maintext {
    position: relative;
    top: 180px;
    left: 60%;
    width: 350px;
    height: 200px;
    background-color: white;
  }
  .text1 {
    padding-top: 35px;
    padding-left: 30px;
    width: 377px;
    height: 43px;
    //font-family: BrixSans;
    font-size: 32px;
    font-weight: 900;
    font-style: normal;
    font-stretch: normal;
    line-height: 0.98;
    letter-spacing: 0.3px;
    text-align: left;
    color: #000000;
  }
  .text2{
    padding-left: 30px;
    width: 377px;
    height: 32px;
    //font-family: BrixSans;
    font-size: 32px;
    font-weight: 900;
    font-style: normal;
    font-stretch: normal;
    line-height: 0.98;
    letter-spacing: 0.3px;
    text-align: left;
    color: #000000;
  }
  .text3 {
    padding-top: 28px;
    padding-left: 30px;
    width: 377px;
    height: 23px;
    //font-family: BrixSans;
    font-size: 20px;
    font-weight: 400;
    font-style: normal;
    font-stretch: normal;
    line-height: 0.98;
    letter-spacing: 0.3px;
    text-align: left;
    color: #000000;
  }
  .img1 {
    height: 606px;
  }
  .pb-0 {
    padding-bottom: 0 !important;
  }
  .pt-0 {
    padding-top: 0 !important;
  }
  .fullscreen-bg {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
  }
  .fullscreen-bg__video1 {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%; 
    min-height: 100%;
  }
  .fullscreen-bg__video {
      position: absolute;
      top: 50%;
      left: 50%;
      width: auto;
      height: auto;
      min-width: 100%;
      min-height: 100%;
      -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
          -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
  }
  .rsearch {
    padding-bottom: 0px;
    border-top: 5px solid #3eb396;
    border-bottom: 5px solid #df1764;
  }
  .mt-2 {
    margin-top: 1.5rem;
  }
  .mb-2 {
    margin-bottom: 1.5rem;
  }
</style>
