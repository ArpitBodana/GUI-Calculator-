var result =0;
function buttonvalue(id){
    $(document).ready(function(){
        var x=document.getElementById(id).innerHTML;
        // x=parseInt(x)+1;
        var y=$(".dplay").val()+x;
        $(".dplay").val(y); 
        result=y;
    })
}
function clearall(){
    window.location.reload()
}
function calculate(str){
    return Function(`'use strict'; return (${str})`)()
}
function evalvalue(){
    // var x= eval(result);
    
    var x =calculate(result);
    $(".dplay").val(x);
    
    
}
function remove(){
    var x=$(".dplay").val();
    x=x.slice(0,x.length-1);
    $(".dplay").val(x);

}
function plusminus(){
    var x=$(".dplay").val();
    x=x*-1;
    $(".dplay").val(x);
}