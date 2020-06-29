<template>
  <!-- Begin | Sidebar [[ Find at scss/framework/base/sidebar/left/sidebar.scss ]] -->
  <aside id="sidebar" class="sidebar-primary">
    <SideHeader />
    <SideNav />
    <SideButton />
  </aside>
  <!-- End | Sidebar -->
</template>

<script>
import SideHeader from "./SideHeader";
import SideNav from "./SideNav";
import SideButton from "./sidebutton";
export default {
  components: {
    SideHeader,
    SideNav,
    SideButton
  }
};
</script>

<style></style>
