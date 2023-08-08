import store from "../store";
import MISAResource from "../resource/resource";

function CommonErrorHandle() {
  store.commit("addToast", {
    type: "error",
    text: MISAResource[store.state.langCode].errorHandle.serverError
      .defaultError,
  });
}

export { CommonErrorHandle };
