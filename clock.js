export const toolbar = new class Temps{
	getViewID(){
		return "toolbar";
	}

	get configuration() {
		return {
			view: "toolbar",
			id: this.getViewID(),
			paddingY:1,
			hidden:false,
			height:40, elements: [
				{
					view: "label",
					label: `<span style="font-size: 150%" >00:00:00</span>`,
					id:'heure',
					hidden:false,
					width:100,
				},
				{
					view:"bullet",
					minRange:0,
					maxRange:100,
					value:0,
					flowTime:1000,
					bands:[
						{value:33, color:"red"},
						{value:100, color:"green"},
					]
				},
				{
					view: "label",
					label: `<span style="font-size: 150%" >09:59:59</span>`,
					id:'temps_restant',
					hidden:false,
					width:100
				}
			]
		}
	}

	updateClock(){
		var currentTime = new Date ();
		var heure = currentTime.getHours();
		var min = currentTime.getMinutes();
		var sec = currentTime.getSeconds();
		var debutExam = new Date(2020, 11, 15, 10, 15, 20); //Valeur convertie en secondes, on récupérera cette valeur dans la DB.
		var finExam = new Date(2020, 11, 15, 12, 0, 0); //Idem
		var debutExamEnSec = 3600*debutExam.getHours() + 60*debutExam.getMinutes() + debutExam.getSeconds();
		var finExamEnSec = 3600*finExam.getHours() + 60*finExam.getMinutes() + finExam.getSeconds();
		var currentTimeEnSec = 3600*currentTime.getHours() + 60*currentTime.getMinutes() + currentTime.getSeconds();
		min = (min < 10 ? "0" : "") + min;
		sec = (sec < 10 ? "0" : "") + sec;

		var AMPM = (heure < 12) ? "AM" : "PM";
		heure = (heure > 12) ? heure - 12 : heure;
		heure = (heure == 0) ? 12 : heure;

		var stringHeure = heure + ":" + min + ":" + sec + " " + AMPM;

		this[0].define("label", "stringHeure");
		this[0].refresh();

		if(currentTime <= finExam)
			this[1].setValue((currentTimeEnSec-debutExamEnSec)*60/(finExamEnSec-debutExamEnSec));

		var heure2 = finExam.getHours() - currentTime.getHours();
		var minutes2 = finExam.getMinutes() - currentTime.getMinutes();
		var secondes2 = finExam.getSeconds() - currentTime.getSeconds();
		minutes2 = (min < 10 ? "0" : "") + min;
		secondes2 = (sec < 10 ? "0" : "") + sec;

		var stringHeure2 = heure2 + ":" + minutes2 + ":" + secondes2;

		this[2].define("label", "stringHeure2");
	}
}