<template>
  <div class="form-info">
    <div class="info-container">
      <el-row>
        <el-col :span="12" class="item item-border-right">
          <div class="info-name">业务编号:</div>
          <div class="info">12312321321</div>
        </el-col>
        <el-col :span="12" class="item">
          <div class="info-name">状态:</div>
          <div class="info">待提交</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12" class="item item-border-right">
          <div class="info-name">业务类型:</div>
          <div class="info">工资变动</div>
        </el-col>
        <el-col :span="12" class="item">
          <div class="info-name">人次:</div>
          <div class="info">3</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12" class="item item-border-right">
          <div class="info-name">创建人:</div>
          <div class="info">张晓慧</div>
        </el-col>
        <el-col :span="12" class="item">
          <div class="info-name">创建时间:</div>
          <div class="info">2019-12-12</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12" class="item item-border-right">
          <div class="info-name item-border-bottom">备注:</div>
          <div class="info item-border-bottom">发个发的广泛的</div>
        </el-col>
        <el-col :span="12" class="item">
          <div class="info-name item-border-bottom"></div>
          <div class="info item-border-bottom"></div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormInfo',
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
/deep/.form-info {
  color: #323347;
  background: white;
  padding: 20px;
  .info-container {
    margin: 20px;
    border-right: 1px solid #d9d9d9;
    .item {
      display: flex;
      height: 40px;
      line-height: 40px;
      .info-name {
        width: 120px;
        padding-right: 20px;
        text-align: right;
        background: #f5f7fa;
        border-top: 1px solid #d9d9d9;
        border-right: 1px solid #d9d9d9;
        border-left: 1px solid #d9d9d9;
      }
      .info {
        flex: 1;
        padding-left: 20px;
        border-top: 1px solid #d9d9d9;
      }
      .item-border-bottom {
        border-bottom: 1px solid #d9d9d9;
      }
    }
  }
}
</style>
