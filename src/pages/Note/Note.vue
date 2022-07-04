<template>
<Search></Search>
  <div class="article-list-box">
    <div class="article-list">
      <div class="article action_cursor" v-for="(item, index) in list" :key="index">
        <Article :article="item"> </Article>
      </div>
    </div>
  </div>
</template>

<script>
import Search from "../../components/Search.vue";
import Article from "../../components/Article/ArticlePreview.vue";
export default {
  components:{
    Search,Article
  },
  data() {
    return {
       list: [
        {
          title: "1-1标题",
          content: "正文",
          date: "2022年06月24日",
          Views: "100",
          comment: "5",
          tags: ["游戏", "学习"],
        },
        {
          title: "2-1标题",
          content: "正文",
          date: "2022年06月24日",
          Views: "100",
          comment: "5",
          tags: ["游戏", "学习"],
        },
      ],
    }
  },
  
}
</script>

<style>

</style>