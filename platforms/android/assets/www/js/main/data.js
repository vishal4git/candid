
app.factory('SocialData', function(){
    var data = {};
    
    data.items = [
        { 
            title: 'Facebook',
            icon: 'ion-social-facebook',
				url: 'http://www.facebook.com/weblogtemplates'
        },
        { 
            title: 'Twitter',
            icon: 'ion-social-twitter',
				url: 'http://twitter.com/weblogtemplates'
        },
        { 
            title: 'Pinterest',
            icon: 'ion-social-pinterest',
				url: 'http://twitter.com/weblogtemplates'
        },
        { 
            title: 'Linkedin',
            icon: 'ion-social-linkedin',
				url: 'http://twitter.com/weblogtemplates'
        },
        { 
            title: 'Github',
            icon: 'ion-social-github',
				url: 'http://twitter.com/weblogtemplates'
        },
        { 
            title: 'Google +',
            icon: 'ion-social-googleplus',
				url: 'http://twitter.com/weblogtemplates'
        }
    ]; 
    
    return data;
})
// Home Data: Home page configuration
app.factory('VideoData', function(){
    var data = {};
    
    data.items = [
        { 
            title: 'Justin Bieber - All That Matters',
            video: 'https://www.youtube.com/embed/JC2yu2a9sHk',
        },
        { 
            title: 'Justin Bieber - Confident ft. Chance The Rapper',
            video: 'https://www.youtube.com/embed/47YClVMlthI',
        },
        { 
            title: 'Tori Kelly - Dear No One',
            video: 'https://www.youtube.com/embed/njmCUJ94lUM',
        },
        { 
            title: 'Katty Perry Roar',
            video: 'https://www.youtube.com/embed/CevxZvSJLk8',
        }
    ]; 
    
    return data;
})
// Home Data: Home page configuration
app.factory('PostData', function(){
	var postMain = "";
		postMain += "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>";
   	postMain += "<ul><li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li><li>Aliquam tincidunt mauris eu risus.</li><li>Vestibulum auctor dapibus neque.</li></ul>";
		postMain += "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>";
		postMain += "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>";
	
   return postMain;
})
// feeds
app.factory('Blog', ['$http', 'Config', function($http, Config) {
	var data = {};
	data.getPosts = function () {
		return $http(
			{
				method: 'GET', url:Config.ApiUrl
			}
		);
	}
  	return data;
}]);
// posts from a demo url
app.factory('Photos',['$http', 'Config', function($http, Config) {
	var data = {};
	data.getPosts = function () {
		return $http(
			{
				method: 'GET', url:Config.PhotoUrl
			}
		);
	}
  	return data;
}]);
// comments factory -- fetching comments from an api -- just sample api
//
app.factory('Comments',['$http', 'Config', function($http, Config) {
	var data = {};
	data.getComments = function () {
		return $http(
			{
				method: 'GET', url:Config.CommentUrl
			}
		);
	}
  	return data;
}]);
// friends factory
app.factory('Friends',['$http', 'Config', function($http, Config) {
	var data = {};
	data.getFriends = function () {
		return $http(
			{
				method: 'GET', url:Config.FriendsUrl
			}
		);
	}
  	return data;
}]);
app.factory('Features', function(){
    var data = {};
    
    data.items = [
        { 
            title: 'Profile',
            icon: 'ion-person',
            url: '#/app/profile'
        },
		  { 
            title: 'Friends',
            icon: 'ion-ios-people',
            url: '#/app/friends'
        },
		  { 
            title: 'WordPress Blog',
            icon: 'ion-social-wordpress',
            url: '#/wordpress/blog'
        },
		  { 
            title: 'Messages',
            icon: 'ion-chatboxes',
            url: '#/app/messages'
        },
		  { 
            title: 'Message',
            icon: 'ion-chatbox',
            url: '#/app/message'
        },
        { 
            title: 'Gallery',
            icon: 'ion-images',
            url: '#/app/gallery'
        },
        { 
            title: 'Videos',
            icon: 'ion-ios-videocam',
            url: '#/app/videos'
        },
        { 
            title: 'Blog',
            icon: 'ion-ios-calendar',
            url: '#/app/blog'
        },
		  { 
            title: 'Article',
            icon: 'ion-ios-paper',
            url: '#/app/post'
        },
        { 
            title: 'Contact',
            icon: 'ion-email',
            url: '#/app/contact'
        }
		  ,
        { 
            title: 'News',
            icon: 'ion-ios-paper',
            url: '#/app/news'
        },
		  { 
            title: 'Feeds',
            icon: 'ion-social-rss',
            url: '#/app/feedslist'
        },
        { 
            title: 'Settings',
            icon: 'ion-ios-gear',
            url: '#/app/settings'
        },
        { 
            title: 'About us',
            icon: 'ion-ios-people',
            url: '#/app/about'
        },
		  { 
            title: 'Admob',
            icon: 'ion-cash',
            url: '#/app/admob'
        },
        { 
            title: 'Push Notification',
            icon: 'ion-paper-airplane',
            url: '#/app/push'
        },
        { 
            title: 'Intro Template',
            icon: 'ion-ios-help',
            url: '#/app/intro'
        },
		  { 
            title: 'Social',
            icon: 'ion-heart',
            url: '#/app/socialprofile'
        },
		  { 
            title: 'Login',
            icon: 'ion-ios-locked',
            url: '#/app/login'
        },
		  { 
            title: 'Register',
            icon: 'ion-lock-combination',
            url: '#/app/signup'
        }
    ]; 
    
    return data;
})
app.factory('myPushNotification', ['$http', 'PushNoti', function ($http, PushNoti) {
  return {
		registerPush: function(fn) {
			var myPushNotification = window.plugins.pushNotification,
			successHandler = function(result) {
				 //alert('result = ' + result);
			},
			errorHandler = function(error) {
				 //alert('error = ' + error);
			};
			if (device.platform == 'android' || device.platform == 'Android') {
				// myPushNotification.unregister(successHandler, errorHandler);
				myPushNotification.register(successHandler, errorHandler, {
					 'senderID': PushNoti.senderID, // **ENTER YOUR SENDER ID HERE**
					 'ecb': 'onNotificationGCM'
				});
		  }
		}
  };
}]);
// push notification push to server
app.factory('SendPush',['$http', 'Config', function($http, Config) {
	var SendPush = {};
	SendPush.android = function(token) {
		return  $http({method: "post", url: 'http://www.skyafar.com/tools/push/push.php',
			data: {
				token: token,
			}
		});
	}
  	return SendPush;
}]);
// friends factory
app.factory('Messages',['$http', 'Config', function($http, Config) {
	var data = {};
	data.getMesages = function () {
		return $http(
			{
				method: 'GET', url:Config.MessagesUrl
			}
		);
	}
	data.getMessage = function () {
		return $http(
			{
				method: 'GET', url:Config.MessageUrl
			}
		);
	}
  	return data;
}]);
// blog feeds
app.factory('Feeds', function(){
    var data = {};
    
    data.items = [
        { 
            title: 'Huffingtonpost',
            feed: 'http://www.huffingtonpost.com/feeds/index.xml',
        },
        { 
            title: 'CNN.com News',
            feed: 'http://rss.cnn.com/rss/cnn_topstories.rss',
        },
        { 
            title: 'New York Times Home Page',
            feed: 'http://feeds.nytimes.com/nyt/rss/HomePage',
        },
        { 
            title: 'Washington Post: Today\'s Highlights',
            feed: 'http://www.washingtonpost.com/rss/',
        }
    ]; 
    
    return data;
})


