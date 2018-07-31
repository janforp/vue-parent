<template>
  <section>
    <div>
     <label>
       <span>子组件输入的用户名：</span>
       <input v-model="username" @change="setUser"/>
     </label>
    </div>
  </section>
</template>
<script>
  export default{
      name:'Input',
      data() {
          return {
              username: ''
          }
      },
      methods:{
          setUser:function () {
            this.$emit('transferUser', this.username)
          }
      }
  }
</script>
