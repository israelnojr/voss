<template>
  <!-- Begin | Search Result List -->
  <div class="mb-3">
    <SearchHeader />
    <hr />
    <ArtistSearchCard />
  </div>
  <!-- End | Search Result List -->
</template>

<script>
import ArtistSearchCard from "./artistsearchcard";
import SearchHeader from "./searchHeader";
export default {
  components: {
    ArtistSearchCard,
    SearchHeader
  }
};
</script>

<style></style>
