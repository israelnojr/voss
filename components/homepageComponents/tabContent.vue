<template>
  <!-- Begin | Tab Content -->
  <div class="tab-content" id="songsListContent">
    <div
      class="tab-pane fade show active"
      id="recent"
      role="tabpanel"
      aria-labelledby="recent-tab"
    >
      <TabListItem />
    </div>
  </div>
  <!-- End | Tab Content -->
</template>

<script>
import CardDropDown from "../globalComponents/cardDropDown";
import TabListItem from "./tabListItem";
export default {
  props: ["tablists"],
  components: {
    CardDropDown,
    TabListItem
  }
};
</script>

<style></style>>
