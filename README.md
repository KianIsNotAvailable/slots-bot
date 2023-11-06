# slots-bot
This is a Twitch chat bot built using Node.js and MySQL, designed to allow chat users to play a slots minigame in the chat.
With this bot you can use commands to gamble your points and Check your points balance. When you get 3 of the same emote after doing !spin. 
Your points will increase depending on the odds. If you dont get 3 of the same emote, you lose the points you gambled.
# Prerequisites
## Node.js installed on your system.
- You can install Node.js here - https://nodejs.org/en/download
  
## A MySQL database server.
- To create a database in MySQL named "twitch_bot_game," you can use the following SQL command. Make sure you have the necessary privileges to create a database on your MySQL server.
  CREATE DATABASE twitch_bot_game;
  You can run this command in a MySQL client or a tool like phpMyAdmin. This will create a new database with the name "twitch_bot_game" in your MySQL server.
- To create the table
USE twitch_bot_game;

CREATE TABLE user_data (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    points INT DEFAULT 1000
);
This will create the table that will store the user data such as the username and corresponding points.
Users will automatically be added to the table when they type in the twitch chat will the bot is connected and they will start with 1000 points.

## A Twitch account (you will need the username and OAuth token).
- to find your twitch oAuth Token use the following link: https://twitchapps.com/tmi/

  # Installation
  1. Clone this repository to your local machine:
     


