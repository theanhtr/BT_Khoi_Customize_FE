<template>
  <div class="not-found">
    <img src="../../assets/img/bg_404.ef80cdb6.svg" />
    <div class="not-found__title">{{ $t("component.notFound.title") }}</div>
    <misa-button @click="$router.push('/')" type="main" borderRadius="12px">{{
      $t("common.button.rollBack")
    }}</misa-button>
  </div>
</template>

<script>
export default {
  name: "MISAPageNotFound",
};
</script>

<style scoped>
.not-found {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 12px;
}

.not-found__title {
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 20px;
}
</style>
