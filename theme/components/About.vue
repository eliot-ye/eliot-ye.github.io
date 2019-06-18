<template>
  <div id="about" v-if="$themeConfig.about">
    <div class="portrait">

    <img :src="portrait" alt="portrait" class="portrait-img">
    </div>
    <div
      v-for="(msg,i) in msgList"
      :key="i"
      class="about-item"
      :class="{'is-link':msg.path}"
      @click="go(msg.path)"
    >
      <img v-if="msg.img" :src="msg.img" class="about-msg about-img">
      <span v-if="msg.icon" :class="msg.icon" class="about-msg"></span>
      <span v-if="msg.text" class="about-msg">{{msg.text}}</span>
      <svg
        v-if="msg.path && msg.path.indexOf('http') === 0"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
        width="15"
        height="15"
        style="color:#aaa"
      >
        <path
          fill="currentColor"
          d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
        ></path>
        <polygon
          fill="currentColor"
          points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
        ></polygon>
      </svg>
    </div>
  </div>
</template>

<script>
const portrait = require("../img/hero.png");
export default {
  computed: {
    about() {
      return this.$themeConfig.about || {};
    },
    portrait() {
      return this.about.portrait || portrait;
    },
    msgList() {
      return this.about.msgList;
    }
  },
  methods: {
    go(path) {
      if (path.indexOf("http") === 0) {
        window.open(path);
      } else {
        this.$router.push(path);
      }
    }
  }
};
</script>

<style lang="stylus">
@import '../styles/config'

#about
  width 200px
  position fixed
  top $navbarHeight * 2
  left 50%
  transform translateX(-260%)
  border-radius 5px
  overflow hidden
  border 1px solid $arrowBgColor
  .portrait-img
    width @width
    height @width
  .about-item
    display flex
    align-items center
    justify-content center
    height 50px
    border-top 1px solid $arrowBgColor
    .about-img
      height @height * 0.6
    &.is-link
      cursor pointer
  .about-msg
    margin 0 5px
@media (max-width: $MQNarrow)
  #about
    display none
</style>
