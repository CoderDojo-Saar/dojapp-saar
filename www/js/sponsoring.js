//@ts-check
function createSponsorList() {
    var htmlSponsorList = $('#sponsorlist');
    if (htmlSponsorList.length > 0) {
        var sponsors = [
            { index: 11, link: "https://www.eurodata.de", name : 'eurodata'},
            { index: 10, link: "https://www.uberresearch.com/", name: "&Uuml;berResearch"},
            { index: 9, link: "http://www.hololux.de/", name: "Hololux"},
            { index: 8, link: "https://www.saarcamp.de", name: "SaarCamp"},
            { index: 7, link: "https://www.internet-marketing-agentur.com/", name: "IMA"},
            { index: 6, link: "https://www.eurodata.de", name: "eurodata"},
            { index: 5, link: "#", name: "-"},
            { index: 4, link: "http://www.iku-systems.de/", name: "IKU Systems"},
            { index: 3, link: "https://www.resolution.de/", name: "Resolution"},
            { index: 2, link: "https://www.squild.de/", name: "SQUILD"},
            { index: 1, link: "https://www.uberresearch.com/", name: "&Uuml;berResearch"},
         ];

        generateSponsorListing(htmlSponsorList, sponsors);
    }
}

function generateSponsorListing(htmlSponsorList, sponsors) {
    for(var i = 0; i < sponsors.length;i++) {
        htmlSponsorList.append(createSponsorListItem(sponsors[i]));
    }
}

function createSponsorListItem(sponsor) {
    var htmlCode = "<li>CoderDojo " + sponsor.index + ":" + '<a target="_blank" class="uk-link-muted" href="' + sponsor.link + '">'+ sponsor.name +'</a></li>';

    return htmlCode;
}