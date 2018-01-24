$(document).ready(function(){
	
	function q() {
		var service = $('.select-box-1 option:selected').val();
		var se = $('.select-box-2');
		var op1 = $('#op1');
		var op2 = $('#op2');
		var op3 = $('#op3');
		var op4 = $('#op4');
		var op5 = $('#op5');
		var op6 = $('#op6');
		
		op1.hide();
		op2.hide();
		op3.hide();
		op4.hide();
		op5.hide();
		op6.hide();
		//console.log(service);

		switch (service){
			case 'val1':  // if (x === 'value1')
		    //se.empty();
		    $(".select-box-2 :nth-child(1)").attr("selected", "selected");
		    var selec = 'val1';
		    op1.show();
		    op2.show();
		    
		    //clearIntelval(q);
		    //console.log("val1");
		    break;
		    case 'val2':  // if (x === 'value1')
		     //se.empty();
		     $(".select-box-2 :nth-child(1)").attr("selected", "selected");
		    var selec = 'val2';
		    op3.show();
		    op4.show();
		    
		    //clearIntelval(q);
		    //console.log("val2");
		    break;
		    case 'val3':  // if (x === 'value1')
		     //se.empty();
		     $(".select-box-2 :nth-child(1)").attr("selected", "selected");
		    var selec = 'val3';
		    op5.show();
		    op6.show();
		    
		    //clearIntelval(q);
		    //console.log("val3");
		    break;
		}
		//console.log("ready");
	}
	function w() {
		var net = 0;
		var amount = $('#amount');

		var service2 = $('.select-box-2 option:selected').val();
		var n = 0;
		var t = 0;//200
		var y = 0;//150
		switch (service2){
			case 'val11':  // if (x === 'value1')
		    	n = 500;
		    break;
		    case 'val12':  // if (x === 'value1')
				n = 700;
		    break;
		    case 'val21':  // if (x === 'value1')
		    	n = 300;
		    break;
		    case 'val22':  // if (x === 'value1')
		    	n = 400;
		    break;
		    case 'val31':  // if (x === 'value1')
				n = 200;
		    break;
		    case 'val32':  // if (x === 'value1')
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
	var q = setInterval(q, 200);
});