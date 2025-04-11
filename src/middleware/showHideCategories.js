export function showHideCategories() {
    const dropdownBtn = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');
    const dropdownLinks = dropdownContent.querySelectorAll('a');

 
    dropdownBtn.addEventListener('click', function (e) {
        e.preventDefault();
        dropdownContent.classList.toggle('show'); 
    });

   
    dropdownLinks.forEach(link => {
        link.addEventListener('click', function () {
            dropdownContent.classList.remove('show'); 
        });
    });


    window.addEventListener('click', function (e) {
        if (!dropdownBtn.contains(e.target) && !dropdownContent.contains(e.target)) {
            dropdownContent.classList.remove('show');
        }
    });
}

export function showHideToys() {
    const dropdownBtn = document.querySelector('.dropbtn-toys');
    const dropdownContent = document.querySelector('.dropdown-content-toys');
    
  
    dropdownBtn.addEventListener('click', function (e) {
        e.preventDefault(); 
        dropdownContent.classList.toggle('show');
    });


    window.addEventListener('click', function (e) {
        if (!dropdownBtn.contains(e.target) && !dropdownContent.contains(e.target)) {
            dropdownContent.classList.remove('show');
        }
    });
}

