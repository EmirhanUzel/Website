function searchCoffee() {
    var input = document.getElementById('searchInput').value.toLowerCase();

    var coffeeSections = [
        { id: 'türk kahvesi', name: 'türk kahvesi' },
        { id: 'espresso', name: 'espresso' },
        { id: 'cappuccino', name: 'cappuccino' },
        { id: 'americano', name: 'americano' },
        { id: 'latte', name: 'latte' },
        { id: 'macchiato', name: 'macchiato' },
        { id: 'mocha', name: 'mocha' }
    ];

    for (var i = 0; i < coffeeSections.length; i++) {
        if (input.includes(coffeeSections[i].name)) {
            var section = document.getElementById(coffeeSections[i].id);
            section.scrollIntoView({ behavior: 'smooth' });
            break;  
        }
    }
}
            document.getElementById('searchInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        searchCoffee();
    }
});