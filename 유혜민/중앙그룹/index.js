console.clear();

$('.btn-open').click(function(){
    //console.log("버튼이 클릭됨");
    
    var layerfamilyHasClassActive = $('.layer-family').hasClass('active');
    
    if ( layerfamilyHasClassActive ) {
        $('.layer-family').removeClass('active');
    }
    
    else {
        $('.layer-family').addClass('active');
    }
});

$('.btn-family-close').click(function(){
    //console.log("버튼이 클릭됨");
    
    var layerfamilyHasClassActive = $('.layer-family').hasClass('active');
    
    if ( layerfamilyHasClassActive ) {
        $('.layer-family').removeClass('active');
    }
    
    else {
        $('.layer-family').addClass('active');
    }
});

