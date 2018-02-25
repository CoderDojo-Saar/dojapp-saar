'use strict';

const THIS_VERSION = "0.1";

$(document).ready(function () {
    let storage = window.localStorage;

    // Erstellt das Menü
    createSideMenu(activeMenuId);
    if (typeof createSponsorList !== 'undefined') {
        createSponsorList();
    }

    let storageVersion = storage.getItem("version");

    if(storageVersion !== THIS_VERSION) {
        $.getScript("js/zeigeChangelog.js");

        storage.setItem("version", THIS_VERSION.toString());
    }
});