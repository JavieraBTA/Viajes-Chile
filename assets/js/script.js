//Tooltip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

$(function () {

    $('#enviarCorreo').click(function () {
        alert('El mensaje fue enviado correctamente...');
    })

    $('.card-text').click(function () {
        $('.card-body').toggle();
    });


    $(window).scroll(function () {
        if ($(window).scrollTop() < 870) {
            $("nav").css({ "background-color": "transparent" });
        }
        else {
            $("nav").css({ "background-color": "Black" });
        }

    })

});

