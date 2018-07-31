<template>
  <div>
    <div>{{msg}}</div>
    <div>父级传过来的参数1是：{{fromParent}}</div>
    <div>父级传过来的参数2是：{{fromParent2}}</div>
  </div>
</template>
<script>
  //组件中可以有自己的请求，相当于一个普通的vue,有自己的使命周期
  export default {
    data () {
      return {
        msg:'我是子组件'
      }
    },
    props:['fromParent','fromParent2']
  }
</script>
