var tempsLabel = webix.ui({
	view: "label",
	label: "00:00:00",
	inputWidth: 100,
	align: "center"
});

var barreProgres = webix.ui({
	view:"bullet",
	minRange:0,
	maxRange:100,
	value:0,
	flowTime:1000,
	bands:[
		{ value:100, color:"green" },
		{ value:33, color:"red" },
	],
	label:"Examen", //Sera modifié via la DB
	placeholder:"cours",
	marker:70,
	stroke:8,
	scale:{
		step:10,
		template:"#value#%"
	}
});

function updateClock(){
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

	var stringHeure = heure + ":" + min + " " + AMPM;

	tempsLabel.setValue(stringHeure);
	barreProgres.setValue((total-debutExam)*100/(finExam-debutExam));
}

function progressBar(){
	var currentTime = new Date ();
	var heure = currentTime.getHours();
	var min = currentTime.getMinutes();
	var sec = currentTime.getSeconds();


	if(total >= tiersTemps)
	{
		document.getElementById("Barre").style.backgroundColor = "green";
	}

	if(total <= finExam)
	{
		document.getElementById("Barre").style.width = (total - debutExam)*100/(finExam-debutExam) + "%";
	}
	else
		return;
}
