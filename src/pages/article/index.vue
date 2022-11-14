<!--
 * @Author: wanglongwei wanglongwei@yuqiaotech.com
 * @Date: 2022-06-26 12:52:08
 * @LastEditTime: 2022-11-14 12:57:50
 * @Description: 
-->
<template>
  <div class="articleOne">
    <!-- 头部元素 -->
    <h1>
      {{ article.title }}
    </h1>
    <div class="mr_column_10">
      <n-space class="btnsss">
        <calendar theme="outline" size="24" fill="#ffffff" />
        {{ article.datetime }}
        <preview-open theme="outline" size="24" fill="#ffffff" />
        {{ article.view }}
        <comment theme="outline" size="24" fill="#ffffff" />
        {{ article.numberComment }}
        <tag-one theme="outline" size="24" fill="#ffffff" />
        <span>
          <span
            class="ico_text"
            v-for="(item, index) in article.tags"
            :key="index"
          >
            {{ item.nameTag }}
          </span>
        </span>
      </n-space>
    </div>
    <!-- 正文 -->
    <div class="content">
      <md-editor
        v-model="article.content"
        preview-only
        previewTheme="smart-blue"
        style="padding: 10px"
      />
    </div>
    <Comments :idArticle="article.id"></Comments>
  </div>
</template>

<script>
import { Calendar, PreviewOpen, TagOne, Comment } from "@icon-park/vue-next";
import { NSpace } from "naive-ui";
import Comments from "@/components/comments/index.vue";
import { get } from "@/axios/axios";
import { articles } from "@/apis/api";
import MdEditor from "md-editor-v3";
import "md-editor-v3/lib/style.css";

export default {
  components: {
    Calendar,
    PreviewOpen,
    TagOne,
    Comment,
    Comments,
    MdEditor,
    NSpace,
  },
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
.btnsss {
  vertical-align: text-bottom;
}
</style>
