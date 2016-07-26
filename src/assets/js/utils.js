var utils = (function () {
    
    return {
    	escapeHTML: function (str) {
	        str = str || "";
	        return $('<div>').text(str).html();
	    },

	    crlf2br: function (str) {
	    	return str.replace(/(?:\r\n|\r|\n)/g, '<br />');
	    },

	    countWords: function (str) {
	    	return str.split(" ").length;
	    },

		/*
		- El número segundos que han pasado desde la fecha y hora de publicación en caso de haber sido hace menos de un minuto
		- El número de minutos en caso de haber sido hace menos de una hora
		- El número de horas en caso de haber sido hace menos de un día
		- El día de la semana (Lunes, Martes, Miércoles) en caso de haberse publicado hace menos de una semana.
		- En cualquier otro caso, la fecha y hora al completo.
		*/
	    simplifyDates: function (str) {
    		var fecha = new Date(str)
    		return jQuery.timeago(fecha);
	    },

	    addZero: function (num) {
	    	if (num<10) {
	    		return "0" + num.toString();
	    	} else {
	    		return num.toString();
	    	}
	    },

	    showError: function (message, elem) {
	    	if (elem) {
	    		var alertHTML = '<div class="callout alert"><p>';
				  alertHTML += message;
				  alertHTML += '</p></div>';
	    		$(elem).html(alertHTML);
	    	} else {
	    		alert(message);
	    	}
	    },

	    hideError: function (elem) {
    		$(elem).html("");
	    },

	    isElementInViewport: function (elem) {

		    //special bonus for those using jQuery
		    if (typeof jQuery === "function" && elem instanceof jQuery) {
		        elem = elem[0];
		    }
		    var rect = elem.getBoundingClientRect();

		    return (
		        rect.top >= 0 && rect.top <= (window.innerHeight || document.documentElement.clientHeight)
		    );
		}
	};

})();