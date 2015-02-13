 var username = "Non sei loggato";
 

 
 Template.temporary_login.events({

    'submit #temporary_login_form' : function(e, t){  //login
    	e.preventDefault(); //  ???
      
      	//estraggo il nome dal form di login
    	var username = t.find('#login-username').value;
    	 
    	if (username.replace(/ /g, '') == "") {  //verifico che il nome non sia una sequenza di spazi
    		alert("inserisci username");
    	} else {
    		var user_id = username.replace(/ /g, '')+ "_id";
    		if (typeof(Players.findOne(user_id)) != 'undefined'){
    			alert('utente ESISTENTE');
    		}else{;
    			alert('CONFERMATO');
				Session.set("mode", "scenaMode");
				Session.set("utente", username); 
				Session.set("user_id", user_id); 
				
				 //posizione iniziale del player
 				var x = "3";
 				var y = "1";
 				var z = "1";
 				
				
				Players.insert({  	//inserisco nome utente e id nella collection
 	        		nome: username,
    	      		_id: user_id,
    	      		x: x,
    	      		y: y,
    	      		z: z
        		});
			
				//aggiungo la box nell'x3d
      			//$("#scena_x3d").append("<transform DEF='BOX_red' id='BOX"+user_id+"' translation='"+Players.findOne(Session.get('user_id')).x+" "+Players.findOne(Session.get('user_id')).y+" "+Players.findOne(Session.get('user_id')).z+"' rotation='0 0 1 0' > <shape> <appearance> <material diffuseColor='1 0 0'></material> </appearance> <box size='2 2 2'></box> </shape> </transform>		");
    	   		
    	   		$("#nome_utente_log").append("BENVENUTO "+ username);
    	   	
    	   		
			}
       	}
      }
  });
  
  
  Template.temporary_logout.events({

    'submit #temporary_logout_form' : function(e, t){
    e.preventDefault(); //  ???
      
      	//estraggo il nome dal form di login
    	
		Session.set("mode", "loginMode");
		Session.set("utente", "Non sei loggato");
		$("#nome_utente_log").empty();
		Players.remove(Session.get('user_id'));
      
       
      }
  });


//imposto la visualizzazione iniziale con login
Session.set("mode", "loginMode");
Session.set("utente", username);




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