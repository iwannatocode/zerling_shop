
var device_width, device = "large";


function sub_menu( e ) { 
    $(".sub_men ol").toggleClass("appear");
    var sign = $(this).find( "span").text() == '+' ?  '-' : '+';
    $(this).find( "span").text( sign );
    console.log( e );
}

$(".sub_men").click( sub_menu);

// star-effect del pricipio
$(document).ready(function () {


    //creo los pilotes
    var     pilotes = `<div id="star_efect"  >
                        <div  class="star_efect_pilotes par" ></div>  
                        <div  class="star_efect_pilotes impar" ></div>
                        <div class="star_efect_pilotes par" ></div>
                        <div class="star_efect_pilotes impar"  ></div>
                        <div class="star_efect_pilotes par"  ></div>
                    </div>`;

    $("body").append(pilotes);
    //duracion del efecto
    function time_wait(){
        $("#star_efect").replaceWith("");;
        $("section, nav, footer").fadeIn(1000);
    }
    //camnbiar el tiempo
    window.setTimeout( time_wait, 0000 );

    //obtengo ancho de la pantalla
    device_width = document.body.clientWidth;
    if( device_width < 660){ 
        device = "small"
        small_device();
    }
});
//------------------------------------------------------------------------------------
//efecto de nav bar
var scroll_nav_bar = false, scroll_section_two = false, scroll_section_three = false;

$(document).scroll(function () { 
   
            if( $(document).scrollTop() > 50 && !scroll_nav_bar ){
                $("#nav_bar").addClass( "nav_bar_scroll" );
                $("#nav_bar a").css( "color", "white" );
                $(".nav_button").addClass(  "nav_button_underline"  );
                scroll_nav_bar = true;
            }
            else if(  $(document).scrollTop() < 50 && scroll_nav_bar ){
                $("#nav_bar").removeClass( "nav_bar_scroll" );
                $("#nav_bar a").css( "color", "black" );
                $(".nav_button").removeClass(  "nav_button_underline"  );
                scroll_nav_bar = false;
            } 
                console.log( $(document).scrollTop() );
});


//monitoreo el size
$(window).resize(function(){
    device_width = document.body.clientWidth;
    //console.log( device_width );
    if( device_width < 660 && device == "large" ){
        device = "small"
        small_device();
    }
    if( device_width > 660 && device == "small" ){
        device = "large";
        large_device();
    }
});


// creo menu desplegable para movil
function small_device() {
   var menu = $( '<div id="menu">menu <span class="sign plus">+</span></div>' );
   $("nav").after(menu);
   $("#menu").addClass("new_menu").after( $(".nav_bar_button") );
    $(".nav_bar_button, .nav_button").addClass("new_menu");
  //  $(".new_menu").removeClass("nav_button");
  //arreglo eel hover de menu para pc
  $(" ul li a").css( "color", "black" );
  $(".nav_bar_button li").removeClass(  "nav_button"  );
  $(".nav_bar_button li").removeClass(  "nav_button_underline"  );

//pongo + a los sub menua
    $( ".sub_men a:first" ).append("<span class='sign plus'>+</span></div>");

 //funcion clik para plegar y deplegar
  $("#menu").click(function(){
    $("ul, li").toggleClass("appear");
    var sign = $(this).find( "span").text() == '+' ?  '-' : '+';
    $(this).find( "span").text( sign );
    
  

    $( ".sub_menu ol" ).toggleClass ("appear");
    $(".sub_men ol").removeClass("appear");
    $( ".sub_men a:first" ).find( "span").replaceWith("");
    $( ".sub_men a:first" ).append("<span class='sign plus'>+</span></div>");
   
   // console.log( sign );
  });
  


}
//arreglo cambios para pc
function large_device(){
    //quito los '+'
    $("span").replaceWith("");
    $("ul, li").removeClass("appear").removeClass("new_menu");
    $(".nav_bar_button li").addClass(  "nav_button"  );
    $("nav").append( $(".nav_bar_button") );
    $("#menu").replaceWith("");
    //arreglo el color de font del nav al resize
    if( $(document).scrollTop() > 50  ){
        $("#nav_bar").addClass( "nav_bar_scroll" );
        $("#nav_bar a").css( "color", "white" );
        $(".nav_button").addClass(  "nav_button_underline"  );
        scroll_nav_bar = true;
    }
    else if ( $(document).scrollTop() < 50 ){
        $("#nav_bar").removeClass( "nav_bar_scroll" );
        $("#nav_bar a").css( "color", "black" );
        $(".nav_button").removeClass(  "nav_button_underline"  );
        scroll_nav_bar = false;
    }  
    
}

