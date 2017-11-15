window.onload = function() {
	var todoList = [];
	var div = document.getElementById("tasks");
	var id = 0;

	document.getElementById('add').onclick = function (){
		var todoTask = document.getElementById('label').value;
		todoList.push(todoTask);
		var lastIndex = todoList.length - 1;
		var taskField = document.createTextNode(todoList[lastIndex]);
		var li = document.createElement('li');
		li.id = id;
		var chbox = document.createElement('input');
		chbox.type = "checkbox";
		chbox.id = id + "ch";
		li.appendChild(chbox);
		li.appendChild(taskField);
		div.appendChild(li);
		id++;
	}


	document.getElementById('delete').onclick = function(){
		for (k in todoList){
			var tempElement = document.getElementById(k);
			var tempBox = document.getElementById(k+"ch");
			if (tempBox.checked == true){
				delete todoList[k];
				tempElement.remove();
			}
		}
	}
}