$(document).ready(function(){
    var one,two,three;
    var click_num=[0,0,0,0];
    var distance=367;
    var num_monsters=10;

    function light1(){
        $("#light1").fadeIn(300).fadeOut(300);

    }
    function light2(){
        $("#light2").fadeIn("fast").fadeOut("fast'");
    }
    function light3(){
        $("#light3").fadeIn("fast").fadeOut("fast");
    }

    function startLighting(){
        one=setInterval(function(){
            light1();
        },2000);
        two=setInterval(function(){
            light2();
        },6000);
        three=setInterval(function(){
            light3();
        },8000);
    }

    function stopLighting(){
        window.clearInterval(one);
        window.clearInterval(two);
        window.clearInterval(three);
    }

    window.onblur=stopLighting();
    window.onfocus=startLighting();
    startLighting();

   $("#head").click(function(){
       move(0,this);
   });
    $("#eyes").click(function(){
        move(1,this);
    })
    $("#nose").click(function(){
        move(2,this)
    })
    $("#mouth").click(function(){
        move(3,this);
    })
    function move(i,obj){
        if(click_num[i]<9){
            $(obj).animate({left:"-=367"},500);
            click_num[i]=click_num[i]+1;

        }
        else{
            click_num[i]=0;
            $(obj).animate({left:"0px"},500);

        }
    }
   $("#btnRandomize").click(Randomize);
   $("#btnReset").click(reset);


    function reset(){
        $(".face").each(function(i){
            click_num[i]=0;
            $(this).animate({left:"0px"},500);
        });
    }

    function getRandom(num){
        var random=Math.floor(Math.random()*num);
        return random;

    }
    function Randomize(){
        $(".face").each(function(i){
            var target_position=getRandom(num_monsters);
            var current_position=click_num[i];

            click_num[i]=target_position;
            if(target_position>current_position){
                var move_to=(target_position-current_position)*distance;
                $(this).animate({left:"-="+move_to+"px"},500);
            }
            else if(target_position<current_position){
                var move_to=(current_position-target_position)*distance;
                $(this).animate({left:"+="+move_to+"px"},500);
            }
            else{}
        });
    }


})