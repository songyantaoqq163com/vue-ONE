/* eslint-disable no-dupe-keys */
/* eslint-disable vue/no-dupe-keys */
<template>
  <div class="pageFullScreen">
    <el-row :gutter="20">
      <el-col :span="20">
        <router-link to="/hello">返回</router-link>
        <div>
          <span>图片</span>
          <el-divider direction="vertical"></el-divider>
          <span>布局</span>
          <el-divider direction="vertical"></el-divider>
          <span>拖拉</span>
        </div>
      </el-col>
    </el-row>
    <el-divider content-position="left">单个图片预览&&点击事件</el-divider>
    <el-row :gutter="20">
      <el-col :span="10" :offset="1">
        <div class="demo-image__preview">
          <el-image
            style="width: 100px; height: 100px"
            :src="url"
            :preview-src-list="srcList"
          ></el-image>
        </div>
        <div>
          <img src="../assets/logo1.png" alt="没有图片" title="显示此图片" />
        </div>
      </el-col>
      <el-col :span="10" :offset="1">
        <p>点击图片触发图片信息</p>
        <ul style="display:inline-flex;">
          <li v-for="(item, index) in listimg" :key="index" style="margin:10px">
            <img
              @click="jump(item.id)"
              :src="item.src"
              alt=""
              style="; width: 100px;"
            />
          </li>
        </ul>
      </el-col>
    </el-row>
    <el-divider>
      <i class="el-icon-mobile-phone">布局 $一$ 拖拽变换位置的组件</i>
    </el-divider>
    <el-row :gutter="20">
      <el-col :span="10" :offset="1">
        <div class="layout clearfix">
          <div class="layli">1</div>
          <div class="layli">2</div>
          <div class="layli">3</div>
          <div class="layli">4</div>
          <div class="layli">5</div>
          <div class="layli">6</div>
          <div class="layli">7</div>
        </div>
      </el-col>
      <el-col :span="10" :offset="1" class="red">
        <draggable @start="start" @end="end">
          <p v-for="d in lists" :key="d.id">{{ d.name }}</p>
        </draggable>
      </el-col>
    </el-row>
    <el-divider content-position="right">图片显示的功能</el-divider>
    <el-row :gutter="20" class="lineheight">
      <el-col :span="10" :offset="1">
        <p>hover图片放大</p>
        <div class="imgred red" style="width:150px;height:150px;">
          <img src="../assets/logo1.png" alt="" />
        </div>
      </el-col>
      <el-col :span="10" :offset="1">
        <!-- <p>hover图片切换</p>
        <div
          class="red s1"
          style="width:150px;height:150px"
          @mouseenter="showActive(1)"
          @mouseleave="showActive(0)"
        >
          <img src="../assets/s1.png" alt="图1" />
          <img v-show="active === 1" src="../assets/s2.png" alt="图2" />
        </div> -->
      </el-col>
    </el-row>
    <el-divider content-position="left">表格内嵌套图片预览</el-divider>
    <el-row :gutter="20">
      <el-col :span="10" :offset="1">
        <el-table border :data="datalist">
          <el-table-column
            type="index"
            label="序号"
            width="100"
          ></el-table-column>
          <el-table-column
            prop="number"
            label="小图片预览"
            width="150"
            align="center"
          >
            <template width="90" slot-scope="scope">
              <el-popover placement="top-start" trigger="click">
                <a target="_blank" title="查看最大化图片">
                  <img
                    :src="scope.row.number"
                    style="width: 300px;height: 300px"
                /></a>
                <img
                  slot="reference"
                  :src="scope.row.number"
                  style="width: 50px;height: 50px; cursor:pointer"
                />
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column prop="url" label="全屏图片预览" width="200">
            <template width="100" slot-scope="scope">
              <el-image
                style="width:100px; height:100px"
                :src="scope.row.url"
                :preview-src-list="scope.row.list"
              ></el-image>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
      <el-col :span="10" :offset="1">
        <ul style="border:1px solid red;display:inline-grid; ">
          <li
            class="imgone"
            v-for="(item, index) in imglist"
            :key="index"
            @click="jumpa(item.id)"
          >
            <img :src="item.src" :alt="item.name" />
            <img
              class="imgtwo"
              v-show="activeimg == item.id"
              :src="item.srcimg"
              :alt="item.name"
            />
          </li>
        </ul>
      </el-col>
    </el-row>
    <!-- <el-col :span="10" :offset="1">
        <test-toast>
          <div style="color:red;">拖拽div</div>
        </test-toast>
      </el-col> -->
  </div>
