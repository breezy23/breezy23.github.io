// deno-lint-ignore-file no-var
var cursor = true;
var speed = 750;

setInterval(() => {
  if(cursor) {
    document.getElementById('cursor').style.opacity = 0;
    cursor = false;
  }else {
    document.getElementById('cursor').style.opacity = 1;
    cursor = true;
  }
}, speed);
