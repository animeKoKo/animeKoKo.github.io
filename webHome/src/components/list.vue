<template>
    <div>
      <div>list</div>
      <div v-html="html"></div>
    </div>
</template>

<script>
    export default {

        async created() {
          let {data}=await this.$axios.get('/static/test.html')
          this.html=data
        },

        data(){
          return{
            html:""
          }
        }
    }
</script>

<style scoped>

</style>
