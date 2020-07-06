<template>
  <div class="custom-card">
    <div class="custom-card--img">
      <nuxt-link :to="slug">
        <img
          src="~/assets/images/cover/large/1.jpg"
          :alt="name"
          class="card-img--radius-lg"
        />
      </nuxt-link>
    </div>

    <nuxt-link :to="slug" class="custom-card--link mt-2">
      <h6 class="mb-0">{{ name }}</h6>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ["slug", "name"]
};
</script>
