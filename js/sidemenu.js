// @ts-check

function createSideMenu(activeMenuId) {
    var menu = [
        { id: 'start', label: 'Start', link: 'index.html' },
        { id: 'about', label: 'Über', link: 'about.html' },
        { id: 'registration', label: 'Anmeldung', link: 'anmeldung.html' },
        { id: 'geo', label: 'Anfahrt', link: 'geonavigation.html' },
        { id: 'contact', label: 'Kontaktm&ouml;glichkeiten', link: 'kontaktmöglichkeiten.html' },
        { id: 'gallery', label: 'Bildergalerie', link: 'bildergalerie.html' },
        {},
        { id: 'sponsors', label: 'Sponsoren', link: 'sponsoring.html' },
        { id: 'legal', label: 'Impressum', link: 'impressum.html' },
    ];

    // @ts-ignore
    var htmlSideMenu = $('#sidemenu_menuitems');
    if (htmlSideMenu) {
        createSideMenuItems(htmlSideMenu, menu, activeMenuId);
    }
}


function createSideMenuItems(htmlSideMenu, menu, activeMenuId) {
    for (var i = 0; i < menu.length; i++) {
        htmlSideMenu.append(createSideMenuItem(menu[i], activeMenuId));
    }
}

function createSideMenuItem(menuItem, activeMenuId) {
    var htmlCode = '';
    if (isMenuItemSeparator(menuItem)) {
        htmlCode = createSeparator();
    } else {
        htmlCode = createMenuItem(menuItem, activeMenuId);
    }
    return htmlCode;
}

function isMenuItemSeparator(menuItem) {
    return typeof (menuItem.label) === 'undefined';
}

function createSeparator() {
    return '<li class="uk-nav-divider"></li>';
}

function createMenuItem(menuItem, activeMenuId) {
    var className = getMenuItemClass(menuItem, activeMenuId);
    var htmlCode = '<li ' + className + '><a href="' + menuItem.link + '">' + menuItem.label + '</a></li>';

    return htmlCode;
}

function getMenuItemClass(menuItem, activeMenuId) {
    var className = '';
    if (menuItem.id === activeMenuId) {
        className = 'class="uk-active"';
    }

    return className;
}