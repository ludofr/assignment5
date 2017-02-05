(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['UserData'];
function MyInfoController(UserData) {
  var ctrl = this;

  ctrl.registrationNOK    = "Not signed up yet..." ;
  ctrl.registrationNOK2    = "Sign up now!" ;

  ctrl.hasUserAlreadySubscribed = UserData.hasUserAlreadySubscribed();
  ctrl.userData = UserData.getUserData();



}

})();
