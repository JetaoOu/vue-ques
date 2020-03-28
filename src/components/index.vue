<template>
  <div class="index">
    <el-container>
      <!-- header -->
      <el-header>
        <div>
          <img src="../assets/xytb.png" alt="图标"/>
          <span>问卷调查系统</span>
        </div>
        <div>
          <img src="https://tse1-mm.cn.bing.net/th?id=OIP.7i6T7KI8ODeymBIwfG3z_gHaHa&w=146&h=160&c=8&rs=1&qlt=90&dpr=1.25&pid=3.1&rm=2" alt="个人头像"/>
        </div>
      </el-header>
      <!-- container -->
      <el-container>
        <el-aside width="200px">
          <!-- menu -->
          <el-menu
            default-active="/index1"
            :unique-opened="true"
            router
            class="el-menu-vertical-demo"
            background-color="#d3dce6"
          >
            <!-- submenu -->
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-house"></i>
                <span>首页</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/welcome">选项1</el-menu-item>
                <el-menu-item index="/index2">选项2</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-news"></i>
                <span>消息</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/newQuestionNaire">新问卷</el-menu-item>
                <el-menu-item index="/didQuestionNaire">已完成问卷 </el-menu-item>
                <el-menu-item index="/abortQuestionNaire">已截止问卷</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-user"></i>
                <span>个人中心</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/userInfo">个人信息</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                data: {},
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
  }

  .el-header {
    background-color: #b3c0d1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    font-size: 35px;

    > div {
      display: flex;
      align-items: center;

      span {
        margin-left: 20px;
      }
    }

    img {
      height: 55px;
      border-radius: 50%;
      background-color: #eee;
    }
  }

  .el-aside {
    background-color: #d3dce6;
  }

  .el-main {
    background-color: #e9eef3;
  }

  .el-container {
    height: 100%;
  }
</style>
