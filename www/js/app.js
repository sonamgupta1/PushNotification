// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

                // Don't remove this line unless you know what you are doing. It stops the viewport
                // from snapping when text inputs are focused. Ionic handles this internally for
                // a much nicer keyboard experience.
                cordova.plugins.Keyboard.disableScroll(true);
                var push = PushNotification.init({
                    "android": {
                        "senderID": "633311112296"
                    },
                    "ios": {"alert": "true", "badge": "true", "sound": "true"},
                    "windows": {}
                });

                push.on('registration', function (data) {
                    console.log("registration event working ..");
                    document.getElementById("regId").innerHTML = data.registrationId;
                    console.log(JSON.stringify(data));
                });

                push.on('notification', function (data) {
                    console.log("notification event");
                    console.log(JSON.stringify(data));
                    var cards = document.getElementById("cards");
                    var card = '<div class="row">' +
                        '<div class="col s12 m6">' +
                        '  <div class="card darken-1">' +
                        '    <div class="card-content black-text">' +
                        '      <span class="card-title black-text">' + data.title + '</span>' +
                        '      <p>' + data.message + '</p>' +
                        '    </div>' +
                        '  </div>' +
                        ' </div>' +
                        '</div>';
                    cards.innerHTML += card;

                    push.finish(function () {
                        console.log('finish successfully called');
                    });
                });

                push.on('error', function (e) {
                    console.log("push error");
                });


            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })
