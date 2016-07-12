(function () {

	var td = this;
	var todoService = new TodoService();
	t = todoService.getTodos()
	
	$("#todoform").on("submit", function (e) {
		e.preventDefault()
		var newinput = $("#taskentry").val()

		t.push(newinput)
		todoService.saveTodos(t)
		update()
	})

	var todosElem = $("#todo");

	function update() {
		todosElem.empty()
		for (var i = 0; i < t.length; i++) {
			var currentTodo = t[i]
			todosElem.append('<h3>' + currentTodo + '</h3>')
		}

	}
    $('#delete').on('click', function(){
		t = [];
		update()
    todoService.saveTodos(t)
  })

	update()

} ())