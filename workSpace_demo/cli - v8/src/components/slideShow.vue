<template>
  <div class="slide-show">
    <div class="slide-img">
      <a :href="slides[nowIndex].href">
        <img :src="slides[nowIndex].src" alt="">
      </a>
    </div>
    <h2>{{slides[nowIndex].title}}</h2>
    <ul class="slide-pages">
      <li @click="gotoprev()">&lt;</li>
      <li v-for="(item,index) in slides" @click="goto(index)">
        <a>{{index + 1}}</a>
      </li>
      <li @click="gotonext()">&gt;</li>
    </ul>
  </div>
</template>

<script>
export default {
  //子组件：使用父组件传递的值
  props:{//props含义：当前组件接受一些什么属性
    slides:{//接受的属性的类型、初始值（如果父组件传的数据类型与子组件声明的数据类型不一致，则会在浏览器显示错误）
      type:Array,
      default:[]
    }
  },
  data(){
    return {
      nowIndex:0
    }
  },
 methods:{
   goto(index){
     this.nowIndex=index;
   },
   gotoprev(){
     
   },
   gotonext(){

   }
 },
  mounted(){
    console.log(this.slides);
  }
}
</script>

<style scoped>
.slide-trans-enter-active {
  transition: all .5s;
}
.slide-trans-enter {
  transform: translateX(900px);
}
.slide-trans-old-leave-active {
  transition: all .5s;
  transform: translateX(-900px);
}
.slide-show {
  position: relative;
  margin: 15px 15px 15px 0;
  width: 900px;
  height: 500px;
  overflow: hidden;
}
.slide-show h2 {
  position: absolute;
  width: 100%;
  height: 100%;
  color: #fff;
  background: #000;
  opacity: .5;
  bottom: 0;
  height: 30px;
  text-align: left;
  padding-left: 15px;
}
.slide-img {
  width: 100%;
}
.slide-img img {
  width: 100%;
  position: absolute;
  top: 0;
}
.slide-pages {
  position: absolute;
  bottom: 10px;
  right: 15px;
}
.slide-pages li {
  display: inline-block;
  padding: 0 10px;
  cursor: pointer;
  color: #fff;
}
.slide-pages li .on {
  text-decoration: underline;
}
</style>
