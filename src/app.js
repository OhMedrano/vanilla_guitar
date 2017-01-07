console.log('hello world');

function Example() {


	var body = document.querySelector('body');

	var div = document.createElement('div');

		div.innerHTML = `
			<div>
				Hello world
			</div>

			<div>
				Configure everything in src/app.js

			</div>


		`;

		body.append(div);

}

Example();