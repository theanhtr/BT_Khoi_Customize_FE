import MISAResource from "../../../../resource/resource.js";
import store from "../../../../store";

export var headersInfo = [
  {
    id: "EmployeeCode",
    serverName: "EmployeeCode",
    showName:
      MISAResource[store.state.langCode].importExcel.headerMerge
        .employeeHeaderInfo.employeeCode.showName,
    excelColumnIndex: 0,
    isShow: true,
    isRequired: true,
    isCannotChangeChecked: true, //những trường bắt buộc phải thêm
    description:
      MISAResource[store.state.langCode].importExcel.headerMerge
        .employeeHeaderInfo.employeeCode.description,
  },
  {
    id: "FullName",
    serverName: "FullName",
    showName:
      MISAResource[store.state.langCode].importExcel.headerMerge
        .employeeHeaderInfo.fullname.showName,
    excelColumnIndex: 0,
    isShow: true,
    isRequired: true,
    isCannotChangeChecked: true,
    description:
      MISAResource[store.state.langCode].importExcel.headerMerge
        .employeeHeaderInfo.fullname.description,
  },
  {
    id: "DepartmentCode",
    serverName: "DepartmentCode",
    showName:
      MISAResource[store.state.langCode].importExcel.headerMerge
        .employeeHeaderInfo.departmentCode.showName,
    excelColumnIndex: 0,
    isShow: true,
    isRequired: true,
    isCannotChangeChecked: true,
    description:
      MISAResource[store.state.langCode].importExcel.headerMerge
        .employeeHeaderInfo.departmentCode.description,
  },
  {
    id: "Gender",
    serverName: "Gender",
    showName:
      MISAResource[store.state.langCode].importExcel.headerMerge
        .employeeHeaderInfo.gender.showName,
    excelColumnIndex: 0,
    isShow: true,
    isRequired: false,
    isCannotChangeChecked: false,
    description:
      MISAResource[store.state.langCode].importExcel.headerMerge
        .employeeHeaderInfo.gender.description,
  },
  {
    id: "DateOfBirth",
    serverName: "DateOfBirth",
    showName:
      MISAResource[store.state.langCode].importExcel.headerMerge
        .employeeHeaderInfo.dateOfBirth.showName,
    excelColumnIndex: 0,
    isShow: true,
    isRequired: false,
    isCannotChangeChecked: false,
    description:
      MISAResource[store.state.langCode].importExcel.headerMerge
        .employeeHeaderInfo.dateOfBirth.description,
  },
  {
    id: "IdentityNumber",
    serverName: "IdentityNumber",
    showName:
      MISAResource[store.state.langCode].importExcel.headerMerge
        .employeeHeaderInfo.identityNumber.showName,
    excelColumnIndex: 0,
    isShow: true,
    isRequired: false,
    isCannotChangeChecked: false,
    description:
      MISAResource[store.state.langCode].importExcel.headerMerge
        .employeeHeaderInfo.identityNumber.description,
  },
  {
    id: "IdentityDate",
    serverName: "IdentityDate",
    showName:
      MISAResource[store.state.langCode].importExcel.headerMerge
        .employeeHeaderInfo.identityDate.showName,
    excelColumnIndex: 0,
    isShow: true,
    isRequired: false,
    isCannotChangeChecked: false,
    description:
      MISAResource[store.state.langCode].importExcel.headerMerge
        .employeeHeaderInfo.identityDate.description,
  },
  {
    id: "IdentityPlace",
    serverName: "IdentityPlace",
    showName:
      MISAResource[store.state.langCode].importExcel.headerMerge
        .employeeHeaderInfo.identityPlace.showName,
    excelColumnIndex: 0,
    isShow: true,
    isRequired: false,
    isCannotChangeChecked: false,
    description:
      MISAResource[store.state.langCode].importExcel.headerMerge
        .employeeHeaderInfo.identityPlace.description,
  },
  {
    id: "Position",
    serverName: "Position",
    showName:
      MISAResource[store.state.langCode].importExcel.headerMerge
        .employeeHeaderInfo.position.showName,
    excelColumnIndex: 0,
    isShow: true,
    isRequired: false,
    isCannotChangeChecked: false,
    description:
      MISAResource[store.state.langCode].importExcel.headerMerge
        .employeeHeaderInfo.position.description,
  },
  {
    id: "SupplierCustomerGroup",
    serverName: "SupplierCustomerGroup",
    showName:
      MISAResource[store.state.langCode].importExcel.headerMerge
        .employeeHeaderInfo.supplierCustomerGroup.showName,
    excelColumnIndex: 0,
    isShow: true,
    isRequired: false,
    isCannotChangeChecked: false,
    description:
      MISAResource[store.state.langCode].importExcel.headerMerge
        .employeeHeaderInfo.supplierCustomerGroup.description,
  },
  {
    id: "PayAccount",
    serverName: "PayAccount",
    showName:
      MISAResource[store.state.langCode].importExcel.headerMerge
        .employeeHeaderInfo.payAccount.showName,
    excelColumnIndex: 0,
    isShow: true,
    isRequired: false,
    isCannotChangeChecked: false,
    description:
      MISAResource[store.state.langCode].importExcel.headerMerge
        .employeeHeaderInfo.payAccount.description,
  },
  {
    id: "ReceiveAccount",
    serverName: "ReceiveAccount",
    showName:
      MISAResource[store.state.langCode].importExcel.headerMerge
        .employeeHeaderInfo.receiveAccount.showName,
    excelColumnIndex: 0,
    isShow: true,
    isRequired: false,
    isCannotChangeChecked: false,
    description:
      MISAResource[store.state.langCode].importExcel.headerMerge
        .employeeHeaderInfo.receiveAccount.description,
  },
  {
    id: "Salary",
    serverName: "Salary",
    showName:
      MISAResource[store.state.langCode].importExcel.headerMerge
        .employeeHeaderInfo.salary.showName,
    excelColumnIndex: 0,
    isShow: true,
    isRequired: false,
    isCannotChangeChecked: false,
    description:
      MISAResource[store.state.langCode].importExcel.headerMerge
        .employeeHeaderInfo.salary.description,
  },
  {
    id: "SalaryCoefficients",
    serverName: "SalaryCoefficients",
    showName:
      MISAResource[store.state.langCode].importExcel.headerMerge
        .employeeHeaderInfo.salaryCoefficients.showName,
    excelColumnIndex: 0,
    isShow: true,
    isRequired: false,
    isCannotChangeChecked: false,
    description:
      MISAResource[store.state.langCode].importExcel.headerMerge
        .employeeHeaderInfo.salaryCoefficients.description,
  },
  {
    id: "SalaryPaidForInsurance",
    serverName: "SalaryPaidForInsurance",
    showName:
      MISAResource[store.state.langCode].importExcel.headerMerge
        .employeeHeaderInfo.salaryPaidForInsurance.showName,
    excelColumnIndex: 0,
    isShow: true,
    isRequired: false,
    isCannotChangeChecked: false,
    description:
      MISAResource[store.state.langCode].importExcel.headerMerge
        .employeeHeaderInfo.salaryPaidForInsurance.description,
  },
  {
    id: "PersonalTaxCode",
    serverName: "PersonalTaxCode",
    showName:
      MISAResource[store.state.langCode].importExcel.headerMerge
        .employeeHeaderInfo.personalTaxCode.showName,
    excelColumnIndex: 0,
    isShow: true,
    isRequired: false,
    isCannotChangeChecked: false,
    description:
      MISAResource[store.state.langCode].importExcel.headerMerge
        .employeeHeaderInfo.personalTaxCode.description,
  },
  {
    id: "TypeOfContract",
    serverName: "TypeOfContract",
    showName:
      MISAResource[store.state.langCode].importExcel.headerMerge
        .employeeHeaderInfo.typeOfContract.showName,
    excelColumnIndex: 0,
    isShow: true,
    isRequired: false,
    isCannotChangeChecked: false,
    description:
      MISAResource[store.state.langCode].importExcel.headerMerge
        .employeeHeaderInfo.typeOfContract.description,
  },
  {
    id: "NumberOfDependents",
    serverName: "NumberOfDependents",
    showName:
      MISAResource[store.state.langCode].importExcel.headerMerge
        .employeeHeaderInfo.numberOfDependents.showName,
    excelColumnIndex: 0,
    isShow: true,
    isRequired: false,
    isCannotChangeChecked: false,
    description:
      MISAResource[store.state.langCode].importExcel.headerMerge
        .employeeHeaderInfo.numberOfDependents.description,
  },
  {
    id: "AccountNumber",
    serverName: "AccountNumber",
    showName:
      MISAResource[store.state.langCode].importExcel.headerMerge
        .employeeHeaderInfo.accountNumber.showName,
    excelColumnIndex: 0,
    isShow: true,
    isRequired: false,
    isCannotChangeChecked: false,
    description:
      MISAResource[store.state.langCode].importExcel.headerMerge
        .employeeHeaderInfo.accountNumber.description,
  },
  {
    id: "BankName",
    serverName: "BankName",
    showName:
      MISAResource[store.state.langCode].importExcel.headerMerge
        .employeeHeaderInfo.bankName.showName,
    excelColumnIndex: 0,
    isShow: true,
    isRequired: false,
    isCannotChangeChecked: false,
    description:
      MISAResource[store.state.langCode].importExcel.headerMerge
        .employeeHeaderInfo.bankName.description,
  },
  {
    id: "BankBranch",
    serverName: "BankBranch",
    showName:
      MISAResource[store.state.langCode].importExcel.headerMerge
        .employeeHeaderInfo.bankBranch.showName,
    excelColumnIndex: 0,
    isShow: true,
    isRequired: false,
    isCannotChangeChecked: false,
    description:
      MISAResource[store.state.langCode].importExcel.headerMerge
        .employeeHeaderInfo.bankBranch.description,
  },
  {
    id: "BankProvince",
    serverName: "BankProvince",
    showName:
      MISAResource[store.state.langCode].importExcel.headerMerge
        .employeeHeaderInfo.bankProvince.showName,
    excelColumnIndex: 0,
    isShow: true,
    isRequired: false,
    isCannotChangeChecked: false,
    description:
      MISAResource[store.state.langCode].importExcel.headerMerge
        .employeeHeaderInfo.bankProvince.description,
  },
  {
    id: "ContactAddress",
    serverName: "ContactAddress",
    showName:
      MISAResource[store.state.langCode].importExcel.headerMerge
        .employeeHeaderInfo.contactAddress.showName,
    excelColumnIndex: 0,
    isShow: true,
    isRequired: false,
    isCannotChangeChecked: false,
    description:
      MISAResource[store.state.langCode].importExcel.headerMerge
        .employeeHeaderInfo.contactAddress.description,
  },
  {
    id: "ContactPhoneNumber",
    serverName: "ContactPhoneNumber",
    showName:
      MISAResource[store.state.langCode].importExcel.headerMerge
        .employeeHeaderInfo.contactPhoneNumber.showName,
    excelColumnIndex: 0,
    isShow: true,
    isRequired: false,
    isCannotChangeChecked: false,
    description:
      MISAResource[store.state.langCode].importExcel.headerMerge
        .employeeHeaderInfo.contactPhoneNumber.description,
  },
  {
    id: "ContactLandlinePhoneNumber",
    serverName: "ContactLandlinePhoneNumber",
    showName:
      MISAResource[store.state.langCode].importExcel.headerMerge
        .employeeHeaderInfo.contactLandlinePhoneNumber.showName,
    excelColumnIndex: 0,
    isShow: true,
    isRequired: false,
    isCannotChangeChecked: false,
    description:
      MISAResource[store.state.langCode].importExcel.headerMerge
        .employeeHeaderInfo.contactLandlinePhoneNumber.description,
  },
  {
    id: "ContactEmail",
    serverName: "ContactEmail",
    showName:
      MISAResource[store.state.langCode].importExcel.headerMerge
        .employeeHeaderInfo.contactEmail.showName,
    excelColumnIndex: 0,
    isShow: true,
    isRequired: false,
    isCannotChangeChecked: false,
    description:
      MISAResource[store.state.langCode].importExcel.headerMerge
        .employeeHeaderInfo.contactEmail.description,
  },
];
