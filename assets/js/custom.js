document.addEventListener('DOMContentLoaded', function() {
  const switcher = document.getElementById('switcher')

  switcher.onchange = changeEventHandler
}, false)

function changeEventHandler(event) {
  const isChecked = document.getElementById('switcher').checked
  const container = document.documentElement

  if (isChecked) {
    container.className = 'vertical'
  } else {
    container.className = 'horizontal'
  }
}



