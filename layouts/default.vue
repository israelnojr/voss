<template>
  <div>
    <Language />
    <!--  <Loader /> -->
    <div id="wrapper" data-scrollable="true">
      <SideBar />
      <Header />
      <nuxt-child />
    </div>
  </div>
</template>

<script>
import Header from "~/components/MainComponents/mainheader";
import Language from "~/components/partials/LanguageModal";
import Loader from "~/components/partials/Loading";
import SideBar from "~/components/partials/sidebar/SideBar";
export default {
  components: {
    Language,
    Loader,
    Header
  }
};
</script>

<style></style>
