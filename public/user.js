function writeUserData(userId, email) {
  firebase.database().ref('users/'+userId+"/").set({
    uid: userId,
    email: email,
    point: 10,
    workshop_count: 0,
    showcase_count: 0,
    redeem_history_count: 0,
  //  email: email,
   // profile_picture : imageUrl
  });
}

function generateTokenWorkshop(){
    firebase.database().ref('list_token/workshop/').push({
    event_type: "workshop"
  //  email: email,
   // profile_picture : imageUrl
  });
}
function generateTokenShowcase(){
    firebase.database().ref('list_token/showcase/').push({
    event_type: "showcase",
    token:'sjd123'
  //  email: email,
   // profile_picture : imageUrl
  });
}

function generateTokenWorshop1(){
  firebase.database().ref('list_token/').push({
  event_type: "workshop123",
  token:'sjd123'
//  email: email,
 // profile_picture : imageUrl
});
}

function checkUser(){
 
var userId = firebase.auth().currentUser.uid;
  // alert(firebase.auth().currentUser.email);
    checkNull();
    if(userId != null){
    //   alert("Exist");
    }
    else
        {
      //  alert("Null");       
        }    
}

function checkNull(){ 
        var usr = firebase.auth();
        var uid = usr.currentUser.uid;
firebase.database().ref('/users/'+uid).once('value').then(function(snapshot) {
  //  console.log(snapshot.val());
    if(snapshot.val() != null){
}
    else{
        writeUserData(usr.currentUser.uid, usr.currentUser.email);
    }
});    
}
