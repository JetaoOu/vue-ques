<template>
  <div class="index">
    <div class="navmenu">
      <Navmenu />
    </div>
    <div class="index-content">
      <thetitle titleName="标题" />
      <div>neir</div>
    </div>
  </div>
</template>

<script>
import thetitle from './title.vue'
import Navmenu from './navMenu'
export default {
  components: { thetitle, Navmenu },
  data() {
    return {
      form: {
        username: '',
        password: '123'
      }
    }
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.index {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
}
</style>
