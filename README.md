SignalBarsJS
===========
SignalBarsJS is small script that generates signal bars.

What are "signal bars"? The graphic on your phone that conveys the strength of your reception.

Here's a screenshot of a signal bar created using SignalBarsJS.

![signal bar](https://raw.github.com/austinlyons/signalbars.js/master/img/signalbar.png "Look Ma, a signal bar!")


Documentation
=============
Quick Start
----------
To create signal bars, simply include signalbars.js and jQuery and sprinkle in a bit of HTML and JavaScript. 

* First, create an HTML file and reference jQuery and SignalBarsJS. 

<pre>
&lt;script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
&lt;script type="text/javascript" src="signalbars.js"></script>
</pre>

* Next, add a `<div>` in your html to tell signalbars.js where to put the signal bars.

<pre>&lt;div id="signal-bars1"></div></pre>

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