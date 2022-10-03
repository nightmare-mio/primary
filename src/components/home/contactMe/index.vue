<template>
  <div class="index_list">
    <div
      v-for="(item, index) in data"
      :key="index"
      class="ico_display"
      :class="{ action: action[index] }"
      @mouseenter="action[index] = true"
      @mouseleave="action[index] = false"
    >
      <component
        :is="item.iconIndex"
        theme="outline"
        size="22"
        fill="#ffffff"
        class="action_cursor mr_10"
        @click="link(item.urlIndex)"
      />
    </div>
  </div>
</template>

<script>
import { GithubOne, Mail, TencentQq } from "@icon-park/vue-next";
import { get } from "@/axios/axios";
import { catalogues } from "@/apis/api";
export default {
  components: {
    GithubOne,
    Mail,
    TencentQq,
  },
  data() {
    return {
      action: [false],
      data: [],
    };
  },
  methods: {
    link(url) {
      window.open(url, "_blank");
    },
  },
  mounted() {
    get(catalogues.get, { type: "联系我" })
      .then((result) => {
        this.data = result.data.data;
      })
      .catch((err) => {});
  },
};
</script>

<style>
.index_list {
  display: flex;
  margin-left: 10rem;
}
.action {
  animation: flash 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
}
@keyframes flash {
  10%,
  90% {
    transform: translate3d(0, -1px, 0);
  }

  20%,
  80% {
    transform: translate3d(0, 2px, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(0, -4px, 0);
  }

  40%,
  60% {
    transform: translate3d(0, 4px, 0);
  }
}
.ico_display {
  display: inline-block;
}
</style>
