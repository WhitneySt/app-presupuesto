import getMovimiento from "./../services/getMovimiento";
import { getDataForm } from "./submitMovimientos";

const editMovimiento = ({ editButtons, form, url }) => {
  editButtons.forEach((button) => {
    button.addEventListener("click", async () => {
      const idMovement = button.getAttribute("data-id");
      const movement = await getMovimiento(url, idMovement);
      console.log(movement);
      sessionStorage.setItem("idEdit", JSON.stringify(idMovement));
      getDataForm(form, movement);
    });
  });
};

export default editMovimiento;
