document.querySelectorAll("[data-date]").forEach(
  function(el){
    var tuerchen = el.getAttribute("data-date");
    var NDate = new Date().getDate();
    var YDate = new Date().getFullYear()

    var tuer = tuerchen.split("-");
    if(NDate>=tuer[2] || tuer[0]<YDate){
      el.classList.add("ready");
    }
  }
)
