let startDuration = document.getElementById("startDuration");

startDuration.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: startThisDuration
      
    });
  });


function startThisDuration() {
        var main_title = document.title;
        var duration = document.getElementsByClassName('time ng-binding');
        var interval = setInterval(function() { 
            if (duration.length > 0) {  
            console.log('duration control')
            for (var i = 0; i < duration.length; i++) {
                var text_duration = duration[i].innerText;
                document.title = text_duration + ' - ' + main_title;
                };
            }
            else {
              clearInterval(interval);
            }
    }, 1000);
};