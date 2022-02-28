
"use strict";

// Selecting new guild
let guildSelect = (g, img) => {
    // Update the selected guild
    selectedGuild = g;

    //document.getElementById('guildIndicator').style.display = 'block';
    if (oldimg) oldimg.classList.remove('selectedGuild');
    img.classList.add('selectedGuild');

    // this should be done another way
    document.getElementById('guildIndicator').style.marginTop = `${img.offsetTop - 64}px`;
    document.getElementById('guildIndicator').style.display = 'block';

    oldimg = img;

    // Make the text display 'block' (default) incase switching from DMs
    document.getElementById("members-text").style.display = "block";
    document.getElementById("guildName").classList.remove("directMsg");
    // Set the count to begin
    document.getElementById('members-count').innerText = g.memberCount;

    // Update guild profile name
    let name = g.name;
    document.getElementById('guildName').innerText = name;

    // Update guild profile image
    let icon = g.iconURL();
    if (!icon) {
        icon = 'resources/images/default.png';
    }
    document.getElementById('guildImg').src = icon;

    // Clear the message list
    let messages = document.getElementById('message-list');
    while (messages.firstChild) {
        messages.removeChild(messages.firstChild);
    }

    // Create the member list
    addMemberList(g);

    // Create the channels
    createChannels(g);
};
