import Mock from 'mockjs'
import GoodsApi from './goodsList'

// Mock.mock('/goodsList', /post|get/i, goodsList)\
Mock.mock('goods/list', 'get', GoodsApi.getGoodsList);
export default Mock;