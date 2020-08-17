
var checkBox = document.getElementById('switch');

var theme = window.localStorage.getItem('data-theme');
//theme = 'dark';
if(theme) document.documentElement.setAttribute('data-theme', theme);
checkBox.checked = theme == 'red' ? true : false;


checkBox.addEventListener('change', function () {
  if(this.checked){
      trans()
    document.documentElement.setAttribute('data-theme', 'red');
    window.localStorage.setItem('data-theme', 'red');
  } else {
      trans()
    document.documentElement.setAttribute('data-theme', 'dark');
    window.localStorage.setItem('data-theme', 'dark');
  }
});

    let trans = () => {
        document.documentElement.classList.add('transition');
        window.setTimeout(() => {
            document.documentElement.classList.remove('transition')
        }, 1000)
    }

