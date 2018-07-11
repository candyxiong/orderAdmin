<template>
  <div class="login">
    <h2>Admin</h2>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        //name:'JayChou'
      }
    },
    //组件间守卫
    /*beforeRouteEnter:(to,from,next) => {
      //alert('Hi'+ this.name);   //慎用this,此处name为undefind
      //next()
      next(vm => {   //组件间的回调函数
        alert('Hello'+ vm.name)  //
      })
    }*/
    /*beforeRouteLeave:(to,from) => {
      if(confirm('确定离开吗?') == true){
        next()
      }else{
        next(false)
      }
    }*/
  }
</script>

<style scoped>

</style>
