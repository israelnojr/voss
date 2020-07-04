<template>
  <div>
    <ul class="custom-card--labels d-flex ml-auto">
      <StarIcon />
      <li class="dropleft show">
        <DropHandler v-on:requestOpen="openDropDown" />
        <DropDownMenu v-show="modal" />
      </li>
    </ul>
  </div>
</template>

<script>
import DropHandler from "./dropDownHandler";
import DropDownMenu from "./dropDownMenu";
import StarIcon from "./starIcon";

export default {
  data() {
    return {
      modal: false
    };
  },
  methods: {
    openDropDown() {
      this.modal = true;
    }
  },
  components: {
    DropHandler,
    DropDownMenu,
    StarIcon
  }
};
</script>

<style></style>>
