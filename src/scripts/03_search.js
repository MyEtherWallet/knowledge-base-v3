(function() {
    console.log("HI");
    var search = instantsearch({
        appId: 'X3MKCN091Y',
        apiKey: '57cfd4392c53f2f10326363399b49061',
        indexName: 'mew-kb',
        urlSync: true
    });


    // initialize SearchBox
    search.addWidget(
        instantsearch.widgets.searchBox({
            container: '#search-box',
            placeholder: 'What can we help you with?',
            poweredBy: true,
            autoFocus: true,
            cssClasses: {
                root: 'mew-search-box',
                input: 'mew-search'
            }
        })
    );

    // initialize hits widget
    search.addWidget(
        instantsearch.widgets.hits({
            container: '#hits',
            hitsPerPage: 10,
            templates: {
                empty: 'No results - email us at support@myetherwallet.com for help.',
                item: '<div class="home__categories row block">' +
                '<small class="col-sm-4 text-right">{{category}}</small>' +
                '<a class="col-sm-8 text-left" href="{{category}}/{{link}}" title="{{title}}">{{{_highlightResult.title.value}}}</a>' +
                '</div>'
            }
        })
    );

    /**
    // initialize the pagination
    search.addWidget(
        instantsearch.widgets.pagination({
            container: '#pagination-container',
            maxPages: 20,
            scrollTo: '#hits'
        })
    );
    */

    search.start();

})();