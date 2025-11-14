/**
 * N-Gen Admin Dashboard v1.0 (https://ngendesign.com/templates/ngen-admin-dashboard)
 * File: scripts.js
 * Updated: October 25 2025
 * Description: Dashbaord JavaScript files
*/

window.addEventListener('DOMContentLoaded', event => {

    /**
     * Toggle the side navigation
     */
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('ng-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();

            document.body.classList.toggle('ng-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('ng-sidenav-toggled'));

            toggleSideBtn();
        });

        function toggleSideBtn() {
            if (document.body.classList.contains('ng-sidenav-toggled')) {
                el = sidebarToggle.querySelector('.bi');
                el.className = el.className === "bi bi-grid" ? "bi bi-grid-fill" : "bi bi-grid";
            }
        }

    }

    /**
     * Detect left swipe to open sidebar
     * 
     * USing methods pageX to get the touch point position relative to the viewport 
     * and starting at 0px is detected since the main elements are at to position: fixed or ralative.
     * Also check is localStorage value is set to toggle button icon.
     */
    let touchstartX = 0;
    let touchendX = 0;
    const leftSwipeThreshold = 125; // A swipe must start within 50px of the left edge
    const minSwipeDistance = 75; // The user must swipe at least 75px to the right

    function handleGesture() {
        // Check if the swipe originated near the left edge
        if (touchstartX < leftSwipeThreshold) {
            // Check if the swipe moved significantly to the right
            if (touchendX > touchstartX + minSwipeDistance) {
                // Add your desired function here, e.g., open a menu
                if (!document.body.classList.contains('ng-sidenav-toggled')) {
                    document.body.classList.toggle('ng-sidenav-toggled');
                    localStorage.setItem('ng|sidebar-toggle', document.body.classList.contains('ng-sidenav-toggled'));
                    toggleSideBtn();
                }
            }
        }
    }
    // Set starting touch position
    document.addEventListener('touchstart', e => {
        touchstartX = e.changedTouches[0].pageX;
    });
    // Set ending touch postion
    document.addEventListener('touchend', e => {
        touchendX = e.changedTouches[0].pageX;
        handleGesture();
    });

    // Optional: Prevent default browser behavior (e.g., pulling up history)
    document.addEventListener('touchmove', e => {
        if (touchstartX < leftSwipeThreshold) {
            //e.preventDefault();
        }
    }, { passive: false });

    // Close Sidebar if #page-content-wrapper is tapped
    document.getElementById('page-content').addEventListener('touchstart', event => {
        toggleSideBtn();
        if (document.body.classList.contains('ng-sidenav-toggled')) {
            document.body.classList.toggle('ng-sidenav-toggled');
            // Set localStorage value
            localStorage.setItem('ng|sidebar-toggle', document.body.classList.contains('ng-sidenav-toggled'));
        }
    });


});
