import React from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Digit from "./Digit"


//create your first component
const Home = (props) => {


	let digitos = props.segundos.toString();
	let digitToPrint = digitos.split('');
	let arrayDigit = [];
	console.log(digitToPrint)

	for (let i = -1; i >= -6; i--) {
		console.log(digitToPrint[digitToPrint.length + i])
		if (digitToPrint[digitToPrint.length + i] == undefined) arrayDigit.unshift(0);
		else arrayDigit.unshift(digitToPrint[digitToPrint.length + i]);
	}
	console.log(arrayDigit)


	/*let unidades = arrayDigit[5];
	let decenas = arrayDigit[4];
	let centenas = arrayDigit[3];
	let uniMil = arrayDigit[2];
	let decMil = arrayDigit[1];
	let centMil = arrayDigit[0];*/
	let icono = <i className="fa-solid fa-clock-rotate-left"></i>
	return (
		<div className="text-center">
			<h1>CONTADOR DE SEGUNDOS</h1>
			<h2>{props.segundos}</h2>
			<div className="row mx-5 bg bg-dark">
				<Digit digito={icono}/>
				{
					arrayDigit.map((numberToPrint, index) => {
						return <Digit digito={numberToPrint} key={index} />
					})
				}
			</div>
		</div>
	);
};

export default Home;