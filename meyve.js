function searchCoffee() {
    var input = document.getElementById('searchInput').value.toLowerCase();

    var coffeeSections = [
        { id: 'portakal suyu', name: 'portakal suyu' },
        { id: 'elma suyu', name: 'elma suyu' },
        { id: 'üzüm suyu', name: 'üzüm suyu' },
        { id: 'havuç suyu', name: 'havuç suyu' },
        { id: 'greyfurt suyu', name: 'greyfurt suyu' },
        { id: 'mango suyu', name: 'mango suyu' },
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