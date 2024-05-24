import { createApp } from 'vue';
import App from './App.vue';
import './assets/css/index.css';
import { createPinia } from 'pinia';
import router from './router';
import { useKakao } from 'vue3-kakao-maps/@utils';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import vueFullpage from 'vue-fullpage.js';
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(Carousel);
app.use(Slide);
useKakao('879dd00f047cbfa7e9da9f5fe3ff49a8');
app.use(router).mount('#app');

AOS.init();
