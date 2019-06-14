<template>
  <div id="Outline">
    <h4 class="Outline-title">目录</h4>
    <ul class="sidebar">
      <router-link v-for="(item, i) in headers" :to="`#${item.slug}`" class="sidebar-link">
        <li class="Outline-item">{{item.title}}</li>
      </router-link>
      <li style="height: 30px;"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Outline",
  computed: {
    headers() {
      return this.$page.headers && this.$page.headers.filter(item => item.level === 2);
    }
  }
};
</script>

<style lang="stylus">
@import '../styles/config'

$titleHeight = 60px;
$OutlineTop = 25vh;
#Outline
  width $sidebarWidth
  position fixed
  top $OutlineTop
  bottom 0
  left 50%
  transform translateX(145%)
  border-left 1px solid $borderColor
  .Outline-title
    margin 0
    height $titleHeight
    line-height $titleHeight
  .sidebar
    max-height s('calc(%s - %s)',100vh - $OutlineTop, $titleHeight)
    margin 0
    padding 0
    list-style none
    overflow-y auto
    .Outline-item
      padding-left 20px
      position relative
      color $textColor
      border-left 5px solid #fff
    a.sidebar-link
      text-decoration none
    a.router-link-exact-active > .Outline-item
      color $accentColor
      background-color $borderColor
      border-left-color $accentColor
@media (max-width: $MQNarrow)
  #Outline
    display none
</style>
