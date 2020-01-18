<template>
  <div class="welcome">
    <!-- 面包屑 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>选项1</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="box-card" shadow="never">
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in lists" :key="item">
          <h3 class="medium">{{ item.image }}</h3>
        </el-carousel-item>
      </el-carousel>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: {},
      form: {
        username: '',
        password: '123'
      }
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      // this.axios.get('/rounterchart/findAll.action').then((e) => {
      //   console.log(e.data)
      //   this.lists = e.data
      // })

      this.$http.get('/rounterchart/findAll.action').then(e => {
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
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
