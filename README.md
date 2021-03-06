**NOTICE**

BotCord is specifically designed for bots; it cannot be used for user accounts.
We also assume that your bot has a privacy policy, and you will follow the privacy policy of your bot.
The BotCord developers take no resposibility for the actions executed through BotCord.
Furthermore, this is a fork of LiveBot, which allows you to take more *interesting* actions on the server your bot is in. More soon to come.

---

An app that allows you to be inside a bot!

At the moment, BotCord is still in alpha. Installation instructions can be found below.

## General

BotCord is a program built with Electron and Discord.js that will allow you to control your bot from a client resembling the official one for users. You are able to view messages in channels, send messages, interact with people and see what is going on in the servers your bot is in.

BotCord has been built so that the style and flow is similar to discord, and while it is not exact, it is pretty close. It is also built from scratch using no frameworks, just straight HTML, CSS, and JavaScript. Due to this, and having a very small development team, additional features may take a while to be added. The point is to built from scratch, we know very well that it's not the fastest way to make something like this. However, BotCord is slowly being filled with cool exclusive features like the pull-up user settings menu, the soon to come embed builder, native support for scripts, and more!

## Installation
### Release (recommended)
There is not an official EXE release for this project yet, but there will be hopefully soon!
### From Source (unstable)

BotCord requires the [Node.js] JavaScript runtime to run.

You can download the source with [Git] (and get updates easily) or you can download as a zipped (compressed) file from GitHub. If you wish to download as a zip file, GitHub provides a big green "Code" button which you can press to download the file.

If you want to download with Git, a bash command to do so is found below:

```sh
# with HTTP
git clone "https://github.com/L5050/BotCord"
```

After cloning with Git, Start the program with `npm start`.

## Features
### Token switcher (User menu)
This box is how you log into a profile after already logging in. To log into a token by default, put it into this box then press the save button. Otherwise if you are just logging into a token just for a look, input the token into the box then press `enter`.

The token changer used to be at the top of the main screen, but has moved to the user options menu.

<img src='https://i.imgur.com/1rnEpQD.png' alt='Token switcher preview' style='border-radius: 10px;'>

### Barry
Barry is the BotCord version of discord's Clyde. Except Barry has some fun commands! Just use the prefix `/` and to see the commands write `/help`. Only you can see what barry says, so don't worry about interfering with any conversations. <br>
<img src='https://i.imgur.com/PGInuit.png' alt="Barry's help message" style='border-radius: 10px;'>

### Profile card
The profile card is able to tell you the username, the avatar image, the discriminator, and something discord does not have. The profile card will tell you if the account you are signed into is a bot or a user. This can be handy if you are not quite sure. As you can no longer login with a user account it's just legacy code and for the looks. This card also has the pull up menu on the right side, so you can get to all the settings. <br>

<img src='https://i.imgur.com/79NacEx.png' alt='Profile card preview' style='border-radius: 10px;'>

### Generate Invite

BotCord gives you the ability to generate an invite quickly from within the app, instead of having to go to your bot's application page in the Discord Developer portal. It can be found in the user settings page in the pull up menu. Just toggle all the permissions you'd like to give the invite (by default, everything recommended to use BotCord's features is enabled).

<img src='https://i.imgur.com/ggkyQtn.png' alt='Invite generator preview' style='border-radius: 10px;'>

[node.js]: https://nodejs.org
[git]: https://git-scm.com
