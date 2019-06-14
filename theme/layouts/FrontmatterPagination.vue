<template>
  <div class="tagsPage">
    <TagList />
    <CatalogueList/>
    <!-- <PaginationButton/> -->
  </div>
</template>

<script>
import TagList from "../components/TagList.vue"
import CatalogueList from "../components/CatalogueList";
// import PaginationButton from "../components/PaginationButton";
export default {
  name: "FrontmatterPagination",
  components: {
    TagList,
    CatalogueList,
    // PaginationButton
  }
};
</script>

