<template>
  <div class="theme-blog-content Layout">
    <CatalogueList/>
    <!-- <PaginationButton/> -->
  </div>
</template>

<script>
import CatalogueList from "../components/CatalogueList";
// import PaginationButton from "../components/PaginationButton";
export default {
  name: "Layout",
  components: {
    CatalogueList,
    // PaginationButton
  }
};
</script>


<style lang="stylus">
.theme-blog-content.Layout
  max-width 600px
</style>
