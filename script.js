const modal =document.getElementById("PrayerModal")
const form =document.getElementById("PrayerForm")
function OpenModal(){
    if(!modal) return;
    modal.style.display ="flex";
    document.body.classList.add("modal-open");
    const firstField  =document.getElementById("name");
    if(firstField){
        setTimeout(() =>firstField.focus {

        }, 50);
    }

}
function closeModal(){
    if(!modal) return;
    modal.style.display ="none";
    document.body.classList.remove("modal-open")
}
if(modal){
    window.onclick=function(event){
        if(event.target === modal){
            closeModal();
        }
    }
}