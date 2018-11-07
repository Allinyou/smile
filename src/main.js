import Vue from 'vue';
import App from '@/App';
import VueFullpage from 'vue-fullpage';
import 'animate.css';
import 'vue-fullpage/vue-fullpage.css';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.use(VueFullpage);

var audio = new Audio('./assets/audio/1111.mp3');
audio.loop="loop";
audio.play();

Vue.config.productionTip = false;

const remResize = () => {
  const width = document.documentElement.clientWidth;
  document.documentElement.style.fontSize = `${(width / 750) * 100}px`;
};
remResize();
window.addEventListener('resize', remResize);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
