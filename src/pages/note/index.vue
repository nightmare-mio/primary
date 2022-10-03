<template>
  <Search></Search>
  <div class="article-list-box">
    <div class="article-list">
      <div
        class="article action_cursor"
        v-for="(item, index) in list"
        :key="index"
      >
        <Article :article="item"> </Article>
      </div>
    </div>
  </div>
</template>

<script>
import Search from "@/components/search/index.vue";
import Article from "@/components/article/index.vue";
import { get } from "@/axios/axios";
import { articles } from "@/apis/api";
export default {
  components: {
    Search,
    Article,
  },
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    get(articles.note)
      .then((result) => {
        this.list = result.data.data;
      })
      .catch((err) => {});
  },
};
</script>

<style></style>
