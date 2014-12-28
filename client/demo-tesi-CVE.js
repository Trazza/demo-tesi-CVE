/*
setTimeout(function() {
Meteor.Keybindings.add({
    '←' : function () { console.log('sin'); },
    '→' : function () { console.log('des'); },
    '↓' : function () { console.log('giu'); },
    '↑' : function () { console.log('su'); }
});}, 2000);

*/
/*
UI.body.events({
  	// Assuming you're using jQuery 
 	$('body').on('keydown',function() { 
                alert('key pressed');
  },
  
});
*/

/*
Template.body.events({
'keydown input': function(event) {
        if (event.keycode == 38) {
            alert('freccia su');
            event.stopPropagation();
            return false;
        }
    
  }
});
*/

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