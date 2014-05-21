(function() {
  var displayPage;

  window.onload = function() {
    var container, i, ident, navitem, pages, tabs, _i, _j, _ref, _ref1, _results;
    container = document.getElementById('tabContainer');
    navitem = container.querySelector('.tabs ul li');
    ident = navitem.id.split('_')[1];
    navitem.parentNode.setAttribute('data-current', ident);
    navitem.setAttribute('class', 'tabActiveHeader');
    pages = container.querySelectorAll('.tabpage');
    for (i = _i = 1, _ref = pages.length - 1; 1 <= _ref ? _i <= _ref : _i >= _ref; i = 1 <= _ref ? ++_i : --_i) {
      pages[i].style.display = 'none';
    }
    tabs = container.querySelectorAll('.tabs ul li');
    _results = [];
    for (i = _j = 0, _ref1 = tabs.length - 1; 0 <= _ref1 ? _j <= _ref1 : _j >= _ref1; i = 0 <= _ref1 ? ++_j : --_j) {
      _results.push(tabs[i].onclick = displayPage);
    }
    return _results;
  };

  displayPage = function() {
    var current, ident;
    current = this.parentNode.getAttribute('data-current');
    document.getElementById('tabHeader_' + current).removeAttribute('class');
    document.getElementById('tabpage_' + current).style.display = 'none';
    ident = this.id.split('_')[1];
    this.setAttribute('class', 'tabActiveHeader');
    document.getElementById('tabpage_' + ident).style.display = 'block';
    return this.parentNode.setAttribute('data-current', ident);
  };

}).call(this);
