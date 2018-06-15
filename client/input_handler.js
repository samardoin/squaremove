
var inputter = new Inputter();
function addEventLiseners(){
  console.log('adding addEventLiseners')
  document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            //alert('left');
            inputter.left=true;
            //console.console.log("Left");
            break;
        case 38:
            //alert('up');
            inputter.up=true;
            break;
        case 39:
            //alert('right');
            inputter.right=true;
            break;
        case 40:
            //alert('down');
            inputter.down=true;
            break;
    }
  };
  document.onkeyup = function(e) {
    switch (e.keyCode) {
        case 37:
            //alert('left');
            inputter.left=false;
            console.console.log("Left");
            break;
        case 38:
            //alert('up');
            inputter.up=false;
            break;
        case 39:
            //alert('right');
            inputter.right=false;
            break;
        case 40:
            //alert('down');
            inputter.down=false;
            break;
    }
  };
}
