<template>
  <div class="page-404">
    <not-exist />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import NotExist from '@/components/NotExist/index.vue'

Vue.component('NotExist', NotExist)

@Component
export default class _ extends Vue {}
</script>

<style lang="less" scoped>
.page-404 {
  display: flex;
  height: calc(100vh - 140px);
  justify-content: center;
  padding-top: 120px;
}
</style>
