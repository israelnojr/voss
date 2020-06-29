<template>
  <!-- Begin | Page Wrapper [[ Find at scss/framework/base/wrapper/wrapper.scss ]] -->
  <main id="pageWrapper">
    <Header />
    <AppRoute />
  </main>
  <!-- End | Page Wrapper -->
</template>

<script>
import Header from "./mainheader";
import AppRoute from "./approute";
export default {
  components: {
    Header,
    AppRoute
  }
};
</script>

<style></style>
