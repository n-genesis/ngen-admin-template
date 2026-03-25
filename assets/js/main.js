/**
  * Name: Main JavaScript
  * File: main.js
  * Updated: October 21 2025
  * Description: Main JavaScript for Bootsnippets website
*/
(function () {
    "use strict";
    /**
     * THEME TOGGLE Section
     */
    const themeStorVal = 'n-gen-admin-theme';
    // Function to set the theme based on preference or system settings
    const getPreferredTheme = () => {
        const storedTheme = localStorage.getItem(themeStorVal);
        if (storedTheme) {
            return storedTheme;
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };

    const setTheme = (theme) => {
        document.documentElement.setAttribute('data-bs-theme', theme);
    };

    // Set the theme on page load
    // setTheme(getPreferredTheme());
    
    const themeBtn = document.querySelector('[data-ng-btn="theme"]');
    if(themeBtn){
        themeBtn.addEventListener('click',()=>{
            var newTheme = '';
            if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
                document.documentElement.setAttribute('data-bs-theme','light');
                newTheme = 'light';
            }
            else {
                document.documentElement.setAttribute('data-bs-theme','dark');
                newTheme = 'dark';
            }
            setTheme(newTheme);
            localStorage.setItem(themeStorVal, newTheme);
            toggleTheme();
        });
    }

    const toggleTheme = () => {
        let el = themeBtn.querySelector('.bi');
        el.className = el.className === "bi bi-moon-fill" ? "bi bi-sun" : "bi bi-moon-fill";
        let spEle = themeBtn.querySelector('.ng-theme');
        spEle.textContent = spEle.textContent === 'Dark Theme' ? 'Light Theme' : "Dark Theme"; 
        
    }

    // Toggle theme button and text on page laod
    toggleTheme();

    // Get the button element
    let mybutton = document.getElementById("btn-back-to-top");
    const scrollEle = document.getElementById('wrapper')
    const myScrollableDiv = scrollEle !== null ? scrollEle : window;
    
    if (myScrollableDiv) {
        myScrollableDiv.addEventListener('scroll', function() {
            scrollFunction();  
        });
    }

    // When the user scrolls down 20px from the top of the document, show the button
    document.onscroll = function () {
        scrollFunction();
    };

    const scrollFunction = () => {
        if (myScrollableDiv.scrollTop > 20 || myScrollableDiv.scrollY > 20) {
            mybutton.classList.add('d-block');
            mybutton.classList.remove('d-none');
        } else {
            mybutton.classList.add('d-none');
            mybutton.classList.remove('d-block');
        }
    }

    const backToTop = () => {
        myScrollableDiv.scrollTo({
            top: 0,
            behavior: "smooth" // For smooth scrolling
        });
    }

    // When the user clicks on the button, scroll to the top of the document
    mybutton.addEventListener("click", backToTop);

    /**
     * Preloader
     */
    const preloader = document.querySelector('#preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            preloader.classList.add('hidden');
        });
    }

    //Uncomment to show Preloader on unload
    window.addEventListener('beforeunload', function (event) {
        // Check for unsaved changes or other conditions
        if (preloader) {
            //preloader.classList.toggle('hidden');
            //event.preventDefault();
        }
    });
})();
