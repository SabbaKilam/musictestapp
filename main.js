//---data--
var gitname = document.getElementById("gitname");
var btn = document.getElementById("btn")
var lists = {};
//---event handlers----
window.onload = initialize;
//-----functions-------
function initialize(){
   // makeSelectionBox();
    btn.onclick = function(){
        //point to url
        var url = "https://" + gitname.value + ".github.io/music/list.json";
        var ajax = new XMLHttpRequest();
        ajax.open("GET", url);
        ajax.send();
        //------------
        ajax.onload = function(){
            alert(ajax.response);
            //add to lists
            var newname = gitname.value.trim();
            lists[newname] = JSON.parse(ajax.response);
        };
    };  
}//===| END of initialize() |=====
