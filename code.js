let text = document.getElementById('myText').innerHTML;
const copyContent = async function () {
    try {
      await navigator.clipboard.writeText(text);
      alert("Copied to clipboard: " + text);
    } catch (err) {
      alert("Failed to copy: ", err);
    }    
};

function toggleMap() {
  const map = document.getElementById('map');
  if (map.style.display === 'none') {
    map.style.display = 'block';
  } else {
    map.style.display = 'none';
  }
};

window.onload = function() {
  const menus = document.getElementsByClassName('menu');
  
  for (let i = 0; i < menus.length; i++) {
    menus[i].addEventListener('click', function() {
      let submenu = this.nextElementSibling;
      if (submenu.style.display === 'none') {
        submenu.style.display = 'block';
      } else {
        submenu.style.display = 'none';
      }
    });
  }
};