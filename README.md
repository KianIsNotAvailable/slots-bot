# slots-bot
This is a Twitch chat bot built using Node.js and MySQL, designed to allow chat users to play a slots minigame in the chat.
With this bot you can use commands to gamble your points and Check your points balance. When you get 3 of the same emote after doing !spin. 
Your points will increase depending on the odds. If you dont get 3 of the same emote, you lose the points you gambled.
![The bot in action](.\assets\screenshot.png)


# Prerequisites
## Node.js installed on your system.
- You can install Node.js here - https://nodejs.org/en/download
  
## A MySQL database server.
- To create a database in MySQL named "twitch_bot_game," you can use the following SQL command. Make sure you have the necessary privileges to create a database on your MySQL server.
```sql
   CREATE DATABASE twitch_bot_game;
```
  You can run this command in a MySQL client or a tool like phpMyAdmin. This will create a new database with the name "twitch_bot_game" in your MySQL server.
- To create the table
```sql
USE twitch_bot_game;

CREATE TABLE user_data (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    points INT DEFAULT 1000
);
```
This will create the table that will store the user data such as the username and their corresponding points.
Users will automatically be added to the table when they type in the twitch chat will the bot is connected and they will start with 1000 points.

## A Twitch account (you will need the username and OAuth token).
- to find your twitch oAuth Token use the following link: https://twitchapps.com/tmi/

  # Installation
  1. Clone this repository to your local machine:
  ```bash
    git clone https://github.com/KianIsNotAvailable/slots-bot.git
  ```
  2. Navigate to the bot's directory:
  ```bash
  cd slots-bot
  ```
  3. Install the required Node.js packages:
  ```bash
  npm install
  ```

  #Configuration
  To configure your Twitch bot, navigate to "Define configuration options" in app.js
```JavaScript
// Define configuration options
const opts = {
  identity: {
    username: 'username',
    password: 'oauth_token'
  },
  channels: [
`  'channel'
  ]
};
//sql database
const pool = createPool({
  host: "localhost",
  user: "username",
  password: "password",
  database: "twitch_bot_game",
  connectionLimit: 10
})
```
In the username replace 'username' with your twitch account username.
In the password replace 'oauth_token' with your oAuth token you got from this link: https://twitchapps.com/tmi/
In channels replace 'channel' with the channel you want to bot to run in.

# Usage
To run the bot, enter the following into the terminal:

```bash
node bot.js
```
Your bot is now active in your Twitch channel's chat.

## Commands
Here are the available commands
!spin - do !spin followed by a number. The number is the amount of points you are gambling with. Without a number you can't spin.
!balance - will show you how  many points you have.
!gift - will give users with 0 points 1000 points.
!odds - will show the multiplier of each twitch emote.


