<template>
  <div class="row">
    <div class="col-sm-12 col-md-8">
      <!-- new pizza -->
      <app-new-pizza></app-new-pizza>
    </div>
    <div class="col-sm-12 col-md-4">
      <!-- 品种展示 -->
      <h3 class="text-muted my-5">菜单</h3>
      <table class="table">
        <thead class="table table-default">
        <tr>
          <th>品种</th>
          <th>删除</th>
        </tr>
        </thead>
        <tbody v-for="item in getMenuItems">
          <tr>
            <td>{{item.name}}</td>
            <td>
              <button @click="deleteItem(item)" class="btn btn-outline-danger btn-sm">&times;</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import NewCake from './NewCake'
  export default {
    data () {
      return {
        getMenuItems:[]
        //name:'JayChou'
      }
    },
    components:{
      'app-new-pizza':NewCake
    },
    created(){
      fetch("https://wd0156044779nletio.wilddogio.com/menu.json")
        .then(res => res.json())
        .then(data => {
          let menuArr = [];
          for(let key in data){
            data[key].id = key;
            menuArr.push(data[key])
          }
        this.getMenuItems = menuArr
      })
      .catch(err => console.log(err))
    },
    methods:{
      deleteItem(item){
        console.log(item);
        fetch("https://wd0156044779nletio.wilddogio.com/menu/"+item.id+"/.json",{
          method:"DELETE"
        })
          .then(res => res.json())
          .then(data => this.$router.push({name:"menuLink"}))
        .catch(err => console.log(err))
      }
    }
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
