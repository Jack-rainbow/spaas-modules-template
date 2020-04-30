<template>
  <div>
    <div
      v-if="isExternal && iconClass"
      :style="styleExternalIcon"
      class="svg-external-icon svg-icon"
      v-on="$listeners"
    />
    <svg v-else :class="svgClass" aria-hidden="true" v-on="$listeners">
      <use :xlink:href="iconName" />
    </svg>
  </div>
</template>

<script lang="ts">
// doc: https://panjiachen.github.io/vue-element-admin-site/feature/component/svg-icon.html#usage
// import { isExternal } from '@/utils/validate'
/**
 * @param {string} path
 * @returns {Boolean}
 */
import { Vue, Component, Prop } from 'vue-property-decorator'

export function isExternal(path: string): boolean {
  return /^(https?:|mailto:|tel:)/.test(path)
}

@Component({
  name: 'SvgIcon'
})
export default class SvgIcon extends Vue {
  @Prop({ default: '' }) private iconClass!: string;
  @Prop({ default: '' }) private className!: string;

  // 计算属性
  get isExternal(): boolean {
    return isExternal(this.iconClass)
  }

  get iconName(): string {
    return `#icon-${this.iconClass}`
  }

  get svgClass(): string {
    if (this.className) {
      return `svg-icon ${this.className}`
    } else {
      return 'svg-icon'
    }
  }

  get styleExternalIcon() {
    return {
      mask: `url(${this.iconClass}) no-repeat 50% 50%`,
      '-webkit-mask': `url(${this.iconClass}) no-repeat 50% 50%`
    }
  }
}
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
}
</style>
