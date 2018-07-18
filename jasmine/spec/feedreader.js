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

        // Before any tests, run the (asynchronous) loadFeed function
        beforeEach(function(done) {
            //Load feed at index 0 of allFeeds
            loadFeed(0, function() {
                done();
            });
        });

        /* Test that ensures when the loadFeed function is called and completes its work, there is at
             least a single .entry element within the .feed container. Note that loadFeed() is asynchronous.
        */
        it('loads at least one feed successfully (asynchronous)', function(done) {
                
                // Grab the DOM elements for feed container and entry (first entry
                // child should be selected by default, which is fine for this test)
                const feedContainer = document.querySelector('.feed');
                const feedEntry = document.querySelector('.entry');

                // Expect container to hold entry 
                expect(feedContainer.contains(feedEntry)).toBe(true);
                done();
         });
     });
     
     /* New Feed Selection Test Suite */
     describe('New Feed Selection', function() {

        let oldContent, newContent;
        
        // Before any tests, run the (asynchronous) loadFeed function
        beforeEach(function(done) {

            // Load feed at index 0 of allFeeds
            loadFeed(0, function() {

                // Store the feed container's text content before loading feed 1
                oldContent = document.querySelector('.feed').textContent;

                // Load feed at index 1 of allFeeds. Do this as callback within first 
                // loadFeed function call to ensure proper order (as loadFeed is asynchronous)
                loadFeed(1, function() {

                    // Store the feed container's new text content after loading feed 2
                    newContent = document.querySelector('.feed').textContent;
                    done();
                })
            });

        });

        /* Test that ensures when a feed is loaded by the loadFeed function, 
           the content of the page actually changes. Note that loadFeed() is asynchronous.
        */
        it('changes content when a feed is loaded', function(done) {

            console.log(oldContent);
            console.log(newContent);
            // Expect the content to have changed between runs of loadFeed
            expect(newContent).not.toEqual(oldContent);  
            done();
        
        });

        // After all tests have been run, reset the feed container
        afterAll(function(done) {
            loadFeed(0, function() {
                done();
            });
        });
     });
}());
