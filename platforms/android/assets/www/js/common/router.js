app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    //sidebar
    .state('app', {
        url: "/app",
        abstract: true,
        templateUrl: "templates/login.html"
    })
    //  login page
    .state('app.login', {
        url: "/login",
        views: {
            'menuContent' :{
                templateUrl: "templates/login.html",
                controller: "LoginCtrl"
            }
        }
    })
    // Sign up page
    .state('app.signup', {
        url: "/signup",
        views: {
            'menuContent' :{
                templateUrl: "templates/sign-up.html",
                controller: "SignUpCtrl"
            }
        }
    })
    // Sign up page
    .state('app.forgot', {
        url: "/forgot",
        views: {
            'menuContent' :{
                templateUrl: "templates/forgot.html",
                controller: "ForgotCtrl"
            }
        }
    })
    // Gallery page
    /*.state('app.home', {
        url: "/home",
        views: {
            'menuContent' :{
                templateUrl: "templates/about.html",
                //controller: "HomeCtrl"
            }
        }
    })*/
    
    // setup an abstract state for the tabs directive
    .state('home', {
        url: '/home',
        abstract: true,
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
        //controller : 'RedirectCtrl'
    })

    // Each tab has its own nav history stack:
    .state('home.dash', {
        url: '/dash',
        cache: false,
        views: {
            'tab-dash': {
                templateUrl: 'templates/dashboard.html',
                controller: 'DashCtrl'
            }
        }
    })

    .state('home.nurse', {
        url: '/nurse',
        cache: false,
        views: {
            'tab-nurse': {
                templateUrl: 'templates/nurse.html',
                controller: 'NurseCtrl'
            }
        }
    })
        
    .state('home.nurse-details', {
        url: '/nurse-details/:nurseId',
        views: {
            'tab-nurse': {
                templateUrl: 'templates/nurse-details.html',
                controller: 'NurseDetailCtrl'
            }
        }
    })
    
    .state('home.wall', {
        url: '/wall',
        cache: false,
        views: {
            'tab-wall': {
                templateUrl: 'templates/wall-post.html',
                controller: 'WallCtrl'
            }
        }
    })
	
	.state('home.post', {
        url: "/post",
        cache: false,
        views: {
            'tab-wall' :{
                templateUrl: "templates/post.html",
		  		controller: "PostCtrl"
            }
        }
    })
    
    .state('home.profile', {
        url: '/profile',
        cache: false,
        views: {
            'tab-profile': {
                templateUrl: 'templates/profile.html',
                controller: 'MyProfileCtrl'
            }
        }
    })
    
    .state('home.exams', {
        url: '/exams',
        cache: false,
        views: {
            'tab-exams': {
                templateUrl: 'templates/exams.html',
                controller: 'ExamCtrl'
            }
        }
    })
    
    // login page
  	$urlRouterProvider.otherwise("/app/login");
})