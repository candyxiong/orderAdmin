<template>
  <div class="row">
    <div id="home" class="col-sm-12 text-center">
      <div class="background">
        <h1>欢迎大家品尝pizza!</h1>
        <h2>这里有你非常喜欢的pizza!</h2>
        <button @click="goToMenu" class="btn btn-success">跳转</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    methods:{
      goToMenu(){
        //this.$router.go(-1);//跳转到上一次浏览的页面
        //this.$router.replace('/menu');//跳转到指定地址
        //this.$router.replace({name:'menuLink'}) //跳转到指定的路由名字下
        //this.$router.push('/menu');
        //this.$router.push({name:'menuLink'});
        //push和replace区别：push能导航到不同的url，能回退到上一个浏览记录，replace则反之
      }
    }
  }
</script>

<style scoped>
  #home{
    background: url('../../src/assets/pizza.jpg');
    height: 85vh;
    padding: 10%;
  }

  h1,h2{
    margin: 6%;
  }

  .background{
    background: #eee;
    opacity: 0.8;
    max-width: 70vw;
    margin: 0 auto;
    padding: 20px 0;
  }
</style>
