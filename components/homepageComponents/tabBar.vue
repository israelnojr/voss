<template>
  <!-- Begin | Line Tabs [[ Find at scss/framework/components/line-tabs.scss ]] -->
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
        :data-toggle="tab"
        :href="'#' + tab.link"
        :role="tab"
        :aria-controls="tab.link"
        :aria-selected="true"
        >{{ tab.title }}</a
      >
    </li>
  </ul>
  <!-- End | Line Tabs -->
</template>

<script>
export default {
  data() {
    return {
      isActive: "active",
      tabList: [
        { title: "Trending", link: "trending" },
        { title: "Recent", link: "recent" },
        { title: "International", link: "international" }
      ]
    };
  },
  computed: {
    currentPage() {
      return this.$route.param;
    }
  },
  created() {
    console.log(this.$route.param);
  }
};
</script>

<style></style>
