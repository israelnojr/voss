<template>
  <!-- Begin | Search Card [[ Find at scss/framework/base/search/search.scss ]] -->
  <div class="search-card" data-scrollable="true">
    <SearchCard />
    <!-- Begin | Search Result List -->
    <div>
      <!-- Begin | Search Result List Header -->
      <div class="d-flex">
        <span class="text-uppercase mr-auto font-weight-bold text-dark"
          >Albums</span
        >
        <a href="songs.html">View All</a>
      </div>
      <!-- End | Search Result List Header -->
      <hr />
      <!-- Begin | Result List -->
      <div class="row">
        <div class="col-xl-4 col-md-6 col-12">
          <div class="custom-card mb-3">
            <a href="song-details.html" class="text-dark custom-card--inline">
              <div class="custom-card--inline-img">
                <img
                  src="../../../assets/images/cover/small/4.jpg"
                  alt=""
                  class="card-img--radius-sm"
                />
              </div>

              <div class="custom-card--inline-desc">
                <p class="text-truncate mb-0">Say yes</p>
              </div>
            </a>
          </div>
        </div>
        <div class="col-xl-4 col-md-6 col-12">
          <div class="custom-card mb-3">
            <a href="song-details.html" class="text-dark custom-card--inline">
              <div class="custom-card--inline-img">
                <img
                  src="../../../assets/images/cover/small/5.jpg"
                  alt=""
                  class="card-img--radius-sm"
                />
              </div>

              <div class="custom-card--inline-desc">
                <p class="text-truncate mb-0">Where is your letter</p>
              </div>
            </a>
          </div>
        </div>
        <div class="col-xl-4 col-md-6 col-12">
          <div class="custom-card mb-3">
            <a href="song-details.html" class="text-dark custom-card--inline">
              <div class="custom-card--inline-img">
                <img
                  src="../../../assets/images/cover/small/6.jpg"
                  alt=""
                  class="card-img--radius-sm"
                />
              </div>

              <div class="custom-card--inline-desc">
                <p class="text-truncate mb-0">Hey not me</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <!-- End | Result List -->
    </div>
    <!-- End | Search Result List -->
  </div>
  <!-- End | Search Card -->
</template>

<script>
import SearchCard from "./searchcard";
export default {
  components: {
    SearchCard
  }
};
</script>

<style></style>
