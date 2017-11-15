$(document).ready(function () {

    var flag = false;
    var line = "to top";
    var opacity = 0.5;
    var item = 2;

    var color = ['#000000', '#ffffff'];
    var position = ['0', '50'];

    function createGradient( ) {
        var property = 'linear-gradient(to top, ' + color[0] + ' ' + position[0] +  '%, ';
        for (i = 1; i < color.length; i++) {
            property = property + color[i] + ' ' + position[i] +'% ';
        }
        property = property + ')';
        $('.gradient').css('background-image', property);
    }

    function changePosition( id_element, positionForChange) {
        var numberElement = id_element.replace('position_','');
        position[numberElement] = positionForChange;
        createGradient();
    }

    function changeColor( id_element, colorForChange ) {
        var numberElement = id_element.replace('color_','');
        color[numberElement] = colorForChange;
        createGradient();
    }


    $('#check').on('change', function () {
       if(flag) {
           $('.gradient').css('background-image', 'none');
           flag = false;
           $('.control').empty();
       } else {
           var i =1;
           var property = 'linear-gradient(to top, ' + color[0] + ' ' + position[0] +  '%, ';
           var string = "<label for='color_0' class='label'>Цвет 0</label>";
           string = string + '<input type="color" id="color_0" value="' + color[0] + '"/><br/>';
           string = string + '<label for="position_0">Конечная позиция 0-го цвета</label><br/>';
           string = string + '<input type="range" id="position_0" value="' + position[0] +'" min="0" max="100" step="1"><span class="gradient__position-text-0"> ' + position[0] +' </span><br/>';
           $('.control').append(string);
           while (i < item) {
               string ="";
               property = property + color[i] + ' ' + position[i] +'% ';
               string = '<label for="color_' + [i] + '" class="label">Цвет ' + [i] + '</label>';
               string = string + '<input type="color" id="color_' + [i] + '" value="'+ color[i] + '"/><br/>';
               string = string + '<label for="position_' + i + '">Конечная позиция ' + i +'-го цвета</label><br/>';
               string = string + '<input type="range" id="position_' + i + '" value="' + position[i] +'" min="0" max="100" step="1"><span class="gradient__position-text-' + i + '"> ' + position[i] +' </span><br/>';
               $('.control').append(string);
               i++;
           }
           property = property + ')';
           $('.gradient').css('background-image', property);

           //меняем цвет
           $('.control').children('[type="color"]').on('change' ,function () {
               var id = $(this).attr('id');
               var color = $(this).val();
               changeColor(id, color);
           });

           //Меняем позицию цвета
           $('.control').children('[type="range"]').on('change', function () {
               var id = $(this).attr('id');
               var pos = $(this).val();
               $(this).next().html(pos);
              changePosition(id, pos);

           });

           flag = true;
       }
    });



});