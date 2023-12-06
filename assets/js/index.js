// Function to set the theme based on localStorage
function setTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark')
    document.getElementById('theme-icon').classList.add('hidden')
    document.getElementById('dark-theme-icon').classList.remove('hidden')
    document.getElementById('theme-text').textContent = 'Dark'
  } else {
    document.documentElement.classList.remove('dark')
    document.getElementById('theme-icon').classList.remove('hidden')
    document.getElementById('dark-theme-icon').classList.add('hidden')
    document.getElementById('theme-text').textContent = 'Light'
  }
}

// Function to toggle between dark and light themes
function toggleTheme() {
  const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark'

  setTheme(newTheme)
  localStorage.theme = newTheme
}

// Function to initialize the theme based on localStorage
function initializeTheme() {
  const savedTheme = localStorage.theme
  if (
    savedTheme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    setTheme('dark')
  } else {
    setTheme('light')
  }
}

// Event listener for theme toggle click
const themeToggle = document.getElementById('theme-toggle')
themeToggle.addEventListener('click', (event) => {
  event.preventDefault()
  toggleTheme()
})

// Initialize the theme on page load
initializeTheme()
