<template>
  <div class="newMessage">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>消息</el-breadcrumb-item>
      <el-breadcrumb-item>新消息</el-breadcrumb-item>
    </el-breadcrumb>
    <div>
      <el-card class="box-card">
        <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: '',
        password: '123'
      }
    }
  },
  created() {
    this.getDatas()
  },
  methods: {
    getDatas() {
      this.axios.get('/questionnaire/findAll.action').then(e => {
        console.log(e.data)
      })
    }
  }
}
</script>
<style lang="less" scoped>
.el-breadcrumb {
  margin-bottom: 15px;
}
</style>
