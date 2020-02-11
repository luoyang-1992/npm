<template>
  <div class="leaving-msg">
    <div class="info-contanier">
      <div class="self">
        <span class="img"></span>
        <span class="name">张小红</span>
        <span class="time">2019-12-12</span>
      </div>
      <div class="info">请你在xxxxx时间完成审批xxxxxxxxxxxxxxxxx</div>
    </div>
    <div class="btn">
      <el-input placeholder="请输入内容" v-model="input3" size="small" class="input-with-select">
        <el-button slot="append">留言</el-button>
      </el-input>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LeavingMsg',
  data() {
    return {
      input3: ""
    };
  }
};
</script>SS

<style scoped lang="scss">
/deep/.leaving-msg {
  color: #323347;
  background: white;
  padding: 20px;
  .info-contanier {
    margin: 20px;
    padding: 20px;
    border: 1px solid #ebeef5;
    .self {
      display: flex;
      align-items: center;
      height: 40px;
      .img {
        display: inline-block;
        width: 30px;
        height: 30px;
        background: gainsboro;
        border-radius: 100%;
      }
      .name {
        padding: 0 10px;
      }
      .info {
        padding-left: 40px;
      }
    }
  }
  .btn {
    margin: 0 20px;
  }
}
</style>
