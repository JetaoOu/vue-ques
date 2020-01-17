<template>
  <div class="survey">
    <el-container>
      <el-main>
        <div class="survey-content">
          <div class="ques-title">{{ques.title}}</div>
          <div class="ques-content">
            <el-table :data="list" style="width: 100%">
              <el-table-column prop="title"></el-table-column>
              <el-table-column width="290" :label="question1">
                <el-table-column width="250" prop="province" label="省份"></el-table-column>
              </el-table-column>
              <el-table-column :label="question2">
                <el-table-column width="250" prop="province" label="省份"></el-table-column>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  filters: {},
  data() {
    return {
      ques: {
        id: '',
        title: '',
        author: '',
        changetime: ''
      },
      foreword:
        '请问您就读本专业时，本专业课程的设计与教师教学是否提供您具备下列各项核心能力？',
      question1: '您认为此项核心能力对于您毕业后就业的重要性',
      question2: '您认为您在学习本专业时是否已教授您获得此项核心能力',
      list: [
        {
          id: 0,
          title: '1.人文社会科学素养、良好职业规范：\n具有人文社会科学素养，社会责任感强，能够在计算机应用工程实践中理解并遵守工程职业道德和规范，履行责任。',
          content:
            '具有人文社会科学素养，社会责任感强，能够在计算机应用工程实践中理解并遵守工程职业道德和规范，履行责任。',
          shadow: true,
          note: 'Tips',
          extra: '额外信息',
          thumbnail: 'https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png'
        },
        {
          id: 1,
          title: '2.人文社会科学素养、良好职业规范：',
          content:
            '具有人文社会科学素养，社会责任感强，能够在计算机应用工程实践中理解并遵守工程职业道德和规范，履行责任。',
          shadow: true,
          note: 'Tips',
          extra: '额外信息',
          thumbnail: 'https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png'
        },
        {
          id: 2,
          title: '3.人文社会科学素养、良好职业规范：',
          content:
            '具有人文社会科学素养，社会责任感强，能够在计算机应用工程实践中理解并遵守工程职业道德和规范，履行责任。',
          shadow: true,
          note: 'Tips',
          extra: '额外信息',
          thumbnail: 'https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png'
        }
      ]
    }
  },
  created() {
    this.getRouterData()
  },
  methods: {
    getRouterData() {
      this.ques = this.$route.params.ques
    }
  }
}
</script>

<style lang="scss" scoped>
.survey {
  width: 100%;
  height: 100%;
}
.el-container {
  height: 100%;
  background-color: #dcdfe6;
}
.el-main {
  display: flex;
  justify-content: center;
}
.survey-content {
  width: 65%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.ques-title {
  margin-top: 60px;
  font-size: 35px;
  margin-left: 225px;
  margin-right: 225px;
  text-align: center;
}
.ques-content {
  width: 80%;
  background-color: #dcdfe6;
  margin-top: 60px;
  margin-left: 60px;
  margin-right: 60px;
}
.el-table thead.is-group th {
  background: #fff;
}

.el-table thead.is-group tr:first-of-type th:first-of-type:before {
  content: '核心能力';
  text-align: center;
  position: absolute;
  width: 450px;
  height: 1px;
  bottom: 50px;
  right: 0;
}

.el-table thead.is-group tr:first-of-type th:first-of-type:after {
  content: '问题';
  text-align: center;
  position: absolute;
  width: 450px;
  top: 30px;
  left: 0;
}

.el-table thead.is-group tr:first-of-type th:first-of-type .cell {
  position: absolute;
  top: 0;
  left: 0;
  width: 502px;
  height: 1px;
  background-color: #ebeef5;
  display: block;
  text-align: center;
  transform: rotate(18deg);
  transform-origin: top left;
  -ms-transform: rotate(18deg);
  -ms-transform-origin: top left;
  -webkit-transform: rotate(18deg);
  -webkit-transform-origin: top left;
}
</style>
