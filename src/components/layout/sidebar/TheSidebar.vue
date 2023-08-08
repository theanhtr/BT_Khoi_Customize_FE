<template>
  <div
    class="sidebar"
    :class="$store.state.isExpandSidebar ? '' : 'sidebar--collapse'"
  >
    <div class="sidebar__logo-container">
      <misa-icon
        icon="sidebar__control--white"
        :tooltip="$t('sidebar.tooltipExpandSidebar')"
        @click="expandSidebar"
        v-if="!$store.state.isExpandSidebar"
        height="fit-content"
        width="fit-content"
      ></misa-icon>
      <a
        href="https://amisapp.misa.vn/home"
        class="toggle-icon"
        title="Misa App"
        v-else
      ></a>

      <router-link
        :class="`logo-${$store.state.langCode}`"
        to="/app/dashboard"
        :title="$t('sidebar.overview')"
        v-if="$store.state.isExpandSidebar"
      ></router-link>
    </div>

    <div class="sidebar__nav">
      <div class="sidebar__quick-add-button">
        <misa-button
          type="sub"
          icon="plus--green"
          width="124px"
          colorText="white"
          v-if="$store.state.isExpandSidebar"
          :border="'2px solid white'"
          >{{ $t("sidebar.quickAddButton") }}</misa-button
        >
        <misa-button type="sub" icon="plus--green" width="30px" v-else />
        >
      </div>
      <div class="sidebar__menu-item-container">
        <router-link
          to="/app/dashboard"
          class="menu-item"
          exact
          activeClass="menu-item--selected"
          :title="$t('sidebar.overview')"
        >
          <misa-icon icon="sidebar__overview"></misa-icon>
          <div class="sidebar__text">{{ $t("sidebar.overview") }}</div>
        </router-link>
        <router-link
          to="/app/employee"
          class="menu-item"
          exact
          activeClass="menu-item--selected"
          :title="$t('sidebar.cash')"
        >
          <misa-icon icon="sidebar__cash"></misa-icon>
          <div class="sidebar__text">{{ $t("sidebar.cash") }}</div>
        </router-link>
        <router-link
          to="/"
          activeClass="menu-item--selected"
          exact
          class="menu-item"
          :title="$t('sidebar.deposits')"
        >
          <misa-icon icon="sidebar__deposits"></misa-icon>
          <div class="sidebar__text">{{ $t("sidebar.deposits") }}</div>
        </router-link>
        <router-link
          to="/"
          activeClass="menu-item--selected"
          exact
          class="menu-item"
          :title="$t('sidebar.purchase')"
        >
          <misa-icon icon="sidebar__purchase"></misa-icon>
          <div class="sidebar__text">{{ $t("sidebar.purchase") }}</div>
        </router-link>
        <router-link
          to="/"
          activeClass="menu-item--selected"
          exact
          class="menu-item"
          :title="$t('sidebar.sell')"
        >
          <misa-icon icon="sidebar__sell"></misa-icon>
          <div class="sidebar__text">{{ $t("sidebar.sell") }}</div>
        </router-link>
        <router-link
          to="/"
          activeClass="menu-item--selected"
          exact
          class="menu-item"
          :title="$t('sidebar.invoiceManagement')"
        >
          <misa-icon icon="sidebar__invoice-management"></misa-icon>
          <div class="sidebar__text">{{ $t("sidebar.invoiceManagement") }}</div>
        </router-link>
        <router-link
          to="/"
          activeClass="menu-item--selected"
          exact
          class="menu-item"
          :title="$t('sidebar.warehouse')"
        >
          <misa-icon icon="sidebar__warehouse"></misa-icon>
          <div class="sidebar__text">{{ $t("sidebar.warehouse") }}</div>
        </router-link>
        <router-link
          to="/"
          activeClass="menu-item--selected"
          exact
          class="menu-item"
          :title="$t('sidebar.tool')"
        >
          <misa-icon icon="sidebar__tool"></misa-icon>
          <div class="sidebar__text">{{ $t("sidebar.tool") }}</div>
        </router-link>
        <router-link
          to="/"
          activeClass="menu-item--selected"
          exact
          class="menu-item"
          :title="$t('sidebar.fixedAssets')"
        >
          <misa-icon icon="sidebar__fixed-assets"></misa-icon>
          <div class="sidebar__text">{{ $t("sidebar.fixedAssets") }}</div>
        </router-link>
        <router-link
          to="/"
          activeClass="menu-item--selected"
          exact
          class="menu-item"
          :title="$t('sidebar.salary')"
        >
          <misa-icon icon="sidebar__salary"></misa-icon>
          <div class="sidebar__text">{{ $t("sidebar.salary") }}</div>
        </router-link>
        <router-link
          to="/"
          activeClass="menu-item--selected"
          exact
          class="menu-item"
          :title="$t('sidebar.tax')"
        >
          <misa-icon icon="sidebar__tax"></misa-icon>
          <div class="sidebar__text">{{ $t("sidebar.tax") }}</div>
        </router-link>
        <router-link
          to="/"
          activeClass="menu-item--selected"
          exact
          class="menu-item"
          :title="$t('sidebar.price')"
        >
          <misa-icon icon="sidebar__price"></misa-icon>
          <div class="sidebar__text">{{ $t("sidebar.price") }}</div>
        </router-link>
        <router-link
          to="/"
          activeClass="menu-item--selected"
          exact
          class="menu-item"
          :title="$t('sidebar.loans')"
        >
          <misa-icon icon="sidebar__loans"></misa-icon>
          <div class="sidebar__text">{{ $t("sidebar.loans") }}</div>
        </router-link>
        <router-link
          to="/"
          activeClass="menu-item--selected"
          exact
          class="menu-item"
          :title="$t('sidebar.synthetic')"
        >
          <misa-icon icon="sidebar__synthetic"></misa-icon>
          <div class="sidebar__text">{{ $t("sidebar.synthetic") }}</div>
        </router-link>
        <router-link
          to="/"
          activeClass="menu-item--selected"
          exact
          class="menu-item"
          :title="$t('sidebar.budget')"
        >
          <misa-icon icon="sidebar__budget"></misa-icon>
          <div class="sidebar__text">{{ $t("sidebar.budget") }}</div>
        </router-link>
        <router-link
          to="/"
          activeClass="menu-item--selected"
          exact
          class="menu-item"
          :title="$t('sidebar.report')"
        >
          <misa-icon icon="sidebar__report"></misa-icon>
          <div class="sidebar__text">{{ $t("sidebar.report") }}</div>
        </router-link>
        <router-link
          to="/"
          activeClass="menu-item--selected"
          exact
          class="menu-item"
          :title="$t('sidebar.financialAnalysis')"
        >
          <misa-icon icon="sidebar__financial-analysis"></misa-icon>
          <div class="sidebar__text">{{ $t("sidebar.financialAnalysis") }}</div>
        </router-link>
        <misa-separation-line></misa-separation-line>
        <router-link
          to="/"
          activeClass="menu-item--selected"
          exact
          class="menu-item"
          :title="$t('sidebar.category')"
        >
          <misa-icon icon="sidebar__category"></misa-icon>
          <div class="sidebar__text">{{ $t("sidebar.category") }}</div>
        </router-link>
        <router-link
          to="/"
          activeClass="menu-item--selected"
          exact
          class="menu-item"
          :title="$t('sidebar.initialBalance')"
        >
          <misa-icon icon="sidebar__initial-balance"></misa-icon>
          <div class="sidebar__text">{{ $t("sidebar.initialBalance") }}</div>
        </router-link>
        <router-link
          to="/"
          activeClass="menu-item--selected"
          exact
          class="menu-item"
          :title="$t('sidebar.knowledge')"
        >
          <misa-icon icon="sidebar__knowledge"></misa-icon>
          <div class="sidebar__text">{{ $t("sidebar.knowledge") }}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheSidebar",
  methods: {
    /**
     * bắt sự kiện mở rộng sidebar
     * @author: TTANH (25/06/2023)
     */
    expandSidebar() {
      try {
        this.$store.commit("toggleSidebar");
      } catch (error) {
        console.log(
          "🚀 ~ file: TheSidebar.vue:129 ~ expandSidebar ~ error:",
          error
        );
      }
    },
  },
};
</script>

<style>
@import url(./sidebar.css);
</style>
