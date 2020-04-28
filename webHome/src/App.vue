<template>
  <div id="app">
    <div :class="bgClass">
      <img src="./assets/img/bg.jpeg" alt="">
    </div>
    <transition  name="router-fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  created() {
    this.$route.name==='home'? this.showBGBlur=true:this.showBGBlur=false
  },
  watch:{
    $route(to,from){
      to.name==='home'? this.showBGBlur=true:this.showBGBlur=false
    }
  },
  data(){
    return {
      showBGBlur:true
    }
  },
  computed:{
    bgClass(){
      return this.showBGBlur?'bg': 'bg bg-no-blur'
    }

  },
}
</script>

<style lang="scss">
#app {
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;

  >.bg{
    position: absolute;
    left: 0;
    top: 0;
    filter:blur(8px);
    width: 100%;
    height: 100%;
    transition: all 1s;
    z-index: -1;
    overflow: hidden;
   img{
     min-width: 1920px;
   }
  }
  >.bg-no-blur{

    filter:blur(0px);
  }
}
</style>
