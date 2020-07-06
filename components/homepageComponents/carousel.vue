<template>
  <div class="carousel-item-5 arrow-pos-3">
    <div v-for="song in songs" :key="song.id" class="custom-card">
      <div class="custom-card--img">
        <div class="custom-card--info">
          <ul class="custom-card--labels d-flex">
            <StarIcon />
          </ul>
          <div class="dropdown dropdown-icon">
            <DropDownHandler />
            <DropDownList />
          </div>
        </div>
        <a href="javascript:void(0);" class="external" :data-audio="song">
          <img
            src="~/assets/images/cover/large/6.jpg"
            :alt="song.name"
            class="card-img--radius-lg"
          />
        </a>
      </div>

      <a href="song-details.html" class="custom-card--link mt-2">
        <h6>{{ song.name }}</h6>
        <p>{{ song.artist }}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      songs: []
    };
  },
  props: ["songs"],
  methods: {
    created() {
      songs = props.songs;
    }
  }
};
</script>

<style></style>
