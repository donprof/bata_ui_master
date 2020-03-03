<template>
  <main>
    <!-- <no-ssr>
            <slick-slide ref="slick" :options="slickOptions">
                <sliders v-for="sl in sliders" :key="sl.id" :sl="sl"/>
            </slick-slide>
            <slide v-for="(slide, i) in slidescount" :key="i" :index="i">
    </no-ssr>-->
    <section class="slice p-0 my-0">
      <div class="container-fluid p-0 text-center">
 <a href="/latest">
   <img class="img-fluid" src="/img/backgrounds/newarrivals.JPG" alt />
   </a>
      </div>
    </section>
    <no-ssr>

        <slick-slide
  ref="slick"
  :options="slickOptions"
  @afterChange="handleAfterChange"
  @beforeChange="handleBeforeChange"
  @breakpoint="handleBreakpoint"
  @destroy="handleDestroy"
  @edge="handleEdge"
  @init="handleInit"
  @reInit="handleReInit"
  @setPosition="handleSetPosition"
  @swipe="handleSwipe"
  @lazyLoaded="handleLazyLoaded"
  @lazyLoadError="handleLazeLoadError">
  <a href="/brands/7"><img src="/img/banners/banner1.jpg" width="100%" alt="bata northstar"></a>
  <a href="/brands/4"><img src="/img/banners/banner2.jpg" width="100%" alt="Bata comfit"></a>
  <a href="http://eu.sharingan.capillarytech.com/app/Bata_Microsite#!/authlogin"><img src="/img/banners/banner3.jpg" width="100%" alt="bata club"></a>
        </slick-slide>

      <!-- <carousel-3d :disable3d="true" :autoplay-timeout="2000" :space="1290" :width="1260" :height="450" :clickable="false" :controls-visible="true">
                <slide v-for="(slide, i) in sliders" :key="i" :index="i">
                    <figure>
                        <img :src="slide.imagelink+'banners/'+slide.image">
                    </figure>
                </slide>
      </carousel-3d>-->
    </no-ssr>

    <section class="slice slice-sm overflow-hidden">
      <div class="pt-5 position-absolute middle right-0 col-lg-7 col-xl-7 d-none d-lg-block">
        <img alt src="/img/svg/ladyshopping.svg" class="img-fluid opacity-1" />
      </div>
      <!-- SVG shapes background -->
      <div class="bg-absolute-cover bg-size--contain d-flex align-items-center opacity-1">
        <figure class="w-100">
          <svg
            preserveAspectRatio="none"
            x="0px"
            y="0px"
            viewBox="0 0 1506.3 578.7"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              class="shape-fill-purple"
              d="M 147.269 295.566 C 147.914 293.9 149.399 292.705 151.164 292.431 L 167.694 289.863 C 169.459 289.588 171.236 290.277 172.356 291.668 L 182.845 304.699 C 183.965 306.091 184.258 307.974 183.613 309.64 L 177.572 325.239 C 176.927 326.905 175.442 328.1 173.677 328.375 L 157.147 330.943 C 155.382 331.217 153.605 330.529 152.485 329.137 L 141.996 316.106 C 140.876 314.714 140.583 312.831 141.228 311.165 L 147.269 295.566 Z"
            />
            <path
              class="shape-fill-green"
              d="M 92.927 474.881 C 93.309 473.896 94.187 473.19 95.23 473.028 L 105.002 471.51 C 106.045 471.347 107.096 471.754 107.758 472.577 L 113.959 480.28 C 114.621 481.103 114.794 482.216 114.413 483.201 L 110.841 492.423 C 110.46 493.408 109.582 494.114 108.539 494.277 L 98.767 495.795 C 97.723 495.957 96.673 495.55 96.011 494.727 L 89.81 487.024 C 89.148 486.201 88.975 485.088 89.356 484.103 L 92.927 474.881 Z"
            />
            <path
              class="shape-fill-teal"
              d="M 34.176 36.897 C 34.821 35.231 36.306 34.036 38.071 33.762 L 54.601 31.194 C 56.366 30.919 58.143 31.608 59.263 32.999 L 69.752 46.03 C 70.872 47.422 71.165 49.305 70.52 50.971 L 64.479 66.57 C 63.834 68.236 62.349 69.431 60.584 69.706 L 44.054 72.274 C 42.289 72.548 40.512 71.86 39.392 70.468 L 28.903 57.437 C 27.783 56.045 27.49 54.162 28.135 52.496 L 34.176 36.897 Z"
            />
            <path
              class="shape-fill-blue"
              d="M 975.636 9.762 C 976.101 8.561 977.171 7.7 978.443 7.502 L 990.354 5.652 C 991.626 5.454 992.907 5.95 993.714 6.953 L 1001.272 16.343 C 1002.079 17.346 1002.29 18.703 1001.826 19.903 L 997.472 31.144 C 997.008 32.344 995.938 33.205 994.666 33.403 L 982.754 35.254 C 981.483 35.451 980.202 34.956 979.395 33.953 L 971.837 24.563 C 971.03 23.559 970.818 22.203 971.283 21.002 L 975.636 9.762 Z"
            />
            <path
              class="shape-fill-gray-dark"
              d="M 1417.759 409.863 C 1418.404 408.197 1419.889 407.002 1421.654 406.728 L 1438.184 404.16 C 1439.949 403.885 1441.726 404.574 1442.846 405.965 L 1453.335 418.996 C 1454.455 420.388 1454.748 422.271 1454.103 423.937 L 1448.062 439.536 C 1447.417 441.202 1445.932 442.397 1444.167 442.672 L 1427.637 445.24 C 1425.872 445.514 1424.095 444.826 1422.975 443.434 L 1412.486 430.403 C 1411.366 429.011 1411.073 427.128 1411.718 425.462 L 1417.759 409.863 Z"
            />
            <path
              class="shape-fill-orange"
              d="M 1313.903 202.809 C 1314.266 201.873 1315.1 201.201 1316.092 201.047 L 1325.381 199.604 C 1326.373 199.449 1327.372 199.837 1328.001 200.618 L 1333.895 207.941 C 1334.525 208.723 1334.689 209.782 1334.327 210.718 L 1330.932 219.484 C 1330.57 220.42 1329.735 221.092 1328.743 221.246 L 1319.454 222.689 C 1318.462 222.843 1317.464 222.457 1316.834 221.674 L 1310.94 214.351 C 1310.31 213.569 1310.146 212.511 1310.508 211.575 L 1313.903 202.809 Z"
            />
            <path
              class="shape-fill-red"
              d="M 1084.395 506.137 C 1084.908 504.812 1086.09 503.861 1087.494 503.643 L 1100.645 501.6 C 1102.049 501.381 1103.463 501.929 1104.354 503.036 L 1112.699 513.403 C 1113.59 514.51 1113.823 516.009 1113.31 517.334 L 1108.504 529.744 C 1107.99 531.07 1106.809 532.02 1105.405 532.239 L 1092.254 534.282 C 1090.85 534.5 1089.436 533.953 1088.545 532.845 L 1080.2 522.478 C 1079.309 521.371 1079.076 519.873 1079.589 518.547 L 1084.395 506.137 Z"
            />
          </svg>
        </figure>
      </div>

      <div class="container position-relative zindex-100">
        <div class="row row-grid">
          <div class="col-lg-4 col-xs-6 mt-4">
            <a href="/categories/casual-lace-up-shoes" class="card-title">
              <div class="animate-this">
                <img src="img/casual.jpg" class="rounded z-depth-3 img-full" />
              </div>
            </a>
          </div>
          <div class="col-lg-4 col-xs-6 mt-4">
            <a href="/brands/10" class="card-title">
              <div class="animate-this">
                <img src="img/safari.jpg" class="rounded z-depth-3 img-full" />
              </div>
            </a>
          </div>
          <div class="col-lg-4 col-xs-6 mt-4">
            <a href="/brands/5" class="card-title">
              <div class="animate-this">
                <img src="img/sneakers.jpg" class="rounded z-depth-3 img-full" />
              </div>
            </a>
          </div>
        </div>

        <!-- <div class="mb-md text-center">
                    <span class="badge badge-lg badge-success badge-pill">Latest shoes</span>
                    <h3 class="mt-4">Latest <strong class="font-weight-700">arrivals</strong></h3>
        </div>-->
      </div>
    </section>
    <!--
        <section v-for="sl in salesbanner" :key="sl.id" class="slice slice-sm bg-cover bg-size--cover" :style="'background-position: 15% 75%; background-image: url('+sl.imagelink+'/wavebanner/'+sl.image+')'">
            <div class="shape-container" data-shape-style="wavify" data-shape-position="top" data-shape-orientation="inverse">
                <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" class="shape-fill-white" data-toggle="wavify">
                    <defs></defs>
                    <path d="M 0 87.32557265070729 C 128 70.50725400510667 128 70.50725400510667 256 78.91641332790697 C 384 87.32557265070729 384 87.32557265070729 512 67.39249430284666 C 640 47.459415954986056 640 47.459415954986056 768 56.77945203621193 C 896 66.0994881174378 896 66.0994881174378 1024 50.7847275308815 C 1152 35.46996694432518 1152 35.46996694432518 1280 61.71597974058941 L 1280 4655.64 L 0 4655.64 Z" class="shape-fill-white" fill="rgba(255,255,255, 0.20)"></path>
                </svg>
            </div>
            <div class="container py-xl">
                <div class="row">
                    <div class="col-lg-6 bg-white rounded opacity-8">
                        <nuxt-link :to="{ name: 'categories-slug', params: { slug: sl.slug } }">
                            <h2 class="h1 text-dark opacity-9">{{sl.title}}</h2>
                            <h2 class="h1 text-danger d-block opacity-9"><strong>{{sl.offer}}</strong></h2>
                            <p class="lead text-dark mt-4 opacity-9">{{sl.description}}</p>
                        </nuxt-link>
                    </div>
                </div>
            </div>
            <div class="shape-container" data-shape-style="wavify" data-shape-position="bottom">
                <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" class="shape-fill-white" data-toggle="wavify">
                    <defs></defs>
                    <path d="M 0 87.32525502917767 C 128 70.50628375346247 128 70.50628375346247 256 78.91576939132007 C 384 87.32525502917767 384 87.32525502917767 512 67.39174899677842 C 640 47.458242964379174 640 47.458242964379174 768 56.77886571751457 C 896 66.09948847064999 896 66.09948847064999 1024 50.78450501754451 C 1152 35.469521564439056 1152 35.469521564439056 1280 61.71528280041139 L 1280 4655.64 L 0 4655.64 Z" class="shape-fill-white" fill="rgba(255,255,255, 0.20)"></path>
                </svg>
            </div>
        </section>
    -->

    <section class="slice overflow-hidden">
      <!-- <div class="pt-5 position-absolute middle right-0 col-lg-7 col-xl-7 d-none d-lg-block">
                <img alt="" src="/img/svg/ladyshopping.svg" class="img-fluid opacity-1">
      </div>-->
      <!-- SVG shapes background -->
      <!-- <div class="bg-absolute-cover bg-size--contain d-flex align-items-center opacity-1">
                <figure class="w-100">

                    <svg preserveAspectRatio="none" x="0px" y="0px" viewBox="0 0 1506.3 578.7" xmlns="http://www.w3.org/2000/svg">
                        <path class="shape-fill-purple" d="M 147.269 295.566 C 147.914 293.9 149.399 292.705 151.164 292.431 L 167.694 289.863 C 169.459 289.588 171.236 290.277 172.356 291.668 L 182.845 304.699 C 183.965 306.091 184.258 307.974 183.613 309.64 L 177.572 325.239 C 176.927 326.905 175.442 328.1 173.677 328.375 L 157.147 330.943 C 155.382 331.217 153.605 330.529 152.485 329.137 L 141.996 316.106 C 140.876 314.714 140.583 312.831 141.228 311.165 L 147.269 295.566 Z"
                        />
                        <path class="shape-fill-green" d="M 92.927 474.881 C 93.309 473.896 94.187 473.19 95.23 473.028 L 105.002 471.51 C 106.045 471.347 107.096 471.754 107.758 472.577 L 113.959 480.28 C 114.621 481.103 114.794 482.216 114.413 483.201 L 110.841 492.423 C 110.46 493.408 109.582 494.114 108.539 494.277 L 98.767 495.795 C 97.723 495.957 96.673 495.55 96.011 494.727 L 89.81 487.024 C 89.148 486.201 88.975 485.088 89.356 484.103 L 92.927 474.881 Z"
                        />
                        <path class="shape-fill-teal" d="M 34.176 36.897 C 34.821 35.231 36.306 34.036 38.071 33.762 L 54.601 31.194 C 56.366 30.919 58.143 31.608 59.263 32.999 L 69.752 46.03 C 70.872 47.422 71.165 49.305 70.52 50.971 L 64.479 66.57 C 63.834 68.236 62.349 69.431 60.584 69.706 L 44.054 72.274 C 42.289 72.548 40.512 71.86 39.392 70.468 L 28.903 57.437 C 27.783 56.045 27.49 54.162 28.135 52.496 L 34.176 36.897 Z"
                        />
                        <path class="shape-fill-blue" d="M 975.636 9.762 C 976.101 8.561 977.171 7.7 978.443 7.502 L 990.354 5.652 C 991.626 5.454 992.907 5.95 993.714 6.953 L 1001.272 16.343 C 1002.079 17.346 1002.29 18.703 1001.826 19.903 L 997.472 31.144 C 997.008 32.344 995.938 33.205 994.666 33.403 L 982.754 35.254 C 981.483 35.451 980.202 34.956 979.395 33.953 L 971.837 24.563 C 971.03 23.559 970.818 22.203 971.283 21.002 L 975.636 9.762 Z"
                        />
                        <path class="shape-fill-gray-dark" d="M 1417.759 409.863 C 1418.404 408.197 1419.889 407.002 1421.654 406.728 L 1438.184 404.16 C 1439.949 403.885 1441.726 404.574 1442.846 405.965 L 1453.335 418.996 C 1454.455 420.388 1454.748 422.271 1454.103 423.937 L 1448.062 439.536 C 1447.417 441.202 1445.932 442.397 1444.167 442.672 L 1427.637 445.24 C 1425.872 445.514 1424.095 444.826 1422.975 443.434 L 1412.486 430.403 C 1411.366 429.011 1411.073 427.128 1411.718 425.462 L 1417.759 409.863 Z"
                        />
                        <path class="shape-fill-orange" d="M 1313.903 202.809 C 1314.266 201.873 1315.1 201.201 1316.092 201.047 L 1325.381 199.604 C 1326.373 199.449 1327.372 199.837 1328.001 200.618 L 1333.895 207.941 C 1334.525 208.723 1334.689 209.782 1334.327 210.718 L 1330.932 219.484 C 1330.57 220.42 1329.735 221.092 1328.743 221.246 L 1319.454 222.689 C 1318.462 222.843 1317.464 222.457 1316.834 221.674 L 1310.94 214.351 C 1310.31 213.569 1310.146 212.511 1310.508 211.575 L 1313.903 202.809 Z"
                        />
                        <path class="shape-fill-red" d="M 1084.395 506.137 C 1084.908 504.812 1086.09 503.861 1087.494 503.643 L 1100.645 501.6 C 1102.049 501.381 1103.463 501.929 1104.354 503.036 L 1112.699 513.403 C 1113.59 514.51 1113.823 516.009 1113.31 517.334 L 1108.504 529.744 C 1107.99 531.07 1106.809 532.02 1105.405 532.239 L 1092.254 534.282 C 1090.85 534.5 1089.436 533.953 1088.545 532.845 L 1080.2 522.478 C 1079.309 521.371 1079.076 519.873 1079.589 518.547 L 1084.395 506.137 Z"
                        />
                    </svg>
                </figure>
      </div>-->

      <div class="container position-relative zindex-100">
        <div class="mb-md text-center">
          <h3 class="mt-4">
            <strong class="font-weight-700">LADIES</strong>
          </h3>
        </div>

        <section class="slice slice-sm bg-transparent" id="sct-products">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-sm-6 mb-5">
                <div
                  class="card card-product no-border shadow shadow--hover animated bounceIn faster"
                >
                  <a href="/products/mc-dakota-7615095" class="card-title">
                    <div class="card-image">
                      <span>
                        <img
                          alt="SUPRIME"
                          src="img/ladies/mc-dakota-7615095.jpg"
                          class="img-center fadeInDown"
                          width="100%"
                          height="100%"
                        />
                      </span>
                    </div>
                  </a>
                  <div class="card-body pt-0 text-center px-2">
                    <a href="/products/mc-dakota-7615095" class="card-title">MC-DAKOTA</a>
                    <span class="card-price">Ksh 3399</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 mb-5">
                <div
                  class="card card-product no-border shadow shadow--hover animated bounceIn faster"
                >
                  <a href="/products/stride-teller-5812566" class="card-title">
                    <div class="card-image">
                      <span>
                        <img
                          alt="SUPRIME"
                          src="img/ladies/stride-teller-5812566.jpg"
                          class="img-center fadeInDown"
                          width="100%"
                          height="100%"
                        />
                      </span>
                    </div>
                  </a>
                  <div class="card-body pt-0 text-center px-2">
                    <a href="/products/stride-teller-5812566" class="card-title">STRIDE TELLER</a>
                    <span class="card-price">Ksh 2999</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 mb-5">
                <div
                  class="card card-product no-border shadow shadow--hover animated bounceIn faster"
                >
                  <a href="/products/flora-5512106" class="card-title">
                    <div class="card-image">
                      <span>
                        <img
                          alt="SUPRIME"
                          src="img/ladies/flora-5512106.jpg"
                          class="img-center fadeInDown"
                          width="100%"
                          height="100%"
                        />
                      </span>
                    </div>
                  </a>
                  <div class="card-body pt-0 text-center px-2">
                    <a href="/products/flora-5512106" class="card-title">FLORA</a>
                    <span class="card-price">Ksh 1999</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 mb-5">
                <div
                  class="card card-product no-border shadow shadow--hover animated bounceIn faster"
                >
                  <a href="/products/kaitlyn-insolia-6785510" class="card-title">
                    <div class="card-image">
                      <span>
                        <img
                          alt="SUPRIME"
                          src="img/ladies/kaitlyn-insolia-6785510.jpg"
                          class="img-center fadeInDown"
                          width="100%"
                          height="100%"
                        />
                      </span>
                    </div>
                  </a>
                  <div class="card-body pt-0 text-center px-2">
                    <a href="/products/kaitlyn-insolia-6785510" class="card-title">KAITLYN-INSOLIA</a>
                    <span class="card-price">Ksh 3399</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
    <section class="slice overflow-hidden">
      <!-- <div class="pt-5 position-absolute middle right-0 col-lg-7 col-xl-7 d-none d-lg-block">
                <img alt="" src="/img/svg/ladyshopping.svg" class="img-fluid opacity-1">
      </div>-->
      <!-- SVG shapes background -->
      <!-- <div class="bg-absolute-cover bg-size--contain d-flex align-items-center opacity-1">
                <figure class="w-100">

                    <svg preserveAspectRatio="none" x="0px" y="0px" viewBox="0 0 1506.3 578.7" xmlns="http://www.w3.org/2000/svg">
                        <path class="shape-fill-purple" d="M 147.269 295.566 C 147.914 293.9 149.399 292.705 151.164 292.431 L 167.694 289.863 C 169.459 289.588 171.236 290.277 172.356 291.668 L 182.845 304.699 C 183.965 306.091 184.258 307.974 183.613 309.64 L 177.572 325.239 C 176.927 326.905 175.442 328.1 173.677 328.375 L 157.147 330.943 C 155.382 331.217 153.605 330.529 152.485 329.137 L 141.996 316.106 C 140.876 314.714 140.583 312.831 141.228 311.165 L 147.269 295.566 Z"
                        />
                        <path class="shape-fill-green" d="M 92.927 474.881 C 93.309 473.896 94.187 473.19 95.23 473.028 L 105.002 471.51 C 106.045 471.347 107.096 471.754 107.758 472.577 L 113.959 480.28 C 114.621 481.103 114.794 482.216 114.413 483.201 L 110.841 492.423 C 110.46 493.408 109.582 494.114 108.539 494.277 L 98.767 495.795 C 97.723 495.957 96.673 495.55 96.011 494.727 L 89.81 487.024 C 89.148 486.201 88.975 485.088 89.356 484.103 L 92.927 474.881 Z"
                        />
                        <path class="shape-fill-teal" d="M 34.176 36.897 C 34.821 35.231 36.306 34.036 38.071 33.762 L 54.601 31.194 C 56.366 30.919 58.143 31.608 59.263 32.999 L 69.752 46.03 C 70.872 47.422 71.165 49.305 70.52 50.971 L 64.479 66.57 C 63.834 68.236 62.349 69.431 60.584 69.706 L 44.054 72.274 C 42.289 72.548 40.512 71.86 39.392 70.468 L 28.903 57.437 C 27.783 56.045 27.49 54.162 28.135 52.496 L 34.176 36.897 Z"
                        />
                        <path class="shape-fill-blue" d="M 975.636 9.762 C 976.101 8.561 977.171 7.7 978.443 7.502 L 990.354 5.652 C 991.626 5.454 992.907 5.95 993.714 6.953 L 1001.272 16.343 C 1002.079 17.346 1002.29 18.703 1001.826 19.903 L 997.472 31.144 C 997.008 32.344 995.938 33.205 994.666 33.403 L 982.754 35.254 C 981.483 35.451 980.202 34.956 979.395 33.953 L 971.837 24.563 C 971.03 23.559 970.818 22.203 971.283 21.002 L 975.636 9.762 Z"
                        />
                        <path class="shape-fill-gray-dark" d="M 1417.759 409.863 C 1418.404 408.197 1419.889 407.002 1421.654 406.728 L 1438.184 404.16 C 1439.949 403.885 1441.726 404.574 1442.846 405.965 L 1453.335 418.996 C 1454.455 420.388 1454.748 422.271 1454.103 423.937 L 1448.062 439.536 C 1447.417 441.202 1445.932 442.397 1444.167 442.672 L 1427.637 445.24 C 1425.872 445.514 1424.095 444.826 1422.975 443.434 L 1412.486 430.403 C 1411.366 429.011 1411.073 427.128 1411.718 425.462 L 1417.759 409.863 Z"
                        />
                        <path class="shape-fill-orange" d="M 1313.903 202.809 C 1314.266 201.873 1315.1 201.201 1316.092 201.047 L 1325.381 199.604 C 1326.373 199.449 1327.372 199.837 1328.001 200.618 L 1333.895 207.941 C 1334.525 208.723 1334.689 209.782 1334.327 210.718 L 1330.932 219.484 C 1330.57 220.42 1329.735 221.092 1328.743 221.246 L 1319.454 222.689 C 1318.462 222.843 1317.464 222.457 1316.834 221.674 L 1310.94 214.351 C 1310.31 213.569 1310.146 212.511 1310.508 211.575 L 1313.903 202.809 Z"
                        />
                        <path class="shape-fill-red" d="M 1084.395 506.137 C 1084.908 504.812 1086.09 503.861 1087.494 503.643 L 1100.645 501.6 C 1102.049 501.381 1103.463 501.929 1104.354 503.036 L 1112.699 513.403 C 1113.59 514.51 1113.823 516.009 1113.31 517.334 L 1108.504 529.744 C 1107.99 531.07 1106.809 532.02 1105.405 532.239 L 1092.254 534.282 C 1090.85 534.5 1089.436 533.953 1088.545 532.845 L 1080.2 522.478 C 1079.309 521.371 1079.076 519.873 1079.589 518.547 L 1084.395 506.137 Z"
                        />
                    </svg>
                </figure>
      </div>-->

      <div class="container position-relative zindex-100">
        <div class="mb-md text-center">
          <h3 class="mt-4">
            <strong class="font-weight-700">MEN</strong>
          </h3>
        </div>
        <section class="slice slice-sm bg-transparent" id="sct-products">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-sm-6 mb-5">
                <div
                  class="card card-product no-border shadow shadow--hover animated bounceIn faster"
                >
                  <a href="/products/fern-8014881" class="card-title">
                    <div class="card-image">
                      <span>
                        <img
                          alt="SUPRIME"
                          src="img/men/fern-8014881.jpg"
                          class="img-center fadeInDown"
                          width="100%"
                          height="100%"
                        />
                      </span>
                    </div>
                  </a>
                  <div class="card-body pt-0 text-center px-2">
                    <a href="/products/fern-8014881" class="card-title">FERN</a>
                    <span class="card-price">Ksh 4999</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 mb-5">
                <div
                  class="card card-product no-border shadow shadow--hover animated bounceIn faster"
                >
                  <a href="/products/sioux-8544080" class="card-title">
                    <div class="card-image">
                      <span>
                        <img
                          alt="SUPRIME"
                          src="img/men/sioux-8544080.jpg"
                          class="img-center fadeInDown"
                          width="100%"
                          height="100%"
                        />
                      </span>
                    </div>
                  </a>
                  <div class="card-body pt-0 text-center px-2">
                    <a href="/products/sioux-8544080" class="card-title">SIOUX</a>
                    <span class="card-price">Ksh 4999</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 mb-5">
                <div
                  class="card card-product no-border shadow shadow--hover animated bounceIn faster"
                >
                  <a href="/products/gordon-8817405" class="card-title">
                    <div class="card-image">
                      <span>
                        <img
                          alt="SUPRIME"
                          src="img/men/gordon-8817405.jpg"
                          class="img-center fadeInDown"
                          width="100%"
                          height="100%"
                        />
                      </span>
                    </div>
                  </a>
                  <div class="card-body pt-0 text-center px-2">
                    <a href="/products/gordon-8817405" class="card-title">GORDON</a>
                    <span class="card-price">Ksh 2999</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 mb-5">
                <div
                  class="card card-product no-border shadow shadow--hover animated bounceIn faster"
                >
                  <a href="/products/sven-8811213" class="card-title">
                    <div class="card-image">
                      <span>
                        <img
                          alt="SUPRIME"
                          src="img/men/sven-8811213.jpg"
                          class="img-center fadeInDown"
                          width="100%"
                          height="100%"
                        />
                      </span>
                    </div>
                  </a>
                  <div class="card-body pt-0 text-center px-2">
                    <a href="/products/sven-8811213" class="card-title">SVEN</a>
                    <span class="card-price">Ksh 1999</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
    <section class="slice overflow-hidden">
      <!-- <div class="pt-5 position-absolute middle right-0 col-lg-7 col-xl-7 d-none d-lg-block">
                <img alt="" src="/img/svg/ladyshopping.svg" class="img-fluid opacity-1">
      </div>-->
      <!-- SVG shapes background -->
      <!-- <div class="bg-absolute-cover bg-size--contain d-flex align-items-center opacity-1">
                <figure class="w-100">

                    <svg preserveAspectRatio="none" x="0px" y="0px" viewBox="0 0 1506.3 578.7" xmlns="http://www.w3.org/2000/svg">
                        <path class="shape-fill-purple" d="M 147.269 295.566 C 147.914 293.9 149.399 292.705 151.164 292.431 L 167.694 289.863 C 169.459 289.588 171.236 290.277 172.356 291.668 L 182.845 304.699 C 183.965 306.091 184.258 307.974 183.613 309.64 L 177.572 325.239 C 176.927 326.905 175.442 328.1 173.677 328.375 L 157.147 330.943 C 155.382 331.217 153.605 330.529 152.485 329.137 L 141.996 316.106 C 140.876 314.714 140.583 312.831 141.228 311.165 L 147.269 295.566 Z"
                        />
                        <path class="shape-fill-green" d="M 92.927 474.881 C 93.309 473.896 94.187 473.19 95.23 473.028 L 105.002 471.51 C 106.045 471.347 107.096 471.754 107.758 472.577 L 113.959 480.28 C 114.621 481.103 114.794 482.216 114.413 483.201 L 110.841 492.423 C 110.46 493.408 109.582 494.114 108.539 494.277 L 98.767 495.795 C 97.723 495.957 96.673 495.55 96.011 494.727 L 89.81 487.024 C 89.148 486.201 88.975 485.088 89.356 484.103 L 92.927 474.881 Z"
                        />
                        <path class="shape-fill-teal" d="M 34.176 36.897 C 34.821 35.231 36.306 34.036 38.071 33.762 L 54.601 31.194 C 56.366 30.919 58.143 31.608 59.263 32.999 L 69.752 46.03 C 70.872 47.422 71.165 49.305 70.52 50.971 L 64.479 66.57 C 63.834 68.236 62.349 69.431 60.584 69.706 L 44.054 72.274 C 42.289 72.548 40.512 71.86 39.392 70.468 L 28.903 57.437 C 27.783 56.045 27.49 54.162 28.135 52.496 L 34.176 36.897 Z"
                        />
                        <path class="shape-fill-blue" d="M 975.636 9.762 C 976.101 8.561 977.171 7.7 978.443 7.502 L 990.354 5.652 C 991.626 5.454 992.907 5.95 993.714 6.953 L 1001.272 16.343 C 1002.079 17.346 1002.29 18.703 1001.826 19.903 L 997.472 31.144 C 997.008 32.344 995.938 33.205 994.666 33.403 L 982.754 35.254 C 981.483 35.451 980.202 34.956 979.395 33.953 L 971.837 24.563 C 971.03 23.559 970.818 22.203 971.283 21.002 L 975.636 9.762 Z"
                        />
                        <path class="shape-fill-gray-dark" d="M 1417.759 409.863 C 1418.404 408.197 1419.889 407.002 1421.654 406.728 L 1438.184 404.16 C 1439.949 403.885 1441.726 404.574 1442.846 405.965 L 1453.335 418.996 C 1454.455 420.388 1454.748 422.271 1454.103 423.937 L 1448.062 439.536 C 1447.417 441.202 1445.932 442.397 1444.167 442.672 L 1427.637 445.24 C 1425.872 445.514 1424.095 444.826 1422.975 443.434 L 1412.486 430.403 C 1411.366 429.011 1411.073 427.128 1411.718 425.462 L 1417.759 409.863 Z"
                        />
                        <path class="shape-fill-orange" d="M 1313.903 202.809 C 1314.266 201.873 1315.1 201.201 1316.092 201.047 L 1325.381 199.604 C 1326.373 199.449 1327.372 199.837 1328.001 200.618 L 1333.895 207.941 C 1334.525 208.723 1334.689 209.782 1334.327 210.718 L 1330.932 219.484 C 1330.57 220.42 1329.735 221.092 1328.743 221.246 L 1319.454 222.689 C 1318.462 222.843 1317.464 222.457 1316.834 221.674 L 1310.94 214.351 C 1310.31 213.569 1310.146 212.511 1310.508 211.575 L 1313.903 202.809 Z"
                        />
                        <path class="shape-fill-red" d="M 1084.395 506.137 C 1084.908 504.812 1086.09 503.861 1087.494 503.643 L 1100.645 501.6 C 1102.049 501.381 1103.463 501.929 1104.354 503.036 L 1112.699 513.403 C 1113.59 514.51 1113.823 516.009 1113.31 517.334 L 1108.504 529.744 C 1107.99 531.07 1106.809 532.02 1105.405 532.239 L 1092.254 534.282 C 1090.85 534.5 1089.436 533.953 1088.545 532.845 L 1080.2 522.478 C 1079.309 521.371 1079.076 519.873 1079.589 518.547 L 1084.395 506.137 Z"
                        />
                    </svg>
                </figure>
      </div>-->

      <div class="container position-relative zindex-100">
        <div class="mb-md text-center">
          <h3 class="mt-4">
            <strong class="font-weight-700">CHILDREN</strong>
          </h3>
        </div>

        <section class="slice slice-sm bg-transparent" id="sct-products">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-sm-6 mb-5">
                <div
                  class="card card-product no-border shadow shadow--hover animated bounceIn faster"
                >
                  <a href="/products/neil-1012020" class="card-title">
                    <div class="card-image">
                      <span>
                        <img
                          alt="SUPRIME"
                          src="img/kids/neil-1012020.jpg"
                          class="img-center fadeInDown"
                          width="100%"
                          height="100%"
                        />
                      </span>
                    </div>
                  </a>
                  <div class="card-body pt-0 text-center px-2">
                    <a href="/products/neil-1012020" class="card-title">NEIL</a>
                    <span class="card-price">Ksh 1999</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 mb-5">
                <div
                  class="card card-product no-border shadow shadow--hover animated bounceIn faster"
                >
                  <a href="/products/norway-3613084" class="card-title">
                    <div class="card-image">
                      <span>
                        <img
                          alt="SUPRIME"
                          src="img/kids/norway-3613084.jpg"
                          class="img-center fadeInDown"
                          width="100%"
                          height="100%"
                        />
                      </span>
                    </div>
                  </a>
                  <div class="card-body pt-0 text-center px-2">
                    <a href="/products/norway-3613084" class="card-title">NORWAY</a>
                    <span class="card-price">Ksh 1999</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 mb-5">
                <div
                  class="card card-product no-border shadow shadow--hover animated bounceIn faster"
                >
                  <a href="/products/ulfr-1396028" class="card-title">
                    <div class="card-image">
                      <span>
                        <img
                          alt="SUPRIME"
                          src="img/kids/ulfr-1396028.jpg"
                          class="img-center fadeInDown"
                          width="100%"
                          height="100%"
                        />
                      </span>
                    </div>
                  </a>
                  <div class="card-body pt-0 text-center px-2">
                    <a href="/products/ulfr-1396028" class="card-title">ULFR</a>
                    <span class="card-price">Ksh 1399</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 mb-5">
                <div
                  class="card card-product no-border shadow shadow--hover animated bounceIn faster"
                >
                  <a href="/products/harmeet-1515966" class="card-title">
                    <div class="card-image">
                      <span>
                        <img
                          alt="SUPRIME"
                          src="img/kids/harmeet-1515966.jpg"
                          class="img-center fadeInDown"
                          width="100%"
                          height="100%"
                        />
                      </span>
                    </div>
                  </a>
                  <div class="card-body pt-0 text-center px-2">
                    <a href="/products/harmeet-1515966" class="card-title">HARMEET</a>
                    <span class="card-price">Ksh 1799</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>

    <section class="slice overflow-hidden">
      <!-- <div class="pt-5 position-absolute middle right-0 col-lg-7 col-xl-7 d-none d-lg-block">
                <img alt="" src="/img/svg/ladyshopping.svg" class="img-fluid opacity-1">
      </div>-->
      <!-- SVG shapes background -->
      <!-- <div class="bg-absolute-cover bg-size--contain d-flex align-items-center opacity-1">
                <figure class="w-100">

                    <svg preserveAspectRatio="none" x="0px" y="0px" viewBox="0 0 1506.3 578.7" xmlns="http://www.w3.org/2000/svg">
                        <path class="shape-fill-purple" d="M 147.269 295.566 C 147.914 293.9 149.399 292.705 151.164 292.431 L 167.694 289.863 C 169.459 289.588 171.236 290.277 172.356 291.668 L 182.845 304.699 C 183.965 306.091 184.258 307.974 183.613 309.64 L 177.572 325.239 C 176.927 326.905 175.442 328.1 173.677 328.375 L 157.147 330.943 C 155.382 331.217 153.605 330.529 152.485 329.137 L 141.996 316.106 C 140.876 314.714 140.583 312.831 141.228 311.165 L 147.269 295.566 Z"
                        />
                        <path class="shape-fill-green" d="M 92.927 474.881 C 93.309 473.896 94.187 473.19 95.23 473.028 L 105.002 471.51 C 106.045 471.347 107.096 471.754 107.758 472.577 L 113.959 480.28 C 114.621 481.103 114.794 482.216 114.413 483.201 L 110.841 492.423 C 110.46 493.408 109.582 494.114 108.539 494.277 L 98.767 495.795 C 97.723 495.957 96.673 495.55 96.011 494.727 L 89.81 487.024 C 89.148 486.201 88.975 485.088 89.356 484.103 L 92.927 474.881 Z"
                        />
                        <path class="shape-fill-teal" d="M 34.176 36.897 C 34.821 35.231 36.306 34.036 38.071 33.762 L 54.601 31.194 C 56.366 30.919 58.143 31.608 59.263 32.999 L 69.752 46.03 C 70.872 47.422 71.165 49.305 70.52 50.971 L 64.479 66.57 C 63.834 68.236 62.349 69.431 60.584 69.706 L 44.054 72.274 C 42.289 72.548 40.512 71.86 39.392 70.468 L 28.903 57.437 C 27.783 56.045 27.49 54.162 28.135 52.496 L 34.176 36.897 Z"
                        />
                        <path class="shape-fill-blue" d="M 975.636 9.762 C 976.101 8.561 977.171 7.7 978.443 7.502 L 990.354 5.652 C 991.626 5.454 992.907 5.95 993.714 6.953 L 1001.272 16.343 C 1002.079 17.346 1002.29 18.703 1001.826 19.903 L 997.472 31.144 C 997.008 32.344 995.938 33.205 994.666 33.403 L 982.754 35.254 C 981.483 35.451 980.202 34.956 979.395 33.953 L 971.837 24.563 C 971.03 23.559 970.818 22.203 971.283 21.002 L 975.636 9.762 Z"
                        />
                        <path class="shape-fill-gray-dark" d="M 1417.759 409.863 C 1418.404 408.197 1419.889 407.002 1421.654 406.728 L 1438.184 404.16 C 1439.949 403.885 1441.726 404.574 1442.846 405.965 L 1453.335 418.996 C 1454.455 420.388 1454.748 422.271 1454.103 423.937 L 1448.062 439.536 C 1447.417 441.202 1445.932 442.397 1444.167 442.672 L 1427.637 445.24 C 1425.872 445.514 1424.095 444.826 1422.975 443.434 L 1412.486 430.403 C 1411.366 429.011 1411.073 427.128 1411.718 425.462 L 1417.759 409.863 Z"
                        />
                        <path class="shape-fill-orange" d="M 1313.903 202.809 C 1314.266 201.873 1315.1 201.201 1316.092 201.047 L 1325.381 199.604 C 1326.373 199.449 1327.372 199.837 1328.001 200.618 L 1333.895 207.941 C 1334.525 208.723 1334.689 209.782 1334.327 210.718 L 1330.932 219.484 C 1330.57 220.42 1329.735 221.092 1328.743 221.246 L 1319.454 222.689 C 1318.462 222.843 1317.464 222.457 1316.834 221.674 L 1310.94 214.351 C 1310.31 213.569 1310.146 212.511 1310.508 211.575 L 1313.903 202.809 Z"
                        />
                        <path class="shape-fill-red" d="M 1084.395 506.137 C 1084.908 504.812 1086.09 503.861 1087.494 503.643 L 1100.645 501.6 C 1102.049 501.381 1103.463 501.929 1104.354 503.036 L 1112.699 513.403 C 1113.59 514.51 1113.823 516.009 1113.31 517.334 L 1108.504 529.744 C 1107.99 531.07 1106.809 532.02 1105.405 532.239 L 1092.254 534.282 C 1090.85 534.5 1089.436 533.953 1088.545 532.845 L 1080.2 522.478 C 1079.309 521.371 1079.076 519.873 1079.589 518.547 L 1084.395 506.137 Z"
                        />
                    </svg>
                </figure>
      </div>-->

      <div class="container position-relative zindex-100">
        <div class="mb-md text-center">
          <h3 class="mt-4">
            <strong class="font-weight-700">BRANDS</strong>
          </h3>
        </div>

        <section class="slice slice-sm bg-transparent" id="sct-products">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-sm-6 mb-5">
                <div
                  class="card card-product no-border shadow shadow--hover animated bounceIn faster"
                >
                  <a href="/brands/2" class="card-title">
                    <div class="card-image">
                      <span>
                        <img
                          alt="SUPRIME"
                          src="img/brands/toughees.jpg"
                          class="img-center fadeInDown"
                          width="100%"
                          height="100%"
                        />
                      </span>
                    </div>
                  </a>
                  <div class="card-body pt-0 text-center px-2">
                    <a href="/brands/2" class="card-title">TOUGHEES</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 mb-5">
                <div
                  class="card card-product no-border shadow shadow--hover animated bounceIn faster"
                >
                  <a href="/brands/10" class="card-title">
                    <div class="card-image">
                      <span>
                        <img
                          alt="SUPRIME"
                          src="img/brands/safari.jpg"
                          class="img-center fadeInDown"
                          width="100%"
                          height="100%"
                        />
                      </span>
                    </div>
                  </a>
                  <div class="card-body pt-0 text-center px-2">
                    <a href="/brands/10" class="card-title">SAFARI</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 mb-5">
                <div
                  class="card card-product no-border shadow shadow--hover animated bounceIn faster"
                >
                  <a href="/brands/13" class="card-title">
                    <div class="card-image">
                      <span>
                        <img
                          alt="SUPRIME"
                          src="img/brands/sandak.jpg"
                          class="img-center fadeInDown"
                          width="100%"
                          height="100%"
                        />
                      </span>
                    </div>
                  </a>
                  <div class="card-body pt-0 text-center px-2">
                    <a href="/brands/13" class="card-title">SANDAK</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 mb-5">
                <div
                  class="card card-product no-border shadow shadow--hover animated bounceIn faster"
                >
                  <a href="/brands/16" class="card-title">
                    <div class="card-image">
                      <span>
                        <img
                          alt="SUPRIME"
                          src="img/brands/industrials.jpg"
                          class="img-center fadeInDown"
                          width="100%"
                          height="100%"
                        />
                      </span>
                    </div>
                  </a>
                  <div class="card-body pt-0 text-center px-2">
                    <a href="/brands/16" class="card-title">BATA INDUSTRIALS</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>

    <section class="slice bg-gradient-danger overflow-hidden">
      <a href="#sct_call_to_action" class="tongue tongue-up tongue-secondary scroll-me">
        <i class="far fa-angle-up"></i>
      </a>
      <div class="bg-absolute-cover bg-size--contain d-flex align-items-center opacity-1">
        <figure class="w-100">
          <svg viewBox="0 0 1500 820" xmlns="http://www.w3.org/2000/svg">
            <path
              class="shape-fill-cyan"
              d="M 177.67 511.271 L 144.933 477.895 C 141.713 474.613 141.713 469.414 144.933 466.132 L 177.67 432.758 C 180.89 429.474 185.989 429.474 189.209 432.758 L 221.946 466.132 C 225.167 469.414 225.167 474.613 221.946 477.895 L 189.209 511.271 C 186.257 514.553 180.89 514.553 177.67 511.271 Z"
            />
            <circle class="shape-fill-pink" cx="1209.162" cy="110.471" r="34.859" />
            <circle
              class="shape-fill-yellow"
              stroke-width="3"
              stroke-miterlimit="10"
              cx="333.261"
              cy="222.266"
              r="25.344"
            />
            <path
              class="shape-fill-blue"
              d="M 49.669 -9.998 C 51.03 -13.511 54.16 -16.03 57.882 -16.608 L 92.738 -22.023 C 96.459 -22.602 100.206 -21.149 102.568 -18.217 L 124.686 9.261 C 127.047 12.196 127.665 16.166 126.305 19.679 L 113.567 52.571 C 112.206 56.084 109.075 58.604 105.354 59.184 L 70.498 64.599 C 66.777 65.177 63.029 63.727 60.668 60.791 L 38.55 33.314 C 36.189 30.378 35.571 26.408 36.931 22.895 L 49.669 -9.998 Z"
            />
            <path
              class="shape-fill-pink"
              d="M 1032.318 376.476 C 1033.264 374.034 1035.44 372.282 1038.028 371.88 L 1062.261 368.116 C 1064.848 367.713 1067.453 368.723 1069.095 370.762 L 1084.472 389.865 C 1086.114 391.906 1086.544 394.666 1085.598 397.108 L 1076.742 419.976 C 1075.796 422.418 1073.619 424.17 1071.032 424.574 L 1046.799 428.338 C 1044.212 428.74 1041.606 427.732 1039.965 425.691 L 1024.588 406.588 C 1022.946 404.547 1022.517 401.787 1023.462 399.344 L 1032.318 376.476 Z"
            />
            <path
              class="shape-fill-purple"
              d="M 1396.93 665.688 C 1399.95 657.893 1406.894 652.305 1415.153 651.022 L 1492.489 639.008 C 1500.744 637.723 1509.057 640.947 1514.298 647.453 L 1563.372 708.418 C 1568.611 714.931 1569.981 723.739 1566.965 731.533 L 1538.703 804.512 C 1535.683 812.306 1528.736 817.897 1520.48 819.184 L 1443.144 831.199 C 1434.887 832.481 1426.573 829.264 1421.334 822.75 L 1372.26 761.786 C 1367.022 755.272 1365.65 746.463 1368.668 738.668 L 1396.93 665.688 Z"
            />
            <path
              class="shape-fill-purple"
              d="M 264.129 775.914 C 265.075 773.472 267.251 771.72 269.839 771.318 L 294.072 767.554 C 296.659 767.151 299.264 768.161 300.906 770.2 L 316.283 789.303 C 317.925 791.344 318.355 794.104 317.409 796.546 L 308.553 819.414 C 307.607 821.856 305.43 823.608 302.843 824.012 L 278.61 827.776 C 276.023 828.178 273.417 827.17 271.776 825.129 L 256.399 806.026 C 254.757 803.985 254.328 801.225 255.273 798.782 L 264.129 775.914 Z"
            />
            <circle
              class="shape-fill-cyan"
              stroke-width="3"
              stroke-miterlimit="10"
              cx="745.931"
              cy="783.228"
              r="25.344"
            />
            <path
              class="shape-fill-purple"
              d="M 929.895 57.225 C 930.389 55.951 931.524 55.036 932.875 54.826 L 945.523 52.862 C 946.873 52.652 948.232 53.179 949.089 54.243 L 957.115 64.213 C 957.972 65.278 958.196 66.719 957.702 67.993 L 953.08 79.928 C 952.587 81.203 951.45 82.117 950.1 82.328 L 937.453 84.293 C 936.103 84.502 934.742 83.976 933.886 82.911 L 925.86 72.941 C 925.004 71.876 924.78 70.435 925.273 69.16 L 929.895 57.225 Z"
            />
          </svg>
        </figure>
      </div>
      <div class="container position-relative zindex-100">
        <!-- <div class="mb-0 text-center">
                    <h3 class="text-white mt-4">Fashionable trends</h3>
        </div>-->
        <div class="content">
          <div class="grid"></div>
        </div>

        <!-- <div class="row">
                    <div class="col-lg-6">
                        <div class="card shadow border-0 mb-4">
                            <div class="videoholder">
                                <video class="back-video" autoplay="" loop="" muted="">
                                    <source src="/videos/05_PC.mp4" type="video/mp4">
                                    <source src="/videos/05_PC.webm" type="video/webm">
                                </video>
                            </div>
                            <div class="card-body py-5 videocard">
                                <div class="d-flex align-items-start">
                                    <div class="icon icon-shape icon-green rounded-circle">
                                        <i class="fab fa-node-js"></i>
                                    </div>
                                    <div class="icon-text pl-4">
                                        <h5 class="font-weight-bold">Built by developers for developers</h5>
                                    </div>
                                </div>
                                <p class="my-5">You don't only need a theme, but also great tools in order to ease the process. And this is exactly what we offer you.</p>
                                <a href="#" class="btn btn-sm btn-success btn-circle btn-translate--hover">Learn more</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="card shadow border-0 mb-4">
                            <div class="videoholder">
                                <video class="back-video" autoplay="" loop="" muted="">
                                    <source src="/videos/04_PC.mp4" type="video/mp4">
                                    <source src="/videos/04_PC.webm" type="video/webm">
                                </video>
                            </div>
                            <div class="card-body py-5 videocard">
                                <div class="d-flex align-items-start">
                                    <div class="icon icon-shape icon-orange rounded-circle">
                                        <i class="fab fa-node-js"></i>
                                    </div>
                                    <div class="icon-text pl-4">
                                        <h5 class="font-weight-bold">Built by developers for developers</h5>
                                    </div>
                                </div>
                                <p class="my-5">You don't only need a theme, but also great tools in order to ease the process. And this is exactly what we offer you.</p>
                                <a href="#" class="btn btn-sm btn-warning btn-circle btn-translate--hover">Learn more</a>
                            </div>
                        </div>
                    </div>
        </div>-->
      </div>
    </section>
  </main>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Product from "@/components/products/Product";
