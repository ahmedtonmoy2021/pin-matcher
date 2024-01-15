function getPin(){
    const pin = generatePin() + ''
    if(pin.length === 4){
        return pin
    }else{
        return getPin()
    }
    
}

function generatePin(){
    const random = Math.round(Math.random() * 10000) 
    return random;
}

document.getElementById('pin-btn').addEventListener('click',function(){
    const buttonElement = document.getElementById('generate-pin')
    buttonElement.value = getPin()
})