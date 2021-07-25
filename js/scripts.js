
//This is user interface logic
$(document).ready(function(){

    //Clicking th icons gives a text under them and vice versa
    $('.click-design').click(function(){
        $('figure#design-shown').toggle();
        $('div#design-hidden').toggle();
    });
    $('.click-dev').click(function(){
        $('figure#dev-shown').toggle();
        $('div#dev-hidden').toggle();
    });
    $('.click-product').click(function(){
        $('figure#product-shown').toggle();
        $('div#product-hidden').toggle();
    });

    //On mouse hoover, the title is shown on each portfolio project.
    $('div#work4-profile').mouseover(function(){
        $('div#work4').show();
    })
    .mouseout(function(){
        $('div#work4').hide();
    })
    $('div#work3-profile').mouseover(function(){
        $('div#work3').show();
    })
    .mouseout(function(){
        $('div#work3').hide();
    })
    $('div#work2-profile').mouseover(function(){
        $('div#work2').show();
    })
    .mouseout(function(){
        $('div#work2').hide();
    })
    $('div#work1-profile').mouseover(function(){
        $('div#work1').show();
    })
    .mouseout(function(){
        $('div#work1').hide();
    })
    $('div#work5-profile').mouseover(function(){
        $('div#work5').show();
    })
    .mouseout(function(){
        $('div#work5').hide();
    })

    $('div#work6-profile').mouseover(function(){
        $('div#work6').show();
    })
    .mouseout(function(){
        $('div#work6').hide();
    })
    $('div#work7-profile').mouseover(function(){
        $('div#work7').show();
    })
    .mouseout(function(){
        $('div#work7').hide();
    })
    $('div#work8-profile').mouseover(function(){
        $('div#work8').show();
    })
    .mouseout(function(){
        $('div#work8').hide();
    });

    //We take values from the user and alert them that the messege is received
    $('form').submit(function(event){
        event.preventDefault();
        var name=$('input#name').val();
        var email=$('input#email').val();
        giveFeedback(name);
    })

});


//Business Logic
function giveFeedback(name){
           alert("Hello "+name+" We have received your messege. Thanks for reaching out to us.");  
}
