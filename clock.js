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
					width:100
				},
				{},
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
				}
			]
		}
	}

	updateClock(){ //Faudrait faire que ça tourne en boucle, pas trop sûr encore de comment faire ça
		var currentTime = new Date ();
		var heure = currentTime.getHours();
		var min = currentTime.getMinutes();
		var sec = currentTime.getSeconds();
		var total = heure*3600 + min*60 + sec;
		var debutExam = 84820; //Valeur convertie en secondes, on récupérera cette valeur dans la DB.
		var finExam = 85000; //Idem
		var tiersTemps = (finExam-debutExam)/3 + debutExam;

		min = (min < 10 ? "0" : "") + min;
		sec = (sec < 10 ? "0" : "") + sec;

		var AMPM = (heure < 12) ? "AM" : "PM";
		heure = (heure > 12) ? heure - 12 : heure;
		heure = (heure == 0) ? 12 : heure;

		var stringHeure = heure + ":" + min + ":" + sec + " " + AMPM;

		this[0].setValue(stringHeure);

		if(total <= finExam)
			this[1].setValue((total-debutExam)*100/(finExam-debutExam));
	}
}