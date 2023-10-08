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


let userBalance = ''
const tmi = require('tmi.js');
const { username } = require('tmi.js/lib/utils');
const {createPool} = require('mysql');
// Define configuration options
const opts = {
  identity: {
    username: 'kianuwufurry',
    password: 'oauth:tti8h6kg1evru07i5g257xw4oajpsv'
  },
  channels: [
    'kianuwufurry'
  ]
};
//sql database
const pool = createPool({
  host: "localhost",
  user: "root",
  password: "5551",
  database: "twitch_bot_game",
  connectionLimit: 10
})

//inserts chatters into database

//function to add 1000 initial points
function insertUsernameIntoDatabase(username) {
  pool.query(`UPDATE user_data SET points = points + 1000 WHERE username = ${username}`, (err, result, fields) => {
    if(err){
      return console.log(err);
    };
    userBalance = result;
    
  })}; 
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
  const senderUsername = user.username;
  // Remove whitespace from chat message
  const [commandName, ...args] = msg.split(' ');
  
//adds users to database
pool.query(
  'SELECT COUNT(*) AS user_count FROM user_data WHERE username = ?',
  [senderUsername],
  (error, results) => {
    if (error) {
      console.error(`Error checking for ${senderUsername} in the database: ${error}`);
      return;
    }

    const userCount = results[0].user_count;

    // If the user is not in the database, insert them
    if (userCount === 0) {
      // Insert the username into the database
      pool.query(
        'INSERT INTO user_data (username) VALUES (?)',
        [senderUsername],
        (insertError) => {
          if (insertError) {
            console.error(`Error inserting ${senderUsername} into the database: ${insertError}`);
          } else {
            console.log(`User ${senderUsername} added to the database.`);
          }
        }
      );
    }
  }
);



//gives people their initial balance
if (commandName === '!gift') {
  pool.query('SELECT points FROM user_data WHERE username = ?',
    [senderUsername], // Use senderUsername here
    (error, results) => {
      if (error) {
        console.error(error);
        return;
      }
  if (results.length <= 0) {
    //userBalance[senderUsername] = 1000; // Initial balance
    insertUsernameIntoDatabase(senderUsername);

    client.say(target, `${senderUsername}, you have been gifted 1000 coins.`);
  } else {
    client.say(target, `${senderUsername}, you already recieved your gift`);
  }})
  
  
  if ( commandName === '!balance'){
  client.say(target, `${senderUsername}, your balance is ${userBalance[senderUsername]}`);
} //username is not defined i need to fix this !!!!



  // If the command is known, let's execute it

  if (commandName === '!spin') {
    const num = randomIndex();
    client.say(target, `You rolled ${num}`);
    console.log(`* Executed ${commandName} command`);
    /*if(num = "Jebaited Jebaited Jebaited"){
      userBalance[username] *= 0.5;
    } else if (num = "Kappa Kappa Kappa") {
      userBalance[username] *= 1.1;
    } else if (num = "DansGame DansGame DansGame"){
      userBalance[username] *= 1.5;
    } else if (num = "MaxLOL MaxLOL MaxLOL"){
      userBalance[username] *= 1.7;
    } else if (num = "TriHard TriHard TriHard"){
      userBalance[username] *= 5;
    } else if (num = "Kreygasm Kreygasm Kreygasm"){
      userBalance[username] *= 10;
    }*/
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
}}