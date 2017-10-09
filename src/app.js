import '../css/style.scss';
import GuitarBody from './Components/GuitarBody.js';
import MakeElement from './Tools/MakeElement.js';
import NavMenu from './Components/NavMenu.js';
console.log('hello world');

/* Check out the Tools section to see how to create HTML elements */
 


function HomeScreen(){
	let body = document.querySelector('body');
  
  var basicElem = new MakeElement || false;  
  var bodyContainer = basicElem.createEle('div','bodyContainer',[0,11,12,12],['ayy']); 
       

  body.append(NavMenu(),GuitarBody.prototype.scaleBody(),GuitarBody.prototype.harmBody(),GuitarBody.prototype.homeBody());
  
	console.log(NavMenu(),GuitarBody.prototype.scaleBody());
  

}
HomeScreen(); 