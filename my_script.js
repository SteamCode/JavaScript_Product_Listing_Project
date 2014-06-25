$(document).ready( function () {

	$.getJSON("http://www.frsafety.com/TestProducts.aspx", function(obj){	
			
		obj.products = _.sortBy(obj.products, "sequence");	
			
		$.each(obj.products, function(key, value){
			$("#container").append(value.name);
			$("#container").append(value.description);
			
			$("#container").append("<label>Quantity: </label><input type = 'input' placeholder = 'Enter Quantity Here' id = identifier" + value.id + ">");
			$("#container").append("<br/>");
			
			$("#container").append("<button onclick = 'GetPrice( " + value.price + ", " + value.id + "  )'>Get Price</button>");
			$("#container").append("<br/><br/>");
		});

		


	
	});

});

function GetPrice(price, id){
	price = price.toFixed(2);
	
	var qty = document.getElementById('identifier' + id).value;
	
	if (qty == ""){
		qty = 0;
	}
	
	var total = (qty * price).toFixed(2);
	
	alert ('($' + price + ' * ' + qty + ')\n= $' + total);
}
