import Router from 'koa-router'
import axios from './utils/axios'
import sign from './utils/sgin'
import Menu from '../dbs/models/menu'
import Provinces from '../dbs/models/provinces'
import Cities from '../dbs/models/cities'

let router = new Router({prefix: '/geo'})

router.get('/getPosition', async (ctx) => {
    let {status, data: {province, city}} = await axios.get(`http://cp-tools.cn/geo/getPosition?sign=${sign}`)
    if (status === 200) {
      ctx.body = {
        province,
        city
      }
    } else {
      ctx.body = {
        province: '',
        city: ''
      }
    }
  }
)

router.get('/menu', async (ctx) => {
  let result = await Menu.findOne()
  console.info(result.menu)
  ctx.body = {
    menu: result.menu
  }
})

router.get('/province', async (ctx) => {
  let province = await Provinces.find()
  ctx.body = {
    province: province.map(item => {
      return {
        id: item.id,
        value: item.value
      }
    })
  }
})

router.get('/province/:id', async (ctx) => {
  let city = await Cities.findOne({id: ctx.params.city})
  ctx.body = {
    code: 0,
    city: city.value.map(item => {
      return {
        province: item.province,
        name: item.name,
        id: item.id
      }
    })
  }
})

router.get('/city', async (ctx) => {
  let {status, data: {city}} = await axios.get(`http://cp-tools.cn/geo/city`)
  status === 200 ? ctx.body = {city} : ctx.body = {city: []}
});


router.get('/hotCity', async (ctx) => {
  let {status, data: {hots}} = await axios.get(`http://cp-tools.cn/geo/hotCity`)
  status === 200 ? ctx.body = {hots} : ctx.body = {hots: []}
});

export default router;
