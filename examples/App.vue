<template>
  <div id="app">
    <container title="流程">
      <steps title="xxx流程"></steps>
    </container>
    <container title="附件信息">
      <attachment></attachment>
    </container>
    <container title="留言">
      <leaving-msg></leaving-msg>
    </container>
    <container title="表单信息">
      <form-info></form-info>
    </container>
    <container title="在线报表">
      <online-report></online-report>
    </container>
    <container title="员工信息批量修改">
      <batch-tool></batch-tool>
    </container>
    <container title="员工信息查询">
      <employee-search></employee-search>
    </container>
  </div>
</template>

<script>
import Container from "./Container/index";
export default {
  name: "app",
  components: {
    Container
  }
};
</script>

<style scoped lang="scss">
</style>
