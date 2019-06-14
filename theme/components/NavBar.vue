<template>
  <header class="navbar">
    <span class="site-title">{{$siteTitle}}</span>
    <div class="links">
      <nav>
        <div class="nav-item">
          <router-link :class="{'router-active': path.indexOf('/tag/') > -1 }" to="/tag/">Tags</router-link>
        </div>
        <div class="nav-item" v-for="(navbar, i) in navbarList" :key="i">
          <router-link :class="{'router-active': id === navbar.id}" :to="navbar.path">{{navbar.title}}</router-link>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "navbar",
  computed: {
    id() {
      return this.$route.meta.id || this.$page.id;
    },
    path() {
      return this.$route.path;
    },
    navbarList(){
      return this.$themeConfig.navbar
    }
  }
};
</script>


<style lang="stylus">
.navbar
  position fixed
  z-index 20
  top 0
  left 0
  right 0
  height $navbarHeight
  background-color #fff
  box-sizing border-box
  border-bottom 1px solid $borderColor
  padding 0.7rem 1.5rem
  line-height 2.2rem
  .site-title
    font-size 1.3rem
    font-weight 600
  .links
    padding-left 1.5rem
    box-sizing border-box
    background-color #fff
    white-space nowrap
    font-size 0.9rem
    position absolute
    right 1.5rem
    top 0.7rem
    display flex
    .nav-item
      position relative
      display inline-block
      margin-left 1.5rem
      line-height 2rem
      &:first-child
        margin-left 0
      a:not(.router-active)
        color $textColor
</style>
