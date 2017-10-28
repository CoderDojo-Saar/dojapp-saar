document.querySelectorAll("[data-date]").forEach(
  function(el){
    var tuerchen = el.getAttribute("data-date");
    var NDate = new Date().getDate();

    var tuer = tuerchen.split("-");
    if(NDate>=tuer[2]){
      el.classList.add("ready");
    }
  }
)
