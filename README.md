SignalBarsJS
=========
SignalBarsJS is small script that generates signal bars.

What are "signal bars"? I'm referring to the graphic on your phone that conveys the strength of your reception.

Here's a screenshot of a signal bar created using SignalBarsJS.

![signal bar](https://raw.github.com/austinlyons/signalbars.js/master/img/signalbar.png "Look Ma, a signal bar!")


Documentation
----------
To use SignalBarsJS, you'll need to include signalbars.js and jQuery. Then add just a bit of HTML and some JavaScript and you're set!


First, create an HTML file and reference jQuery and SignalBarsJS. 

<pre>
&lt;script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
&lt;script type="text/javascript" src="signalbars.js"></script>
</pre>

Next, add a `<div>` in your html to tell signalbars.js where to put the signal bars.

<pre>&lt;div id="signal-bars1"></div></pre>

Finally, configure the signal bars by setting the options using JavaScript when the page loads, instantiating a SignalBars object, and calling setStrength().

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

Then load the HTML in your browser and you'll see

![signal bar](https://raw.github.com/austinlyons/signalbars.js/master/img/signalbar2.png "Look Ma, another signal bar!")