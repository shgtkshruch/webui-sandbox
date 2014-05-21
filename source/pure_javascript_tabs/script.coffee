window.onload = ->
  # get tab container
  container = document.getElementById 'tabContainer'

  # set current tab
  navitem = container.querySelector '.tabs ul li'

  # store which tab we are on
  ident = navitem.id.split('_')[1]
  navitem.parentNode.setAttribute 'data-current', ident

  # set current tab with class of activetabheader
  navitem.setAttribute 'class', 'tabActiveHeader'

  # hide two tab contants we don't need
  pages = container.querySelectorAll '.tabpage'
  for i in [1..pages.length-1]
    pages[i].style.display = 'none'

  # this adds click event to tabs
  tabs = container.querySelectorAll '.tabs ul li'
  for i in [0..tabs.length-1]
    tabs[i].onclick = displayPage

# on click of one of tabs
displayPage = ->
  current = this.parentNode.getAttribute 'data-current'

  # remove class of activetabheader and hide old contents
  document.getElementById 'tabHeader_' + current
    .removeAttribute 'class'
  document.getElementById 'tabpage_' + current
    .style.display = 'none'

  ident = this.id.split('_')[1]
  # add class of activetabheader to new active tab and show contents
  this.setAttribute 'class', 'tabActiveHeader'
  document.getElementById 'tabpage_' + ident
    .style.display = 'block'
  this.parentNode.setAttribute 'data-current', ident
