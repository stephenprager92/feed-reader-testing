/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */

$(function() {

    /* RSS Feeds Test Suite*/
    describe('RSS Feeds', function() {

        /* Tests to make sure that the allFeeds variable has been defined
           and that it is not empty. */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* Test that loops through each feed in the allFeeds object 
           and ensures it has a URL defined and that the URL is not empty.
         */
         it('contain URLs that are defined', function() {
            for (feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
         });

        /* Test that loops through each feed in the allFeeds object and 
           ensures it has a name defined and that the name is not empty.
         */
         it('contain names that are defined', function() {
            for (feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
         });
    });

    /* Menu Test Suite */
    describe('The Menu', function() {

        /* Define menu and menu link testing variables */
        const menu = document.querySelector('.slide-menu');
        const menuLink = document.querySelector('.menu-icon-link');
        
        /* Test that ensures the menu element is hidden by default. Currently, menu is 
           hidden using "menu-hidden" class applied to document body. */
         it('is hidden by default', function() {
            expect(document.body.classList.contains('menu-hidden')).toBe(true);
         });

         /* Test that ensures the menu changes visibility when the menu icon is clicked.
            Contains two expectations: does the menu display when clicked and does it hide when clicked again.
          */
          it('changes visibility when clicked', function() {
            menuLink.click();
            expect(document.body.classList.contains('menu-hidden')).toBe(false);
            
            menuLink.click();
            expect(document.body.classList.contains('menu-hidden')).toBe(true);
          });
    });

    /* Initial Entries Test Suite */
    describe('Initial Entries', function() {
          /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
    });
     
}());
