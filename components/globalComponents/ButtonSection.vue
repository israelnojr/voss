<template>
  <nuxt-link :to="link" class="btn btn-sm btn-pill btn-air btn-primary">{{
    title
  }}</nuxt-link>
</template>

<script>
export default {
  props: ["link", "title"]
};
</script>

<style></style>>
