(function () {
"use strict";

angular.module('common')
.service('UserData', UserData);

UserData.$inject = ['MenuService','$q','ApiPath'] ;
function UserData(MenuService, $q, ApiPath) {
  var service = this;

  service.data = null ;

  service.clearUserData = function ()
  {
    service.data = null ;
  };

  service.getUserData = function ()
  {
    return service.data ;
  };

  service.hasUserAlreadySubscribed = function ()
  {
      return service.data !== null ;
  };

  service.storeUserData = function (user)
  {
    var deffered = $q.defer();

    var promise = MenuService.getItem(user.favdish);

    promise.then(function (response)
    {
      service.data                           = user ;
      service.data.preferredItem             = {};
      service.data.preferredItem.name        = response.name ;
      service.data.preferredItem.description = response.description ;
      service.data.preferredItem.imgPath     = ApiPath + '/images/' + user.favdish + '.jpg' ;
    },
    function (error)
    {
      deffered.reject("Could not check category validity" + error);
    }
    );

    return deffered.promise ;
  };

}



})();
