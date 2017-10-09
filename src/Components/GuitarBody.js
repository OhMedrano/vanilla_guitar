import '../../css/style.scss';
import MakeElement from '../Tools/MakeElement.js';

let newElement = new MakeElement;

function GuitarBody(){
  console.log('ayy');
  return true
}

GuitarBody.prototype = {
  homeBody : function() {
    let body = newElement.createEle('div','home',[12,12,12,12],['guitarBodies','guitarContainers']);

    body.innerHTML = '<div>This is home </div>';
    return body
  },

  scaleBody : function(){
    
    let body = newElement.createEle('div','visscale',[12,12,12,12],['guitarBodies', 'guitarContainers']);

    body.innerHTML = `<div> ayyyyyyy</div>`;
    console.log('from scaleBody   ');   
    return body 

  },
  harmBody : function() {
    let body = newElement.createEle('div','visharm',[12,12,12,12],['guitarBodies', 'guitarContainers']);

    body.innerHTML = `<div> supppp </div>`;

    return body;
  }

}


export default GuitarBody;  