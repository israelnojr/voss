<template>
  <div class="carousel-item-6 arrow-pos-2">
    <div v-for="artist in artists" :key="artist.id" class="custom-card">
      <div class="custom-card--img">
        <nuxt-link :to="artist.slug">
          <img
            src="~/assets/images/cover/large/1.jpg"
            :alt="artist.name"
            class="card-img--radius-lg"
          />
        </nuxt-link>
      </div>

      <nuxt-link :to="artist.slug" class="custom-card--link mt-2">
        <h6 class="mb-0">{{ artist.name }}</h6>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      artists: []
    };
  },
  props: ["artists"],
  methods: {
    created() {
      artists = props.artists;
    }
  }
};
</script>
