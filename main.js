//---data--
var gitname = document.getElementById("gitname");
var btn = document.getElementById("btn");
var chooser = document.getElementById("chooser");
var lists = {};
var namesArray = [];
var ajax = new XMLHttpRequest();
//---event handlers----
window.onload = initialize;
//-----functions-------
function initialize(){
    btn.onclick = function(){
        //point to url
        var url = "https://" + gitname.value + ".github.io/music/list.json";

        ajax.open("GET", url);
        ajax.send();
        //------------
        ajax.onload = function(){
            if(ajax.status === 200){
                saveNewList();
            }
            else{
                alert("Trouble getting list:\n" + ajax.response);
            }
        };
    };
}//===| END of initialize() |=====
function addToBox(newGitName){
    
    //make a real array of options from chooser
    var opsArray = [].slice.call(chooser.options, 0);
    namesArray = [];
    opsArray.forEach(function(m){
        namesArray.push(m.innerHTML);

    });

    //add newGitName only if not aready there
    if(namesArray.indexOf(newGitName) === -1){
        var op = document.createElement("option");
        op.innerHTML = newGitName;
        chooser.appendChild(op);
    }
}

function sendListToServer(object){
    var objectString = JSON.stringify(object);
}

function saveNewList(){
    var newname = gitname.value.toLowerCase().trim();
    if(!lists[newname]){
        lists[newname] = JSON.parse(ajax.response);
        addToBox(newname);
        sendListToServer(lists);
    }
}