/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

$(function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
      });

       /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         /*For each loop that loops trough each feed in the allFeeds*/
        it('url is defined and is not empty', function() {
            allFeeds.forEach(function(feed) {
                var feedUrl = feed.url;
                expect(feedUrl).toBeDefined();
                expect(feedUrl.length).not.toBe(0);
            });
        });
         /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         //For each loop that loops trough allFeeds and checks that there is a name defined
       it('name is defined and is not empty', function() {
            allFeeds.forEach(function(feed) {
                var feedName = feed.name;
                expect(feedName).toBeDefined(); // checks if a class is empty or not 
                expect(feedName.length).not.toBe(0);
            });
       });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('hidden by default', function() {
            //hasClass checks if there is a class ot not
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        /* TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
        * clicked and does it hide when clicked again.
         */
         it('menu changing visibility', function() {
            $(".menu-icon-link").trigger('click'); //This sets the class menu-icon-link to be triggered on click
            /*When is clicked the class menu-hidden will change visibility*/
              expect($('body').hasClass('menu-hidden')).toBe(false);
            $(".menu-icon-link").trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done) {
             loadFeed(0, done);
        });
          //when loadFeed is called checks if the is a single entry element
        it('atleast single entry element within the feed container', function() {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });

    });
   
    /* TODO: Write a new test suite named "New Feed Selection"*/
    describe('New Feed Selection', function() {
        //These are variables that will hold the values for two feeds after loading.
        var feedbefore;
        var feedafter;
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        beforeEach(function(done) {
            loadFeed(0, function() { //loads the feed at position 1.
                 feedbefore = $('.feed').html();
                /*The done function tells jasmine that it shouldn't start testing before
                 *the async part of the function is over.*/
                done();
            });
        });

        it('when new feed is loaded content changes', function(done) {
            loadFeed(1, function() {
                feedafter = $('.feed').html();
                expect(feedafter).not.toEqual(feedbefore);
                done();
            });
        });

    });
}());