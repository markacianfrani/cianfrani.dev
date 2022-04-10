---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
  import Cool from '../../components/Author.astro'
title: Visual Regression Testing in Figma
publishDate: 10 April 2022
name: Mark Anthony Cianfani
value: 128
slug: 'visual-regression-testing-in-figma'
description: Solutions for visual regression testing in Figma
---


> Full disclosure: This article mentions a plugin that I wrote myself.

How can we actually manage design systems at scale? Have you ever made (what you thought was) a tiny change and ended up accidentally breaking some other part of your design library? As a developer, I've made an entire career out of playing this game of whack-a-mole with CSS. "Sure, let me just change the value of this `list-background` style. Surely, nothing else will break." What happens when you forget that `list-background` is also being used in a table component?

![A diagram showing the names of common components and how they connect to each other](/assets/blog/component-dependencies.jpg)

This is the tricky part about Atomic Design. If you change an atom, you can unintentionally destroy your entire universe. Imagine you have an icon component that gets used inside of a tab component. Your tab component might get used inside of a navbar component. If you wanted to change some property of your icon, you have the risk of affecting two other components.

## Confidence

It all comes down to confidence. To be able to change anything, you need to be confident that you won’t break anything as a side effect. One way of gaining confidence is by manual review. Any time there is a change, you go through each and every page, component, layer and inspect everything yourself to make sure nothing changed that you didn’t expect to change.

![A graph showing the time it takes to change a component on the x axis over the number of components on the y axis increasing](/assets/blog/change-time-over-components.jpg)

The problem with manual review is that it takes a lot of time. This number only grows as your design system scales. The more components and pages you have, the longer it takes to manually review the system. The longer it takes to manually review the system, the less likely you are to make  changes. So when you’re in the trenches and need to make the decision to change something, you might remember the massive amount of time it will take to manually review everything by hand and decide that its just not worth the time.

Instead of making a change, you might create a new style, a new component, a new variant until one day you wake up and you have 30 button variants and you wonder where your life went wrong. Design debt is real. Design Systems **must** be malleable. A Design System that can't change is dead in the water.

## What is visual regression testing?

Developers have the same problem and have come up with a pretty good solution—visual regression testing. Visual regression testing is just a fancy word for taking two screenshots and comparing the results. You start by taking a baseline “golden master” snaphot of your project. Once you have a baseline, you can then work and make some changes. After making some changes, you take another set of comparison snapshots and compare the two  for any visual differences. If the changes are what you expected, you can approve them and your comparision snapshots then become your baseline and you start all over again.

The power here is that computers are really good and really fast at spotting differences.

* Nucleus uses [backstop](https://blog.nucleus.design/visual-regression-testing/).
* On [AstroUXDS](https://www.astrouxds.com), we also use backstop paired with storybook.
* [Adobe's Spectrum CSS also uses backstop](https://github.com/adobe/spectrum-css#testing)
* [And IBM's Carbon uses Percy and a ridiculous CI/CD pipeline](https://medium.com/carbondesign/automating-a-design-system-69bd2414f75)

## What about Figma?

So if developers have all these cool shiny toys, why can't designers also have them? After all, *visual* regressions should be in the domain of design, not development. The Figma story for visual regression testing is not as robust (yet) but there are a few options.

### Figma's Native Merge UI

When you review a branch merge in Figma, you actually get some of this right out of the box. This might be all your team needs, but I've personally found it to be a little clunky and not as feature complete.


### [VRT (Plugin)](https://www.figma.com/community/plugin/1093676352744767137)

> FULL DISCLOSURE: I am the author of this plugin. If you run into any issues or have any feature requests, reach out to me on [twitter](https://twitter.com/markacianfrani)!

![Screenshot of the VRT Figma plugin](/assets/blog/figma-vrt-screen.png)
VRT gives you an experience similar to using a tool like Backstop. It can take snapshots across all of your pages and show you differences across the entire design file.

 I developed this plugin to scratch my own itch and have been dogfooding it for the last few months as we've been dipping our toes in the Design Tokens water. My number one use case has been to find out where XYZ style is being used across an entire library file. Let's say I wanted to see where a `list-background` style is being used. I would take a baseline, change `list-background` to some obnoxious level of red, take a comparision snapshot, and then run the comparision. The result is a list of every page that had visually changed as a result of changing that style.

### [Visual Difference (Plugin)](https://www.figma.com/community/plugin/1077953882260191737/Visual-Difference)

![Screenshot of the Visual Difference plugin](/assets/blog/visual-difference-screenshot.png)

Visual Difference is a more fine-grained option for testing individual components or layers, made by the wonderful people at EightShapes LLC. It gives you a very useful diff overlay on the actual layer itself and also features an awesome 'party mode'.

## Embrace Regressions

Tools and tests won't prevent you from introducing regressions. Regressions are inevitable. Even if you have a clever, well thought-out naming convention and impeccable documentation today, nothing is immune to entropy. Instead, ideas like visual regression testing add confidence to your design process. Confidence allows you to try new things and change what's not working. Confidence allows you to keep moving forward without having to take two steps back.
