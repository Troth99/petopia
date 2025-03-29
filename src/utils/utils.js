export function getUserFromLocalStorage(){
    const storedUser = JSON.parse(localStorage.getItem('firebase.user'));
    return storedUser
}