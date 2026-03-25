/**
 * N-Gen Admin Dashboard v1.0 (https://ngendesign.com/templates/ngen-admin-dashboard)
 * File: scripts.js
 * Updated: October 25 2025
 * Description: Dashbaord JavaScript files
*/

window.addEventListener('DOMContentLoaded', event => {



    /**
     * Detect left swipe to open sidebar
     * 
     * Using methods pageX to get the touch point position relative to the viewport 
     * and starting at 0px is detected since the main elements are at to position: fixed or ralative.
     * Also check is localStorage value is set to toggle button icon.
     */

    // // Close Sidebar if #main-content is tapped
    // document.getElementById('main-content').addEventListener('touchstart', event => {
    //     toggleSideBtn();
    //     if (document.body.classList.contains('ng-sidenav-toggled')) {
    //         document.body.classList.toggle('ng-sidenav-toggled');
    //         // Set localStorage value
    //         localStorage.setItem('ng|sidebar-toggle', document.body.classList.contains('ng-sidenav-toggled'));
    //     }
    // });


    const offcanvas = document.getElementById('sidebar-wrapper');
    const contentWrapper = document.getElementById('content-wrapper');
    const menuWidth = 240;

    let startX = 0;
    let isOpen = false; // Track current state

    document.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        [offcanvas, contentWrapper].forEach(el => el.style.transition = 'none');
    }, { passive: true });

    document.addEventListener('touchmove', (e) => {
        const diffX = e.touches[0].clientX - startX;

        // Calculate potential new position based on state
        let translateX = isOpen ? menuWidth + diffX : diffX;

        // CLAMP: Keep movement between 0 and 240px
        const clampedX = Math.min(Math.max(0, translateX), menuWidth);

        // Sync both elements
        offcanvas.style.transform = `translateX(${clampedX - menuWidth}px)`;
        contentWrapper.style.transform = `translateX(${clampedX}px)`;
    }, { passive: false });

    document.addEventListener('touchend', (e) => {
        const diffX = e.changedTouches[0].clientX - startX;
        [offcanvas, contentWrapper].forEach(el => el.style.transition = 'transform 0.3s ease-out');

        // Logic to determine if we should snap Open or Closed
        // If moving right (> 50px) or already open and didn't move left much
        if ((!isOpen && diffX > 50) || (isOpen && diffX > -50)) {
            // SNAP OPEN
            offcanvas.style.transform = `translateX(0px)`;
            contentWrapper.style.transform = `translateX(${menuWidth}px)`;
            isOpen = true;
        } else {
            // SNAP CLOSED
            offcanvas.style.transform = `translateX(-${menuWidth}px)`;
            contentWrapper.style.transform = `translateX(0px)`;
            isOpen = false;
        }
    });

    // Function to handle the transition logic
    const toggleSideBtn = (open) => {
        isOpen = open;
        el = sidebarToggle.querySelector('.bi');

        // Re-enable transition for a smooth animation from the button
        [offcanvas, contentWrapper].forEach(el => {
            el.style.transition = 'transform 0.3s ease-out';
        });

        if (isOpen) {
            offcanvas.style.transform = `translateX(0px)`;
            contentWrapper.style.transform = `translateX(${menuWidth}px)`;
            //el.className = "bi bi-grid-fill";
        } else {
            offcanvas.style.transform = `translateX(-${menuWidth}px)`;
            contentWrapper.style.transform = `translateX(0px)`;
            //el.className = "bi bi-grid";
        }
    };

    /**
     * Toggle the side navigation
     * 
     * TODO: Fix icon change on toggle when tapping on #main-content to close offcanvas
     */
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', event => {
            toggleSideBtn(!isOpen);
        });

    }

    document.getElementById('main-content').addEventListener('click', () => {
    if (isOpen) toggleSideBtn(false);
    });

});
