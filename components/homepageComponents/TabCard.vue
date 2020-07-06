<template>
  <div>
    <div v-for="song in songs" :key="song.id" class="custom-list--item">
      <div class="text-dark custom-card--inline">
        <div class="custom-card--inline-img">
          <img
            src="~/assets/images/cover/small/1.jpg"
            alt=""
            class="card-img--radius-sm"
          />
        </div>

        <div class="custom-card--inline-desc">
          <p class="text-truncate mb-0">{{ song.name }}</p>
          <p class="text-truncate text-muted font-sm">
            {{ song.artist }}
          </p>
        </div>
      </div>
      <TabDropDown />
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

<style></style>>
