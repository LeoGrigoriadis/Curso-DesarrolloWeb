function mover() {
    let id = null;
    const elem = document.getElementById("animate");
    let pos = 0;
    let flag = true;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (pos === 350) {
        flag = true;
      } else if (pos === 0){
        flag = false;
      }
      up(flag);
    }
    function up(flag){
      if(flag){
        pos--;
        elem.style.top = pos + "px";
        elem.style.left = pos + "px";
      }else{
        pos++;
        elem.style.top = pos + "px";
        elem.style.left = pos + "px";
      }
    }
  }
  
  function text(obj, cadena) {
    obj.innerHTML = cadena;
  }
  