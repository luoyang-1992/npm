<template>
  <div class="public">
    <container title="流程">
      <steps title="xxx流程"></steps>
    </container>
    <div style="border-bottom: 1px solid #ebeef5"></div>
    <container title="附件信息">
      <attachment></attachment>
    </container>
    <div style="border-bottom: 1px solid #ebeef5"></div>
    <container title="留言">
      <leaving-msg></leaving-msg>
    </container>
    <div style="border-bottom: 1px solid #ebeef5"></div>
    <container title="表单信息">
      <form-info></form-info>
    </container>
    <div style="border-bottom: 1px solid #ebeef5"></div>
    <container title="在线报表">
      <online-report></online-report>
    </container>
    <div style="border-bottom: 1px solid #ebeef5"></div>
    <div style="border-bottom: 1px solid #ebeef5"></div>
    <container title="员工信息批量修改">
      <batch-tool></batch-tool>
    </container>
    <div style="border-bottom: 1px solid #ebeef5"></div>
    <employee-search></employee-search>
  </div>
</template>

<script>
import Container from "./public/Container/index";
import Steps from "./public/Steps/index";
import Attachment from "./public/Attachment/index";
import LeavingMsg from "./public/LeavingMsg/index";
import FormInfo from "./public/FormInfo/index";
import EmployeeSearch from "./public/EmployeeSearch/index";
import OnlineReport from "./public/OnlineReport/index";
import BatchTool from "./public/BatchTool/index";
export default {
  name: "componentName",
  components: {
    Container,
    Steps,
    Attachment,
    LeavingMsg,
    FormInfo,
    EmployeeSearch,
    OnlineReport,
    BatchTool
  }
};
</script>

<style scoped lang="scss">
.public {
  background: white;
}
</style>
