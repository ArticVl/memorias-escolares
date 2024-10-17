document.addEventListener('DOMContentLoaded', function() {
    const relatoButton = document.getElementById('relatoButton');
    const relatoSection = document.getElementById('relatos');
    const dataSection = document.getElementById('datas');
    
    relatoButton.addEventListener('click', function() {
        if (relatoSection.style.display === 'none') {
            relatoSection.style.display = 'block';
            dataSection.style.display = 'block';
        } else {
            relatoSection.style.display = 'none';
            dataSection.style.display = 'none';
        }
    });

    // Inicialmente escondendo as seções
    relatoSection.style.display = 'none';
    dataSection.style.display = 'none';
    
    const menuItems = document.querySelectorAll('nav ul li');

    menuItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            const submenu = this.querySelector('ul');
            if (submenu) submenu.style.display = 'block';
        });

        item.addEventListener('mouseout', function() {
            const submenu = this.querySelector('ul');
            if (submenu) submenu.style.display = 'none';
        });
    });
});
