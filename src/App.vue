<template>
  <div id="app">
    <div class="fullpage-container">
      <div class="fullpage-wp" v-fullpage="opts">
        <div class="page-1 page">
            <div class="filter"></div>
            <span v-animate="{value: 'bounceInDown'}">笑</span>
            <img class="img-1" src="./assets/20180406153029_636f1a3665c9e1c894d8fe343fe9a8e9_21.gif" alt="" v-animate="{value: 'swing'}">   
            <img class="img-1" src="./assets/20180406153029_636f1a3665c9e1c894d8fe343fe9a8e9_44.gif" alt="" v-animate="{value: 'bounceIn'}">  
            <span v-animate="{value: 'bounceInUp'}">农历2018年10月18日</span> 
        </div>
        <div class="page-2 page">
          <div class="filter"></div>
          <img class="img-1" src="./assets/3.jpg" alt="" v-animate="{value: 'bounceInLeft'}">     
          <img class="img-2" src="./assets/1.jpg" alt="" v-animate="{value: 'bounceInRight'}">
          <img class="img-3" src="./assets/2.jpg" alt="" v-animate="{value: 'bounceInLeft'}">
        </div>
        <div class="page-3 page">
            <div class="filter"></div>
            <img class="img-1" src="./assets/486588782386983111.jpg" alt="" v-animate="{value: 'zoomIn'}"> 
        </div>
        <div class="page-4 page">
            <div class="filter"></div>
            <img class="img-1" src="./assets/362458738353902347.jpg" alt="" v-animate="{value: 'rollIn'}"> 
        </div>
        <div class="page-5 page">
            <div class="filter"></div>
            <img class="img-1" src="./assets/375726187900958593.jpg" alt="" v-animate="{value: 'lightSpeedIn'}"> 
        </div>
        <div class="page-6 page">
            <div class="filter"></div>
            <img class="img-1" src="./assets/1a1fde891ab21dbc1985c60c3df90e1.jpg" alt="" v-animate="{value: 'flip'}"> 
        </div>
        <div class="page-7 page">
            <div class="filter"></div>
            <img class="img-1" src="./assets/b3648329a6b85c493414cc0a855b23a.jpg" alt="" v-animate="{value: 'rotateInDownRight'}"> 
        </div>
        <div class="page-8 page">
            <div class="filter"></div>
            <img class="img-1" src="./assets/8.jpg" alt="" v-animate="{value: 'fadeInUp'}"> 
        </div>
        <div class="page-9 page">
            <div class="filter"></div>
            <img class="img-1" src="./assets/9.jpg" alt="" v-animate="{value: 'flipInX'}"> 
        </div>
      </div>
    </div>
    <div class="number fadeInRight animated">{{nownumber + 1}}/9</div>
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

// 第1页---------------------------------------------------------------------------------------------------------------------------
.page-1{
  display: flex!important;
  @extend .column-align-center;
  span{
     color:#ff00ff;
     font-size:100px;
     margin-top:20px;
  }
  span:last-of-type{
    font-size:0.32rem;
    margin-top:0;
  }
  .filter{
    background-image: url(./assets/20180406153029_636f1a3665c9e1c894d8fe343fe9a8e9_21.gif);
    background-repeat: repeat;
  }
  img{
    margin:20px auto 10px;
    display: block;
    width: 100%;
    opacity: 0;
  }
  img:last-of-type{
    margin-top:10px;
    width: 80%;
  }
}

// 第2页---------------------------------------------------------------------------------------------------------------------------
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

// 第3页---------------------------------------------------------------------------------------------------------------------------
.page-3{
  display: flex!important;
  @extend .column-center;
  color:#fff;
  .filter{
    background-image: url(./assets/486588782386983111.jpg);
  }
  img{
    display: block;
    width: 80%;
    opacity: 0;
  }
}

// 第4页---------------------------------------------------------------------------------------------------------------------------
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

// 第5页---------------------------------------------------------------------------------------------------------------------------
.page-5{
  display: flex!important;
  @extend .column-center;
  color:#fff;
  .filter{
    background-image: url(./assets/375726187900958593.jpg);
  }
  img{
    display: block;
    width: 80%;
    opacity: 0;
  }
}

// 第6页---------------------------------------------------------------------------------------------------------------------------
.page-6{
  display: flex!important;
  @extend .column-center;
  color:#fff;
  .filter{
    background-image: url(./assets/1a1fde891ab21dbc1985c60c3df90e1.jpg);
  }
  img{
    display: block;
    width: 80%;
    opacity: 0;
  }
}

// 第7页---------------------------------------------------------------------------------------------------------------------------
.page-7{
  display: flex!important;
  @extend .column-center;
  color:#fff;
  .filter{
    background-image: url(./assets/b3648329a6b85c493414cc0a855b23a.jpg);
  }
  img{
    display: block;
    width: 80%;
    opacity: 0;
  }
}
// 第7页---------------------------------------------------------------------------------------------------------------------------
.page-8{
  display: flex!important;
  @extend .column-center;
  color:#fff;
  .filter{
    background-image: url(./assets/8.jpg);
  }
  img{
    display: block;
    width: 80%;
    opacity: 0;
  }
}
// 第7页---------------------------------------------------------------------------------------------------------------------------
.page-9{
  display: flex!important;
  @extend .column-center;
  color:#fff;
  .filter{
    background-image: url(./assets/9.jpg);
  }
  img{
    display: block;
    width: 80%;
    opacity: 0;
  }
}
</style>
