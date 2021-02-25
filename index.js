
var device_width, device = "large";

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
   var menu = `<div id="menu">menu</>`;
   $("nav").after(menu);
   $("#menu").addClass("new_menu").append( $(".nav_bar_button") );
    $(".nav_bar_button, .nav_button").addClass("new_menu");
  //  $(".new_menu").removeClass("nav_button");
  $("#menu").click(function(){

    $("ul, li").toggleClass("appear");
  });

}
//arreglo cambios para pc
function large_device(){
    $("nav").append( $("#menu ul") );
    $("#menu").replaceWith("");
}

