<template>
  <main id="pageWrapper">
    <!-- Begin | Main Container [[ Find at scss/base/core.scss ]] -->
    <div class="main-container" id="appRoute">
      <!-- Begin | Section [[ Find at scss/base/core.scss ]] -->
      <div class="section">
        <HeaderTitle title="Top Chart" subTitle="Listen top chart" />
        <div class="carousel-item-5 arrow-pos-3">
          <Carousel
            v-for="song in loadedSongs"
            :key="song.id"
            :id="song.id"
            :name="song.name"
            :artist="song.artist"
          />
        </div>
      </div>
      <!-- End | Section -->

      <div class="row">
        <!-- Begin | Section [[ Find at scss/base/core.scss ]] -->
        <div class="section col-xl-7 col-lg-6">
          <div class="row h-100">
            <MainCard />
            <HomeCard />
          </div>
        </div>
        <!-- End | Section -->

        <!-- Begin | Section [[ Find at scss/base/core.scss ]] -->
        <div class="section col-xl-5 col-lg-6">
          <TabBar />
        </div>
        <!-- End | Section -->
      </div>

      <!-- Begin | Section [[ Find at scss/base/core.scss ]] -->
      <div class="section">
        <HeaderTitle
          title="New Releases"
          pageLink="release"
          subTitle="Listen recently release music"
        />
        <div class="carousel-item-5 arrow-pos-3">
          <Carousel
            v-for="song in loadedSongs"
            :key="song.id"
            :id="song.id"
            :name="song.name"
            :artist="song.artist"
          />
        </div>
      </div>
      <!-- End | Section -->

      <!-- Begin | Section [[ Find at scss/base/core.scss ]] -->
      <div class="section">
        <HeaderTitle
          title="Featured Artists"
          subTitle="Select you best to listen"
        />
        <div class="carousel-item-6 arrow-pos-2">
          <Card
            v-for="artist in loadedArtists"
            :key="artist.id"
            :slug="artist.slug"
            :name="artist.name"
          />
        </div>
      </div>
      <!-- End | Section -->
    </div>
    <!-- End | Main Container -->
    <br />
    <!-- Begin | Audio Player [[ Find at scss/framework/base/audio-player/audio-player.scss ]] -->
    <div id="audioPlayer" class="player-primary">
      <!-- Begin | Audio Player Progress -->
      <div id="progress-container">
        <input type="range" class="amplitude-song-slider" />
        <progress
          class="audio-progress audio-progress--played amplitude-song-played-progress"
        ></progress>
        <progress
          class="audio-progress audio-progress--buffered amplitude-buffered-progress"
          value="0"
        ></progress>
      </div>
      <!-- End | Audio Player Progress -->

      <!-- Begin | Audio -->
      <div class="audio">
        <div class="song-image">
          <img
            data-amplitude-song-info="cover_art_url"
            src="~/assets/images/cover/small/1.jpg"
            alt=""
          />
        </div>
        <div class="song-info pl-3">
          <span
            class="song-name d-inline-block text-truncate"
            data-amplitude-song-info="name"
          ></span>
          <span
            class="song-artists d-block text-muted"
            data-amplitude-song-info="artist"
          ></span>
        </div>
      </div>
      <!-- End | Audio -->

      <!-- Begin | Audio Controls -->
      <div class="audio-controls">
        <div class="audio-controls--left d-flex mr-auto">
          <button class="btn btn-icon-only amplitude-repeat">
            <i class="ion-md-sync"></i>
          </button>
        </div>
        <div class="audio-controls--main d-flex">
          <button class="btn btn-icon-only amplitude-prev">
            <i class="ion-md-skip-backward"></i>
          </button>
          <button
            class="btn btn-air btn-pill btn-default btn-icon-only amplitude-play-pause"
          >
            <i class="ion-md-play"></i>
            <i class="ion-md-pause"></i>
          </button>
          <button class="btn btn-icon-only amplitude-next">
            <i class="ion-md-skip-forward"></i>
          </button>
        </div>
        <div class="audio-controls--right d-flex ml-auto">
          <button
            class="btn btn-icon-only amplitude-shuffle amplitude-shuffle-off"
          >
            <i class="ion-md-shuffle"></i>
          </button>
        </div>
      </div>
      <!-- End | Audio Controls -->

      <!-- Begin | Audio Info -->
      <div class="audio-info d-flex align-items-center pr-4">
        <span class="mr-4">
          <span class="amplitude-current-minutes"></span>:<span
            class="amplitude-current-seconds"
          ></span>
          / <span class="amplitude-duration-minutes"></span>:<span
            class="amplitude-duration-seconds"
          ></span>
        </span>
        <div class="audio-volume dropdown">
          <button
            class="btn btn-icon-only"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="ion-md-volume-low"></i>
          </button>
          <div class="dropdown-menu dropdown-menu-right volume-dropdown-menu">
            <input type="range" class="amplitude-volume-slider" value="100" />
          </div>
        </div>

        <div class="dropleft">
          <button
            class="btn btn-icon-only"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="la la-ellipsis-v"></i>
          </button>
          <ul class="dropdown-menu">
            <li class="dropdown-item">
              <a href="javascript:void(0);" class="dropdown-link">
                <i class="la la-heart-o"></i> <span>Favorite</span>
              </a>
            </li>
            <li class="dropdown-item">
              <a href="javascript:void(0);" class="dropdown-link">
                <i class="la la-plus"></i> <span>Add to Playlist</span>
              </a>
            </li>
            <li class="dropdown-item">
              <a href="javascript:void(0);" class="dropdown-link">
                <i class="la la-download"></i> <span>Download</span>
              </a>
            </li>
            <li class="dropdown-item">
              <a href="javascript:void(0);" class="dropdown-link">
                <i class="la la-share-alt"></i> <span>Share</span>
              </a>
            </li>
            <li class="dropdown-item">
              <a href="song-details.html" class="dropdown-link">
                <i class="la la-info-circle"></i>
                <span>Song Info</span>
              </a>
            </li>
          </ul>
        </div>
        <button class="btn btn-icon-only" id="playList">
          <i class="ion-md-musical-note"></i>
        </button>
      </div>
      <!-- End | Audio Info -->
    </div>
    <!-- End | Audio Player -->
  </main>
</template>

<script>
export default {
  methods: {},
  computed: {
    loadedSongs() {
      return this.$store.getters.loadedSongs;
    },
    loadedArtists() {
      return this.$store.getters.loadedArtists;
    }
  }
};
</script>
