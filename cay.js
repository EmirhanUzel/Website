function searchCoffee() {
    var input = document.getElementById('searchInput').value.toLowerCase();

    var coffeeSections = [
        { id: 'siyah', name: 'siyah' },
        { id: 'yeşil', name: 'yeşil' },
        { id: 'beyaz', name: 'beyaz' },
        { id: 'oolong', name: 'oolong' },
        { id: 'bitki', name: 'bitki' },
        { id: 'rooibos', name: 'rooibos' },
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