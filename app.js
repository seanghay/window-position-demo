const $code = document.getElementById("code");

(function loop() {
  $code.style.top = -screenY + ((innerHeight - $code.height) / 2) + "px";
  $code.style.left = -screenX + ((innerWidth - $code.width) / 2) + 'px';
  requestAnimationFrame(loop);
})()