angular.module('TemplateDemo', ['ui.bootstrap']);
function AlertDemoCtrl($scope) {
  $scope.alerts = [
    { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
    { type: 'success', msg: 'Well done! You successfully read this important alert message.' },
    { type: 'info', msg: 'If you press the B button you can swing your sword.' },
    { type: 'warning', msg: 'This is not the time to use that.' }
  ];

  $scope.addAlert = function() {
    $scope.alerts.push({msg: "Stop clicking me!"});
  };

  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };

}