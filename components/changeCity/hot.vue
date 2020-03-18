<template>
  <div class="m-hcity">
    <dl>
      <dt>热门城市:</dt>
      <dd v-for="(item,index) in hcity" :key="index">{{item.name === '市辖区'?item.province:item.name}}</dd>
    </dl>
  </div>
</template>

<script>
  export default {
    name: "hot",
    data() {
      return {
        hcity: []
      }
    },
    async mounted() {
      let {status, data: {hots}} = await this.$axios.get('/geo/hotCity')
      status === 200 ? this.hcity = hots : this.hcity = []
    }
  }
</script>

<style lang="scss">
  @import "../../assets/css/changecity/hot.scss";
</style>
