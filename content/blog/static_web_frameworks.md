---
title: Comparing Static Web Frameworks
kind: article
---

Recently I decided to upgrade my personal website to a static website since the all the content I needed was static or could be loaded with javascript. In the process I got to look at some of the different static frameworks out there. I thought I would write a short comparison.

###Why static website generator?
Using a static website generator is not for everyone. If you are running a web application, or dealing with any sort of dynamic content it probably isn't for you.

It is for you if you are running anything where the content is added specifcally by you, or by a group of people. Most common personal sites or blogs can be run on a static website generator. The misconception is in the name. Having a static website generator does not necessarily mean that the website you are building needs each page to be built by hand. Rather we can create resources and rules and generate static content. Much in the same way a dynamic web framework can.

###The search

My search for the ideal static website framework started where it ususally does, <%= link_to("Hacker News search", "http://www.hnsearch.com/") %>. After spending a few minutes looking through the <%= link_to("search results", "http://www.hnsearch.com/search#request/all&q=static+web+generator&start=0") %> I was able to learn of some different types of static web frameworks as well as find out some of the opinions of the knowledgable community.

Eventually my search led to the <%= link_to("nanoc website", "http://nanoc.stoneship.org/") %> where the author left a semi-complete links to a <%= link_to("large number", "http://nanoc.stoneship.org/docs/1-introduction/#similar-projects") %> of open source static website generators. This really became my home base as I could look at the different options. So now I could look at each static framework one by one.

###The examination

Now that I have begin to look at some of these frameworks lets dig in to them to see if we can find some differences. I started by looking at Jekyll.

<%= link_to("Jekyll", "https://github.com/mojombo/jekyll") %> is a popular static web framework written in Ruby by Tom Preston-Warner, the founder of Github. Jekyll uses a sensible set of configuration rules to generate static content. It supports layouts and different types of markup to generate into static html. From the github page it lists: RedCloth, Liquid, Classifier, Maruku, and Pygments all as dependencies. This seems to be the most popular static website generator.

Jekyll works well right out of the box, and does not have a large learning curve to hit the ground running. It is a good system to start with if you are familar and just want to crank something out.

The next ruby library I looked at was <%= link_to("Stasis", "http://stasis.me/") %>. Stasis features a number of features. It provides layouts and rendering so you can build your web page in blocks. It uses "Controllers" to pre-process code as well as support for self-written helpers in the code. It was nice to see that Stasis supports <%= link_to("so many", "http://stasis.me/#more") %> types of markups, thanks to the excellent <%= link_to("tilt gem", "https://github.com/rtomayko/tilt") %>.

The last ruby static website generator I looked at was <%= link_to("Nanoc", "http://nanoc.stoneship.org/") %>. Nanoc aims to not have be a framework that you step into and start right off the bat. The goal of this project is to create an excellent foundation for you to shape a static framework how you want. It supports a <%= link_to("large number", "http://nanoc.stoneship.org/docs/4-basic-concepts/#filters") %> of markups, called "filters". It makes it easy to write additional filters, so adding support for a different markup is simple. You can even write custom filters for binary data. It also supports layouts and rendering if you want to use generic layouts for a blog or a portfolio. It includes helpers that make blogging easier. The site build revolves around its Rules file, which decides how items are routed and filtered before compilation. This allows you to run certain types of items through multiple filters, and change the way that certain items are compiled. For example static assets can be preprocessed by a minimizer and the outputted to a different directory. By default most items are outputted to a directory that is the same as the filename and renamed to index.html. This enables you to have beautiful URLs by default. It also comes with a few extra nice features that help with pre-deployment and deployment. It supports HTML and CSS validating. Also supports deploy configuartion with Rake.

Next I decided to look at some of the python static website generators.

Probably the most mature and popular Python static web page generator is <%= link_to("Hyde", "http://ringce.com/hyde") %>. Hyde is uses a some specific tools out of the box: the django templating language, support for sass and scss for your CSS files and support for breadcrumbs/excerpts and pagination. It takes a lot of concepts and configurations directly from Jekyll.

I also decided to look at <%= link_to("Wok", "https://github.com/mythmon/wok") %>, a project that my friend <%= link_to("Mike Cooper", "https://github.com/mythmon/") %> is working on. He wanted to create an alternative to Hyde, Cyrax, Chisel and  another static web page generator in Python. The main thing missing from these was easy category support which he adds to Wok. Wok uses Jinja2 for templating, YAML for adding attaching data to items. Optionally Wok also supports markdown, docutils and pygments. Other markup support is on the way as well, specifically HAML support. 

###Conclusion

I finally concluded I wanted to use Nanoc because it appears that it is the most flexible option. In the end though you have to remember that all static web frameworks produce the same thing: HTML. This is not a standard web framework debate where you can argue the merits of one framework being faster or slower than another one.
