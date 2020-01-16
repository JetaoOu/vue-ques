<template>
  <div class="userInfo">
    <div class="newMessage">
      <!-- 面包屑 -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>个人中心</el-breadcrumb-item>
        <el-breadcrumb-item>个人信息</el-breadcrumb-item>
      </el-breadcrumb>
      <div>
        <!-- 卡片 -->
        <el-card class="box-card" shadow="never">
          <div slot="header" class="clearfix">
            <span>个人信息</span>
            <div>
              <el-button type="primary" :disabled="!editAble" @click="edituser()">编辑</el-button>
              <el-button type="primary" :disabled="editAble" @click="commituser()">提交</el-button>
            </div>
          </div>
          <el-form ref="form" :model="form" label-width="80px">
            <div class="form-line">
              <!-- 姓名 -->
              <el-form-item label="姓名">
                <el-input :readonly="editAble" v-model="form.name"></el-input>
              </el-form-item>
              <!-- 毕业年度 -->
              <el-form-item label="毕业年度">
                <el-input :readonly="editAble" v-model="form.graduationYear"></el-input>
              </el-form-item>
              <!-- 性别 -->
              <el-form-item label="性别">
                <el-radio-group :disabled="editAble" v-model="form.sex">
                  <el-radio label="男"></el-radio>
                  <el-radio label="女"></el-radio>
                </el-radio-group>
              </el-form-item>
            </div>
            <!-- 通讯地址 -->
            <el-form-item label="通讯地址">
              <el-input :readonly="editAble" v-model="form.mailingAAddress"></el-input>
            </el-form-item>
            <div class="form-line">
              <!-- 手机 -->
              <el-form-item label="手机">
                <el-input :readonly="editAble" v-model="form.phone"></el-input>
              </el-form-item>
              <!-- Email -->
              <el-form-item label="Email">
                <el-input :readonly="editAble" v-model="form.email"></el-input>
              </el-form-item>
            </div>
            <!-- 其他 -->
            <el-form-item label="其他">
              <el-input :readonly="editAble" placeholder="QQ、微信号..." v-model="form.remark"></el-input>
            </el-form-item>
            <!-- 毕业后计划 -->
            <label for>毕业后计划</label>
            <div class="form-line">
              <el-form-item>
                <el-radio-group
                  :disabled="editAble"
                  v-model="form.graduationPlan"
                  @change="changePlane"
                >
                  <el-radio label="求职"></el-radio>
                  <el-radio label="考研"></el-radio>
                  <el-radio label="出国"></el-radio>
                  <el-radio label="其他，如"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item>
                <el-input
                  :disabled="!vshow.elses"
                  :readonly="editAble"
                  placeholder="毕业后计划"
                  v-model="form.graduationPlanSituationName1"
                ></el-input>
              </el-form-item>
            </div>
            <!-- 目前的求职情形为： -->
            <div v-show="vshow.job">
              <label for>目前的求职情形为：</label>
              <div class="form-line">
                <el-form-item>
                  <el-radio-group :disabled="editAble" v-model="form.graduationPlanSituation">
                    <el-radio label="进行中"></el-radio>
                    <el-radio label="已被录用"></el-radio>
                  </el-radio-group>
                </el-form-item>
              </div>
              <div v-show="form.graduationPlanSituation==='已被录用'" class="form-line">
                <el-form-item>
                  <el-form-item label="单位名称:">
                    <el-input :readonly="editAble" v-model="form.graduationPlanSituationName1"></el-input>
                  </el-form-item>
                </el-form-item>
                <el-form-item>
                  <el-form-item label="岗位名称:">
                    <el-input :readonly="editAble" v-model="form.graduationPlanSituationName2"></el-input>
                  </el-form-item>
                </el-form-item>
              </div>
            </div>
            <!-- 目前的升学情形为： -->
            <div v-show="vshow.study">
              <label for>目前的升学情形为：</label>
              <div class="form-line">
                <el-form-item>
                  <el-radio-group :disabled="editAble" v-model="form.graduationPlanSituation">
                    <el-radio label="进行中"></el-radio>
                    <el-radio label="已被录用"></el-radio>
                  </el-radio-group>
                </el-form-item>
              </div>
              <div v-show="form.graduationPlanSituation==='已被录用'" class="form-line">
                <el-form-item>
                  <el-form-item label="学校名称:">
                    <el-input :readonly="editAble" v-model="form.graduationPlanSituationName1"></el-input>
                  </el-form-item>
                </el-form-item>
                <el-form-item>
                  <el-form-item label="院系名:">
                    <el-input :readonly="editAble" v-model="form.graduationPlanSituationName2"></el-input>
                  </el-form-item>
                </el-form-item>
              </div>
            </div>
            <!-- 目前的出国情形为： -->
            <div v-show="vshow.contry">
              <label for>目前的出国情形为：</label>
              <div class="form-line">
                <el-form-item>
                  <el-radio-group :disabled="editAble" v-model="form.graduationPlanSituation">
                    <el-radio label="进行中"></el-radio>
                    <el-radio label="已被录用"></el-radio>
                  </el-radio-group>
                </el-form-item>
              </div>
              <div v-show="form.graduationPlanSituation==='已被录用'" class="form-line">
                <el-form-item>
                  <el-form-item label="学校名称:">
                    <el-input :readonly="editAble" v-model="form.graduationPlanSituationName1"></el-input>
                  </el-form-item>
                </el-form-item>
                <el-form-item>
                  <el-form-item label="院系名:">
                    <el-input :readonly="editAble" v-model="form.graduationPlanSituationName2"></el-input>
                  </el-form-item>
                </el-form-item>
              </div>
            </div>
          </el-form>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editAble: true,
      vshow: {
        job: true,
        study: false,
        contry: false,
        elses: false
      },
      vshowtemp: {
        job: '求职',
        study: '考研',
        contry: '出国',
        elses: '其他，如'
      },
      form: {
        name: '大斌',
        graduationYear: '2016年',
        sex: '女',
        mailingAAddress: '广东省广州市岑村圣堂大街三巷九号',
        phone: '13612447575',
        email: '2366573895@qq.com',
        remark: 'ojt0513',
        graduationPlan: '求职', //  毕业后计划
        graduationPlanSituation: '已被录用', //   计划情形
        graduationPlanSituationName1: '肇庆学院', //    单位名/学校名
        graduationPlanSituationName2: '学生辅导员' // 岗位名/院系名
      }
    }
  },
  methods: {
    commituser() {
      console.log(this.form)
      this.editAble = !this.editAble
    },
    edituser() {
      console.log('1' + this.editAble)
      if (this.editAble) {
        this.editAble = !this.editAble
      }
      console.log('2' + this.editAble)
    },
    changePlane(e) {
      this.form.graduationPlanSituation = ''
      this.form.graduationPlanSituationName1 = ''
      this.form.graduationPlanSituationName2 = ''
      for (const key in this.vshowtemp) {
        if (this.vshow.hasOwnProperty(key)) {
          this.vshow[key] = false
          if (this.vshowtemp[key] === e) {
            this.vshow[key] = true
          }
        }
      }
    }
  }
}
</script>
<style lang="less" scoped>
.el-breadcrumb {
  margin-bottom: 15px;
}
.form-line {
  display: flex;
}
.clearfix {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 25px;
}
</style>
