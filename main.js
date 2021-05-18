const picture = document.querySelectorAll('.img');
const nameApi = document.querySelectorAll('.nameApi');
const price = document.querySelectorAll('.price');
let b = 0;

console.log(picture);


    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(data=>{
        // b++;

        data.map(x=>{

            picture[b].innerHTML = `<img src =${data[b].image}></img>`
            nameApi[b].innerHTML = data[b].title
            price[b].innerHTML = data[b].price
            b++;
            
        })
    })
   
