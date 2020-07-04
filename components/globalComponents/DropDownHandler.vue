<template>
  <a
    href="javascript:void(0);"
    role="button"
    data-toggle="dropdown"
    aria-haspopup="true"
    aria-expanded="false"
  >
    <i class="ion-md-more"></i>
  </a>
</template>
<script>
export default {
  methods: {
    openDropdown() {
      this.$emit("requestOpen");
    }
  }
};
</script>

<style></style>>
