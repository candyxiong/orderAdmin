<template>
  <div class="row">
    <!-- 菜单 -->
    <div class="col-sm-12 col-md-8">
      <table class="table">
        <thead class="thead-default">
        <tr>
          <th>尺寸</th>
          <th>价格</th>
          <th>加入</th>
        </tr>
        </thead>
        <tbody v-for="item in getMenuItems" :key="item.name">
        <tr>
          <td><strong>{{item.name}}</strong></td>
        </tr>
        <tr v-for="option in item.options" :key="option.size">
          <td>{{option.size}}寸</td>
          <td>{{option.price}}</td>
          <td>
            <button
              @click="addToBasket(item,option)"
              class="btn btn-sm btn-outline-success">+</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>

    <!-- 购物车 -->
    <div class="col-sm-12 col-md-4">
      <div v-if="baskets.length >= 1">
        <table class="table">
          <thead class="thead-default">
          <tr>
            <th>数量</th>
            <th>品种</th>
            <th>价格</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in baskets">
            <td>
              <button class="btn btn-sm" @click="reduceNum(item)">-</button>
              <span>{{item.quantity}}</span>
              <button class="btn btn-sm" @click="addNum(item)">+</button>
            </td>
            <td>{{item.name}}{{item.size}}</td>
            <td>{{item.price * item.quantity}}</td>
          </tr>
          </tbody>
        </table>
        <p>总价:{{total + 'RMB'}} </p>
        <button class="btn btn-success btn-block">提交</button>
      </div>
      <div v-else="baskets.length <= 0">
        {{nothing}}
      </div>
    </div>

  </div>
</template>
<script>
  export default{
    data(){
      return{
        nothing:'购物车没有商品',
        baskets:[],
        getMenuItems:{
          1: {
            'name': '榴莲蛋糕',
            'description': '这是喜欢吃榴莲朋友的最佳选择',
            'options': [{
              'size': 9,
              'price': 58
            }, {
              'size': 12,
              'price': 88
            }]
          },
          2: {
            'name': '芝士草莓蛋糕',
            'description': '芝士杀手,浓浓的芝士丝, 食欲瞬间爆棚',
            'options': [{
              'size': 9,
              'price': 48
            }, {
              'size': 12,
              'price': 58
            }]
          },
          3: {
            'name': '水果缤纷蛋糕',
            'description': '众多人的默认选择',
            'options': [{
              'size': 9,
              'price': 68
            }, {
              'size': 12,
              'price': 88
            }]
          }
        }
      }
    },
    computed:{
      total(){
        let totalCost = 0;
        for(let i in this.baskets){
          let indivItem = this.baskets[i];
          totalCost += indivItem.quantity * indivItem.price
        }
        return totalCost
      }
    },
    methods:{
      addToBasket(item,option){
        let basket = {
          name:item.name,
          size:option.size,
          price:option.price,
          quantity:1
        };
        if(this.baskets.length > 0){
          //过滤
          let result = this.baskets.filter((basket) => {
            return (basket.name === item.name && basket.price === option.price)
          })

          if(result != null && result.length > 0){
            result[0].quantity++
          }else{
            this.baskets.push(basket)
          }
        }else{
          this.baskets.push(basket)
        }

      },
      reduceNum(item){
        item.quantity--;
        if(item.quantity <=0){
          this.baskets.splice(this.baskets.indexOf(item),1)
        }
      },
      addNum(item){
        item.quantity++
      }
    }
  }
</script>
