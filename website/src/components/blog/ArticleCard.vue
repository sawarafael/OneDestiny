<template>
  <v-main>
    <v-card class="mx-auto my-12">
      <v-img height="250" src="#"></v-img>
      <v-card-title>Title</v-card-title>
      <v-card-text
        ><p class="grey--text" v-if="article.metadata.author">
          {{ article.published_at | date }} by
          {{ article.metadata.author.metadata.your_name }}
        </p>
        <p class="grey--text" v-else>{{ article.published_at | date }}</p>
        <p>
          {{ article.metadata.excerpt | truncate(200) | tailing("...") }}
        </p></v-card-text
      >
    </v-card>
  </v-main>
</template>

<script>
export default {};
</script>

<style></style>
