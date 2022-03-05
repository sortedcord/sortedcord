---
layout: post
title:  How To Get (Almost) Any Paid Microsoft Store App For Free!
description: Here is a tutorial on how you can get almost any paid application on the microsoft store absolutely for free...
date:   2022-02-19 15:01:35 +0530
image:  '/images/microsoft_apps_free/header.webp'
tags:   [Cracking, Microsoft Store]
category: Cracking
---

Although I am primarily a Linux user, often times I do have to use Windows to get most of my work done including working with printers and scanners, school stuff and gaming. While you can always find the program that gets the job done, you’d often run into situations where you’d see a paid Microsoft store app which cannot be substituted for another application or perhaps you really want to play that indie game that you cannot find anywhere else. Do remember that cracking paid software is still quite morally wrong. 

Fortunately, I was able to figure out a way to get almost any app/game on the Microsoft Store for free. The reason why I say almost will be explained later on. I first recommend you give the entire page a read, its not that long as what you are looking for might not be here.

To start, you’d need to get the link of the application that you want. For this blog, I will the taking the example of Formula – Universal Code Editor.Try searching for the application of your choice on google and go to the Microsoft store webpage.

![microsoft_store_view]({{site.baseurl}}/images/microsoft_apps_free/1.webp)

The URL should look similar to this-

```https://www.microsoft.com/en-in/p/formula-universal-code-editor/9nblggh4wb6b?cid=blog&activetab=pivot:overviewtab#```

Once you have obtained the URL, visit the Microsoft Store – Generation Project’s and enter the link of the app you want to get. On entering it, you would receive a table of links. You don’t need to install all of the files. Most of them are app dependencies including .NET Framework and VC Runtimes. Most Windows 10 installations already come with these, however during installation if you get any errors related to missing dependencies then you may need to install these as well. What you are looking for are the files that contain the application name and ending with `.appx` or `.appxbundle`. Some applications may have their encrypted counterparts- `.eappx` or `.eappxbundle`. Normally both the unencrypted and encrypted files should be listed however if only the encrypted files are available, then unfortunately you wouldn’t be able to download the application, hence the “almost” in the article’s title.

![microsoft_store_view]({{site.baseurl}}/images/microsoft_apps_free/2.webp)

Download the .appx or `.appxbundle` file by clicking on the link. Be default, you should be able to open the package with package installer, when you try to install the package, you may get this error. Apparently, windows can detect that you do not have the required license for the application you just manually installed.

![microsoft_store_view]({{site.baseurl}}/images/microsoft_apps_free/3.webp)

In order to trick the system into believing that we do have the required licenses, we would have to generate our own digital signatures. This is where WSAppbak comes in handy.

Download WSAppBak 1.0 – Github

Extract the zip file and open the folder. In the Folder Location bar type cmd and enter to open a command prompt at that folder location.

![microsoft_store_view]({{site.baseurl}}/images/microsoft_apps_free/4.webp)

Keep the prompt open and in another window navigate to “C:\Program Files\WindowsApps\” and then search for the folder that contains your application’s name, If there are multiple folders with the same name, then simple open the one with the largest disk size. Copy the folder path, for me it was

C:\Program Files\WindowsApps\60181VTNORTON.Formula-UniversalCodeEditor_3.1710.371.0_x64__1pw20z75wwb3c

Copy this location and then go back the command prompt. Enter “wsappbak” in the prompt and paste the folder path. For the output path, you can take any location. Preferably set it to a folder in the downloads directory and hit enter.

![microsoft_store_view]({{site.baseurl}}/images/microsoft_apps_free/5.webp)

After this a window will popup asking you to create a password. Click on “none” instead. After a while, you will get this success message-

![microsoft_store_view]({{site.baseurl}}/images/microsoft_apps_free/6.webp)

Close the terminal and then open the output folder. You will see the following files generated-

![microsoft_store_view]({{site.baseurl}}/images/microsoft_apps_free/7.webp)

Before doing anything to these files, uninstall the existing application and then install the new files in the following order:

- `.pfx` (Personal Information Exchange)
- `.cer` (Security Certificate)
- `.appx` (Application Package)

![microsoft_store_view]({{site.baseurl}}/images/microsoft_apps_free/8.webp)

While installing be sure to click on Local Machine on the first page and then leave all the fields as default and keep clicking next until the file has been installed and you get the imported message. Do this for the .pfx file and then .cer file. These are the certificates that windows checks for any Microsoft store application. After this you may proceed to install the appx file and hopefully not run into any errors. The application should install normally and once you run it, you should be able to fully use the application.

![microsoft_store_view]({{site.baseurl}}/images/microsoft_apps_free/9.webp)

![microsoft_store_view]({{site.baseurl}}/images/microsoft_apps_free/10.webp)

## Minecraft Windows 10 For free then?
Not really. Minecraft is a special case here as it needs you to link your Xbox account in-game for it to unlock the full game instead of just the trial, which is why this method won’t work for such games.