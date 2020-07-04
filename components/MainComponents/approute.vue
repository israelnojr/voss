<template>
  <div>
    <!-- Page Banner [[ Find at scss/base/core.scss ]] -->
    <div class="banner bg-home"></div>

    <!-- Begin | Main Container [[ Find at scss/base/core.scss ]] -->
    <div class="main-container" id="appRoute">
      <Home />
    </div>
  </div>
</template>

<script>
import Home from "../homepageComponents";
import Genres from "../genresComponents";
export default {
  components: {
    Home
  }
};
</script>

<style></style>
