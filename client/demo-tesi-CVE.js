 //imposto la visualizzazione iniziale con login
Session.set("mode", "loginMode");
Session.set("utente", username);
Session.set("color", "brown");
 
var username = "Non sei loggato";

 



UI.body.helpers({


	loginMode: function () {
 	   return Session.equals("mode", "loginMode");
 	 },
 	 
 	players: function () {
    	return Players.find();
 	 },
 	 
  
});





// funzione per gli eventi tramite i tasti da tastiera (keydown)
setTimeout(function() {
Meteor.Keybindings.add({
	
    '←' : function () { 
    			console.log(Players.findOne(Session.get('user_id')));
    			// preleva e modifico il parametro "x" dal document con id "user_id" della collection Player
    			x = String(parseFloat(Players.findOne(Session.get('user_id')).x) + 0.5); 
    			Players.update(
    				{ _id: Session.get('user_id') }, 
    				{ $set: //consente di modificare sono il parametro selezionato 
    					{
    						x: x, 
    					}
    				}
    			)	
    			console.log(Players.findOne(Session.get('user_id')));
    		},
    '→' : function () { 
    			console.log(Players.findOne(Session.get('user_id')));
    			x = String(parseFloat(Players.findOne(Session.get('user_id')).x) - 0.5);
    			Players.update(
    				{ _id: Session.get('user_id') }, 
    				{ $set: //consente di modificare sono il parametro selezionato 
    					{
    						x: x, 
    					}
    				}
    			)	
    			console.log(Players.findOne(Session.get('user_id')));
    
   	  		},
    '↓' : function () { 
    			console.log(Players.findOne(Session.get('user_id')));
    			z = String(parseFloat(Players.findOne(Session.get('user_id')).z) - 0.5);
    			Players.update(
    				{ _id: Session.get('user_id') }, 
    				{ $set: //consente di modificare sono il parametro selezionato 
    					{
    						z: z, 
    					}
    				}
    			)
    			console.log(Players.findOne(Session.get('user_id')));
    		 },
    '↑' : function () { 
    			console.log(Players.findOne(Session.get('user_id')));
    			z = String(parseFloat(Players.findOne(Session.get('user_id')).z) + 0.5);
    			Players.update(
    				{ _id: Session.get('user_id') }, 
    				{ $set: //consente di modificare sono il parametro selezionato 
    					{
    						z: z, 
    					}
    				}
    			)
    			console.log(Players.findOne(Session.get('user_id')));
    		 }
});}, 2000);




/* ----- DEFAULT -------
if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("counter", 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get("counter");
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set("counter", Session.get("counter") + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
*/