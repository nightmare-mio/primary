<template>
  <div class="articleOne">
    <!-- 头部元素 -->
    <h1>
      {{ article.title }}
    </h1>
    <div class="mr_column_10">
      <span>
        <calendar theme="outline" size="24" fill="#ffffff" class="pa_right_5"
      /></span>
      <span class="ico_text">{{ article.datetime }}</span>
      <span>
        <preview-open
          theme="outline"
          size="24"
          fill="#ffffff"
          class="pa_right_5"
      /></span>
      <span class="ico_text">{{ article.view }}</span>
      <span>
        <span>
          <comment theme="outline" size="24" fill="#ffffff" class="pa_right_5"
        /></span>
        <span class="ico_text">{{ article.numberComment }}</span>
      </span>
      <span>
        <tag-one theme="outline" size="24" fill="#ffffff" class="pa_right_5"
      /></span>
      <span class="ico_text" v-for="(item, index) in article.tags" :key="index">
        {{ item }}
      </span>
    </div>
    <!-- 正文 -->
    <div class="content">
      <md-editor v-model="article.content" preview-only previewTheme="smart-blue" style="padding: 10px;"/>
    </div>
    <Comments></Comments>
  </div>
</template>

<script>
import { Calendar, PreviewOpen, TagOne, Comment } from "@icon-park/vue-next";
import Comments from "@/components/Comments/Comments.vue";
import { get } from "@/axios/axios";
import { articles } from "@/apis/api";
import MdEditor from "md-editor-v3";
import "md-editor-v3/lib/style.css";

export default {
  components: { Calendar, PreviewOpen, TagOne, Comment, Comments, MdEditor },
  data() {
    return {
      article: {},
    };
  },

  mounted() {
    get(articles.articleid + this.$route.query.idArticle)
      .then((result) => {
        this.article = result.data.data;
      })
      .catch((err) => {});
  },
};
</script>

<style scoped>
.articleOne {
  display: inline-block;
  top: 10%;
  width: inherit;
  line-height: 1.6;
}
.content {
  width: 100%;
}
</style>
