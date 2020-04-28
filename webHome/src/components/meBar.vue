<template>
    <div class="show-me" @click="showBlog">
      <div class="photo">
        <img src="../assets/img/photo.jpg" alt="头像">
      </div>
      <p class="title">
        我是一个很懒得人
        这是个总结的地方，防止自己在面试的时候一问三不知
      </p>
    </div>
</template>

<script>
    export default {

        methods:{
          showBlog(){
            this.$router.push('/list')
          }
        }
    }
</script>

<style lang="scss" scoped>
  .show-me{
    width: 200px;
    min-height: 320px;
    overflow: hidden;
    transition: all 1s;


    padding: 10px 20px;
    background: rgba(0,0,0,0.4);
    border: 1px solid #333333;
    border-radius: 8px;
    box-shadow: 0px 0px 8px 1px #000000;


    position: absolute;
    left: calc(50% - 100px);
    top: calc(50% - 160px);

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    .photo{
      width: 80px;
      height: 80px;
      overflow: hidden;
      border-radius: 50%;

      border: 2px solid #333333;

      img{
        width: 100%;
      }
    }
    .title{
      font-size:14px;
      color: #ffffff;
    }
  }


</style>
