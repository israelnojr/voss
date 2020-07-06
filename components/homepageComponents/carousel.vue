<template>
  <div class="custom-card">
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
      <a href="javascript:void(0);" class="external" :data-audio="name">
        <img
          src="~/assets/images/cover/large/6.jpg"
          :alt="name"
          class="card-img--radius-lg"
        />
      </a>
    </div>

    <a href="song-details.html" class="custom-card--link mt-2">
      <h6>{{ name }}</h6>
      <p>{{ artist }}</p>
    </a>
  </div>
</template>

<script>
export default {
  props: ["id", "name", "artist"]
};
</script>

<style></style>
