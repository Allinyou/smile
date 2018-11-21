import Vue from 'vue';
import App from '@/App';
import 'animate.css';
import 'vue-fullpage/vue-fullpage.css';
import VueFullpage from 'vue-fullpage';
import Friendships from './assets/audio/Friendships.mp3';
import './registerServiceWorker';

Vue.use(VueFullpage);
Vue.config.productionTip = false;

const Rem = () => {
  const width = document.documentElement.clientWidth;
  document.documentElement.style.fontSize = `${(width / 750) * 100}px`;
};
Rem();
window.addEventListener('resize', Rem);


const audio = new Audio();
audio.src = Friendships;   // songs[index]
audio.autoplay = true;
audio.loop = 'loop';
Vue.prototype.audio = audio;

new Vue({
  render: h => h(App),
}).$mount('#app');

