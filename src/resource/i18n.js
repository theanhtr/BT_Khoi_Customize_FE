import { createI18n } from "vue-i18n";
import MISAResource from "./resource.js";
import store from "../store";

const i18n = createI18n({
  locale: store.state.langCode,
  fallbackLocale: "vi",
  messages: MISAResource,
});

export default i18n;