</template>
<script>
// import XHandle from "./Xhandle";
import draggable from 'vuedraggable' // 拖拽变换位置的组件
export default {
  name: 'pageFullScreen',
  components: {
    draggable
    // XHandle
  },
  data () {
    return {
      active: 0,
      activeimg: 1,
      imglist: [
        {
          id: 1,
          src: require('../assets/表格.png'),
          srcimg: require('../assets/表格1.png'),
          name: '表格'
        },
        {
          id: 2,
          src: require('../assets/数据折线图.png'),
          srcimg: require('../assets/数据折线图1.png'),
          name: '折线图'
        },
        {
          id: 3,
          src: require('../assets/仪表盘.png'),
          srcimg: require('../assets/仪表盘1.png'),
          name: '仪表盘'
        }
      ],
      width: 200,
      datalist: [
        {
          number: require('../assets/logo1.png'),
          url: require('../assets/logo2.png')
        },
        {
          number: require('../assets/s1.png'),
          url: require('../assets/s2.png')
        },
        {
          number: require('../assets/s3.png'),
          url: require('../assets/tot1.png')
        }
      ],
      lists: [
        { name: '拖拽', id: 1 },
        { name: '变换', id: 2 },
        { name: '当前', id: 3 },
        { name: '位置', id: 4 }
      ],
      listimg: [
        {
          id: '1',
          src: require('../assets/s1.png')
        },
        {
          id: '2',
          src: require('../assets/s2.png')
        },
        {
          id: '3',
          src: require('../assets/s3.png')
        }
      ],
      list: [],
      currentTime: 0,
      startTime: 0,
      endTime: 0,
      url:
        'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      srcList: [
        'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
      ]
    }
  },
  created () {
    this.listimgurl()
  },
  methods: {
    showActive (index) {
      this.active = index
    },
    listimgurl () {
      this.list = []
      // 获取每张图片的地址
      for (var i = 0; i < this.datalist.length; i++) {
        this.list.push(this.datalist[i].url)
      }
      // 根据图片顺序（index）更改每张图片绑定的list的图片顺序
      for (var i = 0; i < this.datalist.length; i++) {
        var container = this.list
        var frontArr = container.slice(0, i)
        var behindArr = container.slice(i, this.datalist.length)
        var list = behindArr.concat(frontArr)
        this.datalist[i].list = list
      }
    },
    // 图片点击事件
    widthChange (movement) {
      console.log(movement, '~~~')
      this.width -= movement
      if (this.width < 200) {
        this.width = 200
      }
      if (this.width > 1000) {
        this.width = 1000
      }
    },
    jump (id) {
      console.log('点击图片触发', id)
      this.$router.push({ path: '/routers/plain?=' + id })
    },
    start (e) {
      console.log(e)
    },
    end (e) {
      console.log(e)
    },
    countDownS_cb: function (x) {
      console.log('开始')
    },
    countDownE_cb: function (x) {
      console.log('结束')
    },
    // 多个图片hover
    jumpa (id) {
        this.activeimg = id
    },
    // eslint-disable-next-line no-dupe-keys
    // eslint-disable-next-line vue/no-dupe-keys
  }
}
</script>

<style scoped>
.layout {
  /* width: 600px; */
  height: 300px;
  border: 1px solid rebeccapurple;
  overflow-y: scroll;
}
.layli {
  width: 100px;
  height: 100px;
  margin: 10px;
  line-height: 100px;
  border: 1px solid red;
  display: inline-block;
  float: left;
}

.clearfix:after {
  content: "";
  display: "block";
  clear: "both";
  visibility: hidden;
}
.clearfix {
  *zoom: 1;
}
.lineheight {
  height: 300px;
}
.myxhandle {
  width: 200px;
  height: 200px;
  border: 1px solid red;
}
/* hover图片放大 */
.imgred {
  transition: all 0.5s;
  overflow: hidden;
}
.imgred img {
  width: 150px;
  height: 150px;
}
.imgred img:hover {
  transform: scale(1.5);
}
/* hover图片换图片 */
.s1 {
  position: relative;
  display: inline-block;
}
.s1 img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 150px;
  height: 150px;
}
/* 多个hover图片 */
.imgone {
  position: relative;
}
.imgtwo {
  position: absolute;
  left: 0;
  top: 0;
}
</style>
