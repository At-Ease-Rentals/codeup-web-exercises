'use strict';

const delay = 5000; //delay time in milliseconds

const timeoutID = setTimeout(() => alert ('Here is a delayed hello!'), delay);

    //to cancel the timeout, you can call
    // clearTimeout(timeoutId);
    // prior to the delay expiring
