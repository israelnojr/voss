<template>
  <div>
    <!-- Page Banner [[ Find at scss/base/core.scss ]] -->
    <div class="banner bg-home"></div>

    <!-- Begin | Main Container [[ Find at scss/base/core.scss ]] -->
    <div class="main-container" id="appRoute">
      <HomeComponent />
    </div>
  </div>
</template>

<script>
import HomeComponent from "../homepageComponents";
export default {
  components: {
    HomeComponent
  }
};
</script>

<style></style>
