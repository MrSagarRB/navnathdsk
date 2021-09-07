function passvalues(){
   var fullname = document.getElementById("fname").value;
   var addrv = document.getElementById("addr").value;
   var mobv = document.getElementById("mob").value;
   var ltrv = document.getElementById("ltr").value;
   var advamount = document.getElementById("advamt").value;










   localStorage.setItem("textvalue",fullname);
   localStorage.setItem("address",addrv);
   localStorage.setItem("mobile",mobv);
   localStorage.setItem("liter",ltrv);
   localStorage.setItem("adv-amount",advamount);
 





return false;
}

const d = new Date();
document.getElementById("date").innerHTML=d.getDate();
document.getElementById("month").innerHTML=d.getMonth() +1;
document.getElementById("year").innerHTML=d.getFullYear();

document.getElementById("appname").innerHTML=localStorage.getItem("textvalue");
document.getElementById("appname2").innerHTML=localStorage.getItem("textvalue");
document.getElementById("addrp2").innerHTML=localStorage.getItem("address");
document.getElementById("mobilep2").innerHTML=localStorage.getItem("mobile");
document.getElementById("literp2").innerHTML=localStorage.getItem("liter");
document.getElementById("amt2").innerHTML=localStorage.getItem("adv-amount");
