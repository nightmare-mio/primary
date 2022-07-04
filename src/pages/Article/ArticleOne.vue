<template>
  <div class="articleOne">
    <ArticleHead>
      <h1>
        {{ $route.query.title }}
      </h1>
    </ArticleHead>
    <div class="mr_column_10">
      <span>
        <calendar theme="outline" size="24" fill="#ffffff" class="pa_right_5"
      /></span>
      <span class="ico_text">{{ article.date }}</span>
      <span>
        <preview-open
          theme="outline"
          size="24"
          fill="#ffffff"
          class="pa_right_5"
      /></span>
      <span class="ico_text">{{ article.Views }}</span>
      <span v-if="article.comment">
        <span>
          <comment theme="outline" size="24" fill="#ffffff" class="pa_right_5"
        /></span>
        <span class="ico_text">{{ article.comment }}</span>
      </span>
      <span>
        <tag-one theme="outline" size="24" fill="#ffffff" class="pa_right_5"
      /></span>
      <span class="ico_text">{{ article.tags }}</span>
    </div>
    <div class="article_text">
      {{ article.content }}
    </div>
    <Comments></Comments>
  </div>
</template>

<script>
import { Calendar, PreviewOpen, TagOne, Comment } from "@icon-park/vue-next";
import Comments from "../../components/Comments/Comments.vue";
import ArticleHead from "../../components/Article/ArticleHead.vue";
export default {
  components: { Calendar, PreviewOpen, TagOne, Comment, Comments, ArticleHead },
  data() {
    return {
      article: {
        title: "标题",
        content: "正文",
        date: "2022年06月26日",
        Views: "100",
        comment: "5",
        tags: ["游戏", "研究"],
      },
    };
  },
};
</script>

<style>
.articleOne {
  display: inline-block;
  top: 10%;
  width: inherit;
}
</style>
