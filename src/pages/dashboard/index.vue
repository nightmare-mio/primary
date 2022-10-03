<template>
  <div class="article-list-box">
    <div class="article-list">
      <div
        class="article action_cursor"
        v-for="(item, index) in list"
        :key="index"
      >
        <Article :article="item"></Article>
      </div>
    </div>
  </div>
</template>

<script>
import Article from "@/components/article/index.vue";
import { get } from "@/axios/axios";
import { articles } from "@/apis/api";
export default {
  components: { Article },
  beforeCreate() {
    get(articles.preview).then((msg) => {
      this.list = msg.data.data;
    });
  },
  data() {
    return {
      list: [],
    };
  },
};
</script>

<style>
.article-list {
  width: inherit;
}
</style>
