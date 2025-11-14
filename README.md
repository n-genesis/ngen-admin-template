# N-Gen Admin Dashboard Template

**Version:** 1.0.0 (Yea!)

[N-Gen Admin Dashboard](https://ngendesign.com/templates/ngen-admin-dashboard/) is a free responsive admin template built with Bootstrap 5 and based on Start Bootstrap's Simple Sidebar template.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.8-563d7c.svg)](https://getbootstrap.com)

## Features

* Bootstrap 5 - Latest version with all modern utilities
* Responsive - Mobile-optimized layouts across all devices
* Sidebar Menu - Off canvas navigation on smaller screen sizes.
* Dark/Light Mode - Seamless theme switching with localStorage persistence
* Page loader/unloader
* Mobile Features
    * Swipe left to open sidebar
* Simple Starter Pages
    * Dashboard (Example Dashboard page)
    * Profile (Example user profile page)
    * Page (Blank page)
    * Folder (Example Folder/Directory page)

## Preview

![N-Gen Admin Dashboard Preview](https://ngendesign.com/images/templates/ngen-admin-dashboard.png) 

### Template Files

The following directories and files make up the main template:

```
N-Gen Admin Dashboard
├── assets
│   ├── css
│   │   ├── sider_wrapper.css
│   │   └── stylesheet.css
│   ├── images
│   │   ├── default-avatar.png
│   │   └── user-avatar.png
│   ├── js
│   │   ├── main.js (Theme toggle, scroll to top, and preloader)
│   │   └── scripts.js (Sidebar toggle)
│   ├── demo
│   │   ├── chart-area-demo.js
│   │   ├── chart-bar-demo.js
│   │   ├── chart-pie-demo.js
│   └── favicon.ico
├── index.html
├── profile.html
├── page.html
└── folder.html
```

## Using Simple Server

**Note:** You need Node.js and npm to be installed on your system. You can download Node.js and follow the instructions on how to do that on [nodejs.org](http://nodejs.org/);

Open your terminal under the project root run the following commands:

```
# Install dependencies
npm install
# Start server
npm run start-server
```

Your browser should open automatically but if not, you can visit http://localhost:3000/ and you should see the index.html page.

### Changing address and port
You can change the hostname and port in package.json:
```
"serverjs": {
    "url": "http://localhost",
    "port": 3000
}
```

## Bugs and Issues

Have a bug or an issue with this template? [Open a new issue](#) here on GitHub or send me an message on my [website](https://ngendesign.com.contact.html).



## License
This project is licensed under the **MIT License** - see the [LICENSE.md](LICENSE.md) file for details.

```
Copyright (c) 2025 N-Gen Design

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```


### TODO:
- [ ] Script better swip left function  
- [ ] Add more example pages


## Credits & Attribution

- **[Bootstrap 5](https://getbootstrap.com)** - The world's most popular CSS framework
- **[Bootstrap Icons](https://icons.getbootstrap.com)** - Official Bootstrap icon library
- **[Start Bootstrap - Simple Sidebar](https://github.com/startbootstrap/startbootstrap-simple-sidebar)** - Simple Sidebar is an off canvas sidebar navigation template