<template>
  <v-main class="ma-auto pa-auto">
    <v-container fluid>
      <p class="text-h5 text-center">Postagens do Blog</p>
      <v-row>
        <ul class="articles-list">
          <li
            class="articles-list-item"
            v-for="article in articles"
            :key="article"
          >
            <ArticleCard></ArticleCard>
          </li>
        </ul>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import ArticleCard from "../components/blog/ArticleCard";
export default {
  components: {
    ArticleCard,
  },
};
</script>

<style></style>
