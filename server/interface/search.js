import Router from 'koa-router'
import axios from './utils/axios'
import sign from './utils/sgin'
import Pois from '../dbs/models/poi'

let router = new Router({prefix: '/search'})

router.get('/top', async (ctx) => {
  let {status, data: {top}} = await axios.get(`http://cp-tools.cn/search/top`, {
    params: {
      input: ctx.query.input,
      city: ctx.query.city,
      sign
    }
  })
  if (status === 200) {
    ctx.body = {
      code: 0,
      top: top.map(item => {
        return {name: item.name}
      })
    }
  }
  /*  let pois = Pois.findOne({name: {$regex: ctx.query.input}, city: '三亚'/!*ctx.query.city*!/});
    ctx.body = {
      pois: pois.map(item => {
        return {
          name: item.name,
          province: item.province
        }
      })
    }*/
})

router.get('/hotPlace', async (ctx) => {
  let city = ctx.store ? ctx.store.geo.position.city : ctx.query.city
  console.info(sign)
  let {status, data: {result}} = await axios.get(`http://cp-tools.cn/search/hotPlace`, {
    params: {
      sign,
      city
    }
  })
  ctx.body = {
    result: status === 200 ? result : []
  }
})

router.get('/resultsByKeywords', async (ctx) => {
  const {city, keyword} = ctx.query;
  let {status, data: {count, pois}} = await axios.get('http://cp-tools.cn/search/resultsByKeywords', {
    param: {city, keyword, sign}
  })
  ctx.body = {
    count: status === 200 ? count : 0,
    pois: status === 200 ? pois : []
  }
})

export default router
