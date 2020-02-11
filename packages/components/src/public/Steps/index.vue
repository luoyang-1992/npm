<template>
  <div class="steps">
    <div class="title">{{title}}</div>
    <el-steps :active="2" class="step-content" align-center>
      <el-step title="步骤 1">
        <span class="step-icon" slot="icon"></span>
        <div slot="description">
          <div>处理人：张晓红</div>
        </div>
      </el-step>
      <el-step title="步骤 1">
        <span class="step-icon" slot="icon"></span>
        <div slot="description">
          <div>处理人：张晓红</div>
        </div>
      </el-step>
      <el-step title="步骤 2">
        <span class="step-icon" slot="icon"></span>
        <div slot="description">
          <div>处理人：张晓红</div>
          <div>处理人：张晓红</div>
        </div>
      </el-step>
    </el-steps>
  </div>
</template>

<script>
//
// import {getSteps} from '@/api/public'

export default {
  name: "Steps",
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  created() {
    // this.getSteps()
  },
  methods: {
    // async getSteps() {
    //   let data = {
    //     processInstanceId: 12
    //   }
    //   const res = await getSteps(data)
    //   console.log(res)
    // }
  }
};
</script>

<style scoped lang="scss">
/deep/.steps {
  background: white;
  padding: 20px;
  .title {
    color: #323347;
    font-size: 18px;
    padding-bottom: 20px;
    border-bottom: 1px solid gainsboro;
  }
  .step-content {
    margin: 20px 70px 0 70px;
    /deep/ .el-step__line {
      height: 2px !important;
    }
    .step-icon {
      width: 12px;
      height: 12px;
      border-radius: 100%;
      display: inline-block;
      background: #c0c4cc;
      margin-top: -2px;
    }
    /deep/ .is-process {
      color: #c0c4cc;
    }
    /deep/ .is-finish {
      .step-icon {
        background: #07f;
      }
    }
  }
}
</style>
