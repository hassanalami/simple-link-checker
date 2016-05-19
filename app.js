$('#test').click(function() {
    var lines = $('textarea').val().split('\n');
    $('.progress').attr('max', "" + lines.length);
    for (var i = 0; i < lines.length; i++) {
        if (lines[i].match("^https://") || lines[i].match("^http://")) {
            engine(lines[i]);
        }
        $('.progress').attr('value', i + 1);
    }
});

function engine(urlstring) {
    var firstcell = '<td class="col-md-2" style="color: red">fail</td>';
    var secondcell = "";
    $.ajax({
        type: 'HEAD',
        url: "proxy.php?url=" + urlstring,
        timeout: 3000,
        statusCode: {
            200: function() {
                firstcell = '<td class="col-md-2 text-success">success</td>';
            },
            500:function(){
                firstcell = '<td class="col-md-2 text-danger">fail</td>';
            }
        },
        complete: function() {
            secondcell = '<td class="col-md-10">' + urlstring + '</td>';
            $('tbody').append('<tr>' + firstcell + secondcell +'</tr>');
        }
    });
}

$('#clear').click(function() {
    $('tbody').html('');
    $('textarea').val('');
});