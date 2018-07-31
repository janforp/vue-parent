<template>
  <div>
    <LoginDiv @transferUser="getUser"></LoginDiv>
    <p>父组件收到的用户名为：{{user}}</p>
  </div>
</template>
<script>
  import LoginDiv from './common/Input.vue'
  export default{
      name:'Login',
      data() {
          return {
              user:''
          }
      },
      methods:{
          getUser(msg) {
              this.user = msg
          }
      },
      components:{
          LoginDiv
      }
  }
</script>
