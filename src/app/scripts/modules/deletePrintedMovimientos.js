import deleteMovimiento from "./../services/deleteMovimiento";

const deletePrintedMovimientos = (deleteButtons, url) => {

    deleteButtons.forEach(button => {
        
        button.addEventListener("click", async () => {            
            const isDelete = confirm("¿Está usted seguro o segura de eliminar este movimiento?");
            if (isDelete) {
              const idMovimiento = button.getAttribute("data-id");
                await deleteMovimiento(url, idMovimiento);
                location.reload();
            }
        });
    });
}

export default deletePrintedMovimientos;