angular.module('todoApp', []).controller('TodoListController', function($scope) {
  $scope.todos = [];

  $scope.addTodo = function() {
    $scope.todos.push({
      done: false,
      task: $scope.newTodo
    });
    $scope.newTodo = '';
  }

  $scope.getRemaining = function() {
    var count = 0;
    angular.forEach($scope.todos, function(todo) {
      if(!todo.done) {
        count++;
      }
    });
    return count;
  }
});