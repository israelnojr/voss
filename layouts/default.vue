<template>
  <div>
    <Language />
    <!--  <Loader /> -->
    <!-- Begin | Wrapper [[ Find at scss/framework/base/wrapper/wrapper.scss ]] -->
    <div id="wrapper" data-scrollable="true">
      <SideBar />
      <MainComponents />
    </div>
    <!-- End | Wrapper -->
  </div>
</template>

<script>
import Language from "../components/partials/LanguageModal";
import Loader from "../components/partials/Loading";
import SideBar from "../components/partials/sidebar/SideBar";
import MainComponents from "../components/MainComponents";
export default {
  components: {
    Language,
    Loader,
    MainComponents
  }
};
</script>

<style></style>
