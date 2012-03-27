---
title: Comparing web chat clients
kind: article
---

I have been working the last two month on <%= link_to("Subway", "https://github.com/thedjpetersen/subway") %> an IRC web client. During this time I have discovered some of the other options that exist. I thought I would go ahead and share them with you.

## Alice

<img src="http://usealice.org/image/screenshots/new/3.png" style="width: 700px" />

<%= link_to("Alice", "http://www.usealice.org/") %> is probably the most
mature option in the bunch. It runs as a server in the backend which
handles the IRC connections and logs messages so you can see them when
you log back in. It persists your connection to the server as well.

## Holla

<img
src="https://lh4.googleusercontent.com/_IH1OempnqUc/TZF1gMnidmI/AAAAAAAABKE/b9rp9RdtA3o/s800/Screen%20shot%202011-03-29%20at%2018.58.12.png" style="width: 700px"/>

<%= link_to("Holla", "https://github.com/maccman/holla") %> is another
open source application written in Ruby. It serves as both the server
and the client. The logging is done in Redis, a data store system
optimized for speed.

## Candy

<img
src="http://candy-chat.github.com/candy/public/images/screenshot.png" style="width: 700px"/>

<%= link_to("Candy", "http://candy-chat.github.com/candy/") %> is another client server option written in fully in javascript
built on top of XMPP for communities to chat with each other. I didn't
see whether or not logging/search was built in.

## QWebIRC

<%= link_to("QWebIRC", "http://qwebirc.org/") %> is a online IRC client that has been around for more than 4
years. It was designed for use in on the quake network. 

