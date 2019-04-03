
let obj;

get('http://pb-api.herokuapp.com/bars').then(function(response) {
  // console.log("Success!", response);
  obj = JSON.parse(response);
  document.getElementById("btn1").value = obj.buttons[0];
  document.getElementById("btn2").value = obj.buttons[1];
  document.getElementById("btn3").value = obj.buttons[2];
  document.getElementById("btn4").value = obj.buttons[3];
  // i=0;
  // console.log("obj.bars.length: "+obj.bars.length)
  for (let i=0;i<obj.bars.length;i++){
    let iDiv = document.createElement('div');
    iDiv.id = `ProgressBar${i}`;
    document.getElementById('divBarContainer').appendChild(iDiv);

    // Now create and append to iDiv
    let innerDiv = document.createElement('div');
    innerDiv.id = `ProgressBarStatus${i}`;
    innerDiv.innerHTML=obj.bars[i];

    // The variable iDiv is still good... Just append to it.
    iDiv.appendChild(innerDiv);
    let elem = document.getElementById(`ProgressBarStatus${i}`);
    elem.style.width = obj.bars[i]/obj.limit*100 + '%';

    let option = document.createElement("option");
    option.value = `ProgressBar${i}`;
    option.text = `ProgressBar${i}`;
    let selectList= document.getElementById("barsId");
    selectList.appendChild(option);
  }

  //console.log(obj.buttons[0])
}, function(error) {
  console.error("Failed!", error);
})
