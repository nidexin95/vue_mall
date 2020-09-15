<template>
  <div class="tab-bar-item" @click="ItemClick()">
    <div v-if="!active">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <!-- <div :class="{activecss : active}">
          <slot name='item-txt'></slot>
    </div>-->
    <div :style="activeStyle">
      <slot name="item-txt"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data() {
    return {
      //isActive : false
    };
  },
  props: {
    link: String,
    activeColor: {
      type: String,
      default: "#d4237a",
    },
  },
  computed: {
    activeStyle() {
      return this.active ? { color: this.activeColor } : {};
    },
    active() {
      return this.$route.path == this.link;
    },
  },
  methods: {
    ItemClick() {
      this.$router.push(this.link);
    },
  },
};
</script>

<style>
.tab-bar-item {
  /* 将此类元素均匀分布 */
  flex: 1px;
  /* 设置文本字体大小 */
  font-size: 12px;
  /* 设置文本居中 */
  text-align: center;
  /* 设置此类元素高度 */
  height: 49px;
  color: #bfbfbf;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  margin-bottom: 0px;
  vertical-align: middle;
}
.activecss {
  color: #d4237a;
}
</style>