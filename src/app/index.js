const {
  default: deletePrintedMovimientos,
} = require("./scripts/modules/deletePrintedMovimientos");
const { default: editMovimiento } = require("./scripts/modules/editMovimiento");
const {
  default: printMovimientos,
} = require("./scripts/modules/printMovimientos");
const {
  default: submitMovimiento,
} = require("./scripts/modules/submitMovimientos");
const {
  default: getMovimientos,
} = require("./scripts/services/getMovimientos");
import { URL_API } from "./scripts/services/data";

import "./styles/style.scss";

const tbody = document.getElementById("tablebody");
const form = document.getElementById("form");

document.addEventListener("DOMContentLoaded", async () => {
  const movimientos = await getMovimientos(URL_API);
  printMovimientos(movimientos, tbody);

  //---PETICIÓN DELETE
  const deleteButtons = document.querySelectorAll(".button--delete");
  deletePrintedMovimientos(deleteButtons, URL_API);

  //---PETICION PATCH
  const editButtons = document.querySelectorAll(".button--edit");
  editMovimiento({ editButtons: editButtons, form: form, url: URL_API });
});

//--PETICION POST
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const params = { form: form, url: URL_API };
  submitMovimiento(params);
});
