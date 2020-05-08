<template>
  <div>
    <el-row>
      <el-col :span="6" style="background-color: #353646;">
        <div class="grid-content bg-purple" style="background-color: #353646;">
          <el-tree :data="data" :props="defaultProps" accordion @node-click="handleNodeClick">
          </el-tree>
        </div>
      </el-col>
      <el-col :span="18">
        <div class="grid-content bg-purple-light" style="background-color: #e5e5e5;box-sizing: border-box;padding: 0 30px;padding-top: 16px;">
          <p style="box-sizing: border-box;padding-left: 10px;border-left: 2px solid #42B983;">图书管理清单</p>
          <div style="margin-top: 16px;background-color: white;box-sizing: border-box;padding: 40px 90px 14px 90px;">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
              <el-form-item label="图书名称">
                <el-input v-model="formInline.user" placeholder="" style="padding-left: 7px;"></el-input>
              </el-form-item>
              <el-form-item label="作者名称">
                <el-input v-model="formInline.user" placeholder="" style="padding-left: 7px;"></el-input>
              </el-form-item>
              <el-form-item label="ISBN号">
                <el-input v-model="formInline.user" placeholder="" style="padding-left: 7px;"></el-input>
              </el-form-item>
              <el-form-item label="图书分类">
                <el-select v-model="formInline.region" placeholder="全部">
                  <el-option label="科幻" value="shanghai"></el-option>
                  <el-option label="历史" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="出版社">
                <el-input v-model="formInline.user" placeholder="全部" style="padding-left: 7px;"></el-input>
              </el-form-item>
              <el-form-item label="活动时间">
                <el-date-picker v-model="formInline.value1" type="date" value-format="yyyy-mm-dd"></el-date-picker>
              </el-form-item>
              <el-form-item style="width: 100%;text-align: center;">
                <el-button type="primary">查询</el-button>
                <el-button>清空</el-button>
              </el-form-item>
            </el-form>
          </div>
          <div style="margin-top: 20px;background-color: white;box-sizing: border-box;padding: 30px 40px 40px 40px;">
            <p>
              <el-button type="primary">添加</el-button>
              <el-button type="primary">修改</el-button>
              <el-button type="primary">删除</el-button>
            </p>
            <el-table ref="multipleTable" :data="tableData" :header-cell-style="tableHeaderColor" tooltip-effect="dark" style="width: 100%;margin-top: 20px;" @selection-change="handleSelectionChange" :row-class-name="tableRowClassName">
              <el-table-column type="selection" width="55">
              </el-table-column>
              <el-table-column prop="name2" label="ISBN号" width="80">
              </el-table-column>
              <el-table-column prop="name3" label="图书类型" width="90">
              </el-table-column>
              <el-table-column prop="name4" label="图书名称" width="110">
              </el-table-column>
              <el-table-column prop="name5" label="作者名称" width="90">
              </el-table-column>
              <el-table-column prop="name6" label="出版社" width="90">
              </el-table-column>
              <el-table-column label="日期" width="120">
                <template slot-scope="scope">{{ scope.row.date }}</template>
              </el-table-column>
              <el-table-column prop="name" label="总数量" width="80">
              </el-table-column>
              <el-table-column prop="address" label="在管数量" width="90">
              </el-table-column>
              <el-table-column prop="name1" label="价格" width="80">
              </el-table-column>
              <el-table-column fixed="right" label="操作" width="100">
                <template slot-scope="scope">
                  <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                  <el-button type="text" size="small">借阅</el-button>
                </template>
              </el-table-column>
            </el-table>
            <ul style="margin-top: 16px;display: flex;justify-content: space-between;align-items: center;s">
              <li style="line-height: 50px;">共57条，每页<span style="text-align: center;display: inline-block;width: 50px;height: 50px;border: 1px solid #efefef;">10</span>  条</li>
              <li>
                <el-pagination
                  background
                  layout="prev, pager, next"
                  :total="1000">
                </el-pagination>
              </li>
            </ul>
          </div>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        formInline: {
          user: '',
          region: '',
          value1: ''
        },
        tableData: [{
            name2: '114',
            name3: '玄幻类',
            name4: '侦探类型小说',
            name5: 'wenkang',
            name6: '某出版社',
            date: '2016-05-03',
            name: '1000',
            address: '300',
            name1: '210.00'
          },
          {
            name2: '114',
            name3: '玄幻类',
            name4: '侦探类型小说',
            name5: 'wenkang',
            name6: '某出版社',
            date: '2016-05-03',
            name: '1000',
            address: '300',
            name1: '210.00'
          },
          {
            name2: '114',
            name3: '玄幻类',
            name4: '侦探类型小说',
            name5: 'wenkang',
            name6: '某出版社',
            date: '2016-05-03',
            name: '1000',
            address: '300',
            name1: '210.00'
          },
          {
            name2: '114',
            name3: '玄幻类',
            name4: '侦探类型小说',
            name5: 'wenkang',
            name6: '某出版社',
            date: '2016-05-03',
            name: '1000',
            address: '300',
            name1: '210.00'
          },
          {
            name2: '114',
            name3: '玄幻类',
            name4: '侦探类型小说',
            name5: 'wenkang',
            name6: '某出版社',
            date: '2016-05-03',
            name: '1000',
            address: '300',
            name1: '210.00'
          },
          {
           name2: '114',
            name3: '玄幻类',
            name4: '侦探类型小说',
            name5: 'wenkang',
            name6: '某出版社',
            date: '2016-05-03',
            name: '1000',
            address: '300',
            name1: '210.00'
          },
          {
            name2: '114',
            name3: '玄幻类',
            name4: '侦探类型小说',
            name5: 'wenkang',
            name6: '某出版社',
            date: '2016-05-03',
            name: '1000',
            address: '300',
            name1: '210.00'
          },
          {
             name2: '114',
            name3: '玄幻类',
            name4: '侦探类型小说',
            name5: 'wenkang',
            name6: '某出版社',
            date: '2016-05-03',
            name: '1000',
            address: '300',
            name1: '210.00'
          },
          {
           name2: '114',
            name3: '玄幻类',
            name4: '侦探类型小说',
            name5: 'wenkang',
            name6: '某出版社',
            date: '2016-05-03',
            name: '1000',
            address: '300',
            name1: '210.00'
          },
          {
           name2: '114',
            name3: '玄幻类',
            name4: '侦探类型小说',
            name5: 'wenkang',
            name6: '某出版社',
            date: '2016-05-03',
            name: '1000',
            address: '300',
            name1: '210.00'
          }
        ],
        data: [{
          label: '图书管理',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '图书借阅',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '图书推荐',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }, {
          label: '图书捐赠',
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      },
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      onSubmit() {
        console.log('submit!');
      },
      tableRowClassName({row, rowIndex}) {
              if (rowIndex%2=== 1)  //=>这里可以改成 rowIndex%2=== 1，后面直接else即可达到隔行变色效果。
              {
                return 'warning-row';
              } else if (rowIndex === 3) {
                return 'success-row';
              }
              return '';
            },
             tableHeaderColor({ row, column, rowIndex, columnIndex }) {
                  if (rowIndex === 0) {
                    return 'background-color: #ebf1fb;text-align:center'
                  }
                },

    },

  };
</script>

<style scoped="scoped">
  .el-tree {
    background-color: #353646;
    color: white;
    padding-top: 20px;
    padding-bottom: 950px;
  }


</style>
