<template>
  <div id="app">
    <div class="fullpage-container">
      <div class="fullpage-wp" v-fullpage="opts" @afterChange="afterChange">
        <div class="page-1 page">
            <div class="filter"></div>
            <span v-animate="{value: 'bounceInDown'}">笑</span>
            <img class="img-1" src="./assets/fff.gif" alt="" v-animate="{value: 'swing'}">  
            <span v-animate="{value: 'bounceInUp'}">2018年10月18日</span>   
        </div>
        <div class="page-2 page">
          <div class="filter"></div>
          <img class="img-1" src="./assets/3.jpg" alt="" v-animate="{value: 'bounceInLeft'}">     
          <img class="img-2" src="./assets/1.jpg" alt="" v-animate="{value: 'bounceInRight'}">
          <img class="img-3" src="./assets/2.jpg" alt="" v-animate="{value: 'bounceInLeft'}">
        </div>
        <div class="page-3 page">
          <p class="part-3" v-animate="{value: 'bounceInLeft', delay: 0}">vue-fullpage</p>
          <p class="part-3" v-animate="{value: 'bounceInRight', delay: 600}">vue-fullpage</p>
          <p class="part-3" v-animate="{value: 'zoomInDown', delay: 1200}">vue-fullpage</p>
        </div>
        <div class="page-4 page">
            <div class="filter"></div>
            <img class="img-1" src="./assets/362458738353902347.jpg" alt="" v-animate="{value: 'rollIn'}"> 
        </div>
      </div>
    </div>
    <div class="number">{{nownumber + 1}}/4</div>
    <canvas id="canvas1" height="520" width="300"></canvas>
    <canvas id="canvas2" height="520" width="300"></canvas>
  </div>
</template>
<script>
export default {
  data() {
    return {
      color1: 'red',
      color2: 'green',
      nownumber: 0,
      opts: {
        start: 0,
        dir: 'v',
        duration: 500,
        preventWechat: true,
        beforeChange: (prev, next) => {},
        afterChange: (prev, next) => {
          this.nownumber = next;
          console.log(prev, next);
        },
      },
    };
  },
  methods: {
    drawFreq() {
      const canvas1 = document.getElementById('canvas1');
      const cxt1 = canvas1.getContext('2d');
      const canvas2 = document.getElementById('canvas2');
      const cxt2 = canvas2.getContext('2d');
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      const context = new AudioContext();
      // 创建节点
      const source = context.createMediaElementSource(this.audio);
      const analyser = context.createAnalyser();
      // 连接：source → analyser → destination
      source.connect(analyser);
      analyser.connect(context.destination);
      const output = new Uint8Array(4);
      const that = this;
      (function drawFreqs() {
        analyser.getByteFrequencyData(output);
        cxt1.clearRect(0, 0, canvas1.width, canvas1.height);
        cxt2.clearRect(0, 0, canvas2.width, canvas2.height);
        const distance = 150;
        for (let i = 0; i < 4; i++) {
          const value1 = output[i] / 1.5; // <===获取数据 
          const value2 = output[3 - i] / 1.5;
          // 左边频谱
          cxt1.beginPath();
          cxt1.lineWidth = 50; 
          const y = i * distance + 30;
          cxt1.moveTo(0, y);
          cxt1.lineTo(value1, y);
          cxt1.closePath();
          cxt1.strokeStyle = that.color1;
          cxt1.stroke();

          // 右边频谱
          cxt2.beginPath();
          cxt2.lineWidth = 50; 
          cxt2.moveTo(canvas2.width, y);
          cxt2.lineTo(canvas2.width - value2, y);
          cxt2.closePath();
          cxt2.strokeStyle = that.color2;
          cxt2.stroke();
        }; 
        requestAnimationFrame(drawFreqs);
      })();
    },
    afterChange(prev,next) {
      console.log(next);
    }
  },
  mounted() {
    const colors = ['red', 'orange', 'cyan']; // , 'purple' 'blue', 'green', 
    const randomIndex1 = Math.floor(Math.random() * 3);
    const randomIndex2 = Math.floor(Math.random() * 3);
    this.color1 = colors[randomIndex1];
    this.color2 = colors[randomIndex2];
    this.drawFreq();
  },
};
</script>

<style lang="scss">
body,form,input,textarea,select,option,ul,ol,li,dt,dd,p,pre,h1,h2,h3,h4,h5,h6 {
  margin: 0;
  padding: 0;
  list-style: none;
}
img {
  border: none;
}
a {
  text-decoration: none;
}
body{
  font-size:0.28rem;
  background-color: #fff;
}
@import './style/index.scss';
#app {
  position:fixed;
  top:0;
  left:0;
  right: 0;
  bottom:0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #222;
} 
#canvas1,#canvas2{
  position: fixed;
  width: 30px;
  height: 52px;
  z-index: 999;
}
#canvas1{
  left:0;
  bottom:20px;
}
#canvas2{
  right:0;
  top:20px;
}
.number{
  position: fixed;
  height: 24px;;
  right:0;
  bottom:20px;
  color:#fff;
  line-height: 24px;
  background-color: rgba(255, 255, 255,0.1);
  padding:0 15px;
  border-radius: 12px 0 0 12px;
}
.page{
   position: relative;
  .filter{
    position: absolute;
    left:0;
    top:0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: 150%;
    background-position: center 20%;
    filter: blur(20px);
    opacity: 0.5;
    z-index: -1;
  } 
  .page-boxs{
    width: 100%;
    height: 100%;
  }
}

// 第一页---------------------------------------------------------------------------------------------------------------------------
.page-1{
  display: flex!important;
  @extend .column-center;
  span{
     color:#fff;
     font-size:100px;
  }
  span:last-child{
    font-size:0.32rem;
  }
  .filter{
    background-image: url(./assets/fff.gif);
    background-repeat: repeat;
  }
  img{
    margin:50px auto 30px;
    display: block;
    width: 100%;
    opacity: 0;
  }
}

// 第二页---------------------------------------------------------------------------------------------------------------------------
.page-2{
  display: flex!important;
  @extend .column-center;
  img{
    display: block;
    width: 80%;
  }
  img:nth-of-type(2){
    margin:20px 0;
  }
  color:$main-color;
  .filter{
    background-image: url(https://6d61-magic-d13079-1255581239.tcb.qcloud.la/330.jpg?sign=832950a9b929393ce05804a113a70b0f&t=1542688956);
  }
}

// 第四页---------------------------------------------------------------------------------------------------------------------------
.page-4{
  display: flex!important;
  @extend .column-center;
  color:#fff;
  .filter{
    background-image: url(./assets/362458738353902347.jpg);
  }
  img{
    display: block;
    width: 80%;
    opacity: 0;
  }
}

</style>
