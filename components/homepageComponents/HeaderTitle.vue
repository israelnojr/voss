<template>
  <div class="heading">
    <div class="d-flex flex-wrap align-items-end">
      <div class="flex-grow-1">
        <h4>{{ title }}</h4>
        <p>{{ subTitle }}</p>
        <nuxt-link :to="title"
          ><p>{{ pageLink }}</p></nuxt-link
        >
      </div>
      <ButtonSection title="view all" :link="subTitle" />
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  props: ["title", "subTitle", "pageLink"]
};
</script>

<style></style>
