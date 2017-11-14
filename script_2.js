$(document).ready(function () {

    var flag = false;
    var line = "to top";
    var opacity = 0.5;
    var item = 2;

    var color = ['#000000', '#ffffff'];
    var position = ['0', '100'];


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
           $('.control').append(string);
           while (i < item) {
               string ="";
               property = property + color[i] + ' ' + position[i] +'% ';
               string = '<label for="color_' + [i] + '" class="label">Цвет ' + [i] + '</label>';
               string = string + '<input type="color" id="color_' + [i] + '" value="'+ color[i] + '"/><br/>';
               $('.control').append(string);
               i++;
           }
           property = property + ')';
           $('.gradient').css('background-image', property);
           flag = true;
       }
    });
});