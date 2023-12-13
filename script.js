function myFunction(){
    var un = document.forms["myForm"]["Uname"].value;
    var pw = document.forms["myForm"]["Pass"].value;
    if(un=="admin"&&pw=="1234"){
        window.location.href="iframe.html"
    }
    else{
        alert("Invalid Recheck");
    }
}