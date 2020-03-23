<!--
 * @Description: main layout 布局
 * @Author: barret
 * @Date: 2019-08-05 14:24:09
 * @LastEditTime: 2020-03-23 15:15:24
 * @LastEditors: Please set LastEditors
 -->
<template>
  <el-container direction="vertical">
    <!-- 头部导航 -->
    <layout-head />
    <el-container>
      <!-- 侧边栏 -->
      <el-container class="main-container" direction="vertical">
        <!-- 页面 header -->
        <el-main class="nuxt-main">
          <nuxt></nuxt>
          <el-footer class="footer-container" height="40px">
            <copyright></copyright>
          </el-footer>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import {mapState} from 'vuex';
import Copyright from '@/components/copyright.vue';
import LayoutHead from '@/components/layout-head.vue';

export default {
  name: 'full',
  components: {
    Copyright,
    LayoutHead,
  },
  props: {
    ifNotProduction: {
      type: Boolean,
      default: process.env.NODE_ENV !== 'production',
    },
  },
  data() {
    const {path, name} = this.$route;
    return {
      hasHeader: path !== '/' && name !== 'all',
    };
  },
  computed: {
    ...mapState(['permission', 'setting']),
    appName() {
      return this.permission.spaName;
    },
  },
  watch: {
    $route: {
      handler() {
        const {path, name} = this.$route;
        this.hasHeader = path !== '/' && name !== 'all';
      },
      immediate: true,
    },
  },
};
</script>
<style lang="less">
#__nuxt {
  // 最小宽度，防止屏幕缩小顶部栏会变形
  min-width: 900px;
  @title-bg: rgba(242, 244, 249, 1);
  @menu-height: 50px;
  @primary-color: #1890ff;
  @main-bg: #f7f8fb;

  .el-header,
  .el-main {
    padding: 0;
  }
  .el-footer {
    background: @main-bg;
  }

  .nuxt-header {
    line-height: 60px;
    padding-left: 20px;
    transition: margin-left 0.28s;
  }

  // 主体区域 Main container
  .main-container {
    background: @main-bg;
  }

  .nuxt-main {
    position: relative;
    box-sizing: border-box;
    background: @main-bg;
  }

  .nuxt-content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin-bottom: 40px;
    padding: 20px 20px 10px;
  }

  .footer-container {
    position: absolute;
    bottom: -40px;
    left: 0;
    right: 0;
  }

  .medium-height {
    min-height: calc(100vh - 100px);
  }
  .small-height {
    min-height: calc(100vh - 150px);
  }
  .min-height {
    min-height: calc(100vh - 190px);
  }
}
</style>
