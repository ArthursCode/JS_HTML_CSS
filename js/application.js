
// first we click start then the first 'td' color becomes yellow 
// which means that we in the first step

$(document).ready(function showOrder() {
    $('#start').click(function showOrder() {
        $(this).hide();
        $('#first_td').css("background-color", "yellow");
        $('#first_page').css("visibility", "visible");

    });
});

// select the order of square matrix then click next
// second 'td' color becomes yellow 

$(document).ready(function showtxtBox() {
    $('#next1').click(function showtxtBox() {
        
        $('#second_td').css("background-color", "yellow");
        $('#first_page').hide();
        $('#second_page').css("visibility", "visible");

        var num = $('#order').val();
        var txtbox = $('#txtbox');

        for (i = 1; i <= num; i++) {
            for (j = 1; j <= num; j++) {
                txtbox.append($('<input size="1" >').attr('id', "box[" + i + "][" + j + "]"));
                txtbox.append("  ");
            }
            txtbox.append('<br/><br/>')
        }
    });
});

// this is the order of matrix (up to 20) 

$(function () {
    var hello = $('#order');
    for (i = 2; i <= 20; i++) {
        hello.append($('<option></option>').html(i));
    }
});

// after clicking find det third 'td' color becomes yellow 
// here we use math.js det(A) function to find det

$(document).ready(function Finddet() {
    $('#find').click(function Finddet() {
        $('#third_td').css("background-color", "yellow");
        var detstr = "";
        var num = $('#order').val();

        for (i = 1; i <= num; i++) {
            for (j = 1; j <= num; j++) {
                detstr += $('input[id="box[' + i + '][' + j + ']"]').val() + ",";

            }

            if (isNaN($('input[id="box[' + i + '][' + j + ']"]').val())) {
                $("#answer").html("Fill textboxes with the correct form !");
            }

            detstr = detstr.slice(0, detstr.length - 1);
            detstr += ";";
        }
        detstr = detstr.slice(0, detstr.length - 1);

        var A = math.eval('det([' + detstr + '])');

        $("#answer").html("det(A) = " + A);

    });
});

// button 'Start over' that reloads the page 

$(document).ready(function Reload() {
$('#restart').click(function Reload () {
    location.reload();
});
});