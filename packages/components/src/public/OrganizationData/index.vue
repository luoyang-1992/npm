<template>
  <div class="organization-data">
    <el-dialog title="组织数据" :visible.sync="dialogVisible" width="600px">
      <el-tabs v-model="activeName">
        <el-tab-pane label="组织机构树" name="first">
          <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
        </el-tab-pane>
        <el-tab-pane label="按条件搜索" name="second">
          <el-form
            :inline="true"
            ref="form"
            :model="form"
            label-width="auto"
            size="small"
            label-suffix=":"
            label-position="right"
            style="text-align: center;"
          >
            <el-row>
              <el-col :span="12">
                <el-form-item label="组织架构编码">
                  <el-input v-model="form.name" style="width:150px"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="组织机构名称">
                  <el-input v-model="form.name" style="width:150px"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="组织机构类别">
                  <el-input v-model="form.name" style="width:150px"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="组织机构层次">
                  <el-input v-model="form.name" style="width:150px"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-button type="primary" size="small" style="float: right;margin-right: 20px;">查 询</el-button>
          </el-form>
          <tables>
            <el-table :data="tableData" style="width: 100%">
              <el-table-column
                prop="date"
                label="序号"
                align="center"
                show-overflow-tooltip
                width="80"
              ></el-table-column>
              <el-table-column prop="name" label="机构编码" align="center" show-overflow-tooltip></el-table-column>
              <el-table-column prop="address" label="机构名称" align="center" show-overflow-tooltip></el-table-column>
              <el-table-column prop="address" label="机构层次" align="center" show-overflow-tooltip></el-table-column>
            </el-table>
          </tables>
        </el-tab-pane>
      </el-tabs>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false" size="small">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false" size="small">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Tables from "../Tables/index";
export default {
  name: 'OrganizationData',
  data() {
    return {
      dialogVisible: false,
      activeName: "first",
      data: [
        {
          label: "一级 1",
          children: [
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 2",
          children: [
            {
              label: "二级 2-1",
              children: [
                {
                  label: "三级 2-1-1"
                }
              ]
            },
            {
              label: "二级 2-2",
              children: [
                {
                  label: "三级 2-2-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1"
                }
              ]
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1"
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      },
      form: {},
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  components: {
    Tables
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    },
    open() {
      this.dialogVisible = true;
    }
  }
};
</script>

<style scoped lang="scss">
/deep/.organization-data {
  background: white;
  padding: 20px;
  /deep/.el-dialog__body {
    padding: 0 20px;
  }
}
</style>
