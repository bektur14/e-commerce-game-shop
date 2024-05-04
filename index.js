function render(){
    const productsStore = localStorageUtil.getProducts()

    headerPage.render(productsStore.length)
    productsPage.render();
}
let Catalog = []
render()

fetch("./server/catalog.json")
    .then(res => res.json())
    .then(body =>{
        Catalog = body
        render()
    })
    .catch( err =>{
        console.error(err)
    })

