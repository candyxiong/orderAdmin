<template>
  <form>
    <h3 class="text-muted my-5">添加新的蛋糕</h3>
    <div class="form-group row">
      <label class="col-sm-1">品种</label>
      <div class="col-sm-11">
        <input type="text" class="form-control" v-model="newCake.name">
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-1">描述</label>
      <div class="col-sm-11">
        <textarea rows="5" class="form-control" v-model="newCake.description"></textarea>
      </div>
    </div>
    <p><strong>选项1</strong></p>
    <div class="form-group row">
      <label class="col-sm-1">尺寸</label>
      <div class="col-sm-11">
        <input type="text" class="form-control" v-model="newCake.size1">
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-1">价格</label>
      <div class="col-sm-11">
        <input type="text" class="form-control" v-model="newCake.price1">
      </div>
    </div>

    <p><strong>选项2</strong></p>
    <div class="form-group row">
      <label class="col-sm-1">尺寸</label>
      <div class="col-sm-11">
        <input type="text" class="form-control" v-model="newCake.size2">
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-1">价格</label>
      <div class="col-sm-11">
        <input type="text" class="form-control" v-model="newCake.price2">
      </div>
    </div>
    <div class="form-group row">
      <button type="button" @click="addMenuItem()" class="btn btn-success btn-block">添加</button>
    </div>
  </form>
</template>
<script>
  export default{
    data(){
      return{
        newCake:{}
      }
    },
    methods:{
      addMenuItem(){
        let data = {
          name:this.newCake.name,
          description:this.newCake.description,
          options:[
            {
              size:this.newCake.size1,
              price:this.newCake.price1
            },
            {
              size:this.newCake.size2,
              price:this.newCake.price2
            }
          ]
        }
        // axios vue-resource es6 fetch
//         fetch("https://wd0156044779nletio.wilddogio.com/menu.json",{
//           method:"POST",
//           body:JSON.stringify(data)
//         })
//           .then(res => res.json())
//           //.then(data => this.$router.push({name:"menuLink"}))
//
//           .then(data => this.$store.commit('pushToMenuItems',data))
//           .catch(err => console.log(err))
        //数据保存到vuex中
        this.http.post("menu.json",data)
         .then(res => this.$store.commit("pushToMenuItems",data))

      },
    }
  }

</script>
