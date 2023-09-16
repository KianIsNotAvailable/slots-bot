// all the possible spin combinations
const combinations = [
  "Kappa TriHard MaxLOL",
  "Kappa TriHard DansGame",
  "Kappa TriHard Jebaited",
  "Kappa TriHard Kreygasm",
  "Kappa MaxLOL DansGame",
  "Kappa MaxLOL Jebaited",
  "Kappa MaxLOL Kreygasm",
  "Kappa DansGame Jebaited",
  "Kappa DansGame Kreygasm",
  "Kappa Jebaited Kreygasm",
  "TriHard MaxLOL DansGame",
  "TriHard MaxLOL Jebaited",
  "TriHard MaxLOL Kreygasm",
  "TriHard DansGame Jebaited",
  "TriHard DansGame Kreygasm",
  "TriHard Jebaited Kreygasm",
  "MaxLOL DansGame Jebaited",
  "MaxLOL DansGame Kreygasm",
  "MaxLOL Jebaited Kreygasm",
  "DansGame Jebaited Kreygasm",
  "Kappa TriHard MaxLOL",
  "Kappa TriHard DansGame",
  "Kappa TriHard Jebaited",
  "Kappa TriHard Kreygasm",
  "Kappa MaxLOL DansGame",
  "Kappa MaxLOL Jebaited",
  "Kappa MaxLOL Kreygasm",
  "Kappa DansGame Jebaited",
  "Kappa DansGame Kreygasm",
  "Kappa Jebaited Kreygasm",
  "TriHard MaxLOL DansGame",
  "TriHard MaxLOL Jebaited",
  "TriHard MaxLOL Kreygasm",
  "TriHard DansGame Jebaited",
  "TriHard DansGame Kreygasm",
  "TriHard Jebaited Kreygasm",
  "MaxLOL DansGame Jebaited",
  "MaxLOL DansGame Kreygasm",
  "MaxLOL Jebaited Kreygasm",
  "DansGame Jebaited Kreygasm",
  "Kappa TriHard MaxLOL",
  "Kappa TriHard DansGame",
  "Kappa TriHard Jebaited",
  "Kappa TriHard Kreygasm",
  "Kappa MaxLOL DansGame",
  "Kappa MaxLOL Jebaited",
  "Kappa MaxLOL Kreygasm",
  "Kappa DansGame Jebaited",
  "Kappa DansGame Kreygasm",
  "Kappa Jebaited Kreygasm",
  "TriHard MaxLOL DansGame",
  "TriHard MaxLOL Jebaited",
  "TriHard MaxLOL Kreygasm",
  "TriHard DansGame Jebaited",
  "TriHard DansGame Kreygasm",
  "TriHard Jebaited Kreygasm",
  "MaxLOL DansGame Jebaited",
  "MaxLOL DansGame Kreygasm",
  "MaxLOL Jebaited Kreygasm",
  "DansGame Jebaited Kreygasm",
  "Kappa TriHard MaxLOL",
  "Kappa TriHard DansGame",
  "Kappa TriHard Jebaited",
  "Kappa TriHard Kreygasm",
  "Kappa MaxLOL DansGame",
  "Kappa MaxLOL Jebaited",
  "Kappa MaxLOL Kreygasm",
  "Kappa DansGame Jebaited",
  "Kappa DansGame Kreygasm",
  "Kappa Jebaited Kreygasm",
  "TriHard MaxLOL DansGame",
  "TriHard MaxLOL Jebaited",
  "TriHard MaxLOL Kreygasm",
  "TriHard DansGame Jebaited",
  "TriHard DansGame Kreygasm",
  "TriHard Jebaited Kreygasm",
  "MaxLOL DansGame Jebaited",
  "MaxLOL DansGame Kreygasm",
  "MaxLOL Jebaited Kreygasm",
  "DansGame Jebaited Kreygasm",
  "Jebaited Jebaited Jebaited",
  "Jebaited Jebaited Jebaited",
  "Jebaited Jebaited Jebaited",
  "Jebaited Jebaited Jebaited",
  "Jebaited Jebaited Jebaited",
  "Jebaited Jebaited Jebaited",
  "Jebaited Jebaited Jebaited",
  "Jebaited Jebaited Jebaited",
  "Jebaited Jebaited Jebaited",
  "Jebaited Jebaited Jebaited",
  "Kappa Kappa Kappa",
  "Kappa Kappa Kappa",
  "Kappa Kappa Kappa",
  "Kappa Kappa Kappa",
  "Kappa Kappa Kappa",
  "Kappa Kappa Kappa",
  "Kappa Kappa Kappa",
  "MaxLOL MaxLOL MaxLOL",
  "MaxLOL MaxLOL MaxLOL",
  "MaxLOL MaxLOL MaxLOL",
  "MaxLOL MaxLOL MaxLOL",
  "MaxLOL MaxLOL MaxLOL",
  "MaxLOL MaxLOL MaxLOL",
  "MaxLOL MaxLOL MaxLOL",
  "DansGame DansGame DansGame",
  "DansGame DansGame DansGame",
  "DansGame DansGame DansGame",
  "DansGame DansGame DansGame",
  "DansGame DansGame DansGame",
  "DansGame DansGame DansGame",
  "DansGame DansGame DansGame",
  "TriHard TriHard TriHard",
  "TriHard TriHard TriHard",
  "TriHard TriHard TriHard",
  "TriHard TriHard TriHard",
  "Kreygasm Kreygasm Kreygasm",
  "Kreygasm Kreygasm Kreygasm",
];
let userBalance = {};

const tmi = require('tmi.js');

// Define configuration options
const opts = {
  identity: {
    username: 'kianuwufurry',
    password: 'oauth:u430n7dvp4ws6stzs9xzscoyh09y5j'
  },
  channels: [
    'kianuwufurry'
  ]
};

// Create a client with our options
const client = new tmi.client(opts);

// Register our event handlers (defined below)
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

// Connect to Twitch:
client.connect();

// Called every time a message comes in
function onMessageHandler (target, user, msg, self) {
  if (self) { return; } // Ignore messages from the bot

  // Remove whitespace from chat message
  const [commandName, ...args] = msg.split(' ');

//gives people their initial balance
if (commandName === '!gift') {
  const username = user.username;
  if (!userBalance[username]) {
    userBalance[username] = 1000; // Initial balance
    client.say(channel, `${username}, you have been gifted with a balance of 1000 coins.`);
  } else {
    client.say(channel, `${username}, you already recieved your gift`);
  }
}



  // If the command is known, let's execute it

  if (commandName === '!spin') {
    const num = randomIndex();
    client.say(target, `You rolled ${num}`);
    console.log(`* Executed ${commandName} command`);
  } else if (commandName === '!odds'){
    client.say(target, 'Odds: Jebaited = 0.5x Kappa = 1.1x DansGame = 1.5x MaxLOL = 1.7x TriHard = 5x Kreygasm = 10x');
  } else {
    console.log(`* Unknown command ${commandName}`);
  }
}

// Function called when the "dice" command is issued

function randomIndex(){
  var index = Math.floor(Math.random() * (combinations.length) + 1);
  console.log(combinations[index])
  return combinations[index];
}


// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}