<template>
  <div @click="toArticle()">
    <h2 class="italic">
      {{ article.title }}
    </h2>
    <div class="article_text">{{ article.content }}</div>

    <div>
      <n-space>
        <calendar theme="outline" size="20" fill="#ffffff" />
        {{ article.datetime }}
        <preview-open theme="outline" size="20" fill="#ffffff" />
        {{ article.view }}
        <comment
          theme="outline"
          size="20"
          fill="#ffffff"
          v-if="article.numberComment"
        />
        <span v-if="article.numberComment">
          {{ article.numberComment }}
        </span>
        <tag-one theme="outline" size="20" fill="#ffffff" />
        <span
          class="ico_text"
          v-for="(item, index) in article.tags"
          :key="index"
        >
          {{ item.nameTag }}
        </span>
      </n-space>
    </div>
  </div>
</template>

<script>
import { Calendar, PreviewOpen, TagOne, Comment } from "@icon-park/vue-next";
import { NSpace } from "naive-ui";
export default {
  components: { Calendar, PreviewOpen, TagOne, Comment, NSpace },
  props: {
    article: { type: Object },
  },
  methods: {
    toArticle() {
      // 组件之间的值传递
      this.$router.push("/article?idArticle=" + this.article.id);
    },
  },
};
</script>

<style>
.italic {
  font-style: italic;
}
.article {
  position: relative;
  padding: 0.9375rem;
  margin-bottom: 1.875rem;
  border: 1px solid;
  border-radius: 1.5625rem;
}

.article:hover {
  animation: shake-10 0.6s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}
@keyframes shake-10 {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(10px, 0, 0);
  }
}
</style>
