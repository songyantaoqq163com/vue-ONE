<template>
  <div class="pageFullScreen">
    <router-link to="/hello">返回</router-link>

    <div>
      <el-row :gutter="24" style="height: 50vh">
        <el-col :span="22" :offset="1">
          <div class="contenta" style="position: relative">
            <span class="arrow arrowleft" @click="handleLeftClick">
              <img src="../../../src/assets/img0/jian(2).png" alt="" />
            </span>

            <div class="swiper">
              <div
                id="piccontent"
                v-for="(item, index) in lists"
                :key="index"
                :class="pic(index)"
              >
                <img
                  @click="jump(item)"
                  :src="item.url"
                  alt=""
                  class="box_img"
                />
              </div>
            </div>

            <span class="arrow arrowright" @click="handleRightClick">
              <img
                style="z-index: 2"
                src="../../../src/assets/img0/jian(1).png"
              />
            </span>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  name: "info",
  components: {},
  data() {
    return {
      routeY: 0,
      lists: [
        {
          id: "1",
          text: "在线监测",
          url: require("../../assets/img0/bot(1).png"),
        },
        {
          id: "2",
          text: "产线大屏",
          url: require("../../assets/img0/bot(2).png"),
        },
        {
          id: "3",
          text: "产线中控",
          url: require("../../assets/img0/bot(3).png"),
        },
        {
          id: "4",
          text: "产量监测",
          url: require("../../assets/img0/bot(4).png"),
        },
        {
          id: "5",
          text: "标签打印",
          url: require("../../assets/img0/bot(5).png"),
        },
        {
          id: "6",
          text: "标签2",
          url: require("../../assets/img0/bot(2).png"),
        },
      ],
    };
  },
  created() {
    this.gitList();
  },
  methods: {
    pic(index) {
      switch (index) {
        case 0:
          return "pic1";
        case 1:
          return "pic2";
        case 2:
          return "pic3";
        case 3:
          return "pic4";
        case 4:
          return "pic5";
        default:
          return "pic6";
      }
    },
    handleLeftClick() {
      this.routeY = this.routeY - 72;
      let swiper = document.getElementsByClassName("swiper")[0];
      swiper.style.transform = `rotateY(${this.routeY}deg)`;
      swiper.style.transition = `400ms all ease-in-out`;
    },
    handleRightClick() {
      this.routeY = this.routeY + 72;
      let swiper = document.getElementsByClassName("swiper")[0];
      swiper.style.transform = `rotateY(${this.routeY}deg)`;
      swiper.style.transition = `400ms all ease-in-out`;
    },
    gitList() {
      //1.获取元素
      let imgList = document.querySelectorAll(".img"); //获取img数组
      let deg = 360 / imgList.length; //3.每个需要旋转的度数
      // 定义一个开始的度数
      let roX = -10;
      let roY = 0;
      let x,
        y,
        x_,
        y_,
        xN,
        yN,
        time = null;
      //2.遍历所有的img标签
      for (let i = 0; i < imgList.length; i++) {
        imgList[i].style.transform =
          "rotateY(" + i * deg + "deg) translateZ(350px)";
        imgList[i].style.transition =
          " all 1s " + (imgList.length - i - 1) * 0.1 + "s";
        //transition:设置过渡
        imgList[i].ondragstart = function () {
          return false;
        };
      }
    },
    //鼠标进入
    mouseenter() {
      clearInterval(this.time);
      this.run();
    },
    //鼠标离开
    mouseleave() {
      clearInterval(this.time);
    },
    //点击停止（开始）
    click() {
      this.kg = !this.kg;
      if (this.kg) {
        this.mouseenter();
      } else {
        this.mouseleave();
      }
    },
    // 点击小图片
    imgClick(index) {
      this.isShow = true;
      this.bigindex = index;
      console.log(index);
    },
    // 点击大图片
    bigImgClick() {
      this.isShow = false;
    },
    //封装计时器
    run() {
      let that = this;
      that.oWrap = that.$refs.box;
      that.time = setInterval(function () {
        that.roY -= 5 * 0.2;
        that.oWrap.style.transform =
          "perspective(800px) rotateX(-10deg) rotateY(" + that.roY + "deg)";
      }, 100);
    },
  },
};
</script>

<style scoped>
.arrowleft {
  position: absolute;
  left: 200px;
  top: 85px;
  z-index: 10000;
}
.arrowright {
  position: absolute;
  right: 200px;
  top: 85px;
  z-index: 10000;
}
.contenta {
  width: 1000px;
  height: 200px;
  perspective: 800px;
  border: 1px #000000 solid;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
  transform: rotateX(-5deg);
}
.swiper {
  width: 150px;
  height: 100px;
  position: relative;
  transform-style: preserve-3d;
  transform: rotateY(0deg);
  transition: oll 0.02s linear;
}
#piccontent {
  width: 150px;
  height: 100px;
  position: absolute;
}
.swiper img {
  width: 150px;
  height: 100px;
}
.pic1 {
  transform: rotateY(0deg) translateZ(200px);
}
.pic2 {
  transform: rotateY(60deg) translateZ(200px);
}
.pic3 {
  transform: rotateY(120deg) translateZ(200px);
}
.pic4 {
  transform: rotateY(180deg) translateZ(200px);
}
.pic5 {
  transform: rotateY(240deg) translateZ(200px);
}
.pic6 {
  transform: rotateY(300deg) translateZ(200px);
}
</style>