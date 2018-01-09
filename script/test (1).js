$(document).ready(function(){

	var nombre = 0;
	
	var b8     = 0;
	var b7     = 0;
	var b6     = 0;
	var b5     = 0;
	
	var b4     = 0;
	var b3     = 0;
	var b2     = 0;
	var b1     = 0;
	
	//Convertie l'ip en binaire
	function calcul(nombre){


		b8 = nombre/128
		b7 = nombre/64
		b6 = nombre/32
		b5 = nombre/16
		
		b4 = nombre/8
		b3 = nombre/4
		b2 = nombre/2
		b1 = nombre/1
		
		Math.trunc(b8%2)
		Math.trunc(b7%2)
		Math.trunc(b6%2)
		Math.trunc(b5%2)
		
		Math.trunc(b4%2)
		Math.trunc(b3%2)
		Math.trunc(b2%2)
		Math.trunc(b1%2)
	
		return String(Math.trunc(b8%2)) + String(Math.trunc(b7%2)) + String(Math.trunc(b6%2)) + String(Math.trunc(b5%2)) + String(Math.trunc(b4%2)) + String(Math.trunc(b3%2)) + String(Math.trunc(b2%2)) + String(Math.trunc(b1%2));		
	}


	$("#Valider").click(function(){
	
	
		var ip          = calcul($("#ip1").val()) + calcul($("#ip2").val()) + calcul($("#ip3").val()) + calcul($("#ip4").val());
		var CIDR        = $("#CIDR").val();
		var maskbin     = "";
		var nb0         = 32 - CIDR;
		var nbbithote   = 32 - CIDR;
		var Nbhote      = Math.pow(2,nbbithote)-2;
		var NetID       = String($("#ip1").val()) + "." + String($("#ip2").val()) + "." + String($("#ip3").val()) + "." + String($("#ip4").val());
		var plusun      = parseInt($("#ip4").val()) + 1;
		
		var firstIPoct2 = parseInt($("#ip2").val());
		var firstIPoct3 = parseInt($("#ip3").val());
		var firstIPoct4 = parseInt($("#ip4").val());
		
		var lastIPoct2  = parseInt($("#ip2").val());
		var lastIPoct3  = parseInt($("#ip3").val());
		var lastIPoct4  = parseInt($("#ip4").val()) + Nbhote;
		
		var nbde255     = firstIPoct4 / 255;
		var nbde2552    = firstIPoct3 / 255;
		var nbde2553    = firstIPoct2 / 255;
		
		var nbde2554    = lastIPoct4 / 255;
		var nbde2555    = lastIPoct3 / 255;
		var nbde2556    = lastIPoct2 / 255;


		//Evite de depasser 255 oct 4
		if (firstIPoct4 > 255) {
			firstIPoct3 = parseInt(firstIPoct3) + parseInt(nbde255);
			firstIPoct4 = firstIPoct4 % 255;
		}

		//Evite de depasser 255 oct 3
		if (firstIPoct3 > 255) {
			firstIPoct2 = parseInt(firstIPoct2) + parseInt(nbde2552);
			firstIPoct3 = firstIPoct3 % 255
		}

		//Evite de depasser 255 oct 2
		if (firstIPoct2 > 255) {
			firstIPoct1 = parseInt(firstIPoct1) + parseInt(nbde2553);
			firstIPoct2 = firstIPoct2 % 255
		}



		//Evite de depasser 255 oct 4
		if (lastIPoct4 > 255) {
			lastIPoct3 = parseInt(lastIPoct3) + parseInt(nbde2554);
			lastIPoct4 = lastIPoct4 % 255;
		}

		//Evite de depasser 255 oct 3
		if (lastIPoct3 > 255) {
			lastIPoct2 = parseInt(lastIPoct2) + parseInt(nbde2555);
			lastIPoct3 = lastIPoct3 % 255;
		}

		//Evite de depasser 255 oct 2
		if (lastIPoct2 > 255) {
			lastIPoct1 = parseInt(lastIPoct1) + parseInt(nbde2556);
			lastIPoct2 = lastIPoct2 % 255;
		}

		var firstIP = String($("#ip1").val()) + "." + String($("#ip2").val()) + "." + String($("#ip3").val()) + "." + String(plusun);
		var lastIP  = String($("#ip1").val()) + "." + String($("#ip2").val()) + "." + lastIPoct3 + "." + lastIPoct4;

		//Affiche une erreur si un chiffre rentré est supérieur a 255
		if ($("#ip1").val() > 255 || $("#ip2").val() > 255 || $("#ip3").val() > 255 || $("#ip4").val() > 255) {
			alert("Pas au dessus de 255")
			return;
		}

		//Affiche une erreur si le CIDR est supérieur a 31
		if (CIDR >= 32) {
			alert("Pas au dessus de 31")
			return;
		}
		

		//Converti le CIDR en binaire
		while (CIDR > 0){
			maskbin += "1";
			CIDR--;
		}
		while (nb0 > 0) {
			maskbin += "0";
			nb0--;
		}	

		var maskbin1    = maskbin.substr(0,8);
		var maskbin2    = maskbin.substr(8,8);
		var maskbin3    = maskbin.substr(16,8);
		var maskbin4    = maskbin.substr(24,8);	
		var mask        = String(parseInt(maskbin1,2)) + "." + String(parseInt(maskbin2,2)) + "." + String(parseInt(maskbin3,2)) + "." + String(parseInt(maskbin4,2))
		
		var lastIPoct41 = lastIPoct4 + 1;
		var broadcast   = String($("#ip1").val()) + "." + String($("#ip2").val()) + "." + lastIPoct3 + "." + lastIPoct41;


		//Affiche les resultat
		$("#result").text(ip);
		$("#CIDRresult").text(maskbin);
		$("#mask").text(mask);
		$("#nbhote").text(Nbhote);
		$("#netid").text(NetID);
		$("#firstIP").text(firstIP);
		$("#lastIP").text(lastIP);
		$("#broadcast").text(broadcast)
	})
})