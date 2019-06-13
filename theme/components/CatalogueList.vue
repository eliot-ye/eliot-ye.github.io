<template>
  <ul id="catalogue-list">
    <li class="catalogue-item" v-for="(page, i) in $pagination.pages" :key="i">
      <h3 class="catalogue-link">
        <router-link :to="page.path">{{ page.title }}</router-link>
      </h3>
      <p class="singleText">
        <span v-for="(header,index) in page.headers" :key="index">{{`${index}. ${header.title} `}}</span>
      </p>
      <div class="tags">
        <router-link v-for="tag in page.frontmatter.tags" :key="tag" :to="`/tag/${tag}/`">
          <span class="tag">{{tag}}</span>
        </router-link>
      </div>
      <div style="clear:both"></div>
    </li>
  </ul>
</template>

<style lang="stylus">
#catalogue-list
  list-style none
  padding 0
  .catalogue-item
    padding 0.8rem 1.5rem
    border 1px solid $borderColor
    border-radius 3px
    box-shadow 0 0 3px $borderColor
    margin-bottom 10px
    .catalogue-link
      margin 0
      margin-bottom 10px
    .singleText
      margin 0
      font-size 12px
      color #999
    .tags
      float right
</style>
