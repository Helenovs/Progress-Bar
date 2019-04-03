let widthArr=[]

let progressBarNum = 0;
let width;
function choise(sel) {
  progressBarNum = sel.selectedIndex;
}
function change(btn) {
  let btnText=btn.value;
  width=obj.bars[progressBarNum];
  console.log(btnText);
  // let elem = document.getElementById(`ProgressBarStatus${progressBarNum.toString()}`);

  let elem = document.getElementById(`ProgressBarStatus${progressBarNum.toString()}`);
  console.log(`ProgressBarStatus${progressBarNum.toString()}`);

  // let id = setInterval(frame, 10);
  // function frame() {
    // if (width >= 100) {
    //   clearInterval(id);
    // } else {
  console.log("btnText",btnText);
  if (width+parseInt(btnText)>=0)
  width+=parseInt(btnText);
  console.log("width",width);
  if (width/obj.limit*100<=100){
    elem.style.width = width/obj.limit*100 + '%';
    elem.style.backgroundColor="#4CAF50";
  }
  else {
    elem.style.width=100+'%';
    elem.style.backgroundColor="red";
  }
  elem.innerHTML=width;
  obj.bars[progressBarNum]=width;
    // }
  // }
  // frame();
}
