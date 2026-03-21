# N-Gen Admin Dashboard Template
[N-Gen Admin Dashboard](https://admin-template.ngendesign.com) is a free responsive admin template built with Bootstrap 5 and based on Start Bootstrap's Simple Sidebar template.
![N-Gen Admin Dashboard Preview](https://ngendesign.com/images/templates/ngen-admin-dashboard-v1.png)  

## A Great Starter Template
N-Gen Admin Dashboard Template featuring a responsive layout with a dark & light theme, navigation menu on the left, main content. This template's made to be simple, by trying to stick with Bootstrap 5's framwork with little styling and using HTML 5 semantic tags for easy customization. It also doesn't use any JavaScript libraries making it easier add custom operations. It could be a great starter template for small project or for the `Views` or `temapltes` in small custom application using CodeIgniter 4, CakePHP, or Symfony. It looks great on mobile screen all the way up to desktop monitors. Feel free to use it customize it and use it in your next project.  

**[View Live Preview](https://admin-template.ngendesign.com/)**

![Version](https://img.shields.io/badge/version-1.2.0-blue?style=for-the-badge)
![Static Badge](https://img.shields.io/badge/Status-Active-red?style=for-the-badge)
[![Static Badge](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](https://opensource.org/licenses/MIT)

![GitHub Repo stars](https://img.shields.io/github/stars/n-genesis/ngen-admin-template?style=for-the-badge&logo=github)
[![Static Badge](https://img.shields.io/badge/N--Gen%20Design-1E30F3?style=for-the-badge&label=Created%20By)](https://ngendesign.com)


### Tech Stack
![Static Badge](https://img.shields.io/badge/Bootstrap-5-6f42c1?style=for-the-badge)
![Static Badge](https://img.shields.io/badge/Bootstrap%20Icons-1.13.1-6f42c1?style=for-the-badge)

### Credit To
[![Static Badge](https://img.shields.io/badge/Start%20Bootstrap-Simple%20Sidebar-dd3d31?style=for-the-badge)](https://github.com/startbootstrap/startbootstrap-simple-sidebar)


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


## Contributing
- Click Fork button on top screen
- Create your development branch (`git checkout -b development-name-features`)
- Commit your change (`git commit -am "development name features information"`)
- Push to the branch (`git push origin development-name-features`)
- Make a Pull request

## Changelog
All the notable changes to the template will be listed here. Most change will be style, HTML, or JavaScript updates. If you have any suggestion feel free to suggest them.

## 1.2.0

## - 2026-03-20
### Added
- New **400x400px** avatar images (*feel free to use them*)
- Support for **Dark Mode** in the user settings.

### Changed
- Profile pages Tabs: Projects, Tasks & Teams
- Updated the avatar upload limit to **400x400px** for better quality.
- Refactored the CSS for faster initial page loads.

### Fixed
- Fixed a bug where the "Submit" button stayed disabled after a validation error.

## Customization Notes: 
Here are a few suggestions when making your edits when creating you custom style and design. Everthing is listed should be simple to understand. If you have more in-depth questions about how to make wticks to the layout and base style remember to check out [The Official Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.3/getting-started/introduction/) for more information.

## Template Files
The following directories and files make up template:

```
N-Gen Admin Dashboard
├── assets
│   ├── css
│   │   ├── sider_wrapper.css
│   │   └── stylesheet.css
│   ├── images
│   │   ├── users
│   │   │   ├──
│   │   ├── default-avatar.png
│   │   └── user-avatar.png
│   ├── js
│   │   ├── main.js (Theme toggle, scroll to top, and preloader)
│   │   └── scripts.js (Sidebar toggle)
│   ├── demo
│   │   ├── chart-area-demo.js
│   │   ├── chart-bar-demo.js
│   └── favicon.ico
├── index.html
├── profile.html
├── page.html
└── folder.html
```


### TODO:
- [ ] Script better swip left function
- [ ] Improve dark theme styles
- [ ] Add more example pages
- [ ] Remove blank & unused CSS styles


## Using Simple Server  
**Note:** You need Node.js and npm to be installed on your system. You can download Node.js and follow the instructions on how to do that on [nodejs.org](http://nodejs.org/).

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

## Credits & Attribution

- **[Bootstrap 5](https://getbootstrap.com)** - The world's most popular CSS framework
- **[Bootstrap Icons](https://icons.getbootstrap.com)** - Official Bootstrap icon library
- **[Start Bootstrap - Simple Sidebar](https://github.com/startbootstrap/startbootstrap-simple-sidebar)** - Simple Sidebar is an off canvas sidebar navigation template