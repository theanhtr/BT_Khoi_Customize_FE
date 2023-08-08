import MISAResource from "../../../../../resource/resource.js";
import store from "../../../../../store/index.js";

export var employeeLayoutColumnsInfo = [
  {
    id: "isShow",
    name: MISAResource[store.state.langCode].employeeSubsystem.layoutSetting
      .columnsInfo.display,
    size: 80,
    textAlign: "center",
    format: "checkbox",
    isShow: true,
    isPin: false,
  },
  {
    id: "clientColumnNameDefault",
    name: MISAResource[store.state.langCode].employeeSubsystem.layoutSetting
      .columnsInfo.dataColumnName,
    size: 200,
    textAlign: "left",
    format: "text",
    isShow: true,
    isPin: false,
  },
  {
    id: "name",
    name: MISAResource[store.state.langCode].employeeSubsystem.layoutSetting
      .columnsInfo.interfaceColumnName,
    size: 200,
    textAlign: "left",
    format: "input-text",
    isShow: true,
    isPin: false,
  },
  {
    id: "size",
    name: MISAResource[store.state.langCode].employeeSubsystem.layoutSetting
      .columnsInfo.width,
    size: 120,
    textAlign: "right",
    format: "input-number_no_dot",
    isShow: true,
    isPin: false,
  },
  {
    id: "isPin",
    name: MISAResource[store.state.langCode].employeeSubsystem.layoutSetting
      .columnsInfo.fixedColumn,
    size: 100,
    textAlign: "center",
    format: "checkbox",
    isShow: true,
    isPin: false,
  },
];
