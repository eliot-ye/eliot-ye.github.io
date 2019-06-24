<template>
  <div id="pagination">
    <button
      class="pagination-btn"
      :disabled="!$pagination.hasPrev"
      @click="$router.push($pagination.prevLink)"
    >上一页</button>
    <div class="pagination-btn pagination-more" v-if="preMore">...</div>
    <button
      class="pagination-btn"
      v-for="i in $pagination.length"
      :class="{'pagination-btn-active': $pagination.paginationIndex + 1 === i}"
      v-show="paginationBtnShow(i)"
      @click="$router.push($pagination._paginationPages[i - 1].path)"
    >{{i}}</button>
    <div class="pagination-btn pagination-more" v-if="nextMore">...</div>
    <button
      class="pagination-btn"
      :disabled="!$pagination.hasNext"
      @click="$router.push($pagination.nextLink)"
    >下一页</button>
  </div>
</template>

<script>
const btnShowNum = 9;
export default {
  computed: {
    paginationNum() {
      return this.$pagination.paginationIndex + 1;
    },
    twoFlanksNum() {
      return (btnShowNum + 1) / 2;
    },
    preMore() {
      return this.paginationNum > this.twoFlanksNum;
    },
    nextMore() {
      return (
        this.paginationNum < this.$pagination.length - this.twoFlanksNum + 1
      );
    }
  },
  methods: {
    paginationBtnShow(i) {
      if (!this.preMore) {
        return i <= btnShowNum;
      } else if (this.preMore && this.nextMore) {
        return (
          (i > this.paginationNum - this.twoFlanksNum &&
            i <= this.paginationNum) ||
          (i < this.paginationNum + this.twoFlanksNum &&
            i >= this.paginationNum)
        );
      } else if (!this.nextMore) {
        return i > this.$pagination.length - btnShowNum;
      }
    }
  }
};
</script>


<style lang="stylus">
$borderRadius = 5px
#pagination
  display flex
  justify-content center
  padding-bottom 80px
  .pagination-btn
    background #fff
    color $accentColor
    font-weight 500
    border none
    outline none
    padding 5px
    min-width 30px
    cursor pointer
    border 1px solid $borderColor
    border-left none
    &:first-child
      border-left 1px solid $borderColor
      border-top-left-radius $borderRadius
      border-bottom-left-radius $borderRadius
    &:last-child
      border-top-right-radius $borderRadius
      border-bottom-right-radius $borderRadius
    &.pagination-more
      display flex
      justify-content center
      cursor default
      color $textColor
    &.pagination-btn-active
      background $accentColor
      color #fff
      cursor default
    &:disabled
      background $borderColor
      color #fff
      cursor default
</style>
