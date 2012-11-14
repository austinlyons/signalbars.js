SignalBarsJS
===========
SignalBarsJS is small script that generates signal bars. 
What are "signal bars"? They are the graphic on a phone that conveys the wireless reception strength.
Here's a screenshot of a signal bar created using SignalBarsJS:

![signal bar](https://raw.github.com/austinlyons/signalbars.js/master/img/signalbar.png "Look Ma, a signal bar!")


Documentation
=============
Quick Start
----------
Creating signal bars is as easy as linking to signalbars.js and jQuery and sprinkling in a bit of HTML and JavaScript. 

* First, create an HTML file and reference jQuery and SignalBarsJS. 

<pre>
&lt;html>
  &lt;head>
    &lt;script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js">&lt;/script>
    &lt;script type="text/javascript" src="signalbars.js">&lt;/script>
  &lt;/head>
  &lt;body>
  &lt;/body>
&lt;/html>
</pre>

* Next, add a `<div>` in the body of your HTML to tell signalbars.js where to put the signal bars.

<pre>
&lt;body>
  &lt;div id="signal-bars1"></div>
&lt;/body>
</pre>

* Now set the configuration options using JavaScript when the page loads, instantiate a SignalBars object, and call setStrength() to fill in the bars.

<pre>
&lt;script>
  $(document).ready(function(){
    // required options
    var opts1 = {
      "unitSize": 3,
      "emptyBackgroundColor": "white",
      "emptyBorderColor": "black",
      "fillBackgroundColor": "gold",
      "fillBorderColor": "black",
    }
    
   var sb1 = new SignalBars(opts1, "signal-bars1");
   
   // draw the signal bars with a given strength
   sb1.setStrength(60);

   });
  &lt;/script>
</pre>

Then load the HTML in your browser and you should see this

![signal bar](https://raw.github.com/austinlyons/signalbars.js/master/img/signalbar2.png "Look Ma, another signal bar!")

More Details
----------
### Div container in HTML
For each signal bar graphic, place a corresponding &lt;div> in the HTML. 
This div is used as a container to hold the signal bars graphic. 
The div needs to have a class name - it can be anything, but it's easiest to stick with signal-bars1,
signal-bars2, etc. 

Example
<pre>
&lt;div id="signal-bars1"></div>
&lt;div id="signal-bars2"></div>
</pre>

### Signal Bars constructor
For each signal bar graphic, instantiate a corresponding SignalBars object. 
The SignalBars contstructor requires two parameters - an object that stores configuration settings, and the class
name of the corresponding &lt;div> in the HTML.

For the two divs showin in the previous example, the corresponding constructors would look like:
<pre>
var sb1 = new SignalBars(opts1, "signal-bars1");
var sb2 = new SignalBars(opts1, "signal-bars2");
</pre>
where opts1 is an object that stores configuration settings (see below for more details). 
In this example, I am passing the same configuration settings to both signal bars so that they look the same.
However, they can be constructed with different configuration settings if desired:
<pre>
var sb1 = new SignalBars(opts1, "signal-bars1");
var sb2 = new SignalBars(opts2, "signal-bars2");
</pre>

### options
The size and color of the signal bars are configured by passing an associative array to the SignalBars constructor. 
The array is expected to be of the following form:
<pre>
var opts1 = {
	  "unitSize": 2,
	  "emptyBackgroundColor": "#dedede",
	  "emptyBorderColor": "#dedede",
	  "fillBackgroundColor": "#aa0000",
	  "fillBorderColor": "#aa0000",
}
</pre>
The required configuration parameters are
* unitSize: used to calculate how big the signal bars should be. This can be anything from 1-1000. 
For more details, take a peek at the drawBars function in signalbars.js.
* emptyBackgroundColor: the color of the signal bar when it's not filled in 
(i.e when the strength is 0, all of the bars will have this color)
* emptyBorderColor: if you want the border of the bar to be different than the background, specify it here.
If you want them to be the same, explicity set them to have the same color (as in the example above)
* fillBackgroundColor: This is the color of the bars when they are filled (i.e. when signal strength is 100%,
all of the bars will be this color.
* fillBorderColor: if you want the fill border color to be different than the fill background color, change it
here

### setStrength