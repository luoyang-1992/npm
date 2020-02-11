<template>
  <div class="batch-tool">
    <el-tabs v-model="activeName" @tab-click="handleClick" style="margin: 20px">
      <el-tab-pane label="数据批导" name="first">
        <el-form ref="form" :model="form" label-width="80px" size="small" label-suffix=":">
          <el-form-item label="活动名称">
            <el-select v-model="form.region" placeholder="请选择活动区域" style="width:200px">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div>
          <el-button size="small">下载模板</el-button>
          <upload></upload>
        </div>
      </el-tab-pane>
      <el-tab-pane label="监控日志" name="second">
        <tables>
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="date" label="序号" align="center" show-overflow-tooltip></el-table-column>
            <el-table-column prop="name" label="信息类型" align="center" show-overflow-tooltip></el-table-column>
            <el-table-column prop="address" label="信息类型描述" align="center" show-overflow-tooltip></el-table-column>
            <el-table-column prop="address" label="操作用户" align="center" show-overflow-tooltip></el-table-column>
            <el-table-column prop="address" label="操作时间" align="center" show-overflow-tooltip></el-table-column>
            <el-table-column prop="address" label="状态" align="center" show-overflow-tooltip></el-table-column>
            <el-table-column prop="address" label="消息" align="center" show-overflow-tooltip></el-table-column>
          </el-table>
        </tables>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Upload from "../Upload/index";
import Tables from "../Tables/index";
export default {
  name: 'BatchTool',
  data() {
    return {
      activeName: "first",
      form: {},
      tableData: []
    };
  },
  components: {
    Upload,
    Tables
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style scoped lang="scss">
/deep/.batch-tool {
  color: #323347;
  background: white;
  padding: 20px
}
</style>
