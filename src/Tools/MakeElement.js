'use strict'

function MakeElement(){
  this.createEle = function(type,name,gridsize,custom) {
    let newElement = document.createElement(type);
        newElement.id = name;
    
    let classStuff = [];
    
    gridsize.forEach(function(siz,i){
      let multiSize = ['xs','sm','md','lg'];
      if(parseInt(siz) == 0) {
        classStuff.push(`hidden-${multiSize[i]}`);
      } else {
        classStuff.push(`col-${multiSize[i]}-${siz}`);
      }
    })

    classStuff.forEach(function(clas){
      newElement.classList.add(clas);
    }); 

    console.log(newElement);
    return newElement;
  }
}

export default MakeElement;