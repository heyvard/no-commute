// The background page is asking us to find an address on the page.
if (window == top) {
    chrome.extension.onRequest.addListener(function () {
        timerSomFjernerCommutes();
    });
}

var timerSomFjernerCommutes = function () {
    setInterval(fjernCommutes, 100);
}


var fjernCommutes = function () {

    //Føkk communtes
    jQuery('div.activity:contains(Commute)').hide()
    //Føkk zwift
    jQuery('div.activity:contains(Zwift)').hide()
    //Føkk jobb
    jQuery('div.activity:contains(Jobb)').hide()
};

