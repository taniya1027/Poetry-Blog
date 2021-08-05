//alert("working");

var list = document.getElementsByClassName("list-link");
console.log(list);

for(var i = 0; i < list.length; i++)
{
   list.item(i).onmouseover = function(){
      this.style.backgroundColor = "orange";
      this.style.fontSize = "15px";
   }
   
   list.item(i).onmouseout = function(){
       this.style.backgroundColor = "honeydew";
       this.style.fontSize = "12px";
   }
}

var posts = document.getElementsByClassName("posts");

document.getElementById("poem1").onclick = function(){
    
    window.location.href = "poem1.html"
}

document.getElementById("poem1").onmouseover = function(){
    document.getElementById("poem1").style.cursor = "pointer";
}

document.getElementById("poem2").onclick = function(){
    
    window.location.href = "poem2.html"
}

document.getElementById("poem2").onmouseover = function(){
    document.getElementById("poem2").style.cursor = "pointer";
}

document.getElementById("poem3").onclick = function(){
    
    window.location.href = "poem3.html"
}

document.getElementById("poem3").onmouseover = function(){
    document.getElementById("poem3").style.cursor = "pointer";
}


document.getElementById("poem4").onclick = function(){
    
    window.location.href = "poem4.html"
}

document.getElementById("poem4").onmouseover = function(){
    document.getElementById("poem4").style.cursor = "pointer";
}