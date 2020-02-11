<template>
  <div class="upload">
    <el-upload
      class="upload-demo"
      :accept="accept"
      :action="action"
      :multiple="multiple"
      :limit="limit"
      :file-list="fileList"
      :before-upload="beforeUpload"
      :before-remove="beforeRemove"
      :on-exceed="handleExceed"
      :on-success="onSuccess"
      :on-error="onError"
      :show-file-list="showFileList"
      :on-preview="onPreview"
      :headers="myHeaders"
    >
      <el-button size="small">上传数据</el-button>
    </el-upload>
  </div>
</template>

<script>
// import { getToken } from "@/utils/auth";
export default {
  /*accept: 文件类型*/
  /*action: 上传地址*/
  /*multiple: 是否支持多个上传(true: 支持, false: 不支持)*/
  /*limit: 最大允许上传个数*/
  /*size: 上传文件大小*/
  /*file-list: 上传的文件列表, 例如: [{name: 'food.jpg', url: 'https://xxx.cdn.com/xxx.jpg'}]*/
  /*showFileList: 是否显示已上传文件列表*/
  name: 'Upload',
  props: {
    accept: {
      type: String,
      default: ".jpg,.png"
    },
    action: {
      type: String,
      default: "https://jsonplaceholder.typicode.com/posts/"
    },
    multiple: {
      type: Boolean,
      default: true
    },
    limit: {
      type: Number,
      default: null
    },
    size: {
      type: Number,
      default: 102400000
    },
    fileList: {
      type: Array,
      default: () => []
    },
    showFileList: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isAllow: true,
      myHeaders: {
        tokenid: 1213
      }
    };
  },
  methods: {
    handleExceed(files, fileList) {
      this.$message.warning(`超出最大允许上传个数`);
    },
    beforeUpload(file) {
      console.log(file.size);
      const isLt = file.size < this.size;
      if (!isLt) {
        this.$message.error(`上传文件大小不能超过100M`);
        this.isAllow = false;
      } else {
        this.isAllow = true;
      }
      return isLt;
    },
    beforeRemove(file, fileList) {
      if (!this.isAllow) {
        this.isAllow = true;
        return true;
      } else {
        return this.$confirm(`确定移除 ${file.name}？`).then(() => {
          setTimeout(() => {
            this.$emit("update:fileList", fileList);
          }, 0);
        });
      }
    },
    onSuccess(response, file, fileList) {
      this.$emit("update:fileList", fileList);
      this.$emit("updateDate");
      this.$message({
        type: "success",
        message: "恭喜您, 上传成功!"
      });
    },
    onError() {
      this.$message.error("文件上传失败");
    },
    onPreview(file) {
      window.open(file.url);
    }
  }
};
</script>

<style lang="scss" scoped>
/deep/.upload {
  display: inline-block;
}
</style>