import Sliders from "@/components/sliders/slider";
export default {
  components: {
    Product,
    Sliders
  },
  head() {
    return {
      script: [
        { src: "/libs/jqueryplugin/jquery.min.js", body: true },
        { src: "/libs/bootstrap/bootstrap.bundle.min.js", body: true },
        { src: "/libs/in-view/in-view.min.js", body: true },

        { src: "/libs/sticky-kit/sticky-kit.min.js", body: true },
        { src: "/libs/select2/select2.min.js", body: true },

        { src: "/libs/swiper/js/swiper.min.js", body: true },

        { src: "/libs/tweenmax/tweenmax.min.js", body: true },
        { src: "/libs/wavify/wavify.min.js", body: true },
        { src: "/js/theme.min.js", body: true }
      ]
    };
  },
  data() {
    return {
      slidescount: 3,
      slickOptions: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
      },
      slides: [
        {
          image: "language.jpg",
          animation: "fadeIn"
        },
        {
          image: "img-20.jpg",
          animation: "zoomIn"
        }
      ],
      startnow: null,
      currentSlide: null,
      showingSlide: null,
      slideanimation: null
    };
  },
  watch: {
    startnow: function() {
      var count = this.slides.length - 1;
      this.slideanimation = null;
      if (this.currentSlide < count) {
        this.currentSlide++;
      } else {
        this.currentSlide = 0;
      }
      this.showingSlide = this.slides[this.currentSlide].image;
      this.slideanimation = this.slides[this.currentSlide].animation;
      // console.log(this.slides[this.currentSlide]+' '+this.currentSlide)
    }
  },
  computed: {
    ...mapGetters({
      sliders: "sliders",
      latest: "latest",
      adverts: "adverts",
      salesbanner: "salesbanner"
    })
  },
  methods: {
    ...mapActions({
      footherstyle: "navstyle/changestyle"
    }),
    myTimer() {
      setInterval(() => {
        this.startnow = new Date().getTime() / 1000;
      }, 5000);
    },

    next() {
      this.$refs.slick.next();
    },

    prev() {
      this.$refs.slick.prev();
    },

    reInit() {
      // Helpful if you have to deal with v-for to update dynamic lists
      this.$nextTick(() => {
        this.$refs.slick.reSlick();
      });
    }
  },
  mounted() {
    this.footherstyle({
      classes: "footer-light bg-gradient-light",
      imagemode: false,
      navclasses: "navbar-dark bg-dark"
    });
    this.myTimer();
    this.showingSlide = this.slides[0].image;
    this.slideanimation = this.slides[0].animation;
  }
};
</script>
<style>
/* .card {
        background-color: rgba(255, 255, 255, 0.7);
    } */
