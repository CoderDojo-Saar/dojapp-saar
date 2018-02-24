
$(document).ready(function () {
    // Erstellt das Menü
    createSideMenu(activeMenuId);
    if (typeof createSponsorList !== 'undefined') {
        createSponsorList();
    }
});