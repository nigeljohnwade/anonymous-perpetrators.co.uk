---
title: 'Hello World...'
author: 'Nigel Wade'
date: '2025-07-11'
hero_image: '/vapor_grid.png'
category: 'Development'
---

## Markdown blog with Next.js

I have spent the last few days intermittently learning how to make a blog for this website using Markdown files as the source for each post.
The website itself is made with Next.js and I use it in part as a learning exercise as I am a ReactJS developer in my day job.
Ingesting data to create static files has been my main focus recently.
I had the site initially running by querying a Google Sheet for the data, and it was awfully slow.

I have been through the process of converting that data (tracks and devices) into `JSON` files so that I have a static build that is much faster.
This was fine for the data sheet style of those sections, but I felt I wanted to add something that was a bit more freeform.
I have used Markdown in ReactJS before, so this was an obvious choice.
Also, Markdown itself works as a source for a wide variety of software including Obsidian, which I am intending to use as an editor for the files once I have the code working.

### Source material

[How To Create a Markdown Blog With Next.js](https://tina.io/blog/simple-markdown-blog-nextjs) was where I started.
I had bookmarked this some time ago and eventually got around to following it through. At the time I had just done the `JSON` data import and this looked like it had all the right aspects that I thought I would need.

### Experience

I didn't use the recommended starting point for the tutorial, I just copied the `[slug].js` example and adjusted it to my needs.
I also didn't check which versions of Next.js it was using (checking back the tutorial was updated for Next.js 14, which is what I am using).
The surrounding text in the tutorial was sufficient for me to understand what changes I needed to make in order for it to work with my project setup.

Most of my time coding is on the UI layer of projects, and I am always a bit unsure about handling files. 
For the `JSON` I used one file to hold all the data, 
but for this I was definitely going to need to have each blog post in its own file and the tutorial covered this approach.

I have used the `react-markdown` library in other projects so I was familiar with that, but I was not aware of `gray-matter`. which parses metadata in the Markdown files (not specifically, it can do other formats). 
This was not something I had expected to do but once I found out how to do it I can see a lot of ways to utilise this feature. 

For dealing with the files system the `glob` package was used. 
This makes it very easy to deal with files, just specifying a `glob` pattern and getting back all the files.
I had a bit of difficulty with it though, the code copied over from the tutorial didn't work initially, but when running in debug mode it worked fine.
This turned to be due to synchronicity, I had to add some optional chaining to get it to work correctly.
I will have to dive deeper in to this at a later date and get a better understanding of the lifecycle of the page compilation process.

One problem that came up in finessing the solution to my own needs was one that I would not have considered.
I am used to doing a lot of client side rendering, and whilst NextJS feels a lot like client-side it isn't.
I initially used `new Date(blog.date).toLocaleString()` so that the date would appear in whatever locale format the client was using.
On my Windows machine running in dev this was fine, but on my Mac it threw up an error about hydration values being different to rendered values.
This will require further investigation, for now everyone is just getting British formatted dates.

After the `[slug].js` file which is the template for each individual entry there was also the `index.js` file that created a list of links to all the individual blog files.
This was even easier than the `[slug].js` as I was now fairly familiar with all the new packages.
I decided against the nicety of having a blog list item component and just went with an `HTML` list in the main body of the file.
I might add to this later but for the moment it gets the complicated part of the job done, I already know how to do all the frills.


### Wrap up

Altogether a very satisfying experience, got myself a Markdown blog that can be statically generated. 
Expanded my existing knowledge of using NextJS to make a static site and learned about some useful packages for future development.
I am already thinking about how I can redo the tracks and devices pages using Markdown rather than JSON to allow for easier editing and richer content.
