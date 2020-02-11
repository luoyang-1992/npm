<template>
  <div class="online-report">
    <div class="rable-container">
      <i class="el-icon-setting set" @click="set"></i>
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
    </div>

    <el-dialog title="设置表头" :visible.sync="dialogVisible" width="600px">
      <el-transfer v-model="value" :data="data" :titles="titles"></el-transfer>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false" size="small">取 消</el-button>
        <el-button type="primary" @click="setHeader" size="small">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Tables from "../Tables/index";
export default {
  name: 'OnlineReport',
  data() {
    return {
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
      value: []
    };
  },
  components: {
    Tables
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
    }
  }
};
</script>

<style scoped lang="scss">
/deep/.online-report {
  color: #323347;
  background: white;
  padding: 20px;
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
      margin-top: -14px;
      font-size: 20px;
      z-index: 999;
    }
  }
}
</style>
