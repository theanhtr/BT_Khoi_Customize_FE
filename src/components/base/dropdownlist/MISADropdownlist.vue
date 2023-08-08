<template>
  <div class="dropdownlist-container">
    <div class="dropdownlist__input-container">
      <input
        type="text"
        class="dropdownlist__input"
        :placeholder="this.placeholder"
      />
      <misa-icon icon="dropdown--solid-grey" />
    </div>
    <div class="dropdownlist__data">
      <div class="dropdownlist__option dropdownlist__option--selected">
        Misa 1
      </div>
      <div class="dropdownlist__option">Misa 2</div>
      <div class="dropdownlist__option">Misa 3</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MISADropdownlist",
  props: {
    placeholder: {
      default: "",
    },
  },
};
</script>

<style scoped>
@import url(./dropdownlist.css);
</style>
