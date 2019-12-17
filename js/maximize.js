
$(document).ready(function(){
    // Funcion que se ejecuta al hacer click sobre una imagen

    //console.log("loaded");
    //window.alert("Hello");
    
    $(".maximize").click(function(){
         //debugger;
        
//       var source = "";
//       var id = $(this).attr("id"); 
//        
//        if(id == "pastel"){
//            source = "../image/png/10.png"
//        }     
        

        var nameOfimg = $(this).attr("id");
        var src = "../image/png/maximize/" + nameOfimg + ".png";


        // Posicionamos las capas
        $('#backgroundimg').css('height',$(document).height());
        $('#previewimg').css('top',(($(window).height()/2) - ($('#previewimg').height()/2) + $(document).scrollTop()));
        $('#previewimg').css('left', ($(document).width()/2) - ($('#previewimg').width()/2));
        // Cargamos la imagen en la capa grande
        //debugger;
        //$('#contentimg').html("<img src='"+$(this).attr("src")+"'>");
        $('#contentimg').html("<img src='"+ src +"'>");
        // Mostramos las capas
        $('#previewimg').fadeIn();
        $('#backgroundimg').fadeIn();
    });
    
    // Cerramos las capas al pulsar sobre el fondo
    $("#backgroundimg").click(function(){
        $('#backgroundimg').fadeOut();
        $('#previewimg').fadeOut();
    });
    // Cerramos las capas al pulsar sobre la cruz
    $("#closeimg").click(function(){
        $('#backgroundimg').fadeOut();
        $('#previewimg').fadeOut();
    });
});
