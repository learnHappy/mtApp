<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left"><img src="https://s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="美团">
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input
            v-model="search"
            placeholder="搜索商家或地点"
            @focus="getFocus"
            @blur="loseFocus"
            @input="input"/>
          <button class="el-button el-button--primary"><i class="el-icon-search"></i></button>
          <dl class="hotPlace" v-if="isHotPlace">
            <dt>热门搜索</dt>
            <dd v-for="(item,index) in $store.state.home.hotPlace.slice(0,5)" :key="index">{{item.name}}</dd>
          </dl>
          <dl class="searchList" v-if="isSearchList">
            <dd v-for="(item,index) in searchList" :key="index">{{item.name}}</dd>
          </dl>
        </div>
        <p class="suggset">
          <a v-for="(item,ind) in $store.state.home.hotPlace.slice(0,5)" :key="ind" href="#">{{item.name}}</a>
        </p>
        <ul class="nav">
          <li>
            <nuxt-link to="/takeout">美团外卖</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/movie">猫眼电影</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/hotel">美团酒店</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/apartment">民宿/公寓</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/business">商家入驻</nuxt-link>
          </li>
        </ul>
      </el-col>
      <el-col :span="6" class="right">
        <ul class="security">
          <li><i class="refund"/>
            <p class="txt">随时退</p></li>
          <li><i class="single"/>
            <p class="txt">不满意免单</p></li>
          <li><i class="overdue"/>
            <p class="txt">过期退</p></li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import _ from 'lodash'

  export default {
    name: "search",
    data() {
      return {
        show: false,
        search: '',
        hotPlace: [],
        searchList: []
      }
    },
    methods: {
      getFocus: function () {
        this.show = true
      },
      loseFocus: function () {
        let self = this;
        setTimeout(function () {
          self.show = false
        }, 200)
      },
      input: _.debounce(async function () {
        let self = this;
        let city = self.$store.state.geo.position.city.replace('市', '')
        self.searchList = []
        let {status, data: {top}} = await self.$axios.get('/search/top', {
          params: {
            input: self.search,
            city
          }
        })
        self.searchList = top.slice(0, 10)
      }, 300)
    },
    computed: {
      isHotPlace: function () {
        return this.show && !this.search
      },
      isSearchList: function () {
        return this.show && this.search
      }
    }
  }
</script>

<style>
  .m-header .m-header-searchbar .center .wrapper .hotPlace, .m-header .m-header-searchbar .center .wrapper .searchList {
    top: 42px !important;
  }
  .suggset > a{
    margin-left: 5px;
  }
</style>
