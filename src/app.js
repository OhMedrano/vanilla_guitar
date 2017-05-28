import '../css/style.scss';



console.log('hello world');

function makeElement(type,id,classes){
	let newElement = document.createElement(type);
		newElement.id = id;
		newElement.class = classes;

		return newElement;
}




function HomeScreen(){
	var body = document.querySelector('body');

	console.log(body);

	var basicElem = new makeElement('div','basic','col-xs-12 col-sm-12 col-md-12 col-lg-12 basics'); 

}

HomeScreen();