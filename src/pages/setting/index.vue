<template>
  <div class="wrapper-setting">
    <StaySetting></StaySetting>
  </div>
  <div class="save">
    <div class="button button-royal button-rounded button-large">保存</div>
  </div>
</template>

<script>
import StaySetting from "./components/setting/index.vue";
export default {
  components: { StaySetting },
  methods: {
    save() {
      // TODO
    },
  },
};
</script>

<style>
.wrapper-setting {
  padding: 20px 0;
  width: inherit;
  /* 声明一个容器 */
  display: grid;
  /* 声明行间距和列间距 */
  grid-gap: 20px 0;
  /* 声明列的宽高,数字N表示的重复N次*/
  grid-template-rows: repeat(7, 50px);
}
.save {
  text-align: center;
}
</style>
