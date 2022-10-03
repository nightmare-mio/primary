<template>
  <div id="root">
    <index-menu></index-menu>
    <index-title></index-title>
    <div id="right-context">
      <div id="right-box">
        <router-view></router-view>
      </div>
    </div>
    <div id="left-bottom">
      <index-contatc-meun></index-contatc-meun>
    </div>
  </div>
</template>

<script>
import IndexMenu from "@/components/menu/IndexMenu.vue";
import IndexTitle from "@/components/Title/IndexTitle.vue";
import IndexContatcMeun from "@/components/contactMe/IndexContatcMeun.vue";
export default {
  components: {
    IndexMenu,
    IndexTitle,
    IndexContatcMeun,
  },
};
</script>

<style>
.right-windows {
  width: 100%;
  padding: 0 0 0 500px;
}
#root {
  width: 100%;
  height: 100%;
  position: absolute;
}
#right-context {
  padding: 0 0 0 30rem;
  width: calc(100% - 30rem);
  height: 100%;
  display: inline-block;
  vertical-align: top;
}
#left-bottom {
  width: 30rem;
  height: calc(100% - 30rem);
  top: 30rem;
  position: fixed;
}
#right-box {
  margin: 50px 0 0 30px;
  display: inline-block;
  width: 930px;
}
::-webkit-scrollbar {
  width: 5px;
  background-color: #fefbfb;
}
::-webkit-scrollbar-thumb {
  background-color: #cbcbcb;
  border-radius: 10px;
  /* 还可以给它加个阴影 */
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
} /* 滚动条轨道 */
::-webkit-scrollbar-track-piece {
  background-color: hsla(232, 64%, 6%, 0.9);
}
</style>
