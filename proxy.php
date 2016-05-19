<?php
	header("Content-type: text/plain");

	$ch = curl_init();
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($ch, CURLOPT_VERBOSE, 1);
	curl_setopt($ch, CURLOPT_HEADER, 1);
	curl_setopt($ch, CURLOPT_CONNECTTIMEOUT,2);
	curl_setopt($ch, CURLOPT_TIMEOUT, 2);

	curl_setopt($ch, CURLOPT_URL, $_GET["url"]);

	$response = curl_exec($ch);

	// print_r(curl_getinfo($ch, CURLINFO_HTTP_CODE));
	header('HTTP/1.1 ' . curl_getinfo($ch, CURLINFO_HTTP_CODE));
	curl_close($ch);
?>