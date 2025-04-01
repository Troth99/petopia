export function setupDropdown() {
    
    const profileLink = document.getElementById('profile-link');
    const dropdownMenu = document.querySelector('.dropdown-content-menu');

    if (!profileLink || !dropdownMenu) {
     
        return;
    }

    const dropdownParent = profileLink.closest('.relative');

   
    profileLink.replaceWith(profileLink.cloneNode(true));
    const newProfileLink = document.getElementById('profile-link');

    newProfileLink.addEventListener('click', function (event) {
        event.preventDefault();
        event.stopPropagation(); 
        dropdownParent.classList.toggle('show-menu');
     
    });

    document.addEventListener('click', function (event) {
        if (!dropdownMenu.contains(event.target) && !newProfileLink.contains(event.target)) {
            dropdownParent.classList.remove('show-menu');
          
        }
    });
}
