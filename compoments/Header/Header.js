class Header{

    handlerOpenShoppingCart(){
        shoppingPage.render()
    }
    render(count){
        const html =`
        <div class="header-container">
            <div class="header-cart" onclick="headerPage.handlerOpenShoppingCart();">
                🛒 ${count}
            </div>
        </div>
        `

        ROOT__HEADER.innerHTML = html
    }
}

const headerPage = new Header()