/**------------ Valid Methods Starts from Here ----------------------***/

// Nurse factory
app.factory('Nurse',['$http', 'Config', function($http, Config) {
	var data = {};
	data.getNurse = function () {
		return $http(
			{
				method: 'GET', url:Config.NurseUrl
			}
		);
	}
	
	/*data.items =[
		{
			"_id": 1,
			"name": "John Doe",
			"location": "Bangalore",
			"experience": "5 Years",
			"specialization": "Cardiac, ICU",
			"image": "http://3.bp.blogspot.com/-bTWNRjookMQ/VYGjnv5nKtI/AAAAAAAAA08/wXshQ9sNDeU/s100-c/blank-792125_1280.jpg"
		},
		{
			"_id": 2,
			"name": "Admin",
			"location": "Bangalore",
			"experience": "5 Years",
			"specialization": "Cardiac, ICU",
			"image": "http://2.bp.blogspot.com/-YytBQ-VwmQc/VYGjnsxx_yI/AAAAAAAAA04/uncM-5p5MbI/s100-c/board-761586_1280.jpg"
		},
		{
			"_id": 3,
			"name": "Max",
			"location": "Bangalore",
			"experience": "5 Years",
			"specialization": "Cardiac, ICU",
			"image": "http://1.bp.blogspot.com/-M0fdr0xWaaA/VYGjpZwTflI/AAAAAAAAA1I/f3sxnFuhMCc/s100-c/business-792113_1280.jpg"
		},
		{
			"_id": 4,
			"name": "David",
			"location": "Bangalore",
			"experience": "5 Years",
			"specialization": "Cardiac, ICU",
			"image": "http://3.bp.blogspot.com/-IvUXSLYsXwk/VYGjs7E23CI/AAAAAAAAA1Q/RDJcktzwYzQ/s100-c/cactus-787931_1280.jpg"
		},
		{
			"_id": 5,
			"name": "Michael",
			"location": "Bangalore",
			"experience": "5 Years",
			"specialization": "Cardiac, ICU",
			"image": "http://1.bp.blogspot.com/-IMsTheNxIqo/VYGjyM2hLiI/AAAAAAAAA1g/ZQO2uRgQSU4/s100-c/cappadocia-805624_1280.jpg"
		},
		{
			"_id": 6,
			"name": "Robert",
			"location": "Bangalore",
			"experience": "5 Years",
			"specialization": "Cardiac, ICU",
			"image": "http://3.bp.blogspot.com/-zR75pEKCSSU/VYGjwNogrmI/AAAAAAAAA1Y/xgPrSXra3fE/s100-c/darts-102919_1280.jpg"
		},
		{
			"_id": 7,
			"name": "Christian",
			"location": "Bangalore",
			"experience": "5 Years",
			"specialization": "Cardiac, ICU",
			"image": "http://1.bp.blogspot.com/-F508t9rbLAs/VYGj6BK-O1I/AAAAAAAAA1o/aPlZysKleoI/s100-c/darts-155726_1280.png"
		},
		{
			"_id": 8,
			"name": "Thomas",
			"location": "Bangalore",
			"experience": "5 Years",
			"specialization": "Cardiac, ICU",
			"image": "http://3.bp.blogspot.com/-PzPenQ-FGz0/VYGj9bPPbCI/AAAAAAAAA1w/0xw6K-h5bz0/s100-c/girl-785304_1280.jpg"
		},
		{
			"_id": 9,
			"name": "Richard",
			"location": "Bangalore",
			"experience": "5 Years",
			"specialization": "Cardiac, ICU",
			"image": "http://4.bp.blogspot.com/-Ips46dmnU6M/VYGj9ubrwyI/AAAAAAAAA10/pa7wuEboOdg/s100-c/monkey-161227_1280.png"
		},
		{
			"_id": 10,
			"name": "William",
			"location": "Bangalore",
			"experience": "5 Years",
			"specialization": "Cardiac, ICU",
			"image": "http://1.bp.blogspot.com/-BdewC981JO4/VYGkBpTdmOI/AAAAAAAAA2A/l1M0YOVSYiU/s100-c/pamukkale-14984_1280.jpg"
		},
		{
			"_id": 11,
			"name": "Mary",
			"location": "Bangalore",
			"experience": "5 Years",
			"specialization": "Cardiac, ICU",
			"image": "http://4.bp.blogspot.com/-hof2H_08j5E/VYGkEIxqg8I/AAAAAAAAA2I/i9zwpSI1DoI/s100-c/stork-782060_1280.jpg"
		},
		{
			"_id": 12,
			"name": "Daniel",
			"location": "Bangalore",
			"experience": "5 Years",
			"specialization": "Cardiac, ICU",
			"image": "http://4.bp.blogspot.com/-Ips46dmnU6M/VYGj9ubrwyI/AAAAAAAAA10/pa7wuEboOdg/s100-c/monkey-161227_1280.png"
		}
	]*/
	
	
	data.items =[{
			"profileDetails": {
				"_id": 1,
				"profileId": "PRF001",
				"maskedName": "NIKPRF001",
				"creationDate": "ddMMyyyyTHHmmss",
				"lastModifiedDate": "ddMMyyyyTHHmmss",
				"photo": "http://i12.photobucket.com/albums/a240/candid4world/candid/repository/profiles/PRF001/prof_1_zps6yygystr.jpg",
				"resume": "Name_ddMMyyyy.doc/docx/pdf/",
				"resumeLastUpdatedDate": "ddMMyyyyTHHmmss",
				"candidate": {
					"firstName": "Nikhita",
					"middleName": "",
					"lastName": "Adhikari",
					"gender": "0",
					"age": "27",
					"height": "6",
					"weight": "82",
					"specialization": "Cardio",
					"experience": "5",
					"email": "nikhita@gmail.com",
					"phone": "+918123151566",
					"addressLine1": "",
					"addressLine2": "",
					"city": "Bangalore",
					"state": "Karnataka",
					"pinCode": "560020",
					"currentLocation": "Bangalore"
				},
				"education": {
					"instituteName": "Rajiv Gandhi Institute of Nursing",
					"university": "Karnataka Nursing Board",
					"degree": "Masters in Paramedical",
					"stream": "Science",
					"yearOfPassing": "2011",
					"percentage": "75%"
				},
				"employmentDetails": {
					"employerName": "PeopleTree Hospitals",
					"from": "09-08-2010",
					"to": "11-06-2014",
					"designation": "Cardio",
					"department": "Cardiology"
				},
				"documents": {
					"PAN": "",
					"passport": "",
					"adharCard": ""
				}
			}
		}
	]

    data.get = function(nurseId) {  
        var allData = {};
        for (var i = 0; i < data.items.length; i++) {
            if (data.items[i].profileDetails._id === parseInt(nurseId)) {
              return data.items[i];
            }
        }
        return data;
    }
  	return data;
}]);

