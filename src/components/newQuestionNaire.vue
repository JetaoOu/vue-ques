<template>
  <div class="newQuestionNaire">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>消息</el-breadcrumb-item>
      <el-breadcrumb-item>新消息</el-breadcrumb-item>
    </el-breadcrumb>
    <div>
      <el-card class="box-card">
        <el-table :data="form" style="width: 100%" highlight-current-row @row-dblclick="onclick">
          <el-table-column label="图片" width="180" align="center">
            <template slot-scope="scope">
              <img :src="scope.row.img" alt="aaa" class="image" />
            </template>
          </el-table-column>
          <el-table-column prop="title" label="标题" width="180" align="center"></el-table-column>
          <el-table-column prop="author" label="作者" align="center"></el-table-column>
          <el-table-column prop="changetime" label="发布时间" align="center"></el-table-column>
          <el-table-column label="操作" width="160px" align="center">
            <template slot-scope="scope">
              <el-button @click="onclick(scope.row)" type="primary" plain size="small">立即填写</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: [
        {
          img: 'http://pics.sc.chinaz.com/files/pic/pic9/201701/zzpic800.jpg',
          title: '肇庆学院计算机科学与软件学院应届毕业生问卷调查表',
          author: '问卷作者',
          changetime: '2016-05-02'
        },
        {
          img: 'http://pics.sc.chinaz.com/files/pic/pic9/201701/zzpic800.jpg',
          title: '问卷题目1',
          author: '问卷作者1',
          changetime: '2016-05-03'
        }
      ]
    }
  },
  created() {
    this.getDatas()
  },
  methods: {
    getDatas() {
      this.$http.get('/questionnaire/findAll.action').then(e => {
        console.log(e.data)
      })
    },
    onclick(row) {
      this.$router.push({
        name: 'survey',
        params: {
          ques: row
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.el-breadcrumb {
  margin-bottom: 15px;
}
.image {
  height: 80px;
}
</style>
