<template>
    <el-row>
      <el-col :span="16" :offset="4">
        <div class="blog-bg" v-html="html"></div>
      </el-col>
    </el-row>
</template>

<script>
    import marked from 'marked'
    export default {
        async created() {

          let url=this.$route.query.url
          let md=await this.$axios.get(url)
          this.html=marked(md.data)
        },
        data(){
          return{
            html:''
          }
        }
    }
</script>

<style lang="scss" scoped>
.blog-bg{
  background: #ffffff;
  padding: 20px;
  border-radius: 4px;
  margin-top: 40px;
}
</style>
