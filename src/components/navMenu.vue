<template>
  <div class="navMenu">
       <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>调查问卷平台</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">首页</el-menu-item>
          <el-menu-item index="1-2">消息</el-menu-item>
          <el-menu-item index="1-3">个人中心</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
       </el-menu>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.navMenu{
    width: 18%;
    height: 100%;
}
</style>
