angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.home', {
    url: '/home',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.contactInfo', {
    url: '/contact',
    views: {
      'side-menu21': {
        templateUrl: 'templates/contactInfo.html',
        controller: 'contactInfoCtrl'
      }
    }
  })

  .state('menu.schedule', {
    url: '/schedule',
    views: {
      'side-menu21': {
        templateUrl: 'templates/schedule.html',
        controller: 'scheduleCtrl'
      }
    }
  })

  .state('menu', {
    url: '/menu',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.june25', {
    url: '/june25',
    views: {
      'side-menu21': {
        templateUrl: 'templates/june25.html',
        controller: 'june25Ctrl'
      }
    }
  })

  .state('menu.july9', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/july9.html',
        controller: 'july9Ctrl'
      }
    }
  })

  .state('menu.july23', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/july23.html',
        controller: 'july23Ctrl'
      }
    }
  })

  .state('menu.august6', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/august6.html',
        controller: 'august6Ctrl'
      }
    }
  })

  .state('menu.august20', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/august20.html',
        controller: 'august20Ctrl'
      }
    }
  })

$urlRouterProvider.otherwise('/menu/home')

  

});