<template>
  <i :class="'iconfont ' + icon"></i>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class IconFont extends Vue {
  @Prop() icon!: string;
}
</script>
<style></style>
