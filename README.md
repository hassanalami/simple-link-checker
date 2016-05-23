#Simple Link Checker
Simple project mostly in js -uses a php file as proxy 'proxy.php' in order to allow cross domain origin-
While help you test your links and sort them, from the ones that work and the ones that doesn't.
Just put your links in the textarea of the index.html file and click on the _"Test me !"_ button ! Make to put one link by line. The web app only tests lines where links start with _http://_ or _https://_ and while treat the whole line as link.

This webapp could be perfect for testing links in an m3u8 file.

The web works does _asynchronous_ tests, this means that you can see a progress and that the app while not freeze while testing links.

##After downloading
###bower
If you want to update js libraries used in the project download and install [bower](http://bower.io/), then update the project using the command:
```
bower update
```
