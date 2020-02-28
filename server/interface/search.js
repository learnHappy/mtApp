import Router from 'koa-router'
import axios from './utils/axios'
import sign from './utils/sgin'

let router = new Router({prefix: '/search'})

router.get('/resultsByKeywords', async (ctx) => {
  const {city, keyword} = ctx.query;
  let {status, data: {count, pois}} = await axios.get('http://cp-tools.cn/search/resultsByKeywords',{
    param: { city, keyword, sign}
  })
  ctx.body = {
    count: status === 200 ? count : 0,
    pois: status === 200 ? pois : []
  }
})

export default router
