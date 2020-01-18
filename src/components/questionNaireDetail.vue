<template>
  <div class="survey">
    <el-container>
      <el-main>
        <div class="survey-content">
          <div class="ques-title">{{ques.title}}</div>
          <div class="forward">
            <div class="ques-title-son">{{forewordtitle}}</div>
            <div class="ques-title-son-content">{{foreword}}</div>
          </div>
          <div class="ques-content">
            <el-table :data="list" style="width: 100%" stripe>
              <el-table-column prop="title" label="核心能力"></el-table-column>
              <el-table-column width="290" :label="question1">
                <el-table-column width="250" prop="id">
                  <template slot="header">
                    <img class="image" src="../assets/guanlian.png" alt />
                  </template>
                  <template slot-scope="scope">
                    <el-radio-group v-model="scope.row.id">
                      <el-tooltip :content="texts[0]" placement="top" effect="light">
                        <el-radio label="5">5</el-radio>
                      </el-tooltip>
                      <el-tooltip :content="texts[1]" placement="top" effect="light">
                        <el-radio label="4">4</el-radio>
                      </el-tooltip>
                      <el-tooltip :content="texts[2]" placement="top" effect="light">
                        <el-radio label="3">3</el-radio>
                      </el-tooltip>
                      <el-tooltip :content="texts[3]" placement="top" effect="light">
                        <el-radio label="2">2</el-radio>
                      </el-tooltip>
                      <el-tooltip :content="texts[4]" placement="top" effect="light">
                        <el-radio label="1">1</el-radio>
                      </el-tooltip>
                    </el-radio-group>
                  </template>
                </el-table-column>
              </el-table-column>
              <el-table-column :label="question2">
                <el-table-column width="250" prop="province">
                  <template slot="header">
                    <img class="image" src="../assets/guanlian.png" alt />
                  </template>
                  <template slot-scope="scope">
                    <el-radio-group v-model="scope.row.id1">
                      <el-tooltip :content="texts[0]" placement="top" effect="light">
                        <el-radio label="5">5</el-radio>
                      </el-tooltip>
                      <el-tooltip :content="texts[1]" placement="top" effect="light">
                        <el-radio label="4">4</el-radio>
                      </el-tooltip>
                      <el-tooltip :content="texts[2]" placement="top" effect="light">
                        <el-radio label="3">3</el-radio>
                      </el-tooltip>
                      <el-tooltip :content="texts[3]" placement="top" effect="light">
                        <el-radio label="2">2</el-radio>
                      </el-tooltip>
                      <el-tooltip :content="texts[4]" placement="top" effect="light">
                        <el-radio label="1">1</el-radio>
                      </el-tooltip>
                    </el-radio-group>
                  </template>
                </el-table-column>
              </el-table-column>
            </el-table>
          </div>
          <div class="survey-bottom">
            <div class="survey-bpttom-text">{{bottomTips}}</div>
            <div class="survey-bottom-btn">
              <el-button type="primary" plain icon="el-icon-arrow-left" @click="returnBack">返回</el-button>
              <el-button type="primary" @click="submit">提交</el-button>
            </div>
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
      forewordtitle: '专业核心能力及学习成效满意度',
      foreword:
        '请问您就读本专业时，本专业课程的设计与教师教学是否提供您具备下列各项核心能力？',
      question1: '您认为此项核心能力对于您毕业后就业的重要性',
      question2: '您认为您在学习本专业时是否已教授您获得此项核心能力',
      list: [
        {
          id: 0,
          id1: '',
          title:
            '1.人文社会科学素养、良好职业规范：\n具有人文社会科学素养，社会责任感强，能够在计算机应用工程实践中理解并遵守工程职业道德和规范，履行责任。',
          content:
            '具有人文社会科学素养，社会责任感强，能够在计算机应用工程实践中理解并遵守工程职业道德和规范，履行责任。',
          shadow: true,
          note: 'Tips',
          extra: '额外信息',
          thumbnail: 'https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png'
        },
        {
          id: 1,
          id1: '',
          title:
            '1.人文社会科学素养、良好职业规范：\n具有人文社会科学素养，社会责任感强，能够在计算机应用工程实践中理解并遵守工程职业道德和规范，履行责任。',
          content:
            '具有人文社会科学素养，社会责任感强，能够在计算机应用工程实践中理解并遵守工程职业道德和规范，履行责任。',
          shadow: true,
          note: 'Tips',
          extra: '额外信息',
          thumbnail: 'https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png'
        },
        {
          id: 2,
          id1: '',
          title:
            '1.人文社会科学素养、良好职业规范：\n具有人文社会科学素养，社会责任感强，能够在计算机应用工程实践中理解并遵守工程职业道德和规范，履行责任。',
          content:
            '具有人文社会科学素养，社会责任感强，能够在计算机应用工程实践中理解并遵守工程职业道德和规范，履行责任。',
          shadow: true,
          note: 'Tips',
          extra: '额外信息',
          thumbnail: 'https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png'
        },
        {
          id: 3,
          id1: '',
          title:
            '1.人文社会科学素养、良好职业规范：\n具有人文社会科学素养，社会责任感强，能够在计算机应用工程实践中理解并遵守工程职业道德和规范，履行责任。',
          content:
            '具有人文社会科学素养，社会责任感强，能够在计算机应用工程实践中理解并遵守工程职业道德和规范，履行责任。',
          shadow: true,
          note: 'Tips',
          extra: '额外信息',
          thumbnail: 'https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png'
        },
        {
          id: 4,
          id1: '',
          title:
            '1.人文社会科学素养、良好职业规范：\n具有人文社会科学素养，社会责任感强，能够在计算机应用工程实践中理解并遵守工程职业道德和规范，履行责任。',
          content:
            '具有人文社会科学素养，社会责任感强，能够在计算机应用工程实践中理解并遵守工程职业道德和规范，履行责任。',
          shadow: true,
          note: 'Tips',
          extra: '额外信息',
          thumbnail: 'https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png'
        },
        {
          id: 5,
          id1: '',
          title:
            '1.人文社会科学素养、良好职业规范：\n具有人文社会科学素养，社会责任感强，能够在计算机应用工程实践中理解并遵守工程职业道德和规范，履行责任。',
          content:
            '具有人文社会科学素养，社会责任感强，能够在计算机应用工程实践中理解并遵守工程职业道德和规范，履行责任。',
          shadow: true,
          note: 'Tips',
          extra: '额外信息',
          thumbnail: 'https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png'
        },
        {
          id: 6,
          id1: '',
          title:
            '1.人文社会科学素养、良好职业规范：\n具有人文社会科学素养，社会责任感强，能够在计算机应用工程实践中理解并遵守工程职业道德和规范，履行责任。',
          content:
            '具有人文社会科学素养，社会责任感强，能够在计算机应用工程实践中理解并遵守工程职业道德和规范，履行责任。',
          shadow: true,
          note: 'Tips',
          extra: '额外信息',
          thumbnail: 'https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png'
        }
      ],
      texts: ['非常关联', '关联很大', '一般关联', '关联很小', '无关联'],
      bottomTips: '注：请选择上述关联性，5分为非常关联，1分为无关联'
    }
  },
  created() {
    this.getRouterData()
  },
  methods: {
    getRouterData() {
      this.ques = this.$route.params.ques
    },
    returnBack() {
      this.$router.push('/newQuestionNaire')
    },
    submit() {
      this.$alert('您确定提交问卷吗？', '提交', {
        confirmButtonText: '确定',
        callback: action => {
          this.$router.push('/newQuestionNaire')
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.survey {
  width: 100%;
  height: 100%;
}

.el-container {
  background-color: #dcdfe6;
  padding-bottom: 80px;
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
.back {
  width: 98%;
  margin: 10px;
}
.ques-title {
  width: 80%;
  margin-top: 60px;
  font-size: 40px;
  margin-left: 300px;
  margin-right: 300px;
  text-align: center;
  letter-spacing: 2px;
}
.forward {
  margin-top: 60px;
  width: 80%;
}
.ques-title-son {
  font-size: 25px;
  text-align: left;
  margin-left: 20px;
}
.ques-title-son-content {
  margin-top: 10px;
  margin-left: 20px;
}
.ques-content {
  width: 80%;
  background-color: #dcdfe6;
  margin-top: 10px;
  margin-left: 60px;
  margin-right: 60px;
}
.survey-bottom {
  width: 80%;
  margin-top: 20px;
  margin-bottom: 120px;
}
.survey-bottom-text {
  width: 100%;
  text-align: left;
}
.survey-bottom-btn {
  margin-top: 60px;
  display: flex;
  justify-content: center;
}
.image {
  width: 230px;
  height: 100%;
}
.el-radio {
  width: 20px;
}
</style>
