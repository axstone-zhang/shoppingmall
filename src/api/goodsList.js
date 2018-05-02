import fetch from '../utils/fetch';

export function getGoodsList() {
  return fetch({
    url: 'goods/list',
    method: 'get'
  })
}