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
          title: "1-1标题",
          content: "正文",
          date: "2022年06月24日",
          Views: "100",
          comment: "5",
          tags: ["风景", "动态"],
        },
        {
          title: "2-1标题",
          content: "PC 公测开服玩家，至今基本每天全勤，616 个日夜终于满级了！（其实两个月前就已经满级了），留个纪念吧。PC 公测开服玩家，至今基本每天全勤，616 个日夜终于满级了！（其实两个月前就已经满级了），留个纪念吧。",
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
        {
          title: "2-1标题",
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
        {
          title: "2-1标题",
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
        {
          title: "2-1标题",
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
        {
          title: "2-1标题",
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
    };
  },
};
</script>

<style>

.article-list {
  width: inherit;
}
</style>
