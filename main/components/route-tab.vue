<template>
  <div class="route-tab">
    <el-tabs v-model="active" v-bind="tab">
      <el-tab-pane
        v-for="route in routes"
        :key="route.path"
        :label="route.name"
        :name="route.path"
        :disabled="route.disabled"
        :closable="route.closable"
      >
        <slot v-if="route.path === $route.path"></slot>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

interface Item {
  name: string
  path: string
  disabled: boolean
  closable: boolean
}

@Component
export default class RouteTab extends Vue {
  @Prop({ default: () => {} }) private tab!: object;
  @Prop({
    default: () => {
      return []
    }
  })
  private routes!: Array<Item>;

  // 计算属性
  get active(): string {
    return this.$route.path
  }

  set active(path: string) {
    this.$router.push({
      path,
      query: this.$route.query
    })
  }
}
</script>

<style lang="less">
.route-tab {
  .el-tabs__header.is-top {
    margin-bottom: 40px;
  }
}
</style>
