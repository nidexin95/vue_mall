<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
};
</script>

<style>
#tab-bar {
  /* 将div内元素水平排列 */
  display: flex;
  /* 设置div背景颜色 */
  background: #f6f6f6;

  /* 将div置底 */
  position: fixed;
  bottom: 0;
  /* 将div占满宽度 */
  left: 0;
  right: 0;
  /* 给div添加阴影 */
  box-shadow: 0 -1px 1px rgb(100, 100, 100, 0.1);
}
</style>