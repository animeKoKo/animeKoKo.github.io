<template>
    <div>
      <div>show-blog</div>
      <div v-html="html"></div>
    </div>
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

<style scoped>

</style>
