const imagebox=document.getElementById("imagebox")
const image=document.getElementById("image")
const textbox=document.getElementById("textbox")


function generator(){
    image.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+textbox.value;

}

document.querySelector(".btn").addEventListener('click',generator);
