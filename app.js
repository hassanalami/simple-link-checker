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
        async: false,
        success: function() {
           // alert("success");
           firstcell = '<div class="span2" style="color: green">success</div>';
        },
        error: function(xhr) {
            firstcell = '<div class="span2" style="color: red">fail</div>';
            // alert("error");
        },
        complete: function() {
            secondcell = '<div class="span10">' + urlstring + '</div>';
            $('.row:last').after('<div class="row">' + firstcell + secondcell +'</div>');
        }
    });
}