<template>
  <div :style="{ flex: `0 0 ${asideWidth}` }" class="aside">
    <el-menu
      v-loading="loadingMenu"
      :default-active="curMenu"
      class="aside-menu"
      background-color="#F6F7F9"
      text-color="#2D303B"
      :router="false"
      :unique-opened="true"
      :collapse="isCollapse"
      :collapse-transition="false"
      :style="{ width: menuWidth }"
      @select="handleSelect"
    >
      <div
        v-for="(item, index) in menuList"
        :key="index"
        style="padding: 0 6px;"
      >
        <el-submenu v-if="item.children && isCollapse" :index="item.path">
          <template v-if="item.children" slot="title">
            <img
              v-if="currentPath === item.path && isSidebarMenu"
              class="side-icon"
              :src="pathIcon[item.path] ? pathIcon[item.path].iconCheck : ''"
            />
            <img
              v-else
              class="side-icon"
              :src="pathIcon[item.path] ? pathIcon[item.path].icon : ''"
            />
          </template>
          <div v-for="(subItem, subIndex) in item.children" :key="subIndex">
            <el-submenu v-if="subItem.children" :index="subItem.path">
              <span slot="title">{{ subItem.name }}</span>
              <el-menu-item
                v-for="(t, i) in subItem.children"
                :key="i"
                :index="t.path"
              >
                {{ t.name }}
              </el-menu-item>
            </el-submenu>
            <el-menu-item v-if="!subItem.children" :index="subItem.path">
              {{ subItem.name }}
            </el-menu-item>
          </div>
        </el-submenu>
        <el-menu-item
          v-if="!isCollapse || (isCollapse && !item.children)"
          :index="item.path"
        >
          <img
            v-if="currentPath != item.path"
            class="side-icon"
            :src="pathIcon[item.path] ? pathIcon[item.path].icon : ''"
          />
          <img
            v-else
            class="side-icon"
            :src="pathIcon[item.path] ? pathIcon[item.path].iconCheck : ''"
          />
          <span slot="title">{{ item.name }} </span>
        </el-menu-item>
      </div>
    </el-menu>
    <div v-if="showSubmenu && !isCollapse" class="submenu">
      <div v-for="(item, index) in currentMenu.children" :key="index">
        <div
          class="sub-title"
          :class="{
            'sub-item': !item.children,
            active: routePath === item.path && !item.children,
          }"
          @click.stop="handleSelect(item.path)"
        >
          {{ item.name }}
        </div>
        <transition-group name="slide-in">
          <div
            v-for="grandson in item.children"
            :key="grandson.path"
            class="sub-item pl-5"
            :class="{ active: routePath === grandson.path }"
            @click.stop="handleSelect(grandson.path)"
          >
            <span class="grand-son-title">{{ grandson.name }}</span>
          </div>
        </transition-group>
      </div>
    </div>
    <div class="foot-btn" :style="{ width: menuWidth }">
      <i
        :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
        @click="handleCollapseMenu"
      ></i>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import PATH_ICON from '@/const/paths-icon'

export default {
  data() {
    return {
      isCollapse: false,
      loadingMenu: false,
      curMenu: '/',
      pathIcon: PATH_ICON,
    }
  },
  computed: {
    ...mapState(['menuList', 'menuData']),
    routePath() {
      return this.$route.path
    },
    // 当前一级路由地址
    currentPath() {
      return `/${this.routePath.split('/')[1]}`
    },
    // 获取当前菜单
    currentMenu() {
      const dataItem = this.menuList.find(
        (item) => item.path === this.currentPath
      )
      return dataItem
    },
    // 是否展示二级子菜单
    showSubmenu() {
      if (!this.currentMenu) {
        return
      }
      return !!this.currentMenu.children && !this.isCollapse
    },
    // 侧边栏菜单容器宽度
    asideWidth() {
      // 展示二级子菜单
      if (this.showSubmenu) {
        return '240px'
      }
      return this.menuWidth
    },
    // 菜单宽度
    menuWidth() {
      return this.isCollapse ? '65px' : '120px'
    },
    // 当前访问页面是否在菜单栏上, 控制图标的显示
    isSidebarMenu() {
      const dataItem = this.menuData.find(
        (item) => item.path === this.routePath
      )
      return dataItem
    },
  },
  watch: {
    isCollapse(val) {
      this.setActiveMenu()
    },
    '$route.path': {
      immediate: true,
      handler() {
        this.setActiveMenu()
      },
    },
  },
  methods: {
    // 路由切换
    handleSelect(path) {
      if (!path) {
        return
      }
      // 获取当前菜单数据
      const childMenus = this.findChildMenu(this.menuList, path)
      // 是否有子级
      const hasChild = !!childMenus.children
      // 没有子级直接跳转
      if (!hasChild) {
        this.$router.push(path)
        return
      }

      // 有子级。找到所有子级下的第一个菜单进行跳转
      const child = this.findFirstMenu([childMenus])
      this.$router.push(child.path)
    },
    // 菜单拦展开收缩
    handleCollapseMenu() {
      this.isCollapse = !this.isCollapse
    },
    // 设置默认菜单选中
    setActiveMenu() {
      this.curMenu = this.isCollapse ? this.$route.path : this.currentPath
    },
    // 递归查找所有子级，第一项
    findFirstMenu(arr) {
      const [first] = arr
      return !first.children ? first : this.findFirstMenu(first.children)
    },
    // 递归查找子级
    findChildMenu(arr, path) {
      let dataItem = ''
      arr.forEach((item) => {
        if (item.path === path) {
          dataItem = item
        } else if (item.children) {
          const childItem = this.findChildMenu(item.children, path)
          if (childItem) {
            dataItem = childItem
          }
        }
      })
      return dataItem
    },
  },
}
</script>

