<template>
  <div class="index">
    <img src="@/assets/images/logo-bule.png" alt="" class="image" />
  </div>
</template>

<script>
import importPages from '@/components/tags-view/importPages'
export default {
  title: '首页',
  data() {
    return {
      importPages,
    }
  },
  methods: {},
}
</script>
<style lang="less" scoped>
.index {
  height: 100%;
  position: relative;
  background-color: #fff;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  display: flex;
  align-items: center;

  .image {
    width: 600px;
    display: block;
    margin: -120px auto 0 auto;
  }
}
</style>
