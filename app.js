var firstcell = "";
var secondcell = "";

$('button').click(function() {
    var lines = $('textarea').val().split('\n');
    for (var i = 0; i < lines.length; i++) {
        console.log(lines[i]);
        engine(lines[i]);

    }
});

function engine(urlstring) {
    $.ajax({
        type: 'HEAD',
        url: urlstring,
        timeout: 3000,
        success: function() {
           // alert("success");
           firstcell = '<td class="col-md-2" style="color: green">success</td>';
        },
        error: function(xhr) {
            firstcell = '<td class="col-md-2" style="color: red">fail</td>';
            // alert("error");
        },
        complete: function() {
            secondcell = '<td class="col-md-10">' + urlstring + '</td>';
            $('tbody').append('<tr>' + firstcell + secondcell +'</tr>');
        }
    });
}