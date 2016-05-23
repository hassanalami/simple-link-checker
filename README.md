#Simple Link Checker
Simple project mostly in js -uses a php file as proxy 'proxy.php' in order to allow cross domain origin-
While help you test your links and sort them, from the ones that work and the ones that doesn't.
Just put your links in the textarea of the index.html file and click on the _"Test me !"_ button ! Make to put one link by line. The web app only tests lines where links start with _http://_ or _https://_ and while treat the whole line as link.

This webapp could be perfect for testing links in an m3u8 file.

The web works does _asynchronous_ tests, this means that you can see a progress and that the app while not freeze while testing links.

##Requirements
- Apache, Lighttpd, or Nginx web server.
- PHP 4 >= 4.0.2, PHP 5, or PHP 7.

##Browser Requirements
Supports the latest, stable releases of all major browsers and platforms, make to :
- Have JavaScript enabled
- Support for XMLHttpRequest
- Support CSS2

##After downloading
###bower
If you want to update js libraries used in the project download and install [bower](http://bower.io/), then update the project using the command:
```
bower update
```

##Credits
- [Bootstrap 4](https://github.com/twbs/bootstrap/tree/v4-dev)
- [jQuery JavaScript Library](https://github.com/jquery/jquery)
- [HubSpot/tether](https://github.com/HubSpot/tether)
- [Dorious/jquery-numberedtextarea](https://github.com/Dorious/jquery-numberedtextarea)
