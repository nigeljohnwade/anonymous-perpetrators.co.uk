---
title: 'Refactoring'
author: 'Nigel Wade'
date: '2025-10-20'
category: 'Development'
---

Things have been getting a bit messy behind the scenes so I decided it was time to refactor some things, CSS and ReactJS components in particular.
I had been reusing the Card to create page body content and with the addition of markdown files for the majority of the content it was becoming more of a pain to try and work around it so I took the time to make a better wrapper for the content and leave the card to do what it was originally intended.
I also noticed a layout problem when the viewport is under 960px where a media query kicks in.

## PageBody component

There is a large amount of repetition of inline CSS leftover from when I was just toying around with the layout.
All of this has now been encapsulated in the `PageBody` component.
It is a simple div with two classes.
One class that contains the CSS that is the result of all of that toying around and one class that brings in the custom font CSS.
I originally envisioned using the `Typography` component (which applies the custom font CSS) for all the text content but using the `ReactMarkdown` package to load markdown files requires me to also have a set of style for the HTML it renders.

This makes things a bit easier to manage but it is only the first step.
Creating the markdown blog introduced CSS for styling the `react-markdown` block and this CSS is currently copied into the device and track components.
The next step will be to consolidate these into their own component to further reduce repetition.

## Layout shift below 960px

Investigation of the layout shift when the 960px media query kicks in was a bit tricky. 
I knew it must be caused by changing the `--gutter` custom property as that is pretty much all that happens in the med query apart from changing the `h1` font size but I had difficulty working ut exactly what it was.
Eventually worked through everything and the `header` had a negative margin equal to the `--gutter` custom property but not dependent on the property itself.
A reasonably simple fix but it did require wrapping the `--gutter` in a `calc()` to multiply it by -1.
Getting the negative value of a numerical custom property wasn't something I had thought about before but the `calc()` did the trick and is a better solution than creating a second custom property for the negative margin. 

## Date rendering problem

A niggling little problem that I have in development is that when using my Mac the Next.js server gives american dates, whilst the client gives British (my actual locale).
I still don't understand why this is but I have discovered the `suppressHydrationWarning` attribute which I can add to date rendering components and the warning goes away.
I am not sure that the hydration warning for dates is of any real use so I feel that ignoring it is fine.
