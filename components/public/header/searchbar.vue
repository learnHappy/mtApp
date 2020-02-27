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
          <dl class="hotPlace" v-if="isHotPlace" >
            <dt>热门搜索</dt>
            <dd v-for="(item,index) in hotPlace" :key="index">{{item}}</dd>
          </dl>
          <dl class="searchList" v-if="isSearchList">
            <dd v-for="(item,index) in searchList" :key="index">{{item}}</dd>
          </dl>
        </div>
        <p class="suggset">
          <a href="#">故宫博物院</a>
          <a href="#">故宫博物院</a>
          <a href="#">故宫博物院</a>
          <a href="#">故宫博物院</a>
          <a href="#">故宫博物院</a>
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
  export default {
    name: "search",
    data() {
      return {
        show: false,
        search: '',
        hotPlace: ['火锅', '排挡', '烤鱼'],
        searchList: ['故宫', '长城', '天安门']
      }
    },
    methods: {
      getFocus: function() {
        this.show = true
      },
      loseFocus: function() {
        let self = this;
        setTimeout(function () {
          self.show = false
        },200)
      },
      input: function () {
        console.info(this.search)
      }
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
  .m-header .m-header-searchbar .center .wrapper .hotPlace, .m-header .m-header-searchbar .center .wrapper .searchList{
    top: 42px!important;
  }
</style>
