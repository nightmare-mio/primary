<!-- 目录组件 -->
<template>
  <div id="menu-main">
    <div
      v-for="(item, index) in data"
      :key="index"
      :class="{ show: action[index] }"
      @mouseleave="action[index] = false"
      @click="$router.push(item.routeIndex)"
    >
      <n-space class="pa_column_10 action_cursor">
        <div v-if="action[index]">
          {{ item.textIndex }}
        </div>
        <component
          :is="item.iconIndex"
          theme="outline"
          size="22"
          fill="#ffffff"
          @mouseenter="action[index] = true"
        />
      </n-space>
    </div>
  </div>
</template>

<script>
import {
  Home,
  Notes,
  Tool,
  Like,
  User,
  SettingConfig,
  Cat,
} from "@icon-park/vue-next";
import { get } from "@/axios/axios";
import { catalogues } from "@/apis/api";
import { NSpace } from "naive-ui";

export default {
  components: {
    Home,
    Notes,
    Tool,
    Like,
    User,
    SettingConfig,
    Cat,
    NSpace,
  },
  data() {
    return {
      action: [], //用于动画
      data: [],
    };
  },
  mounted() {
    get(catalogues.get, { type: "目录" }).then((result) => {
      this.data = result.data.data;
    });
  },
};
</script>

<style>
body {
  color: #ffffff;
}
</style>
<style scoped>
.show {
  color: rgb(255, 255, 255);
  animation: shake 0.6s cubic-bezier(0.25, 1, 0.5, 1) forwards,
    show 0.6s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}
@keyframes shake {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(4px, 0, 0);
  }
}
@keyframes show {
  from {
    color: rgba(255, 255, 255, 0);
  }
  to {
    color: rgba(255, 255, 255, 1);
  }
}
#menu-main {
  display: flex;
  position: fixed;
  flex-direction: column;
  align-items: flex-end;
  justify-content: end;
  width: 10rem;
  height: 27.4rem;
}
.menu-item {
  float: right;
  clear: both;
  padding: 8px;
  /*存在换行符，有具体大小，所以会产生间隙*/
}

.action_cursor {
  cursor: pointer;
}
</style>
