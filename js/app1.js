
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../sw.js').then(function(registration) {
        console.log('Service worker registered:'+registration.scope);
    }).catch(function(e) {
        console.log(e);
    })
  
      .catch(function(error) {
        console.error("Something goes wrong while registering service worker");
        console.log(error);
      });
  } else {
    console.log("Service Worker is not available");
  }
  