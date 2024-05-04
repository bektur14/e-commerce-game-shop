class Shopping {
  handleClear() {
    ROOT__SHOPPING.innerHTML =""
  }
  render() {
    const productsStore = localStorageUtil.getProducts();

    let htmlCatalog = "";
    let sumCatalog = 0

    Catalog.forEach(({ id, name, price, img }) => {
      if (productsStore.indexOf(id) !== -1) {
        htmlCatalog += `
                <tr class="shpping-element">
                  <td class="shopping-element__img"><img src="${img}"/></td>
                  <td class="shopping-element__name">${name}</td>
                  <td class="shopping-element__price">${price} RUB</td>
                </tr>
                `;
                sumCatalog+=Number(price)
      }
    });

    const html = `
    <div class="shopping-container">
        <div class="shopping__close" onclick="shoppingPage.handleClear()"></div>
        <table>
            ${htmlCatalog}
            <tr class="shopping-element">
                    <td class="shopping-element__name">Cумма:</td>
                    <td class="shopping-element__price">${sumCatalog} RUB</td>
                </tr>
        </table>
    </div>
    `;
    ROOT__SHOPPING.innerHTML = html;
  }
}

const shoppingPage = new Shopping();
