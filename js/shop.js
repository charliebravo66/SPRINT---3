// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
   {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];


// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

var subtotal = 0;

// Exercise 1

function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // Hacemos un for para recorrer los productos
    for(let i=0;i<products.length;i++){

        if(id == products[i].id){
            //añadimos producto a la cartList    
            cartList.push(products[i])
            
             //cartList.push(products[id]);
            console.log(cartList);
        }    
    }
    //llamada función que genera Carrito
    generateCart();
    //llamada función que calcula el total del Carrito
    calculateTotal();

    }




// Exercise 2
function cleanCart() {
    //alert("limpiar cesta");
 
    //limpiar cesta
    cart = [];
    //función imprime cesta modal 
    printCart();
    //ponemos el contador de la cesta a 0
    document.getElementById('count_product').innerHTML = 0;
    //console.log(cart);
   

}

// Exercise 3

function calculateTotal() {
    // variable total a 0
    total = 0; 
    for(i=0;i<cart.length;i++){
        if(isNaN(cart[i].subtotalWithDiscount)){
            total += cart[i].subtotal;
        }
        else {
            total += cart[i].subtotalWithDiscount;
        }        
    }
    //redondeamos la cantidad total 
    total = total.toFixed(2);

    cart.total = total;

    // precio total cesta
    console.log("total = "+total);
    // Calculate total price of the cart either using the "cartList" array
}


// Exercise 4
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    //llamamos función limpiar carrito antes de generar 

     cleanCart();

    //pasar del carlist al cart
    for(i=0;i<cartList.length;i++){
        let existe = false;        
        for(j=0;j<cart.length; j++){
            if(cartList[i].id==cart[j].id){
                cart[j].quantity = cart[j].quantity + 1;
                existe = true;
                break;
            }
        }
        // si es distinto de la cantidad
        if(!existe){
            cartList[i].quantity = 1;
            cart.push(cartList[i])
        }
    }

    //llamamos a la función promociones
    applyPromotionsCart();
    //llamamos a la función imprimir carrito
    printCart();

    console.log(cart);

}

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    for (i = 0; i < cart.length; i++) {
        if (cart[i].name == 'cooking oil' && cart[i].quantity >= 3)
            //promoción aceite si compra más de 3 botellas             
            cart[i].subtotalWithDiscount = cart[i].quantity * 10;             
        else if (cart[i].name == 'Instant cupcake mixture' && cart[i].quantity >= 10)
            //con más de 10 productos para hacer pastel
            cart[i].subtotalWithDiscount = (cart[i].subtotal / 3) * 2; 
        else {
            delete cart[i].subtotalWithDiscount;            
        }
        cart[i].subtotal = cart[i].quantity * cart[i].price;
    }
}



// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    // limpiamos pantalla carrito
   //cleanCart()

        //vaciamos los datos iniciales del carrito
        document.getElementById('cart_list').innerHTML = "";
        document.getElementById('totalPrecio').innerHTML = "";
        //creamos variable lista vacía
        let lista = "";
                  
        //hacemos un for para recorrer los productos del carrito de la compra
        for (i = 0; i < cart.length; i++) {
        
            
        //variable con la creación dinámica de los datos del carrito (nombre, precio, cantidad, total...)
            let p = "<tr>"
                + "<th scope=\"row\">"+cart[i].name+"</th>"
                + "<td align='right'>"+cart[i].price+" &euro;</td>"
                + "<td align='center'>"+cart[i].quantity+"</td>" 
                + "<td align='right'>"+cart[i].subtotal+" &euro;</td>"
<<<<<<< HEAD
                + "<td align='right'>"+cart[i].subtotalWithDiscount+"  &euro;</td>"   
                  
                
                if(cart[i].name == 'cooking oil' && cart[i].quantity >= 3 || cart[i].name == 'Instant cupcake mixture' && cart[i].quantity >= 10)
                {
                                  
                
                 "<td align='right'>"+cart[i].subtotalWithDiscount+"  &euro;</td>"
=======
                + "<td align='right'>"+cart[i].subtotalWithDiscount+"  &euro;</td>"    
                
                
                if(cart[i].name == 'cooking oil' && cart[i].quantity >= 3 || cart[i].name == 'Instant cupcake mixture' && cart[i].quantity >= 10)
                {
                    
                  + "<td>"+ cart[i].subtotalWithDiscount + "</td>"                   
                
                // "<td align='right'>"+cart[i].subtotalWithDiscount+"  &euro;</td>"
>>>>>>> 739198542c92279c75668746d4ce037e8897aa8d
               
                } else {
                  + "<td align='right'>"+cart[i].subtotal+" &euro;</td>"
                 
                  }
                  
              + "</tr>";

                                


            lista = lista + p;
        }
        
        let precioFinal = "";
        

            let t = "<tr>"
            + "<th scope=\"row\"> TOTAL: "+cart.total+" &euro;</th>"
            + "</tr>";
            
            precioFinal = precioFinal + t;
         
        
        document.getElementById('totalPrecio').innerHTML = precioFinal;

        document.getElementById('cart_list').innerHTML = lista;
        
        document.getElementById('count_product').innerHTML = cartList.length;
        
    
}


function limpiarCacheModal(){
    alert("limpia cache");
    jQuery(document).ready(function(){

	jQuery('#cartModal').on('hidden.bs.modal', function (e) {
	    jQuery(this).removeData('bs.modal');
	    jQuery(this).find('.modal-content').empty();
	})

    })
}

// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

function open_modal(){
	console.log("Open Modal");
	printCart();
}