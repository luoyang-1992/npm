<template>
  <div class="employee-search">
    <div class="search-container">
      <el-form
        :inline="true"
        ref="form"
        :model="form"
        label-width="auto"
        size="small"
        label-suffix=":"
        label-position="right"
      >
        <el-row>
          <el-col :span="8">
            <el-form-item label="组织架构">
              <el-input v-model="form.name" style="width:200px" @focus="showOrganizationDialog"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="人事范围">
              <el-input v-model="form.name" style="width:200px"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="人事子范围">
              <el-input v-model="form.name" style="width:200px"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="人工编号">
              <el-input v-model="form.name" style="width:200px"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="姓名">
              <el-input v-model="form.name" style="width:200px"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="工资核算范围">
              <el-input v-model="form.name" style="width:200px"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="雇佣状态">
              <el-input v-model="form.name" style="width:200px"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="员工组">
              <el-input v-model="form.name" style="width:200px"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="员工子组">
              <el-input v-model="form.name" style="width:200px"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <div class="text-center">
          <el-button size="small">重置</el-button>
          <el-button type="primary" size="small" icon="el-icon-search">查询</el-button>
        </div>
        <div style="clear: both"></div>
      </el-form>
    </div>
    <div class="rable-container">
      <i class="el-icon-setting set" @click="set"></i>
      <el-tabs v-model="activeName" type="card">
        <el-tab-pane label="查询结果" name="first">
          <tables>
            <el-table :data="tableData" border style="width: 100%">
              <el-table-column type="selection" width="55" align="center"></el-table-column>
              <el-table-column
                v-for="item in header"
                :prop="item.value"
                :label="item.name"
                align="center"
                :key="item.name"
                show-overflow-tooltip
              ></el-table-column>
            </el-table>
          </tables>
        </el-tab-pane>
      </el-tabs>
    </div>

    <el-dialog title="设置表头" :visible.sync="dialogVisible" width="700px">
      <el-transfer v-model="value" :data="data" :titles="titles"></el-transfer>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false" size="small">取 消</el-button>
        <el-button type="primary" @click="setHeader" size="small">确 定</el-button>
      </span>
    </el-dialog>
    <organization-data ref="organization" v-if="showOrganization"></organization-data>
  </div>
</template>

<script>
import Tables from "../Tables/index";
import OrganizationData from "../OrganizationData/index";
export default {
  name: 'EmployeeSearch',
  data() {
    return {
      form: {},
      activeName: "first",
      tableData: [],
      header: [
        { name: "员工编号", value: "data" },
        { name: "姓名", value: "name" },
        { name: "人事范围", value: "address" },
        { name: "人事子范围", value: "name" },
        { name: "部门", value: "name" },
        { name: "岗位", value: "name" },
        { name: "员工组", value: "name" },
        { name: "员工子组", value: "name" },
        { name: "身份证号码", value: "name" }
      ],
      copyHeader: [],
      dialogVisible: false,
      titles: ["可选字段", "已选字段"],
      data: [],
      value: [],
      showOrganization: false
    };
  },
  components: {
    Tables,
    OrganizationData
  },
  created() {
    this.copyHeader = Object.assign(this.header);
  },
  methods: {
    set() {
      this.data = [];
      this.copyHeader.forEach((item, index) => {
        this.data.push({
          key: item.name,
          label: item.name
        });
      });
      this.dialogVisible = true;
    },
    setHeader() {
      this.header = [];
      this.value.forEach((item, index) => {
        this.copyHeader.forEach((items, indexs) => {
          if (items.name === item) {
            this.header.push(items);
          }
        });
      });
      this.dialogVisible = false;
    },
    showOrganizationDialog() {
      this.showOrganization = true;
      this.$nextTick(() => {
        this.$refs.organization.open();
      });
    }
  }
};
</script>

<style scoped lang="scss">
/deep/.employee-search {
  color: #323347;
  padding: 20px;
  background: white;
  /deep/.el-transfer-panel {
    margin-left: 20px;
  }
  .search-container {
    margin: 20px;
    border: 1px solid #d9d9d9;
    padding: 20px 0;
  }
  .rable-container {
    margin: 20px;
    border: 1px solid #d9d9d9;
    padding: 20px;
    .set {
      position: absolute;
      right: 90px;
      margin-top: 4px;
      font-size: 20px;
      z-index: 999;
    }
  }
}
</style>