.carousel-3d-container[data-v-c06c963c] {
  margin: 3px auto;
}
.ribbon {
  font-size: 0.75rem;
  font-weight: 600;
  position: absolute;
  z-index: 10;
  top: 1rem;
  display: flex;
  width: 2.5rem;
  height: 2.5rem;
  align-items: center;
  justify-content: center;
}

.ribbon-left {
  left: 1rem;
}

.ribbon-right {
  right: 1rem;
}
.ribbon-primary {
  color: #fff;
  background-color: #6813d7;
}

.ribbon-secondary {
  color: #212529;
  background-color: #fff;
}

.ribbon-success {
  color: #fff;
  background-color: #76e288;
}

.ribbon-info {
  color: #fff;
  background-color: #56c7fb;
}

.ribbon-warning {
  color: #fff;
  background-color: #fa3;
}

.ribbon-danger {
  color: #fff;
  background-color: #ff6b63;
}

.ribbon-light {
  color: #212529;
  background-color: #ebeef0;
}

.ribbon-dark {
  color: #fff;
  background-color: #0a3058;
}

.ribbon-white {
  color: #212529;
  background-color: #fff;
}

.ribbon-darker {
  color: #fff;
  background-color: #082341;
}
@media screen and (max-width: 990px) {
  .mobile-margin {
    margin-top: 65px;
  }
}
.slick-next {
  right: 25px;
}
.slick-prev {
  left: 25px;
  z-index: 1;
}
</style>
