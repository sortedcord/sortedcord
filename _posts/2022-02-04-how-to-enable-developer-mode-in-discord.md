---
layout: post
title:  How To Enable Inspect Element Tab In The Discord App 2022
description: This blog tutorial will tell you how you can enable it once again. This tutorial is mainly for windows users...
date:   2022-02-04 15:01:35 +0530
image:  '/images/discord_developer_tools/thumbnail.webp'
tags:   [Discord, Tutorial]
category: Tutorial
---

Opening Developer tools straight from the application used to be quite simple, but recently discord has made some changes to their native application which restricts the user from opening it. This blog tutorial will tell you how you can enable it once again. This tutorial is mainly for windows users.

First step is to open up your roaming folder in the appdata directory which you can easily do so by typing `%appdata%` in the run box.

![run box]({{site.baseurl}}/images/discord_developer_tools/1.webp)

Clicking Ok, will open up the roaming folder where you need to browse to the discord folder and open it. In the discord folder, you need to search for settings.json file. You would need to open this up in your text editor (even notepad will do) but I’ll be using sublime for this.

This is probably what your file looks like depending on what setting you have-

![run box]({{site.baseurl}}/images/discord_developer_tools/2.webp)

you would need to add a comma the second last bracket closing tag and add the following lines-

```"DANGEROUS_ENABLE_DEVTOOLS_ONLY_ENABLE_IF_YOU_KNOW_WHAT_YOURE_DOING": true```

Your file should now look similar to this.

![run box]({{site.baseurl}}/images/discord_developer_tools/3.webp)

Save and close the editor and then restart discord.

![run box]({{site.baseurl}}/images/discord_developer_tools/4.webp)

Once your discord opens up again, pressing Control+Shift+I should work once again and open up the developer tools tab.

![run box]({{site.baseurl}}/images/discord_developer_tools/5.webp)

Now you can easily doctor your text screenshots all you want.