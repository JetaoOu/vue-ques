<template>
  <div class="title">
    <div class="title_name">{{titleName}}</div>
    <div class="user_info">
      <div class="info_avatar">
        <img src="../assets/logo.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'thetitle',
  props: ['titleName'],
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
.title {
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 65px;
  background-color: #d3dce6;
}
.title_name {
  height: 100%;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 3em;
  vertical-align: middle;
  font-weight: normal;
}
.user_info {
  height: 100%;
}
.info_avatar {
  height: 55px;
  border: 2px solid #eee;
  border-radius: 50%;
  padding: 2px;
  box-shadow: 0 0 2px #ddd;
  background-color: #fff;
  img {
    height: 100%;
    border-radius: 50%;
    background-color: #eee;
  }
}
</style>
