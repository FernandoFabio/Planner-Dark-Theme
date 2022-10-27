setTimeout(() => {
    chrome.runtime.sendMessage({loadTheme: "true"}, function(response) {
        console.log(response.message);
      });
}, 2000);