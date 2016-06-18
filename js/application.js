
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

//  sign of even elements set positive 
//  sign of odd elements set negative

//*******************************************************************************
function Sign(i, j) {

    if ((i + j) % 2 == 0) {
        return 1;
    }
    else {
        return -1;
    }
}

// submatrix which order = (given matrix order) - 1

function Minor(input, i, j) {

    var order = input.length;
    var output = new Array(input.length - 1);

    for (var m = 0; m < order - 1; m++) {
        output[m] = new Array(order - 1);
    }
    var x = 0, y = 0;
    for (var m = 0; m < order; m++, x++) {
        if (m != i) {
            y = 0;

            for (var n = 0; n < order; n++) {
                if (n != j) {
                    output[x][y] = input[m][n];
                    y++;
                }
            }
        }
        else {
            x--;
        }
    }
    return output;
}

// recursion which repeats Determinant(tmp) where minor is Minor of matrix  

function Determinant(input) {
    var order = input.length;

    if (order > 2) {
        var val = 0;
        for (var j = 0; j < order; j++) {
            var minor = Minor(input, 0, j);
            val = val + input[0][j] * (Sign(0, j) * Determinant(minor));
        }
        return val;
    }
    else if (order == 2) {
        return ((input[0][0] * input[1][1]) - (input[1][0] * input[0][1]));
    }

}
//*************************************************************************************************

// after clicking find det third 'td' color becomes yellow /*

$(document).ready(function Finddet() {
    $('#find').click(function Finddet() {

        try {

            $('#third_td').css("background-color", "yellow");
            var detstr = "[";
            var num = $('#order').val();

            for (i = 1; i <= num; i++) {
                for (j = 1; j <= num; j++) {
                    detstr += $('input[id="box[' + i + '][' + j + ']"]').val() + ",";
                }

                detstr = detstr.slice(0, detstr.length - 1);
                detstr += "],[";
            }

            detstr = detstr.slice(0, detstr.length - 1);

            var A = eval('[' + detstr + ']');
            if (isNaN(Determinant(A))) {
                $("#answer").html("Տվյալները ճիշտ լրացրեք !");
            }
            else {
                $("#answer").html("Մատրիցի որոշիչը " + Determinant(A) + " է:");
            }
            
        } catch (ex) {
            $("#answer").html("Տվյալները ճիշտ լրացրեք !");
        }

    });
});

// button 'Start over' that reloads the page 

$(document).ready(function Reload() {
$('#restart').click(function Reload () {
    location.reload();
});
});