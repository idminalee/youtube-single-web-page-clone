const btnSubscribe = document.querySelector('.btnSubscribe')

btnSubscribe.addEventListener('click', e => {
  const iconBell = document.querySelector('.iconBell')
  e.target.textContent === 'Subscribe'
    ? (e.target.textContent = 'Subscribed')
    : (e.target.textContent = 'Subscribe')

  btnSubscribe.classList.toggle('btn--subscribed')
  iconBell.style.display === 'inline-block'
    ? (iconBell.style.display = 'none')
    : (iconBell.style.display = 'inline-block')
})
