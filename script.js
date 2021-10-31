
$(document).ready(function () { 
    
    if(!$(".namebox").val()&&!$(".emailbox").val()){
        document.getElementsByClassName('signin').disabled = true
    }
    else{
        document.getElementsByClassName('signin').disabled = false
    }
    $(".signin").click(function (){
        if(!$(".namebox").val()&&!$(".emailbox").val()){
            alert("please enter both details")
        }
        else if(!$(".namebox").val()){

             alert("please enter your name")
        }else if(!$(".emailbox").val()){

            alert("please enter your password")
        }
        else{
            var username='r';
            var pwd='i';
            
            if($(".namebox").val()==username&&$(".emailbox").val()==pwd){
                console.log('clicked')
            }
        }
    })
})