<template>
  <!-- Begin | Section [[ Find at scss/base/core.scss ]] -->
  <div class="section col-xl-5 col-lg-6">
    <TabBar />
    <TabContent />
  </div>
  <!-- End | Section -->
</template>

<script>
import TabBar from "./tabbar";
import TabContent from "./tabContent";
export default {
  data() {
    return {
      components: {
        TabBar,
        TabContent
      }
    };
  },
  components: {
    TabBar
  }
};
</script>

<style></style>
