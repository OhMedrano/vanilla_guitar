import '../css/style.scss';
import GuitarBody from './Components/GuitarBody.js';
import MakeElement from './Tools/MakeElement.js';

console.log('hello world');

/* Check out the Tools section to see how to create HTML elements */
 


function HomeScreen(){
	var body = document.querySelector('body');

	console.log(body);

	var basicElem = new MakeElement;
      basicElem.createEle('div','basic',[0,12,12,12],'ayy'); 

}
GuitarBody.prototype.mainBody();
HomeScreen();