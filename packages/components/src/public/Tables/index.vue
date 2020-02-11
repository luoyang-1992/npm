<template>
  <div class="table-panel">
    <slot />
    <div class="pages text-right" v-if="paginationVisible">
      <el-pagination
        background
        layout="prev, pager, next"
        :current-page.sync="page"
        :page-size="currentPageSize"
        :total="total"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tables',
  props: {
    total: {
      type: Number,
      default: 0
    },
    pageSize: {
      type: Number,
      default: 0
    },
    paginationVisible: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      page: 1,
      currentPageSize: 10
    }
  },
  created() {
    if (this.pageSize) {
      this.currentPageSize = this.pageSize
    }
    this.getList()
  },
  methods: {
    getList() {
      this.$emit('get-list', this.page, this.currentPageSize)
    },
    handleCurrentChange(val) {
      this.page = val
      this.getList()
    }
  }
}
</script>

<style lang="scss" scoped>
/deep/.panel {
  background: white;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
}
.panel-border-bottom {
  border-bottom: solid 10px #ebebeb;
}
</style>
