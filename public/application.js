var mainApplicationModuleName = 'THCM';

var mainApplicationModule = angular.module(mainApplicationModuleName, ['ngResource', 'ngRoute', 'empreendimentos', 'components']);

mainApplicationModule.config(['$locationProvider',
function($locationProvider) {
  $locationProvider.hashPrefix('!');
}
]);

if(window.location.hash === '#_=_') window.location.hash = '#!';

angular.element(document).ready(function(){
  angular.bootstrap(document, [mainApplicationModuleName]);
});
