<template>
  <div>
    <ul
      class="nav nav-tabs line-tabs line-tabs-primary text-uppercase mb-4"
      id="songsList"
      role="tablist"
    >
      <li
        v-for="tab in tabList"
        :key="tab.title"
        :title="tab.title"
        class="nav-item"
      >
        <a
          class="nav-link"
          :id="tab.link + '-tab'"
          data-toggle="tab"
          :href="'#' + tab.link"
          role="tab"
          :aria-controls="tab.link"
          aria-selected="true"
          >{{ tab.title }}</a
        >
      </li>
    </ul>
    <div class="tab-content" id="songsListContent">
      <div
        v-for="song in loadedSongs"
        :key="song.id"
        class="tab-pane fade show active mb-2"
        :id="song.tab"
        role="tabpanel"
        :aria-labelledby="song.tab + '-tab'"
      >
        <div class="custom-list">
          <TabCard :id="song.id" :name="song.name" :artist="song.artist" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabList: [
        { title: "Trending", link: "trending" },
        { title: "Recent", link: "recent" },
        { title: "International", link: "international" }
      ]
    };
  },
  computed: {
    loadedSongs() {
      return this.$store.getters.loadedSongs;
    }
  }
};
</script>

<style></style>
