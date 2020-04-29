<template>
  <el-row class="list-view">
    <el-col :span="12" :offset="6">
      <ul>
        <li class="card-list" shadow="hover" v-for="(item,k) in list" :key="k" @click="$router.push('/show-blog?url='+item.url)">
          <h4>{{item.name}}</h4>
          <p>{{item.title}}</p>
        </li>
      </ul>
    </el-col>
  </el-row>
</template>

<script>
    //import marked from 'marked'
    import '../../static/blogLib'
    let blogList=window.blogLib
    export default {
        data(){
          return{
            list:blogList.list,
            html:""
          }
        },
      methods:{
        goInfo(item){
          return this.$router.push('/show-blog?url='+item.url)
        }
      }
    }
</script>

<style lang="scss" scoped>
.list-view{
  margin: 20px auto;
  .card-list{
    width: 100%;
    overflow: hidden;
    background: #ffffff;
    padding: 4px;
    margin: 8px 0;
    border-radius: 4px;
  }
}
</style>
