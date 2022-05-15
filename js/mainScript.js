const menutoggler = document.getElementById('menu-toggler')
const closeicon = document.getElementById('closeicon')
const iconCart = document.getElementById('iconCart')
let basquet = document.getElementById('basquet')
let emptyCard = document.getElementById('emptyCard')
let menuDrpDown = document.getElementById('menuDrpDown')
let cartInner = document.getElementById('cartInner')
let size = document.getElementById('size')
const addtocartbtn = document.getElementById('addtocartbtn')
const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
let filledcart = document.getElementById('filledcart')
let flcartsize = document.getElementById('flcartsize')
let total = document.getElementById('total')
const trashicon = document.getElementById('trashicon')
let iconCartImg = document.getElementById('iconCartImg')
let btnprev = document.getElementById('btnprev')
let btnext = document.getElementById('btnext')
let imgPrd = document.getElementById('imgPrd')
let conter = 1
let lightBox = document.getElementById('lightbox')
let lgboxIconclose = document.getElementById('lgboxIconclose')
let lgboxclose = document.getElementById('lgboxclose')

let EcommerceApp = function() {

    this.active = function(x) {
        x.classList.toggle('active')   
    }

    this.showAdded = () => {

        iconCartImg.classList.toggle('active')

        this.active(basquet)

            if (cartInner.innerHTML === '') {
                
                emptyCard.classList.add('active')   
            }
            else {
                emptyCard.classList.remove('active')
        
                filledcart.classList.add('active')
            }  
    }

    this.addtocart = () => {
        if(size.innerHTML == 0 || size.innerHTML == '0') {
            return false
        }
        cartInner.innerHTML = size.innerHTML
        flcartsize.innerHTML = cartInner.innerHTML
        total.innerHTML = (`$ ${eval(125 * cartInner.innerHTML)}.00`)
        this.showAdded()
    }

    this.remove = (y) => {
        cartInner.innerHTML = ''
        filledcart.classList.remove('active')
        emptyCard.classList.add('active')
    }

    this.prevNext = (w) => {

        if(w == 'prev'){
            
            if(conter == 0 || conter == 1){
                return true

            }
            else {
                --conter
                document.getElementById('img' + conter).checked = true
            }
              
        }

        if(w == 'next'){

            if(conter >= 4){
                return true
            }

             else {
                ++conter
                document.getElementById('img' + conter).checked = true                
            }
        }
        
    }
}


let ecommerce = new EcommerceApp()

btnprev.onclick = () => ecommerce.prevNext(w = 'prev')

btnext.onclick = () => ecommerce.prevNext(w = 'next')

menutoggler.onclick =  () => ecommerce.active(menuDrpDown)

closeicon.onclick = () => ecommerce.active(menuDrpDown)

iconCart.onclick = () => ecommerce.showAdded()
    
addtocartbtn.onclick = () => ecommerce.addtocart()


minus.onclick = () => {
    if(size.innerHTML == '0'){
        return true
    }
    let zero = parseInt(size.innerHTML)
    size.innerHTML = --zero  

}

plus.onclick = () => {
    let zero = parseInt(size.innerHTML)
    size.innerHTML = ++zero
}

trashicon.onclick = () => ecommerce.remove()

lgboxIconclose.onclick = () => {
    lightBox.classList.remove('active')
    btnext.classList.remove('active')
    btnprev.classList.remove('active')
    lgboxclose.classList.add('active')
}

function activeLightbox() {
    lightBox.classList.add('active')
    btnext.classList.add('active')
    btnprev.classList.add('active')
    lgboxclose.classList.remove('active')

}









 

