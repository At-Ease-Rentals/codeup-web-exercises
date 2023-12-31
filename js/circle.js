(function() {
    "use strict";

    // create a circle object
    let circle = {
        radius: 3,

        getArea: function () {
             let area =  Math.PI  * this.radius **2;
            return area;// TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
            let area = this.getArea();
            if(doRounding === true) {
                area = Math.round(area);
            }
            console.log("Area of a circle with radius: "  +  this.radius +  " is:  " + area );
        }
    };

    // log info about the circle
    console.log(`Raw circle information radius:  ${circle.radius}`);
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
circle.radius = 5;
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();