
function sort_array (array){
	var unsorted_array = array.sort();
	return unsorted_array;
}

function greater_than_25 (array){
	var entire_array = array;
	var final_array = [];
	for (var i = 0; i < entire_array.length; i++){
		if (entire_array[i] > 25){
			final_array.push(entire_array[i]);
		}
	}
	return final_array;
}

function convert_input_to_array (){
	var input_values = $("#input-values").val();
	console.log(input_values);
	var input_array = input_values.split(/,/);
	console.log(input_array);
	return input_array;
}

$("#get-values").click(function(){
	var input_array = convert_input_to_array();
	input_array = greater_than_25(input_array);
	input_array = sort_array(input_array);
	console.log(input_array);
	for (var i = 0; i < input_array.length; i++){
		var number = "<div class='number'>";
		number += input_array[i];
		number += "</div>";
		console.log(number);
		$("#individual-numbers").append(number);
	}
});

