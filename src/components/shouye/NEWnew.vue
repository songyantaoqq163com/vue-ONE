<template>
  <div class="NEWnew">
    <p>/NEWnew测试页面</p>
    <div class="NUM">
      <div class="A">
        <span>特殊背景</span>
        <vue-particles
          color="#fff"
          class="login-bg"
          :particleOpacity="0.7"
          :particlesNumber="60"
          shapeType="star"
          :particleSize="4"
          linesColor="#fff"
          :linesWidth="1"
          :lineLinked="true"
          :lineOpacity="0.4"
          :linesDistance="150"
          :moveSpeed="2"
          :hoverEffect="true"
          hoverMode="grab"
          :clickEffect="true"
          clickMode="push"
        >
        </vue-particles>
      </div>
      <div class="B">
        <span>签名</span>
        <canvas class="canvasId" />
        <button @click="save">保存</button>
        <button @click="clear">清除</button>
      </div>
      <div class="C">
        <img style="width:150px; border:1px solid red;" :src="url" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
import SignaturePad from "signature_pad";
export default {
  name: "NEWnew",
  components: {},
  data() {
    return {
      url: "",
      SignaturePad: null,
      config: {
        penColor: "#000000", //笔刷颜色
        minWidth: 3, //最小宽度
      },
    };
  },
  mounted() {
    this.getCanvas();
  },
  methods: {
    getCanvas() {
      var canvas = document.querySelector(".canvasId");
      //console.log(canvas)
      this.signaturePad = new SignaturePad(canvas, this.config);
      canvas.height = 240;
      canvas.width = 400;
    },
    //保存
    save() {
      //默认保存为png格式
      console.log(this.signaturePad.toDataURL());
      this.url = this.signaturePad.toDataURL();
      // console.log(this.signaturePad.toDataURL('image/jpeg'))
      // console.log(this.signaturePad.toDataURL('image/svg+xml'))
      // console.log(this.signaturePad.isEmpty())  //判断画布有没有内容,布尔型
    },
    //清除
    clear() {
      //清除画布内容
      this.signaturePad.clear();
      this.url = "";
    },
  },
};
</script>

<style scoped>
ul > li {
  list-style: none;
}
.login-bg {
  width: 350px;
  height: 200px;
  background: #3e3e3e;
  color: red;
}
.canvasId {
  background: pink;
  cursor: default;
  border: 1px solid red;
  margin: auto;
}

.NUM {
  display: flex;
  justify-content: space-between;
}
</style>