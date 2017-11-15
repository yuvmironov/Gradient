$(document).ready(function () {

    var flag = false;
    var line = "to top";
    var opacity = 0.5;
    var item = 2;

    var color = ['#000000', '#ffffff'];
    var position = ['0', '50'];

    function createGradient() {
        var property = 'linear-gradient(to top, ' + color[0] + ' ' + position[0] +  '%, ';
        var check = color.length - 1;
        for (i = 1; i < color.length; i++) {
            property = property + color[i] + ' ' + position[i] +'%';
            if (i < check) {
                property = property + ', ';
            }
        }
        property = property + ')';
        console.log(property);
        $('.gradient').css('background-image', property);
    }

    function createElement(numberElement) {
        string = '';
        string = '<label for="color_' + [numberElement] + '" class="label">Цвет ' + [numberElement] + '</label>';
        string = string + '<input type="color" class="gradient__color" id="color_' + numberElement + '" value="'+ color[numberElement] + '"/><br/>';
        string = string + '<label for="position_' + numberElement + '">Конечная позиция ' +numberElement +'-го цвета</label><br/>';
        string = string + '<input type="range" class="gradient__position" id="position_' + numberElement + '" value="' + position[numberElement] +'" min="0" max="100" step="1"><span class="gradient__position-text-' + numberElement + '"> ' + position[numberElement] +' </span><br/>';
        $('.control').append(string);
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
           createElement(0);
           while (i < item) {
               property = property + color[i] + ' ' + position[i] +'% ';
               createElement(i);
               i++;
           }
           property = property + ')';
           $('.gradient').css('background-image', property);

           //Добавление цвета
           $('#add-color').on('click', function () {
               var positionElement = color.length;
               color[positionElement] = "#000000";
               position[positionElement] = "100";
               createGradient();
               createElement(positionElement);
           });

           //Меняем прозрачность
           $('#opacity').on('change', function () {
               $('.gradient').css('opacity', $(this).val());
               $(this).next().html($(this).val());
           });


           //меняем цвет
           $('.control').on('change', '.gradient__color' ,function () {
               var id = $(this).attr('id');
               var color = $(this).val();
               changeColor(id, color);
           });

           //Меняем позицию цвета
           $('.control').on('change','.gradient__position', function () {
               var id = $(this).attr('id');
               var pos = $(this).val();
               $(this).next().html(pos);
              changePosition(id, pos);
           });

           flag = true;
       }
    });



});