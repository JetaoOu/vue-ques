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
              <el-image :src="scope.row.image" fit="contain" class="image">
                <div slot="placeholder" class="image-slot">
                  加载中<span class="dot">...</span>
                </div>
              </el-image>
            </template>
          </el-table-column>
          <el-table-column prop="title" label="标题" width="180" align="center"></el-table-column>
          <el-table-column prop="author" label="作者" align="center"></el-table-column>
          <el-table-column prop="savetime" label="发布时间" align="center"></el-table-column>
          <el-table-column prop="changetime" label="结束时间" align="center"></el-table-column>
         <!-- <el-table-column label="操作" width="160px" align="center">
            <template slot-scope="scope">
              <el-button @click="onclick(scope.row)" type="primary" plain size="small">立即填写</el-button>
            </template>
          </el-table-column>-->
        </el-table>
      </el-card>
    </div>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-size="pageSize"
        layout="total, prev, pager, next"
        :total="pageTotal">
      </el-pagination>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                currentPage: 0,
                pageSize: 4,
                pageTotal: 100,
                form: []
            }
        },
        created() {
            this.getQuesListData()
        },
        methods: {
            //获取问卷列表数据
            getQuesListData() {
                this.$http.get('/questionnaire/findAll.action', {
                    params: {
                        status: '已结束'
                    }
                }).then(e => {
                    this.form = e.data
                })
            },
            onclick(row) {
                /*this.$router.push({
                    name: 'survey',
                    params: {
                        ques: row
                    }
                })*/
            },
            //分页插件回调
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
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
