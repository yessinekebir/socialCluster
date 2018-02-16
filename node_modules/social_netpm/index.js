var users = [
{
  id:0,
  token: "4jkgvxe1d0v",
  name: "Carlo Leonardi",
  friends: [1,2,3],
  reqSended:[],
  reqReceived:[1],
  posts:[
    {
      content:"This is my first post !"
    }
  ]


},
{
  id:1,
  token: "a6sm53nw1ki",
  name: "Mario Rossi",
  friends: [0,2],
  reqSended:[0],
  reqReceived:[],
  posts:[
    {
      content:"I'm new on this social !"
    },
    {
      content:"The last week i went ......"
    }
  ]


},
{
  id:2,
  token: "9jkghxe1d0v",
  name: "Yessine Kebir",
  friends: [1,3],
  reqSended:[],
  reqReceived:[],
  posts:[
    {
      content:"Questo è il mio primo post .."
    },
    {
      content:"image"
    }
  ]


},
{
  id:3,
  token: "k9sm53nw1ki",
  name: "Filippo Neri",
  friends: [0,2,1],
  reqSended:[],
  reqReceived:[],
  posts:[]


}

]
var counter = users.length;
var rand = function() {
  return Math.random().toString(36).substr(2);
};
var allTokens = [];

exports.getUsers = function() {
  return users;
}

exports.signUp = function(name, surname) {
  var user = {
    name: name,
    surname: surname
  }
  name.id = counter++;
  name.token = rand();
  users.push(user);
}

exports.createPost = function(token,post) {
  for (var i = 0; i < users.length; i++) {
    if(token===users[i].token){
      return users[i].posts.push(post);

    }
    else
    return "Error";
  }
}
exports.getTokens = function() {
  for (var i = 0; i < users.length; i++) {
    allTokens.push(users[i].token);
  }
  return allTokens;
}

exports.sendFriendship = function(id,token) {
  for (var i = 0; i < users.length; i++) {
    if(users[i].token === token){
      for (var x = 0; x < users.length; x++) {
        if(users[x].id === id){
          users[x].reqReceived = users[i].name;
          users[i].reqSended = users[x].name;
        }
      }
    }
  }
}
exports.checkRequest = function (senderID,token,answer) {
  for (var i = 0; i < users.length; i++) {
    for (var x = 0; x < users.length; i++) {
      if(users[i].token === token && users[x].id === senderID){
        if(answer === true || answer === "yes") {
          users[i].reqReceived.splice(users[x].reqReceived.indexOf(senderID),1);
          users[x].reqSended.splice(users[x].reqSended.indexOf(users[i]),1);

        }
      }
      else
      return "Request refused";
    }
  }
}
