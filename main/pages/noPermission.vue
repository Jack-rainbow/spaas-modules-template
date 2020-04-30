<template>
  <div class="no-permission">
    <no-permission />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import NoPermission from '@/components/NoPermission/index.vue'

@Component({
  components: {
    NoPermission
  }
})
export default class NotPermission extends Vue {}
</script>

<style lang="less" scoped>
.no-permission {
  display: flex;
  height: calc(100vh - 140px);
  justify-content: center;
  padding-top: 120px;
}
</style>
