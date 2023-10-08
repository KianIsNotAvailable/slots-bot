const {createPool} = require('mysql');

const pool = createPool({
  host: "localhost",
  user: "root",
  password: "5551",
  database: "twitch_bot_game",
  connectionLimit: 10
})
pool.query(`SELECT * FROM user_data`, (err, result, fields) => {
  if(err){
    return console.log(err);
  };
  userBalance = result;
  
});
function insertUsernameIntoDatabase(username) {
pool.query(`UPDATE user_data SET points = points + 1000 WHERE username = ${username}`, (err, result, fields) => {
  if(err){
    return console.log(err);
  };
  userBalance = result;
  
}); 
}
//Insert the username into the database
function insertUsernameIntoDatabase(username) {
  // Your database logic here (e.g., SQL query to insert the username)
}

// Call the function to insert the sender's username
insertUsernameIntoDatabase(senderUsername);


