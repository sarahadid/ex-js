let carts = document.querySelectorAll('.add-cart');

let products =[
    {
    name: 'Grey Tshirt',
    tag: 'greytshirt',
    price:15,
    inCart:0
    },
    {
    name: 'Black Tshirt',
    tag: 'blacktshirt',
    price:15,
    inCart:0
    },
    {
    name: 'black Hoddie',
    tag: 'blackhoddie',
    price:20,
    inCart:0
    },
];

for (let i=0; i< carts.length; i++){
    carts[i].addEventListener('click',()=>{
        cartNumbers();
    })
}
function cartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);
    if( productNumbers ) {
        localStorage.setItem('cartNumbers', productNumbers +1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
}