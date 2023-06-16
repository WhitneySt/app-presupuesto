import Swal from "sweetalert2";
import patchMovimiento from "./../services/patchMovimiento";
import postMovimiento from "./../services/postMovimiento";

const submitMovimiento = async ({ form, url }) => {
  // const dataForm = {};
  // const childrenForm = Array.from(form.children);
  // const dataFormInputs = childrenForm.filter(
  //   (item) => item.localName === "input" || item.localName === "select"
  // );
  // const labelsForm = childrenForm.filter((item) => item.localName === "label");

  // if (isEdit) {

  // }

  // dataFormInputs.forEach((item) => {
  //   dataForm[item.id] = item.value;
  // });

  const idEdit = JSON.parse(sessionStorage.getItem("idEdit"));

  const dataForm = getDataForm(form);
  console.log(dataForm);

  if (dataForm.error) {
    Swal.fire("Oops!", dataForm.message, "error");
  } else {
    if (dataForm.isEdit || idEdit) {
      const id = dataForm.isEdit || idEdit;
      console.log(id);
      await patchMovimiento(url, id, dataForm.dataForm);
      sessionStorage.removeItem("idEdit");
    } else {
      await postMovimiento(url, dataForm.dataForm);
    }
    location.reload();
  }
};

export default submitMovimiento;

export const getDataForm = (form, isEdit = null) => {
  const dataForm = {};
  const childrenForm = Array.from(form.children);
  const dataFormInputs = childrenForm.filter(
    (item) => item.localName === "input" || item.localName === "select"
  );
  const labelsForm = childrenForm.filter((item) => item.localName === "label");

  // const label = document.querySelectorAll("label");
  // const input = document.querySelectorAll("inputs");

  if (isEdit) {
    dataFormInputs.forEach((element) => {
      element.value = isEdit[element.id];
    });
  }

  dataFormInputs.forEach((item) => {
    dataForm[item.id] = item.value;
  });

  const emptyField = validationForm(dataForm, labelsForm);
  if (emptyField) {
    return {
      dataForm: {},
      error: true,
      message: `El formulario presenta los siguientes campos vacíos: ${emptyField}`,
    };
  } else {
    return {
      dataForm: dataForm,
      error: false,
      message: null,
      isEdit: isEdit? isEdit.id : false,
    };
  }
};

const validationForm = (data, labelList) => {
  let emptyField = "";
  for (const key in data) {
    if (!data[key]) {
      const label = labelList.find((item) => item.getAttribute("for") === key);

      emptyField += ` ${label.innerText}`;
    }
  }
  return emptyField;
};
