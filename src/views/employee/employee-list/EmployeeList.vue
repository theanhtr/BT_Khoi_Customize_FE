<template>
  <div class="page">
    <div class="page__header">
      <div class="page__title">{{ $t("employeeSubsystem.title") }}</div>
    </div>
    <misa-button
      type="link"
      colorText="#0075c0"
      width="fit-content"
      height="fit-content"
      style="float: left"
    >
      <div
        class="button-content"
        :style="{
          display: 'flex',
          alignItems: 'center',
        }"
      >
        <misa-icon
          icon="arrow-left--blue"
          width="16px"
          height="16px"
        ></misa-icon>
        {{ $t("common.button.allCategory") }}
      </div>
    </misa-button>
    <div class="page__container">
      <EmployeeContent />
    </div>
  </div>
</template>

<script>
import EmployeeContent from "./child-component/EmployeeContent.vue";

export default {
  name: "EmployeeList",
  components: {
    EmployeeContent,
  },
};
</script>

<style scoped>
@import url(./employee-list.css);
</style>
