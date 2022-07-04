<template>
  <div @click="toArticle()">
    <h3>
      {{ article.title }}
    </h3>
    <div class="article_text">{{ article.content }}</div>
    <div>
      <calendar theme="outline" size="20" fill="#ffffff" class="pa_right_5" />
      <span class="ico_text">{{ article.date }}</span>
      <preview-open
        theme="outline"
        size="20"
        fill="#ffffff"
        class="pa_right_5"
      />
      <span class="ico_text">{{ article.Views }}</span>
      <span v-if="article.comment">
        <comment theme="outline" size="20" fill="#ffffff" class="pa_right_5" />
        <span class="ico_text">{{ article.comment }}</span>
      </span>
      <tag-one theme="outline" size="20" fill="#ffffff" class="pa_right_5" />
      <span class="ico_text">{{ article.tags }}</span>
    </div>
  </div>
  <!-- <img src="/锁.png" class="suo"/> -->
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
      this.$router.push("/article?title=" + this.article.title);
    },
  },
};
</script>

<style>
.article {
  position: relative;
  padding: 0.9375rem;
  margin-bottom: 1.875rem;
  border: 1px solid;
  border-radius: 1.5625rem;
}
.article_text {
  line-height: 25px;
  margin: 0.625rem 0;
  font-size: 1.128rem;
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
