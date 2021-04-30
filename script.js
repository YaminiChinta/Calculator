function dele(){
    var p=document.getElementById('display').value;
    document.getElementById('display').value=p.slice(0,p.length-1);
}

function calculate(){
    var a=document.getElementById('display').value;
    var b=eval(a);
    if(b==undefined){
        b=null;
    }
    document.getElementById('display').value=b;
}
