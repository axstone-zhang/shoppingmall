<template>
  <div>
    <my-header></my-header>
    <my-bread>
      <span slot="bread">Goods</span>
    </my-bread>
    <div class="accessory-result-page accessory-page">
        <div class="container">
          <div class="filter-nav">
            <span class="sortby">Sort by:</span>
            <a href="javascript:void(0)" class="default cur">Default</a>
            <a href="javascript:void(0)" class="price">Price <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
            <a href="javascript:void(0)" class="filterby stopPop" @click.stop="showFilterPop">Filter by</a>
          </div>
          <div class="accessory-result">
            <!-- filter -->
            <div class="filter stopPop" id="filter" >
              <dl class="filter-price">
                <dt>Price:</dt>
                <dd><a href="javascript:void(0)">All</a></dd>
              </dl>
            </div>

            <!-- search result accessories list -->
            <div class="accessory-list-wrap">
              <div class="accessory-list col-4">
                <ul>
                  <li v-for="(item, index) in goodsList" :key="index">
                    <div class="pic">
                      <a href="#"><img :src="'../../static/'+item.prodcutImg" alt=""></a>
                    </div>
                    <div class="main">
                      <div class="name">{{ item.productName }}</div>
                      <div class="price">{{ item.prodcutPrice }}</div>
                      <div class="btn-area">
                        <a href="javascript:;" class="btn btn--m">加入购物车</a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <!-- <div class="view-more-normal"
                   v-infinite-scroll="loadMore"
                   infinite-scroll-disabled="busy"
                   infinite-scroll-distance="20">
                <img src="./../assets/loading-spinning-bubbles.svg" v-show="loading">
              </div> -->
            </div>
          </div>
        </div>
      </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from '../components/layout/Header'
import MyFooter from '../components/layout/Footer'
import MyBread from '../components/layout/Bread'
import { getGoodsList } from '../api/goodsList';
export default {
  components: {
    MyHeader,
    MyFooter,
    MyBread
  },
  data () {
      return {
        goodsList: []
      }
  },
  methods: {
    refreshView () {
      getGoodsList().then(res => {
        let { data } = res;
        this.goodsList = data.result;
      })
    }
  },
  created() {
    this.refreshView()
  }
}
</script>

<style lang="scss">

</style>


