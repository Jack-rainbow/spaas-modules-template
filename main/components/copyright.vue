<template>
  <div class="copyright">
    Copyright ©
    {{ new Date().getFullYear() + ' ' + $store.state.meta.copyright }}
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'CopyRight'
})
export default class extends Vue {}
</script>

<style scoped>
.copyright {
  color: rgba(0, 0, 0, 0.45);
  font-size: 12px;
  text-align: center;
  line-height: 40px;
}
</style>
