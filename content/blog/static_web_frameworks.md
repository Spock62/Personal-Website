---
title: Comparing Static Web Frameworks
kind: article
---

*This post is still a draft*

Recently I decided to upgrade my personal website to a static website since the all the content I needed was static. In the process I got to look at some of the different static frameworks out there. I thought I would write a short comparison.

###Why static website generator?
Using a static website generator for everyone is not for everyone. If you are running a web application, or dealing with any sort of dynamic content it probably isn't for you.

It is for you if you are running anything where the content is added specifcally by you, or by a group of people. The misconception is in the name. Having a static website generator does not necessarily mean that the website you are building is going to be *static*.  

###The search

My search for the ideal static website framework* started where it ususally does, <%= link_to("Hacker News search", "http://www.hnsearch.com/") %>. After spending a few minutes looking through the <%= link_to("search results", "http://www.hnsearch.com/search#request/all&q=static+web+generator&start=0") %> I was able to learn of some different types of static web frameworks as well as find out some of the opinions of the knowledgable community.

Eventually my search led to the <%= link_to("nanoc website", "http://nanoc.stoneship.org/") %> where the author left a semi-complete links to a <%= link_to("large number", "http://nanoc.stoneship.org/docs/1-introduction/#similar-projects") %> of open source static website generators. This really became my home base as I could look at the different options. So now I could look at each static framework one by one.

###The examination

Now that I have begin to look at some of these frameworks lets dig in to them to see if we can find some differences. I started by looking at Jekyll.

<%= link_to("Jekyll", "https://github.com/mojombo/jekyll") %> is a popular static web framework written in Ruby by Tom Preston-Warner, the founder of Github.

I noticed that Jekyll managed documents by including <%= link_to("YAML", "https://github.com/mojombo/jekyll/wiki/yaml-front-matter") %> at the front of the file. This helps when adding custom variables to your documents you want to use later. This is the same in Nanoc and it is a feature that is very nice when working out with different standard docs. I ended up including a lot of different data in the YAML part of the file then referencing it the compilation. 

Probably the most mature Python static web page generator is <%= link_to("Hyde", "http://ringce.com/hyde") %>. Hyde is uses a some specific tools out of the box: the django templating language, support for sass and scss for your CSS files and support for breadcrumbs/excerpts and pagination.

I also decided to look at <%= link_to("Wok", "https://github.com/mythmon/wok") %>, a project that my friend Mike Cooper is working on. He wanted to create an alternative to Hyde another static web page generator in Python. 

###Conclusion

I finally concluded I wanted to use Nanoc because it appears that it is the most extendable option. In the end though you have to remember that all static web frameworks produce the same thing: HTML. This is not a standard web framework debate where you can argue the merits of one framework being faster or slower than another oen
