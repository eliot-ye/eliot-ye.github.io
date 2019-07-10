---
date: 2019/04/09
tags:
  - css
issueId: 10
---
# css 文字溢出处理

## css

```css
/* 单行文字溢出 */
.single-text {
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
/* 多行文字溢出（webkit内核） */
.multiline-text-webkit {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
```

## scss

```scss
// 单行文字溢出
@mixin singleText {
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}

// 多行文字溢出（webkit内核）
@mixin multilineTextWebkit($row){
  display:-webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: $row;
  overflow: hidden;
}

// 多行文字溢出，这种方法得使用需要注意宽度，否则可能会出现最后一个文字被遮盖不完整得问题
@mixin multilineText($row, $lineHeight: 20px){
  position: relative;
  line-height: $lineHeight;
  max-height: $lineHeight * $row;
  overflow: hidden;
  &::after{
    content: '...';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 1em;
    text-align: center;
    background: #fff;
  }
}
```

## stylus

```stylus
// 单行文字溢出
singleText()
  overflow hidden
  text-overflow ellipsis
  white-space nowrap

// 多行文字溢出（webkit内核）
multilineTextWebkit($row)
  display -webkit-box
  -webkit-box-orient vertical
  -webkit-line-clamp $row
  overflow hidden

// 多行文字溢出，这种方法得使用需要注意宽度，否则可能会出现最后一个文字被遮盖不完整得问题
multilineText($row, $lineHeight = 20px)
  position relative
  line-height $lineHeight
  max-height $lineHeight * $row
  overflow hidden
  &::after
    content '...'
    position absolute
    bottom 0
    right 0
    width 2em
    text-align center
    background #fff
```
