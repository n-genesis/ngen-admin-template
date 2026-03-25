# N-Gen Admin Dashboard Template
A sleek and fully responsive Free **Bootstrap 5** Admin Dashboard Template with swipe left event on mobile screens to display the offcanvas. It's a great starter-kit for developing a modern, user-friendly, and customizable feature-rich front-end for your web applications.

![N-Gen Admin Dashboard Preview](https://ngendesign.com/templates/ngen-admin-dashboard-v4.png)

## A Great Starter Template
This template features a responsive layout, dark & light theme, offcanvas on mobile devices, and a wrapper `#main-content` element to keep your content orginized. It's made to be simple by using minimal custom CSS and instead extending Bootstrap's framewrok. It also uses HTML5 tags to help keep your page organized and makes its extremely easy to customization for your own project. To give you the ability to add you own event triggers and mechanics, it doesn't use any large JavaScript libraries to prevent cluttering your scripts and locking you into using premade functions. All hands down it's a simple starter template for `Views` or `temaplates` in small application using frameworks like; CodeIgniter 4, CakePHP, or Symfony. It looks great on mobile screen all the way up to desktop monitors. Feel free to customize it and use it in your next awesome application.  

**[View Live Preview](https://admin-template.ngendesign.com/)**

![Version](https://img.shields.io/badge/version-1.5.0-blue?style=for-the-badge)
![Static Badge](https://img.shields.io/badge/Status-Active-red?style=for-the-badge)
[![Static Badge](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](https://opensource.org/licenses/MIT)

![GitHub Repo stars](https://img.shields.io/github/stars/n-genesis/ngen-admin-template?style=for-the-badge&logo=github)
[![Static Badge](https://img.shields.io/badge/N--Gen%20Design-1E30F3?style=for-the-badge&label=Created%20By)](https://ngendesign.com)


### Tech Stack
![Static Badge](https://img.shields.io/badge/Bootstrap-5-6f42c1?style=for-the-badge)
![Static Badge](https://img.shields.io/badge/Bootstrap%20Icons-1.13.1-6f42c1?style=for-the-badge)

### Credit To
[![Static Badge](https://img.shields.io/badge/Start%20Bootstrap-Simple%20Sidebar-dd3d31?style=for-the-badge)](https://github.com/startbootstrap/startbootstrap-simple-sidebar)


## ✨ New Features
- Bootstrap 5 - Latest version with all modern utilities
- Responsive - Mobile-optimized layouts across all devices
- Sidebar Menu - Off canvas navigation on smaller screen sizes.
    - (Uncomment code in `scripts.js Line: 18-20` to make the offcanvas persist between refreshes)
- Dark/Light Mode - Theme switching with localStorage persistence (must uncomment in script)
- Page loader/unloader
- Mobile Features
    - Touch-swipe event listener for the offcanvas on mobile devices
- Chart.js (For dashboard example)

### 📝 Template Pages 
- Dashboard (Example Dashboard page)
- Profile (Example user profile page)
- Page (Blank page)
- Folder (Example Folder/Directory page)
- Authentication Page
    - Login, rigister, and password reset
- Error Pages
    - 401, 404, and 500

## Changelog
All the notable changes to the template will be listed here. Most change will be style, HTML, or JavaScript updates. If you have any suggestion feel free to suggest them.

## 1.5.0

### Added
- New **400x400px** user avatar images (*feel free to use them*)
- Top Right dropdown menu header (for username or account info)
- Avatar tooltips

### Changed
- Profile pages Tabs: Projects, Tasks & Teams
- Refactored the CSS and combined the offcanvas style into one stylesheet
- Pages to use HTML5 tags for semantic structure
- Updated Task Item Card styles

### 📋 TODO:
- [ ] Script better touch-swipe left function
- [ ] Improve dark theme styles
- [x] Add more example pages
- [x] Remove blank & unused CSS styles
- [ ] vertically align options for Task Cards

## 📂 Project Structure

```text
.
├──📝 README.md                         # Project documentation
├── 📂 assets/                          # images, stylesheets & Javascript files
│   ├── 📂 css/
│   │   ├── sider_wrapper.css
│   │   └── stylesheet.css
│   ├── 📂 images
│   │   ├── 📂 users
│   │   │   ├── 📂 cartoon-avatars
│   │   │   ├── 📂 640x640
│   │   │   └── misc. pics
│   │   ├── misc. pics
│   │   └── user.png
│   ├── 📂 js
│   │   ├── 📄 main.js (Theme toggle, scroll to top, and preloader)
│   │   └── 📄 scripts.js (Sidebar toggle)
│   ├── 📂 demo
│   │   ├── 📄 chart-area-demo.js
│   │   ├── 📄 chart-bar-demo.js
│   └── favicon.ico
├── 🔧 scripts/                         
│   └── ⚙️ server.js                    # simple node.js http server
├── 📄 index.html
├── 📄 user-profile.html
├── 📄 blank-page.html
├── 📄 401.html
├── 📄 404.html
├── 📄 500.html
├── 📄 index.html
├── 📄 folders-and-files.html
└── 📜 LICENSE.md                       # MIT License
```

*The other directories and files are for simple development.*

## Customization Notes: 
Here are a few suggestions when customizing the template. Everthing listed should be simple to understand. If you have more in-depth questions about how to make changes to the layout and base styles remember to check out [The Official Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.3/getting-started/introduction/) for more information.

***To be included***

## Using Simple Server  
**Note:** You need Node.js and npm to be installed on your system. You can download Node.js and follow the instructions on how to do that on [nodejs.org](http://nodejs.org/).

Open your terminal under the project root run the following commands:  

#### Install dependencies
```
npm install
```
#### Start server
```
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

## Contributing
- Click Fork button on top screen
- Create your development branch (`git checkout -b development-name-features`)
- Commit your change (`git commit -am "development name features information"`)
- Push to the branch (`git push origin development-name-features`)
- Make a Pull request

## Credits & Attribution

- **[Bootstrap 5](https://getbootstrap.com)** - The world's most popular CSS framework
- **[Bootstrap Icons](https://icons.getbootstrap.com)** - Official Bootstrap icon library
- **[Start Bootstrap - Simple Sidebar](https://github.com/startbootstrap/startbootstrap-simple-sidebar)** - Simple Sidebar is an off canvas sidebar navigation template.
- **[Start Bootstrap - SB Admin](https://github.com/startbootstrap/startbootstrap-sb-admin)** - An Admin dashboard template for Bootstrap.
