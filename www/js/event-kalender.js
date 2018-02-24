'use strict';

document.addEventListener("deviceready", function () {
    let eventKalender = $("#event-kalender-container");

    if(navigator.connection.type === Connection.NONE) {
        eventKalender.html('<span id="event-kalender-keine-verbindung" uk-icon="icon: close; ratio: 3.5"></span>')
    } else {
        eventKalender.html('<iframe class="media" width="100%" height="400px" src="https://www.google.com/calendar/embed?src=333dnsdjttm38oci9mju3o159g%40group.calendar.google.com&ctz=Europe/Berlin&mode=AGENDA"></iframe>')
    }
}, false);