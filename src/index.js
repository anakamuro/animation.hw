document.querySelector(".main").style.display = "none";
document.querySelector(".main").classList.add("spinner-1");

setTimeout(() => {
  document.querySelector(".main").classList.remove("spinner-1");
  document.querySelector(".main").style.display = "block";
}, 1000);

$(window).on("load", function () {
  $(".spinner-1").hide(1000);
});
