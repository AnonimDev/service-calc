$(document).ready(function(){
	
	function q(a) {
		var s;
        var selec;
		var se = $('.select-box-2');

		se.empty();

		switch (a){
			case 'val1':
		    selec = 'val1';
			se.append('<option id="op1" value="val11">Короткая</option>');
			se.append('<option id="op2" value="val12">Длинная</option>');
		    break;
		    case 'val2':
		    selec = 'val2';
		    se.append('<option id="op3" value="val21">Бритье 1</option>');
		    se.append('<option id="op4" value="val22">Бритье 2</option>');
		    break;
		    case 'val3':
		    selec = 'val3';
		    se.append('<option id="op5" value="val31">Ногти, зеленый</option>');
		    se.append('<option id="op6" value="val32">Ногти, синий</option>');
		    break;
		}
	}
	function w() {
		var amount = $('#amount');

		var service2 = $('.select-box-2 option:selected').val();
		var n = 0;
		var t = 0;
		var y = 0;
		switch (service2){
			case 'val11':
		    	n = 500;
		    break;
		    case 'val12':
				n = 700;
		    break;
		    case 'val21':
		    	n = 300;
		    break;
		    case 'val22':
		    	n = 400;
		    break;
		    case 'val31':
				n = 200;
		    break;
		    case 'val32':
		    	n = 250;
		    break;
		}

		if ($("#check1").prop("checked")) {
			t = 150;
		} 
		if ($("#check2").prop("checked")) {
			y = 200;
		}

		var net = n + t + y;
		amount.text(net);

	}

	var w = setInterval(w, 50);

    $('.select-box-1').change(function() {
		q($(this).val());
    });
});