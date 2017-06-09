if (window == top) {
    chrome.extension.onRequest.addListener(function () {
        setInterval(removeCommutes, 100);
    });
}


function removeCommutes() {
    removeActivityWithText('Commute');
}

function removeActivityWithText(text) {
    jQuery('div.activity:contains(' + text + ')').hide()
}