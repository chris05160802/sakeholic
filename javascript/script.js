var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    var activeCollapsible = document.querySelector('.collapsible.active');
    if (activeCollapsible && activeCollapsible != this) {
      activeCollapsible.classList.toggle("active");
      var activeContent = activeCollapsible.nextElementSibling;
      activeContent.style.maxHeight = null;
    }
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}




