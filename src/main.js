import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import sprintf from "sprintf-js"; // sử dụng để dùng biến trong string
import i18n from "./resource/i18n.js";

import MISAButton from "./components/base/button/MISAButton.vue";
import MISAIcon from "./components/base/icon/MISAIcon.vue";
import MISASeparationLine from "./components/base/separation-line/MISASeparationLine.vue";
import MISASearchInput from "./components/base/input/search-input/MISASearchInput.vue";
import MISAFileInput from "./components/base/input/file-input/MISAFileInput.vue";
import MISADropdownlist from "./components/base/dropdownlist/MISADropdownlist.vue";
import MISATable from "./components/base/table/MISATable.vue";
import MISACheckboxInput from "./components/base/input/MISACheckboxInput.vue";
import MISALoadingSpinner from "./components/base/loading/loading-spinner/MISALoadingSpinner.vue";
import MISALoadingSkeleton from "./components/base/loading/loading-skeleton/MISALoadingSkeleton.vue";
import MISAPopup from "./components/base/popup/MISAPopup.vue";
import MISAOutConfirmPopup from "./components/base/popup/out-confirm-popup/MISAOutConfirmPopup.vue";
import MISAErrorPopup from "./components/base/popup/error-popup/MISAErrorPopup.vue";
import MISADeletePopup from "./components/base/popup/delete-popup/MISADeletePopup.vue";
import MISATextfield from "./components/base/textfield/MISATextfield.vue";
import MISACombobox from "./components/base/combobox/MISACombobox.vue";
import MISADatePicker from "./components/base/date-picker/MISADatePicker.vue";
import MISAArrowDown from "./components/base/arrow-down/MISAArrowDown.vue";
import MISARadioInput from "./components/base/radio-input/MISARadioInput.vue";
import MISATooltip from "./components/base/tooltip/MISATooltip.vue";
import MISAToast from "./components/base/toast/MISAToast.vue";
import MISAPaging from "./components/base/paging/MISAPaging.vue";

import MISAEnum from "./enum";

const app = createApp(App);

/**
 * sử dụng để chọn bôi đen value khi ấn vào 1 input
 * @author: TTANH (31/07/2023)
 */
app.directive("MISABlackenOut", {
  created: (el) => {
    el.onfocus = () => {
      el.select();
    };
  },
});

app.use(store).use(router);

app
  .component("misa-separation-line", MISASeparationLine)
  .component("misa-icon", MISAIcon)
  .component("misa-search-input", MISASearchInput)
  .component("misa-file-input", MISAFileInput)
  .component("misa-checkbox-input", MISACheckboxInput)
  .component("misa-dropdownlist", MISADropdownlist)
  .component("misa-button", MISAButton)
  .component("misa-loading-skeleton", MISALoadingSkeleton)
  .component("misa-loading-spinner", MISALoadingSpinner)
  .component("misa-popup", MISAPopup)
  .component("misa-out-confirm-popup", MISAOutConfirmPopup)
  .component("misa-error-popup", MISAErrorPopup)
  .component("misa-delete-popup", MISADeletePopup)
  .component("misa-textfield", MISATextfield)
  .component("misa-combobox", MISACombobox)
  .component("misa-table", MISATable)
  .component("misa-arrow-down", MISAArrowDown)
  .component("misa-date-picker", MISADatePicker)
  .component("misa-radio-input", MISARadioInput)
  .component("misa-tooltip", MISATooltip)
  .component("misa-toast", MISAToast)
  .component("misa-paging", MISAPaging);

app.config.globalProperties.$_MISAEnum = MISAEnum;
app.config.globalProperties.$sprintf = sprintf.sprintf;

app.use(i18n);

app.mount("#app");

/**
 * Hàm dùng để set thông tin về phân trang nhân viên
 * vào local storage
 * @author: TTANH (01/08/2023)
 */
function employeePageInfo() {
  localStorage.setItem("pageNumber", 1);
  localStorage.setItem("pageSize", 10);
}

if (!localStorage.getItem("pageNumber")) {
  employeePageInfo();
}
