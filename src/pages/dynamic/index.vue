<template>
  <div class="article-list-box">
    <div class="article-list">
      <div
        class="article action_cursor"
        v-for="(item, index) in list"
        :key="index"
      >
        <ArticlePreview :article="item"></ArticlePreview>
      </div>
    </div>
  </div>
</template>

<script>
import ArticlePreview from "@/components/article/index.vue";
import { get } from "@/axios/axios";
import { articles } from "@/apis/api";

export default {
  components: { ArticlePreview },
  data() {
    return {
      list: [],
    };
  },mounted() {
    get(articles.dynamic).then((result) => {
      this.list=result.data.data;
    }).catch((err) => {
    });
  },
};
</script>

<style>
.article-list {
  width: inherit;
}
</style>
