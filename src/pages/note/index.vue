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
import { get, post } from "@/axios/axios";
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
    this.getAndQuery("");
  },
  methods: {
    getAndQuery(text){
      console.log("22");
      get(articles.note,{condition:text})
      .then((result) => {
        this.list = result.data.data;
      })
    }
  },

};
</script>

<style></style>
