<template>
  <div class="custom-list--item">
    <div class="text-dark custom-card--inline">
      <div class="custom-card--inline-img">
        <img
          src="~/assets/images/cover/small/1.jpg"
          alt=""
          class="card-img--radius-sm"
        />
      </div>

      <div class="custom-card--inline-desc">
        <p class="text-truncate mb-0">{{ name }}</p>
        <p class="text-truncate text-muted font-sm">
          {{ artist }}
        </p>
      </div>
    </div>
    <TabDropDown />
  </div>
</template>

<script>
export default {
  props: ["id", "name", "artist"]
};
</script>

<style></style>>
