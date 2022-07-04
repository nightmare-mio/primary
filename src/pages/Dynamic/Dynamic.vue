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
import Article from "../../components/Article/ArticlePreview.vue";
export default {
  components: { Article },
  data() {
    return {
      list: [
        {
          // title: "1-1标题",
          content: "正文",
          date: "2022年06月24日",
          Views: "100",
          // comment: "5",
          tags: ["偶遇"],
        },
        {
          // title: "2-1标题",
          content: "正文",
          date: "2022年06月24日",
          Views: "100",
          // comment: "5",
          tags: ["感受"],
        },
      ],
    };
  },
};
</script>

<style>
.article-list-box {
  padding: 40px 40px 0 0;
}
.article-list {
  width: inherit;
}
</style>
