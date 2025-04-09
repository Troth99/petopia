export function showHideCategories() {
    const dropdownBtn = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');
    
    // Добавяме събитие за клик
    dropdownBtn.addEventListener('click', function (e) {
        e.preventDefault(); // За да предотвратим навигация
        dropdownContent.classList.toggle('show'); // Превключваме класа 'show', за да се покаже/скрие менюто
    });

    // При клик извън падащото меню, то да се затваря
    window.addEventListener('click', function (e) {
        if (!dropdownBtn.contains(e.target) && !dropdownContent.contains(e.target)) {
            dropdownContent.classList.remove('show');
        }
    });
}

export function showHideToys() {
    const dropdownBtn = document.querySelector('.dropbtn-toys');
    const dropdownContent = document.querySelector('.dropdown-content-toys');
    
    // Добавяме събитие за клик
    dropdownBtn.addEventListener('click', function (e) {
        e.preventDefault(); // За да предотвратим навигация
        dropdownContent.classList.toggle('show'); // Превключваме класа 'show', за да се покаже/скрие менюто
    });

    // При клик извън падащото меню, то да се затваря
    window.addEventListener('click', function (e) {
        if (!dropdownBtn.contains(e.target) && !dropdownContent.contains(e.target)) {
            dropdownContent.classList.remove('show');
        }
    });
}

