import { createApp } from 'vue';
import App from './App.vue';
import './assets/css/index.css';
import { createPinia } from 'pinia';
import router from './router';
// import vueFullpage from 'vue-fullpage.js';
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(Carousel);
app.use(Slide);
app.use(router).mount('#app');
