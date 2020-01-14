<template>
  <div class="login">
    <div class="login_box">
      <div class="avatar_box">
        <img src="../assets/logo.png" />
      </div>
      <el-form ref="form" :model="form" label-width="0px" class="login_form">
        <el-form-item>
          <el-input
            placeholder="admin"
            v-model="form.username"
            prefix-icon="iconfont icon-bussiness-man
"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            placeholder="password"
            v-model="form.password"
            show-password
            prefix-icon="iconfont icon-password"
          ></el-input>
        </el-form-item>
        <el-form-item class="btn">
          <el-button type="primary" @click="onSubmit">登陆</el-button>
          <el-button type="info">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log(JSON.stringify(this.form))
      if (this.form.username === 'admin' && this.form.password === '123456') {
        this.$router.push({ path: '/index' })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  height: 100%;
  background-image: url('../assets/bgi.jpg');
  background-color: #2b4b6b;
}
.login_box {
  width: 28.125rem;
  height: 18.75rem;
  background-color: #ffffff;
  border-radius: 0.1875rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .avatar_box {
    width: 8.125rem;
    height: 8.125rem;
    border: 0.0625rem solid #eee;
    border-radius: 50%;
    padding: 0.625rem;
    box-shadow: 0 0 0.625rem #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}
.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}

.btn {
  display: flex;
  justify-content: flex-end;
}
</style>
