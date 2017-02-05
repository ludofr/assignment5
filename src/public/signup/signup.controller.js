(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['UserData'];
function SignUpController(UserData) {
  var ctrl = this;

  ctrl.categoryErrorText = "No such menu number exist" ;
  ctrl.registrationOK    = "Your information has been saved!"

  ctrl.categoryError = false;

  ctrl.registrationSuccessful = function ()
  {
    return UserData.hasUserAlreadySubscribed();
  }

  ctrl.categoryReset = function ()
  {
    ctrl.categoryError = false;
  }

  ctrl.submit = function ()
  {
    UserData.clearUserData();

    var promise = UserData.storeUserData(ctrl.user);

    promise.then(function (response)
    {
      ctrl.categoryError = false;
    },
    function (error)
    {
      ctrl.categoryError = true;
    }
  );
  };
}

})();
