<template>
  <!-- Begin | Header [[ Find at scss/framework/base/header/header.scss ]] -->
  <header id="header" class="bg-primary">
    <div class="d-flex align-items-center">
      <Hamburger />
      <SearchForm />
      <HeaderOption />
    </div>
  </header>
  <!-- End | Header -->
</template>

<script>
import Hamburger from "./hamburger";
import SearchForm from "./search/form";
import HeaderOption from "./headeroption";
export default {
  components: {
    Hamburger,
    SearchForm,
    HeaderOption
  }
};
</script>

<style></style>
