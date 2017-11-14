$(document).ready(function () {
    var check = false; //флаг проверки чекбокса
    var color__first = $('#first-color').val(); // Начальный цвет градиента
    var color__second = $('#second-color').val(); // Конечный цвет градиента
    var position__first = $('#position-first').val(); // Конечная позиция первого цвета
    var position__second = $('#position-second').val(); //  Конечная позиция второго цвета
    var opaciti = $('#opaciti').val(); // Прозрачность градиента


    $('#text-opaciti').html(opaciti);
    $('#text-posfirst').html(position__first);
    $('#text-possec').html(position__second);

    function change_gradient (color_1, position_1, color_2, position_2) {
        var properti =  'linear-gradient(to top, ' + color_1 + ' ' + position_1 +  '%, ' + color_2 + ' ' + position_2 +'%)';
        $('.gradient__text').html(properti);
        $('.gradient__item').css('background-image', properti);
    }


    $('#control__check').on('change', function () {
        if (check) {
            $('.gradient__item').css('display', 'none');
            $('.gradient__text').html('');
            check = false;
        } else {
            $('.gradient__item').css('display', 'block');
            change_gradient(color__first, position__first, color__second, position__second);
            check = true;
            //Меняем первый цвет
            $('#first-color').on('change', function () {
                color__first = $('#first-color').val();
                change_gradient(color__first, position__first, color__second, position__second);
            });
            // Меняем второй цввет
            $('#second-color').on('change', function () {
                color__second = $('#second-color').val();
                change_gradient(color__first, position__first, color__second, position__second);
            });
            // Меняем прозрачность
            $('#opaciti').on('change', function () {
               opaciti = $('#opaciti').val();
               $('.gradient__item').css('opacity', opaciti);
               $('#text-opaciti').html(opaciti);
            });
            // Меняем конечное положение первого цвета
            $('#position-first').on('change', function () {
               position__first = $('#position-first').val();
                change_gradient(color__first, position__first, color__second, position__second);
                $('#text-posfirst').html(position__first);
            });
            // Меняем конечное положение второго цвета
            $('#position-second').on('change', function () {
                position__second = $('#position-second').val();
                change_gradient(color__first, position__first, color__second, position__second);
                $('#text-possec').html(position__second);
            });
        }
    });





});