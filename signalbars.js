 /*
 * signalBars.js
 * https://github.com/austinlyons/signalbars.js
 *
 * Copyright (c) 2012 Austin Lyons
 * Licensed under the MIT licenses.
 */

/* SignalBars constructor */
function SignalBars(opts, divId) {
	this.opts = opts;
	this.divId = divId;

	/* handleNumberEdgeCase checks that n is a number between min and max */
	this.handleNumberEdgeCase = function(n, min, max){
		if(isNaN(n) || n < min){
			return min;
		} else if (n > max){
			return max;
		} else
			return n;
	};

	/* checkOpts makes sure the config options are set */
	this.checkOpts = function(opts){
		if(typeof opts !== "object"){
			opts = {};
			console.log("Options not configured - using defaults");
		}
		if (typeof opts["unitSize"] === "undefined") { opts["unitSize"] = 4; }
		if (typeof opts["emptyBackgroundColor"] === "undefined") { opts["emptyBackgroundColor"] = "black"; }
		if (typeof opts["emptyBorderColor"] === "undefined") { opts["emptyBorderColor"] = "black"; }
		if (typeof opts["fillBackgroundColor"] === "undefined") { opts["fillBackgroundColor"] = "grey"; }
		if (typeof opts["fillBorderColor"] === "undefined") { opts["fillBorderColor"] = "grey"; }

		return opts;
	};

	/* drawBars generates empty bars. */
	this.drawBars = function(opts){
		var emptyBackgroundColor = opts["emptyBackgroundColor"];
		var emptyBorderColor = opts["emptyBorderColor"];
		var unitSize = opts["unitSize"];

		var htmlstr = "";
		var NUM_BARS = 5; // Currently hardcoded to make 5 bars
		var MAX_SIZE = 1000;
		unitSize = this.handleNumberEdgeCase(unitSize, 0, MAX_SIZE);
		// don't draw anything if unitSize is 0
		if(unitSize !== 0){
			$sigBarsDiv = $('#' + divId);
			for(var i = 0; i < NUM_BARS; i++){
				var width = 2*unitSize;
				var marginRight = unitSize;
				var height = 2*(i+1)*unitSize;
				var marginTop = (10*unitSize)-height;

				htmlstr += "<div id=\"bar" + (i+1) + "\" style=\"float:left;background-color:" + emptyBackgroundColor + ";border:1px solid " + emptyBorderColor + ";width:" + width +" px;margin-right:" + marginRight + "px;height:" + height + "px;margin-top:" + marginTop +"px;\"></div>";
			}
			$sigBarsDiv.html(htmlstr);
		}
	};

	/* fillBars fills in bars depending on the strength of the signal.	*/
	this.fillBars = function(strength, divId, fillBackgroundColor, fillBorderColor){
		var n = 0;

		if (strength <= 10){
			n = 0;
		} else if (strength <= 30){
			n = 1;
		} else if (strength <= 50){
			n = 2;
		} else if (strength <= 70){
			n = 3;
		} else if (strength <= 90){
			n = 4;
		} else
			n = 5;

		switch(n){
			// let cases fall through to fill previous bars
			case(5):
				$('#' + divId + ' #bar5').css({'background-color': fillBackgroundColor, 'border-color': fillBorderColor});
			case(4):
				$('#' + divId + ' #bar4').css({'background-color': fillBackgroundColor, 'border-color': fillBorderColor});
			case(3):
				$('#' + divId + ' #bar3').css({'background-color': fillBackgroundColor, 'border-color': fillBorderColor});
			case(2):
				$('#' + divId + ' #bar2').css({'background-color': fillBackgroundColor, 'border-color': fillBorderColor});
			case(1):
				$('#' + divId + ' #bar1').css({'background-color': fillBackgroundColor, 'border-color': fillBorderColor});
				break;
			case(0):
				break; // don't fill in any bars
			default: // if n is undefined
				console.log("How did you get here? n = " + n);
				break;
		}
	},

	/*  setStrength draws the signal bars, filling the bars according to the signal strength.
		strength: number between 0 and 100 inclusive, representing the signal strength percentage */
	this.setStrength = function(strength){
		strength = this.handleNumberEdgeCase(strength, 0, 100);
		// redraw empty bars
		this.drawBars(this.opts);
		// fill in bars accordingly
		this.fillBars(strength, this.divId, this.opts["fillBackgroundColor"], this.opts["fillBorderColor"]);
		return "strength set to " + strength;
	};
}