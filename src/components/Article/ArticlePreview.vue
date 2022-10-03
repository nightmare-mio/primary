<template>
  <div @click="toArticle()">
    <h2 class="italic">
      {{ article.title }}
    </h2>
    <div class="article_text">{{ article.content }}</div>
    <div>
      <calendar theme="outline" size="20" fill="#ffffff" class="pa_right_5" />
      <span class="ico_text">{{ article.datetime }}</span>
      <preview-open
        theme="outline"
        size="20"
        fill="#ffffff"
        class="pa_right_5"
      />
      <span class="ico_text">{{ article.view }}</span>
      <span v-if="article.comment">
        <comment theme="outline" size="20" fill="#ffffff" class="pa_right_5" />
        <span class="ico_text">{{ article.comment }}</span>
      </span>
      <tag-one theme="outline" size="20" fill="#ffffff" class="pa_right_5" />
      <span class="ico_text" v-for="(item, index) in article.tags" :key="index">
        {{ item }}  
      </span>
    </div>
  </div>
</template>

<script>
import { Calendar, PreviewOpen, TagOne, Comment } from "@icon-park/vue-next";
export default {
  components: { Calendar, PreviewOpen, TagOne, Comment },
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
.italic{
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
