<template>
  <div>
    <el-container>
      <el-header style='height: 84px;'>
        <el-row>
          <el-col :span="6">
            <div class="grid-content bg-purple" style="background-color: #2b91d1;">图书馆系统</div>
          </el-col>
          <el-col :span="1" style="text-align: center;border-bottom: 1px solid #E5E5E5;">
            <i class="el-icon-s-fold"></i>
          </el-col>
          <el-col :span="13" class="y">
            <div class="grid-content bg-purple-light">
              <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
               <el-tab-pane>
                  <span slot="label"><i class="el-icon-user-solid"></i> 关于我们</span>
                <router-link to="/Button/Con1"> </router-link>
                </el-tab-pane>
                <el-tab-pane>
                  <span slot="label"><i class="el-icon-circle-check"></i> 用户验证</span>
                </el-tab-pane>
                <el-tab-pane>
                  <span slot="label"><i class="el-icon-edit"></i> 意见反馈</span>
                </el-tab-pane>
                <el-tab-pane>
                  <span slot="label"><i class="el-icon-edit-outline"></i> 退出系统</span>
                </el-tab-pane>
              </el-tabs>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple"style="border-left: 1px solid #E5E5E5;border-bottom: 1px solid #E5E5E5;">
              <img src="../assets/11.jpg" style="width: 40px;height: 40px; border-radius: 50%;border: 1px solid #E5E5E5;vertical-align: middle;" />
               <span>hello,</span>
               <span style="color: #2b91d1;">Wenkang</span>
               <span class="el-icon-arrow-down"></span>
           </div>
          </el-col>
        </el-row>
      </el-header>
<router-view></router-view>
    </el-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>

<style>
  .el-header {
    line-height: 84px;
    padding: 0;
    background-color: white;
  }
  .bg-purple:nth-child(1) {
    text-align: center;
  }

  .el-tabs--card div {
    height: 84px;
    padding-top: 0;
    line-height: 84px;
  }

</style>