<style lang="less" scoped>
@import '~assets/var';

.aside {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgb(246, 247, 249);
  flex-grow: 0;

  .aside-menu {
    flex: 1;
    overflow: auto;
    border-right: 0;
    padding-top: 4px;
  }

  .el-menu--collapse {
    .el-menu-item.is-active {
      background: @breadcrumb-color !important;

      .iconfont {
        color: @breadcrumb-color !important;
      }
    }

    :deep(.el-submenu__title) {
      span {
        height: 0;
        width: 0;
        overflow: hidden;
        visibility: hidden;
        display: inline-block;
      }

      .el-icon-arrow-right {
        display: none;
      }
    }

    :deep(.el-submenu.is-active) {
      .el-submenu__title {
        background: @breadcrumb-color !important;

        .el-icon-arrow-right {
          display: none;
        }
      }
    }
  }

  .el-menu {
    &::-webkit-scrollbar {
      display: none; /* Chrome Safari */
    }

    &:not(.el-menu--collapse) {
      border-right: none !important;

      .el-menu-item {
        padding: 0;
        padding-left: 8px !important;
        box-sizing: border-box;
        height: 30px;
        line-height: 30px;
        margin-top: 16px;
        border-radius: 2px;

        &:hover {
          background-color: @breadcrumb-color;
        }

        &.is-active {
          background: @breadcrumb-color !important;
          color: white !important;
          position: relative;
          z-index: +2;
          background-size: 100%;

          .iconfont {
            color: white;
            margin-right: 2px;
          }
        }
      }
    }

    .side-icon {
      width: 14px;
      height: 14px;
    }
  }

  .el-menu--popup {
    .is-active {
      background: @breadcrumb-color !important;
      color: @breadcrumb-color !important;
    }
  }

  .submenu {
    width: 120px;
    height: calc(100vh - 60px);
    background: #fff;
    position: absolute;
    left: 120px;
    top: 0;
    z-index: +5;
    text-align: left;
    border-right: 1px solid #e4e8f3;
    overflow: auto;
    padding-top: 10px;

    &::-webkit-scrollbar {
      display: none; /* Chrome Safari */
    }

    .sub-item {
      padding: 0 12px;
      margin-bottom: 12px;
      line-height: 32px;
      cursor: pointer;
      font-size: 13px;

      &:hover {
        background-color: #f6f7f9;
      }

      &.active {
        background: #f6f7f9;
        border-right: 2px solid @breadcrumb-color;
        color: @breadcrumb-color !important;
        font-size: 14px !important;
        font-weight: 500;
      }
    }

    .pl-5 {
      padding-left: 24px;
    }

    .sub-title {
      color: rgb(51, 51, 51);
      padding-left: 12px;
      font-size: 13px;
      margin-bottom: 12px;
    }

    .slide-in-enter-active {
      transition: all 0.3s ease;
    }

    .slide-in-leave-active {
      transition: all 0.2s linear;
    }

    .slide-in-enter,
    .slide-in-leave-to {
      opacity: 0;
    }
  }

  .foot-btn {
    padding: 10px 0;
    text-align: center;
    font-size: 18px;
    color: #333;

    i {
      cursor: pointer;
    }
  }
}
</style>
