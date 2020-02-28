<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="mouseleave">
      <dt>全部分类</dt>
      <dd @mouseover="getKind" v-for="(item,index) in menu"  :key="index"><i @mouseover.stop :class="item.type"/>{{item.title}}<span @mouseover.stop class="arrow"/></dd>
    </dl>
    <div class="detail" v-if="kind" @mouseover="sover" @mouseleave="sout">
      <template v-for="(item,index) in curdetail">
        <h4 :key="index">{{item.title}}</h4>
        <span v-for="v in item.child" :key="v">{{v}}</span>
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    name: "menu",
    data() {
      return {
        kind: '',
        menu: [{
          type: 'food',
          title: '美食',
          child: [{
            title: '美食',
            child: ['代金券', '甜点饮品', '火锅', '自助餐', '小吃快餐']
          }]
        }, {
          type: 'takeout',
          title: '外卖',
          child: [{
            title: '外卖',
            child: ['美团外卖']
          }]
        }, {
          type: 'hotel',
          title: '酒店',
          child: [{
            title: '酒店星级',
            child: ['经济型', '舒适/三星', '高档/四星', '豪华/五星']
          }]
        }]
      }
    },
    methods: {
      mouseleave: function () {
        let self = this;
        self._timer = setTimeout(function () {
          self.kind = ''
        },150)
      },
      getKind: function (obj) {
        this.kind = obj.target.querySelector('i').className
      },
      sover: function () {
        clearTimeout(this._timer)
      },
      sout: function () {
          this.kind = ''
      }
    },
    computed: {
      curdetail: function () {
        return this.menu.filter((item) => item.type==this.kind)[0].child
      }
    }
  }
</script>

<style scoped>

</style>
