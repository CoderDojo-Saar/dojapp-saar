"use strict";

const THIS_VERSION = "0.1";

import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
import $ from "jquery";

import { createSideMenu } from "./menue";

require('uikit/dist/css/uikit.css');
require('../css/style.css');

$(document).ready(function() {
  let storage = window.localStorage;

  // Erstellt das Menü
  createSideMenu(activeMenuId);
  if (typeof createSponsorList !== "undefined") {
    createSponsorList();
  }

  let storageVersion = storage.getItem("version");

  if (storageVersion !== THIS_VERSION) {
    $.getScript("js/zeigeChangelog.js");

    storage.setItem("version", THIS_VERSION.toString());
  }
});

function checkInternetConnection() {
    return navigator.connection.type !== Connection.NONE;
}

function requireInternetConnection() {
    let internetConnection = checkInternetConnection();

    if(!internetConnection) {
        navigator.notification.alert("Diese Funktion benötigt eine Internet-Verbindung!", null, "Internet-Verbindung erforderlich", "Okay");
    }

    return internetConnection;
}

export default { checkInternetConnection, requireInternetConnection };