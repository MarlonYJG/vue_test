<template>
  <div class="slide-show">
    <div class="slide-img">
      <a :href="slides[nowIndex].href">
        <img :src="slides[nowIndex].src" alt="">
      </a>
    </div>
    <h2>{{slides[nowIndex].title}}</h2>
    <ul class="slide-pages">
      <li @click="goto(prevIndex)">&lt;</li>
      <li v-for="(item,index) in slides" @click="goto(index)">
        <a :class="{'on':index === nowIndex}">{{index + 1}}</a>
      </li>
      <li @click="goto(nextIndex)">&gt;</li>
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
    },
    inv:{
      type:Number,
      default:1000
    }
  },
  data(){
    return {
      nowIndex:0
    }
  },
  computed:{
    prevIndex(){
      if (this.nowIndex === 0) {
       return  this.slides.length-1
      }else{
        return this.nowIndex-1
      }
    },
    nextIndex(){
      if (this.nowIndex === this.slides.length-1) {
        return 0
      } else {
        return this.nowIndex + 1
      }
    }
  },
 methods:{
   goto(index){
     this.nowIndex=index;
   },
   runInv(){
     this.invId=setInterval(()=>{
       console.log(1123123213);
     },this.inv)
   }
 },
  mounted(){//组件渲染完毕以后的执行函数
    console.log(this.slides);
    this.runInv();
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
