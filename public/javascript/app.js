$(document).ready(function () {



    $("#btning").click(function () {
        $('#block').hide()
        var btnok = $('<input id="btnok" type="button" class="btn btn-danger" value="OK" style="margin-left: 10">').click(function () {
            window.location.href = "toyota.html"
        })
        $('#cont').append('<p>Usuario:</p>').append('<input id="txtuser" type="text">').append('<p>Contrasena:</p>').append('<input id="txtpass" type="password">').append(btnok)
    })
    $("#btnreg").click(function () {
        $('#block').hide()
        var btncrear = $('<input id="btncrea" type="button" class="btn btn-danger" value="Crear" style="margin-left: 10">').click(function () {

        })
        $('#cont').append('<p>Nombre:</p>').append('<input id="txtnom" type="text">').append('<p>Apellido:</p>').append('<input id="txtape" type="text">').append('<p>Usuario: </p>').append('<input id="txtuse" type="text">').append('<p>Contrasena:</p>').append('<input id="txtpas" type="text">').append(btncrear)
    })

    $('#btntraer').click(function () {
        traerautos();
    })

    function crearAuto(auto) {
        var autos = '<div class="row">' +
            '<div class="col-md-7">' +
            '<div class="media">' +
            '<div class="media-center">' +
            '<img class="imagenesautos" src="' + auto.pathImage + '" style="width: 190; height: 94" alt="">' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="col-md-5">' +
            '<div class="media">' +
            '<div class="media-right">' +
            '<h3 class="desc">' + auto.autodesc + '</h3>' +
            '<h4 class="precio">' + auto.precio + '</h4>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>';

        $('#contenedorautos').append(autos);

        $(".desc").click(function (e) {
            $("#textocentro").text($(this).text())
            $("#vistaprevia").attr("src", $(this).parent().parent().parent().parent().find('img').attr("src"))
            $("#preciomid").text($(this).parent().find('.precio').text())

        })
    }

    function traerautos() {
        $.ajax({
            url: '/devolverautos',
            type: 'GET',
            dataType: 'JSON',
            success: function (arautos) {

                $.each(arautos, function (index, auto) {
                    crearAuto(auto);
                })
            },
            error: function (err) {

            }
        })
    }


    var cont=0;
   var arcompra=[{}]
   $('btncarrito').click(function(){
       if (cont<=6){
           
           arcompra[cont]=[{ nombre:$('#textocentro').text(),precio: parseInt ($('#textocentro').text())}]
           $("#contador").text(arcompra.length)
           cont=cont+1
       }
   })
   

});