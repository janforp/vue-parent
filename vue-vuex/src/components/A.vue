<template>
  <div>
    <div>aaaaaaa</div>
    <button @click="goB()">跳转到B</button>
  </div>
</template>

<script>
  export default {
    name: 'A',
    components:{
    },
    data () {
      return {
      }
    },
    methods:{
        goB() {
          this.$router.push({path:'/B'});
        }
    }
  }
</script>
<style scoped>

</style>
