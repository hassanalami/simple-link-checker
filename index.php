<?php
    header("Access-Control-Allow-Origin: *");  
?>
<!DOCTYPE html>
<html lang="en">
<head>
	 <title>Link tester</title>

    <!-- Required meta tags always come first -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">

    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/css/bootstrap.min.css" integrity="sha384-y3tfxAZXuh4HwSYylfB+J125MxIs6mR5FOHamPBG064zB+AFeWH94NdvaCBm8qnd" crossorigin="anonymous">

    <!-- Latest compiled and minified JavaScript -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/js/bootstrap.min.js" integrity="sha384-vZ2WRJMwsjRMW/8U7i6PWi6AlO1L79snBrmgiDpgIWJ82z8eA5lenwvxbMV1PAh7" crossorigin="anonymous"></script>
	
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-10">
                <textarea class="form-control" style="width: 100%" rows="10"></textarea>
            </div>
            <div class="col-lg-2">
                <button type="button" class="btn btn-default">Test me !</button>
            </div>
        </div>
        <table class="table table-inverse small">
            <thead>
                <tr>
                    <th class="col-md-2">Result</th>
                    <th class="col-md-10">URL</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    </div>
    <script src="app.js"/></script>
</body>
</html>