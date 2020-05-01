var timer = function () {
  document.body.innerHTML = document.body.innerHTML.replace(
    / the /g,
    " banana "
  );
  document.body.innerHTML = document.body.innerHTML.replace(
    / The /g,
    " Banana "
  );
};
window.onload = function () {
  setTimeout(timer, 3000);
};
