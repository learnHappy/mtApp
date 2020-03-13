<template>
  <div class="m-geo">
    <i class="el-icon-location">{{$store.state.geo.position.city}}</i>
    <nuxt-link class="changeCity"  to="/changeCity" >切换城市</nuxt-link>
    [富阳 德清 临安]
  </div>
</template>

<script>
    export default {
        name: "geo"
    }
</script>

<style scoped>

</style>
