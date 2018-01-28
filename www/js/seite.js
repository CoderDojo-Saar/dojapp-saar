$(document).ready(onDocumentLoad);

function onDocumentLoad() {
    // Erstellt das Menü
    createSideMenu(activeMenuId);
    if (typeof createSponsorList !== 'undefined') {
        createSponsorList();
    }
}