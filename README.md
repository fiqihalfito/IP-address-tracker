# Frontend Mentor - IP address tracker solution

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Screenshot

- Desktop
![](./screenshots/desktop.png)
- Mobile
![](./screenshots/mobile.png)

### Links

- Solution URL: [click here](https://github.com/fiqihalfito/IP-address-tracker)
- Live Site URL: [click here](https://ip-address-tracker-fiqih.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - For styles


### What I learned

Firstly - Using Fetch API in Client Component. I thought it will be a bug because Next.js warned not to use Fetch API in Client Component. Otherwise, use third-party libraries such as SWR or React Query.

Secondly - When I build the app, it showed warning that shows "window is not defined". I found out that Next.js is Server side rendering, meanwhile Leaflet Map can render when all elements are loaded. So We have to use Lazy Loading Next.js. it makes Map Component delays the rendering until all element is sent into client, so that Map can be rendered properly. 


## Author

- Github - [fiqihalfito](https://www.github.com/fiqihalfito)
- Instagram - [@fiqihalfito](https://www.instagram.com/fiqihalfito)
- LinkedIn - [fiqih-alfito](https://www.linkedin.com/in/fiqih-alfito)
