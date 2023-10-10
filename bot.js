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








function spin(senderUsername, points, pool, client, target){
  pool.query('SELECT points FROM user_data WHERE username = ?',
  [senderUsername],
   (err, result, fields) => {
   if(err){
     return console.log(err);
   } 
   else if(points > result[0].points){
  client.say(target,'You do not have enough points for that.');
  return
} else if (isNaN(points) || points === 0 || points === null || points === NaN || points === ' ') {
  client.say(target, `You cant gamble with nothing`)
  return
} else {
  const num = randomIndex();
  client.say(target, `You rolled ${num}`);

  if(num === "Jebaited Jebaited Jebaited"){
    pool.query(`UPDATE user_data SET points = points + ${points * 0.5} WHERE username = ?`, 
    [senderUsername],
    (err, result, fields) => {
    if(err){
      return console.log(err);
    }});

  } else if (num === "Kappa Kappa Kappa") {
    pool.query(`UPDATE user_data SET points = points + ${points * 1.1} WHERE username = ?`, 
    [senderUsername],
    (err, result, fields) => {
    if(err){
      return console.log(err);
    }});
    
  } else if (num === "DansGame DansGame DansGame"){
    pool.query(`UPDATE user_data SET points = points + ${points * 1.5} WHERE username = ?`, 
    [senderUsername],
    (err, result, fields) => {
    if(err){
      return console.log(err);
    }});

    
  } else if (num === "MaxLOL MaxLOL MaxLOL"){
    pool.query(`UPDATE user_data SET points = points + ${points * 1.7} WHERE username = ?`, 
    [senderUsername],
    (err, result, fields) => {
    if(err){
      return console.log(err);
    }});

    
  } else if (num === "TriHard TriHard TriHard"){
    pool.query(`UPDATE user_data SET points = points + ${points * 5} WHERE username = ?`, 
    [senderUsername],
    (err, result, fields) => {
    if(err){
      return console.log(err);
    }});
    
  } else if (num === "Kreygasm Kreygasm Kreygasm"){
    pool.query(`UPDATE user_data SET points = points + ${points * 10} WHERE username = ?`, 
    [senderUsername],
    (err, result, fields) => {
    if(err){
      return console.log(err);
    }});
  } else {
    pool.query(`UPDATE user_data SET points = points - ${points} WHERE username = ?`, 
    [senderUsername],
    (err, result, fields) => {
    if(err){
      return console.log(err);
    }});
  }
}
})}
 // If the command is known, let's execute it

// Gives people their initial balance
if (commandName === '!gift') {
  pool.query('SELECT points FROM user_data WHERE username = ?', [senderUsername], (err, result, fields) => {
    if (err) {
      return console.log(err);
    }
    
  
  let balance = result[0].points;
  if(balance === 0){
  pool.query('UPDATE user_data SET points = points + 1000 WHERE username = ?', [senderUsername], (err, result, fields) => {
    if (err) {
      return console.log(err);
    }
    client.say(target, `${senderUsername}, you have been gifted 1000 points.`);
    console.log(`* Executed ${commandName} command`);
  })} else {
  client.say(target, `${senderUsername}, You already had your gift. You can have another when you run out of points`);
}
})
} else if (commandName === '!balance') {
  // Check balance
  console.log(`* Executed ${commandName} command`);
  pool.query('SELECT points FROM user_data WHERE username = ?', [senderUsername], (err, result, fields) => {
    if (err) {
      return console.log(err);
    }
    if (result.length > 0) {
      client.say(target, `${senderUsername}, your balance is ${result[0].points} points.`);
    } else {
      client.say(target, `${senderUsername}, you have no points.`);
    }
  });
} else if (commandName === '!spin') {
  // Spin the slot machine
  const points = parseInt(msg.split(' ')[1], 10);
  spin(senderUsername, points, pool, client, target);
  console.log(`* Executed ${commandName} command`);
} else if (commandName === '!odds') {
  // Check multipliers
  console.log(`* Executed ${commandName} command`);
  client.say(target, 'Odds: Jebaited = 0.5x Kappa = 1.1x DansGame = 1.5x MaxLOL = 1.7x TriHard = 5x Kreygasm = 10x');
} else if (commandName === '!reset'){
pool.query(`UPDATE user_data SET points = 1000 WHERE username = ?`, [senderUsername],
 (err, result, fields) => {
  if (err) {
    return console.log(err);
  }})
} else {
  console.log(`* Unknown command ${commandName}`);
}
// Function called when the "spin" command is issued
}
function randomIndex(){
  var index = Math.floor(Math.random() * (combinations.length) + 1);
  console.log(combinations[index])
  return combinations[index];
}


// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}