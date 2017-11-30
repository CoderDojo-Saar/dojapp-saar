// @ts-check

function createSideMenu(activeMenuId) {
    var menu = [
        {id: 'start', label: 'Start', link: 'index.html', icon: 'home'},
        {id: 'about', label: 'Über', link: 'about.html', icon: 'info'},
        {id: 'registration', label: 'Anmeldung', link: 'anmeldung.html', icon: 'mail'},
        {id: 'geo', label: 'Anfahrt', link: 'geonavigation.html', icon: 'location'},
        {id: 'xmascalendar', label: 'Adventskalender', link: 'weihnachtskalender.html', icon: 'star'},
        {},
        {id: 'contact', label: 'Kontaktm&ouml;glichkeiten', link: 'kontaktmöglichkeiten.html', icon: 'reply'},
        {id: 'gallery', label: 'Bildergalerie', link: 'bildergalerie.html', icon: 'image'},
        {},
        {id: 'sponsors', label: 'Sponsoren', link: 'sponsoring.html', icon: 'bolt'},
        {id: 'legal', label: 'Impressum', link: 'impressum.html', icon: 'world'},
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
    var iconName = (typeof menuItem.icon === 'undefined') ? 'link' : menuItem.icon;

    var className = getMenuItemClass(menuItem, activeMenuId);
    var htmlCode = '<li class="' + className + 'uk-icon-link"><a href="' + menuItem.link + '" class="uk-icon-link" uk-icon="icon: ' + iconName + '">' + menuItem.label + ' </a></li>';

    return htmlCode;
}

function getMenuItemClass(menuItem, activeMenuId) {
    var className = ' ';
    if (menuItem.id === activeMenuId) {
        className = 'uk-active';
    }

    className += ' ';

    return className;
}