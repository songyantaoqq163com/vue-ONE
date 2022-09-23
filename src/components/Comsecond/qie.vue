<template>
  <div>
    <el-row :span="22" :offset="1">
      <!-- 图1 -->
      <el-col :span="12">
        <div class="red">
          <el-carousel
            :interval="2000"
            arrow="always"
            :autoplay="false"
            indicator-position="none"
            :height="bannerH + 'px'"
          >
            <el-carousel-item
              v-for="(bitem, bindex) in superurl"
              :key="bindex"
              style=" display:grid;"
            >
              <div v-for="(item, index) in bitem.img" :key="index">
                <p>{{ item.url }}</p>
                <img
                  style="width: 200px; height: auto;"
                  class="bannertt"
                  :src="item.img"
                />
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-col>
      <!-- 图2 -->
      <el-col :span="12">
        <div class="red">
          <template>
            <el-carousel
              direction="vertical"
              :autoplay="false"
              arrow="always"
              trigger="click"
              :height="bannerH + 'px'"
            >
              <!-- <el-carousel-item v-for="item in 3" :key="item">
                <h3 class="medium">{{ item }}</h3>
              </el-carousel-item> -->
              <el-carousel-item>
                <img
                  src="https://img.mukewang.com/szimg/5ac2dfe100014a9005400300-360-202.jpg"
                />
              </el-carousel-item>
              <el-carousel-item
                ><img
                  src="https://img.mukewang.com/szimg/5c62a4dc0812e84106000338-360-202.jpg"
              /></el-carousel-item>
              <el-carousel-item
                ><img
                  src="https://img.mukewang.com/szimg/5c7c82630820acf806000338-360-202.jpg"
              /></el-carousel-item>
            </el-carousel>
          </template>
        </div>
      </el-col>
      <!-- 图3 -->
      <el-col :span="24">
        <div class="content logins-center">
          <div class="arrow left" @click="handleLeftClick">
            <img src="../../img/jt (1).png" />
          </div>
          <div class="box">
            <ul>
              <!--                            @click="itemClick(index)"-->
              <li
                v-for="(item, index) in lists"
                :key="index"
                :class="setClass(index)"
              >
                <img
                  :src="item.src"
                  alt=""
                  style="; width: 350px; height: 200px " class="box_img" />
              </li>
            </ul>
          </div>
          <div class="arrow right" @click="handleRightClick">
            <img src="../../img/jt (2).png" />
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "pageFullScreen",
  components: {},
  data() {
    return {
      bannerH: this.setBannerH1,
      superurl: [
        {
          img: [
            {
              url: "1",
              img:
                "https://img.mukewang.com/szimg/5ac2dfe100014a9005400300-360-202.jpg"
            }
          ]
        },
        {
          img: [
            {
              url: "2",
              img:
                "https://img.mukewang.com/szimg/5c62a4dc0812e84106000338-360-202.jpg"
            }
          ]
        },
        {
          img: [
            {
              url: "3",
              img:
                "https://img.mukewang.com/szimg/5c7c82630820acf806000338-360-202.jpg"
            }
          ]
        },
        {
          img: [
            {
              url: "4",
              img:
                "https://img.mukewang.com/szimg/5c7e6835087ef3d806000338-360-202.jpg"
            }
          ]
        }
      ],
      calleft: 0,
      left: 0,
      currentIndex: 0,
      lists: [
        {
          src: require("../../img/s (1).png"),
          url: require("../../img/tot1.png")
          // url:require('../img/img/m0.png')
        },
        {
          src: require("../../img/s (2).png"),
          url: require("../../img/tot1.png")
        },
        {
          src: require("../../img/s (3).png"),
          url: require("../../img/tot1.png")
        },
        {
          src: require("../../img/s (4).png"),
          url: require("../../img/tot1.png")
        }
      ]
    };
  },
  mounted() {
    // this.addAnnouncement();
    // setInterval(this.showMarquee, 2000);
  },
  computed: {
    moveLeft() {
      return -(this.lists.length * 200 - 1100);
    }
  },
  methods: {
    setBannerH() {
      this.bannerH = document.getElementsByClassName("bannertt")[0].height;
    },
    setBannerH1() {
      var bwidth = document.getElementsByClassName("bannertt")[0].width;
      console.log(bwidth);
      var bheight = document.getElementsByClassName("bannertt")[0].height;
      var ssss = document.body.clientWidth;
      this.bannerH = ssss * (bheight / bwidth);
    },
    setClass(i) {
      let next =
        this.currentIndex === this.lists.length - 1 ? 0 : this.currentIndex + 1;
      let prev =
        this.currentIndex === 0 ? this.lists.length - 1 : this.currentIndex - 1;
      switch (i) {
        case this.currentIndex:
          return "active";
        case next:
          return "next";
        case prev:
          return "prev";
        default:
          return "";
      }
    },
    handleLeftClick() {
      this.currentIndex =
        this.currentIndex === 0 ? this.lists.length - 1 : this.currentIndex - 1;
    },
    handleRightClick() {
      this.currentIndex = ++this.currentIndex % this.lists.length;
    }
  }
  // mounted(){
  //     this.setBannerH1()//初始值根据图片的缩放比率和屏幕大小来定，不然走马灯开始时候就会默认一个值
  // 		window.addEventListener('resize',()=>{
  // 			this.setBannerH()
  // 		},false)
  // }
};
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.el-carousel__item.el-carousel__item--card.is-in-stage {
  text-align: center;
}
/*修改高度*/
/* /deep/.el-carousel__container {
  height: 150px;
}
/deep/.el-carousel__container {
  position: relative;
  width: 260px;
} */
.el-carousel--horizontal {
  width: 400px;
}

/* 图3 */
.content {
  width: 1100px;
  margin: 0 auto;
  height: 200px;
  /*display: flex;*/
  display: -webkit-box;
  justify-content: space-between;
}

.arrow {
  width: 50px;
  flex-shrink: 0;
  color: #fff;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.arrow img {
  width: 50px;
  height: 50px;
}

.box {
  height: 100%;
  width: 1000px;
}

ul {
  position: relative;
  top: 0;
  /* left: -50px; */
  padding: 0;
  margin: 0;
  display: flex;
  transition: all 0.3s;
  transform-style: preserve-3d;
  perspective: 1800px;
  position: relative;
  height: 100%;
  width: 100%;
}

li {
  position: absolute;
  left: 0;
  top: 0;
  list-style: none;
  transition: 500ms all ease-in-out;
  transform: translate3d(100%, 0, -150px) translateZ(-150px);
  z-index: 15;
}

li.active {
  transform: translate3d(100%, 0, -150px) translateZ(-100px);
  z-index: 16;
}

li.prev {
  transform: translate3d(15%, 0, -100px) rotateY(50deg);
  z-index: 14;
}

li.next {
  transform: translate3d(185%, 0, -100px) rotateY(-50deg);
  z-index: 13;
}
/* 图片颠倒 */
.box_img{
        text-align: center;
        margin: 0 auto;
        -webkit-box-reflect: below 10px -webkit-linear-gradient(transparent,transparent 50%,rgba(255,255,255,0.6));
    }
</style>