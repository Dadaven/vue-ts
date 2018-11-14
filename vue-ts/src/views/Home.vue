<template>
  <el-header>
    <h1>稷下学宫</h1>
    <img src="../assets/00109f59b4b854a8012028a9289b7b.jpg" class="logo">
    <div style="margin-top: 20px">
      <el-button @click="show2 = !show2" size="small">学宫</el-button>   
      <el-badge :value="12" class="item">
  <el-button size="small">消息</el-button>
</el-badge>
    <div style="display: flex; margin-top: 20px; height: 100px;">
      <transition name="el-zoom-in-center">
        <div v-show="show2" class="transition-box">文学</div>
      </transition>
      <transition name="el-zoom-in-top">
        <div v-show="show2" class="transition-box">电影</div>
      </transition>
      <transition name="el-zoom-in-bottom">
        <div v-show="show2" class="transition-box">图片</div>
      </transition>
      <transition name="el-zoom-in-center">
        <div v-show="show2" class="transition-box">旅游</div>
      </transition>
      <transition name="el-zoom-in-top">
        <div v-show="show2" class="transition-box">艺术</div>
      </transition>
      <transition name="el-zoom-in-bottom">
        <div v-show="show2" class="transition-box">历史</div>
      </transition>
      <transition name="el-zoom-in-top">
        <div v-show="show2" class="transition-box">科技</div>
      </transition>
      <transition name="el-zoom-in-bottom">
        <div v-show="show2" class="transition-box">热点</div>
      </transition>
      <transition name="el-zoom-in-center">
        <div v-show="show2" class="transition-box">音乐</div>
      </transition>
    </div>
  </div>
  </el-header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    
  },
})
export default class Home extends Vue {
   show2:boolean=false;
   name(params:Int32Array):void{
   }
}
</script>

<style>
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: rgb(243, 210, 23);
    text-align: center;
    color: rgb(8, 8, 8);
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 30px;
  }
  .logo{
    width: 100px;
    height: 100px;
  }
  .item {
  margin-left: 40px;
}
</style>
