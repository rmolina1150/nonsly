$(document).ready(function () {
    let btn1 = false;
    let btn2 = false;
    let btn3 = false;

    $('#contents_1').hide();
    $('#contents_2').hide();
    $('#contents_3').hide();


    $('#btnText_1').on('click', function (e) {
        if (btn1) {
            $('#contents_1').fadeOut('slow');
            $('#btnText_1').text('Mostrar contenido')
            btn1 = false
        } else {
            $('#contents_1').fadeIn(2000);
            $('#btnText_1').text('Ocultar contenido')
            btn1 = true
        }
        // console.log($(this));
    })

    $('#btnText_2').on('click', function (e) {
        if (btn2) {
            $('#contents_2').fadeOut('slow');
            $('#btnText_2').text('Mostrar contenido')
            btn2 = false
        } else {
            $('#contents_2').fadeIn(2000);
            $('#btnText_2').text('Ocultar contenido')
            btn2 = true
        }
        // console.log($(this));
    })

    $('#btnText_3').on('click', function (e) {
        if (btn3) {
            $('#contents_3').fadeOut('slow');
            $('#btnText_3').text('Mostrar contenido')
            btn3 = false
        } else {
            $('#contents_3').fadeIn(2000);
            $('#btnText_3').text('Ocultar contenido')
            btn3 = true
        }
        // console.log($(this));
    })

});


//btn.addEventListener('click', showHide)

//function showHide(number) {
//     var btn = document.getElementById("btnText_" + number)
//     var content = document.getElementById("contents_" + number)


//     $('contents_' + number).fadeIn('slow');

//     //content.classList.toggle('show');

//     if (content.classList.contains('show')) {
//         btn.innerHTML = "Ocultar contenido";
//     }
//     else {
//         btn.innerHTML = "Mostrar contenido";
//         //$('contents_' + number).fadeOut('slow');
//     }
// }

