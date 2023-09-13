const toggle = document.querySelector('.toggle-btn')
const toggleIcon = document.querySelector('.toggle-btn i')
const dropdownMenu = document.querySelector('.dropdown-menu')

toggle.onclick = (() => {
  dropdownMenu.classList.toggle('open')

  const isOpen = dropdownMenu.classList.contains('open')

  toggleIcon.classList = isOpen? 'bi bi-x' : 'bi bi-list';
})