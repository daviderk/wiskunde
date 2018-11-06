// Wiskunde Platonische en Archimedische lichamen en de regel van Euler
// Gemaakt door David Erkelens met hulp van Michael Erkelens

function berekenHoekenPlatonisch(vormpje) {
	aantalHoeken = (vormpje.vlakken * vormpje.ribben_per_vlak) / vormpje.vlakken_per_hoek;
	return aantalHoeken;
}

function berekenRibbenPlatonisch(vormpje) {
	aantalRibben = (vormpje.vlakken * vormpje.ribben_per_vlak) / vlakken_per_rib; 
	return aantalRibben;
}

function berekenHoekenArchimedisch(vormpje) {
	aantalHoeken = ( (vormpje.vlakken * vormpje.ribben_per_vlak) + (vormpje.t_vlakken * vormpje.t_ribben_per_vlak) ) / vormpje.vlakken_per_hoek; 
	return aantalHoeken;
}

function berekenRibbenArchimedisch(vormpje) {
	aantalRibben = ( (vormpje.vlakken * vormpje.ribben_per_vlak) + (vormpje.t_vlakken * vormpje.t_ribben_per_vlak) ) / vlakken_per_rib; 
	return aantalRibben;
}

function berekenVlakkenArchimedisch(vormpje) {
	return vormpje.vlakken + vormpje.t_vlakken;
}

function Euler(vormpje) {
	//De regel van Euler zegt dat als je de hoekpunten en de vlakken bij elkaar optelt dat je dan 2 meer krijgt dan het aantal ribben. 
	var hoekpunten = berekenHoekenArchimedisch(vormpje);
	var vlakken = berekenVlakkenArchimedisch(vormpje);
	var ribben = berekenRibbenArchimedisch(vormpje);
	if (hoekpunten + vlakken == ribben + 2) {
		return "klopt";
	} else {
		return "klopt niet"
	}
}

var vlakken_per_rib = 2;

var octahedron = { 
	"vlakken": 8, 
	"ribben_per_vlak": 3, 
	"vlakken_per_hoek": 4
};

var tetraeder = { 
	"vlakken": 4, 
	"ribben_per_vlak": 3,
	"vlakken_per_hoek": 3
};

var truncatedTetraeder = { 
	"vlakken": 4,
	"ribben_per_vlak": 3,
	"t_vlakken": 4,
	"t_ribben_per_vlak": 6,
	"vlakken_per_hoek": 3
};

var truncatedOctahedron = { 
	"vlakken": 8,
	"ribben_per_vlak": 6, 
	"t_vlakken": 6,
	"t_ribben_per_vlak": 4,
	"vlakken_per_hoek": 3
};

// pak de vorm naam.
try {
	console.log(process.argv[2]);
	var vorm = eval(process.argv[2]);
}catch(e){
	console.log("deze vorm ken ik nog niet...");
	return;
}
// het aantal vlakken
console.log('Het aantal vlakken is: ' + berekenVlakkenArchimedisch(vorm));

//het aantal ribben
console.log('Het aantaal ribben is: ' + berekenRibbenArchimedisch(vorm));

//het aantal hoekpunten
console.log('Het aantaal hoekpunten is: ' + berekenHoekenArchimedisch(vorm));

// Klopt de regel van Euler?
console.log('De regel van Euler ' + Euler(vorm));

