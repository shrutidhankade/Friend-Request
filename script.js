var removefriend = document.querySelector("#remove")
var addfriend = document.querySelector("#add")
var istatus = document.querySelector("h5")

addfriend.addEventListener("click", function () {
    istatus.innerHTML="FRIENDS😊"
    istatus.style.color="lightseagreen"
})


removefriend.addEventListener("click",function(){
    istatus.innerHTML="STRANGER😔"
    istatus.style.color="crimson"

})