document.getElementById('kontrast-verringern').addEventListener('click', function() {
  var text = document.getElementById('kontrast-text');
  var style = window.getComputedStyle(text);
  var rgb = style.color.match(/\d+/g);
  for (var i = 0; i < rgb.length; i++) {
      rgb[i] = Math.min(255, parseInt(rgb[i]) + 20); 
  }
  text.style.color = 'rgb(' + rgb.join(',') + ')';
});

document.getElementById('kontrast-erhoehen').addEventListener('click', function() {
  var text = document.getElementById('kontrast-text');
  var style = window.getComputedStyle(text);
  var rgb = style.color.match(/\d+/g);
  for (var i = 0; i < rgb.length; i++) {
      rgb[i] = Math.max(0, parseInt(rgb[i]) - 20);
  }
  text.style.color = 'rgb(' + rgb.join(',') + ')';
});



document.getElementById('farbenblindheit-simulation').addEventListener('click', function() {
  document.querySelectorAll('.farbbalken').forEach(function(balken) {
      balken.style.backgroundColor = 'gray';
  });
});


//AIRA
function toggleModal() {
  var modal = document.getElementById('modalDialog');
  if (modal.style.display === 'block') {
      modal.style.display = 'none';
  } else {
      modal.style.display = 'block';
  }
}


//LEICHTE SPRACHE
function toggleLanguage() {
  var komplizierterText = document.getElementById('komplizierter-text');
  var einfacherText = document.getElementById('einfacher-text');
  var button = document.getElementById('toggle-button');

  if (komplizierterText.style.display === 'none') {
      komplizierterText.style.display = 'block';
      einfacherText.style.display = 'none';
      button.textContent = 'Leichte Sprache anwenden';
  } else {
      komplizierterText.style.display = 'none';
      einfacherText.style.display = 'block';
      button.textContent = 'Zurück zu komplizierter Sprache';
  }
}



//BARRIEREFREIE BUTTONS
function openModal(modalId) {
  document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}
