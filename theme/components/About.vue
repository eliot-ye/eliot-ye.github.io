<template>
  <div id="about">
    <img :src="portrait" alt="portrait" class="portrait">
  </div>
</template>

<script>
const portrait = require("../img/hero.png")
export default {
  computed: {
    portrait(){
      return this.$themeConfig.portrait || portrait
    }
  }
}
</script>

<style lang="stylus">
@import "../styles/config";

#about
  width 200px
  position fixed
  top $navbarHeight * 2
  left 50%
  transform translateX(-270%)
  border-radius 5px
  overflow hidden
  border 1px solid $arrowBgColor
  .portrait
    width @width
    height @width
</style>
