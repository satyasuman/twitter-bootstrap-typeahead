function displayResult(item, val, text) {
    console.log(item);
    $('.alert').show().html('You selected <strong>' + val + '</strong>: <strong>' + text + '</strong>');
}

$(function () {
    $('#demo1').typeahead({
        source: [
            { id: 1, name: 'Toronto' },
            { id: 2, name: 'Montreal' },
            { id: 3, name: 'New York' },
            { id: 4, name: 'Buffalo' },
            { SubMenu: [{ id: 1, name: 'Toronto' },
                { id: 2, name: 'Montreal' },
                { id: 3, name: 'New York' },
                { SubMenu: [ { id: 6, name: 'Columbus' },
                    { id: 7, name: 'Dallas' },
                    { id: 8, name: 'Vancouver' },
                    {
                        SubMenu:[
                            {id:1, name:"hyderabad"},
                            {id:2, name:"chennai"},
                            {id:3, name:"delhi"},
                            {id:4, name:"chandigarh"}
                        ],
                        name: 'Seattle',id:10
                    }], name: 'Buffalo',id:10 }],
                name: 'Boston',
                id:10
            },
            { id: 6, name: 'Columbus' },
            { id: 7, name: 'Dallas' },
            { id: 8, name: 'Vancouver' },
            { id: 9, name: 'Seattle' },
            { id: 10, name: 'Los Angeles' }
        ],
        itemSelected: displayResult
    });
});