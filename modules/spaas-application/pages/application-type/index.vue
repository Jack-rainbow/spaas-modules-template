<template>
  <div class="page">
    测试pont
  </div>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'vue-property-decorator'

@Component({})
export default class AppType extends Vue {
  created() {
    console.log(
      this.$api.petstore.pet.findPetsByStatus
        .request({
          status: 'sold'
        })
        .then(res => {
          console.log(res)
        }),
      '11'
    )
  }
}
</script>

<style scoped lang="less"></style>
