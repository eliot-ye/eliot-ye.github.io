---
date: 2018/08/05
tags:
  - css
  - html
issueId: 3
---
# 关于checkbox的展示应用

这里说的方法是利用`label`的特性，转换了`input[type=checkbox]`的显示，具体代码如下：

## 样式，替代法

```html
<label class="checkbox">
  <input type="checkbox">
  <span></span>
</label>
```

```scss
.checkbox{
  vertical-align: middle;
  input[type=checkbox]{display: none}
  span{
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 1px solid #A38601;
  }
  input[type=checkbox]:checked+span{
    background: url(../img/checked.png) no-repeat center/12px auto;
  }
}
```

## 开关switch

```html
<label class="switch">
  <input type="checkbox">
  <span class="switch-bg">
    <span class="switch-rang"></span>
  </span>
</label>
```

```scss
$switch-width:50px;
$switch-height:30px;
$padding:2px;

.switch{
  display: inline-block;
  width: $switch-width;
  height: $switch-height;
  border-radius: #{$switch-height / 2};
  overflow: hidden;
  position: relative;
  *{transition: all 0.2s}
  .switch-bg{
    display: block;
    height: #$switch-height;
    background: #E6E6E6;
    padding: $padding;
    .switch-rang{
      display: inline-block;
      width: #{$switch-height - $padding * 2};
      height: #{$switch-height - $padding * 2};
      border-radius: #{($switch-height - $padding * 2) / 2};
      background: #fff;
      position: absolute;
      left: $padding;
    }
  }
  input[type=checkbox]{display: none}
  input[type=checkbox]:checked+.switch-bg{
    background: rgba(32,193,132,1) !important;
    .switch-rang{
      left:#{$switch-width - ($switch-height - $padding * 2) - $padding} !important;
    }
  }
}
```
