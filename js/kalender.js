// Nimmt alle Objekte in der Seite, die das data-date Attribut besitzen
document.querySelectorAll("[data-date]").forEach(
  function(el){
    var tuerchen = el.getAttribute("data-date");
    var NDate = new Date().getDate();
    var YDate = new Date().getFullYear()

    var tuer = tuerchen.split("-");

    // Wenn der Tag des Türchens höher oder gleich der aktelle Tag ist, kann das Türchen geöffnet werden.
    if(NDate>=tuer[2] || tuer[0]<YDate){
      el.classList.add("ready");
    }
  }
)
