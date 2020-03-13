<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="mouseleave">
      <dt>全部分类</dt>
      <dd @mouseover="getKind" v-for="(item,index) in $store.state.home.menu"  :key="index"><i @mouseover.stop :class="item.type"/>{{item.name}}<span @mouseover.stop class="arrow"/></dd>
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
        kind: ''
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
        return this.$store.state.home.menu.filter((item) => item.type==this.kind)[0].child
      }
    }
  }
</script>

<style scoped>

</style>
