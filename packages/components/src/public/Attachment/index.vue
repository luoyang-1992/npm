<template>
  <div class="attachment">
    <div class="info-contanier">
      <div class="btn">
        <el-button type="primary" size="small" icon="el-icon-download">下载</el-button>
      </div>
      <div class="table-info">
        <div class="left">单个附件大小不超过50M</div>
        <div class="right">共计1个附件</div>
      </div>
      <div class="table">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column type="selection" width="55" align="center"></el-table-column>
          <el-table-column prop="date" label="序号" align="center" show-overflow-tooltip></el-table-column>
          <el-table-column prop="name" label="附件名称" align="center" show-overflow-tooltip></el-table-column>
          <el-table-column prop="address" label="文件大小" align="center" show-overflow-tooltip></el-table-column>
          <el-table-column prop="address" label="上传时间" align="center" show-overflow-tooltip></el-table-column>
          <el-table-column prop="address" label="上传人员" align="center" show-overflow-tooltip></el-table-column>
          <el-table-column prop="address" label="备注" align="center" show-overflow-tooltip></el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Attachment',
  data() {
    return {
      tableData: []
    };
  }
};
</script>

<style scoped lang="scss">
/deep/.attachment {
  color: #323347;
  background: white;
  padding: 20px;
  .info-contanier {
    padding: 0 20px;
    .btn {
      height: 70px;
      display: flex;
      align-items: center;
    }
    .table-info {
      margin-top: -4px;
      padding-bottom: 26px;
      font-weight: bold;
      .left {
        float: left;
      }
      .right {
        float: right;
      }
    }
  }
}
</style>
