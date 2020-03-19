<template>
  <div class="page-product">
    <el-row>
      <el-col :span="24">
        <crumbs/>
      </el-col>
      <el-col :span="24">
        <categroy/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24"><list/></el-col>
    </el-row>
  </div>
</template>

<script>
  import Crumbs from '../components/products/crumbs.vue'
  import Categroy from '../components/products/categroy.vue'
  import List from '../components/products/list.vue'

  export default {
    name: "products",
    components: {
      Crumbs,
      Categroy,
      List
    }
  }
</script>

<style lang="scss">
  @import "../assets/css/products/index";
</style>
