//https://npmjs.org/package/mixpanel-data-export
var MixpanelExport = require('mixpanel-data-export');
var Mixpanel = require('mixpanel');
var panel, people, people_json, users, num_users;

var account={
	pro:{
		api_key: 'PROJECT_API_KEY',
		api_secret: 'PROJECT_SECRET_API',
		token: 'PROJECT_TOKEN'
	},
	dev:{
		api_key: 'PROJECT_API_KEY',
		api_secret: 'PROJECT_SECRET_API',
		token: 'PROJECT_TOKEN'
	}
};

var keys = account.dev;

//Setup de library
panel = new MixpanelExport({
  api_key : keys.api_key,
  api_secret : keys.api_secret
});

var mixpanel = Mixpanel.init(keys.token);

//Get the users
people = panel.engage({
 where: 'properties["$first_name"]=="anonymous user"'
});

/*
//Then remove them
people.done = (function(data){    
    data.results.forEach(function(user){
        console.log(user['$distinct_id']);
  mixpanel.people.delete_user(user['$distinct_id']);
 });
});
*/