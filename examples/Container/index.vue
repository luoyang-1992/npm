<template>
  <div class="container">
    <el-collapse v-model="activeNames">
      <el-collapse-item :title="title" name="1">
        <slot></slot>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      activeNames: [""]
    };
  }
};
</script>

<style scoped lang="scss">
/deep/.container {
  padding: 20px;
  /deep/.el-collapse-item__content {
    padding-bottom: 0;
  }
  /deep/.el-collapse {
    border-top: none;
    border-bottom: none;
    .el-collapse-item__header {
      border-bottom: none;
      font-size: 18px;
      background: gainsboro;
      padding: 0 20px;
      border-left: 4px solid #07f;
    }
    .el-collapse-item__wrap {
      border-bottom: none;
    }
  }
}
</style>
