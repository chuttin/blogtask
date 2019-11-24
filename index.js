function contentFadeOut(){
    $( "#content" ).fadeOut( 500, function(){

    });

    $("#about-control").animate(
        {
            top:'10%'
        },
        "slow"
    )

} 

function contentFadeIn(){
    $("#about-control").animate(
        {
            top:'-65%'
        },
        "slow"
    );

    $( "#content" ).fadeIn( 500, function(){

    })
} 