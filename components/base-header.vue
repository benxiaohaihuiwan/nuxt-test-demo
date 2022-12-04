<template>
  <div class="header">
    <div class="header-lt">
      <img src="@/assets/images/logo.png" alt="" class="image" />
      <span class="header-title">爱江山更爱没人</span>
    </div>
    <div class="header-rt">
      <el-menu
        mode="horizontal"
        text-color="#FFFFFF"
        active-text-color="#000"
        background-color="#051933"
      >
        <el-submenu index="1">
          <template slot="title">
            <div class="avator">
              <img src="@/assets/images/touxiang.png" alt="" />
            </div>
            {{ '江山' || '' }}
            <i class="el-icon-caret-bottom"></i>
          </template>
          <el-menu-item index="2-1" @click="logoutBtn">退出</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>

<script>
// import { mapMutations, mapState } from 'vuex'

// import api from '@/const/api'

// const { authCenter } = api

export default {
  computed: {
    // ...mapState(['user']),
  },
  methods: {
    async logoutBtn () {

    }
    // ...mapMutations(['logout']),
    // async logoutBtn() {
    //   try {
    //     const { code, msg } = await this.$axios.$post(authCenter.logout)
    //     if (+code !== 0) {
    //       throw new Error(msg || '操作失败')
    //     }
    //     this.$message.success('退出登录成功')
    //     this.logout()
    //     this.$router.replace('/login')
    //   } catch (err) {
    //     err.message && this.$message.error(err.message)
    //   }
    // },
  },
}
</script>

<style lang="less" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;

  .header-lt {
    display: flex;

    .image {
      height: 20px;
      margin-right: 8px;
      color: #fff;
      line-height: 44px;
    }

    .header-title {
      font-size: 14px;
      color: white;
      font-weight: bold;
    }
  }

  .header-rt {
    .avator {
      width: 24px;
      height: 24px;
      border-radius: 24px;
      display: inline-block;
      overflow: hidden;
      margin-right: 8px;
      background-color: #051933 !important;

      img {
        width: 100%;
        display: block;
      }
    }

    /deep/.el-submenu__title {
      font-size: 12px;
    }

    /deep/.el-submenu__icon-arrow {
      display: none;
    }
  }
}
</style>
