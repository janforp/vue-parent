<template>
  <div>
    <div>BBBBB</div>
    <button @click="goA()">跳转到A</button>
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
      goA() {
        this.$router.push({path:'/'});
      }
    }
  }
</script>
<style scoped>

</style>
