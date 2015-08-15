
function sort_array (array){
	var unsorted_array = array;
	array.sort();
}

function greater_than_25 (array){
	var entire_array = array;
	var final_array = [];
	for (var i = 0; i < entire_array.length; i++){
		if (entire_array[i] > 25){
			final_array.push(entire_array[i]);
		}
	}
}

function convert_input_to_array (){
	var input_values = $("#input-values").val();
	var input_array = []
	//push integer to array until delimiter
	return input_array;
}

$("#get-values").click(convert_input_to_array);
var input_array = sort_array(greater_than_25(convert_input_to_array));

for (var i = 0; i < input_array.length; i++){
	var number = "<div class='number'>";
	number += input_array[i];
	number += "</div>";
}