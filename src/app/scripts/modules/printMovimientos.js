const printMovimientos = (movements, container) => {
  container.innerHTML = "";
  movements.forEach((element, index) => {
    container.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${element.description}</td>
            <td>${element.price}</td>
            <td>${element.type}</td>
            <td><span class="material-symbols-outlined button--delete" data-id=${
              element.id
            }>
close
</span><span class="material-symbols-outlined button--edit" data-id=${
      element.id
    }>
edit
</span></td>
        </tr>
        `;
  });
};

export default printMovimientos;
