var firstcell = "";
var secondcell = "";

$('button').click(function() {
    var lines = $('textarea').val().split('\n');
    for (var i = 0; i < lines.length; i++) {
        if (lines[i].match("^https://") || lines[i].match("^http://")) {
            engine(lines[i]);
        }
        console.log(lines[i]);
    }
});

function engine(urlstring) {
    $.ajax({
        type: 'HEAD',
        url: "proxy.php?url=" + urlstring,
        timeout: 3000,
        statusCode: {
            200: function() {
                firstcell = '<td class="col-md-2" style="color: green">success</td>';
            },
            500:function(){
                firstcell = '<td class="col-md-2" style="color: red">fail</td>';
            }
        },
        complete: function() {
            secondcell = '<td class="col-md-10">' + urlstring + '</td>';
            $('tbody').append('<tr>' + firstcell + secondcell +'</tr>');
        }
    });
}