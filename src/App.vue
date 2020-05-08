<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}
.el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
.el-tree-node__content{
  box-sizing: border-box;
  padding: 20px;
}
.el-tree-node__content:hover{
      background-color: #5d5e6b !important;
  }
  .el-tree-node:focus>.el-tree-node__content{
    background-color: #5d5e6b !important;
  }
</style>
