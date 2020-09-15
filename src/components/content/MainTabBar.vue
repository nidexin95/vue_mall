<template>
  <div>
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item link="/Home">
        <img slot="item-icon" src="~assets/img/tabbar/tab_bar01_h.png" alt />
        <img slot="item-icon-active" src="~assets/img/tabbar/tab_bar01_h_active.png" alt />
        <div slot="item-txt">首页</div>
      </tab-bar-item>
      <tab-bar-item link="/Accident">
        <img slot="item-icon" src="~assets/img/tabbar/tab-bar_accident.png" alt />
        <img slot="item-icon-active" src="~assets/img/tabbar/tab-bar_accident_active.png" alt />
        <div slot="item-txt">分类</div>
      </tab-bar-item>
      <tab-bar-item link="/ShowCat">
        <img slot="item-icon" src="~assets/img/tabbar/tabbar-icon-Shopping_Cart.png" alt />
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/tabbar-icon-Shopping_Cart_active.png"
          alt
        />
        <div slot="item-txt">购物车</div>
      </tab-bar-item>
      <tab-bar-item link="/ProFile">
        <img slot="item-icon" src="~assets/img/tabbar/tab-bar-my.png" alt />
        <img slot="item-icon-active" src="~assets/img/tabbar/tab-bar-my_active.png" alt />
        <div slot="item-txt">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar";
import TabBarItem from "@/components/common/tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
</style>