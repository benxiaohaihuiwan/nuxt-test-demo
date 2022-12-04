<template>
  <div class="container">
    <el-header>
      <headers></headers>
    </el-header>
  </div>
</template>
<script>
import Headers from '@/components/base-header'
export default {
  components: {
    Headers,
    // SideBar,
    // TagsView,
  },
}
</script>
<style lang="less" scoped>
@import '~assets/var';

body {
  overflow-y: hidden;
}

.container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

#__nuxt {
  .el-container {
    overflow: hidden;
    position: relative;
    height: 100%;
  }

  .el-header {
    background-color: @theme;
  }

  .nuxt-main {
    padding: 0;
    display: flex;
    flex-direction: column;
  }

  .nuxt-body {
    flex: 1;
    padding: 20px;
    overflow: auto;
  }

  .tags-view {
    border-bottom: 1px solid #e4e8f3;
    padding: 5px 10px;
    box-shadow: 0 2px 6px #00000026;

    .tags-row {
      display: inline-block;
      position: relative;
      cursor: pointer;
      height: 26px;
      line-height: 26px;
      border: 1px solid #d8dce5;
      color: #495060;
      background: #fff;
      padding: 0 8px;
      font-size: 12px;
      margin-left: 5px;
      border-radius: 4px;
    }
  }
}
</style>