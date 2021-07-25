$(document).ready(function(){
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
    })

})