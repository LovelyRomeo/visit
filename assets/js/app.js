window.addEventListener('load', function() {
  document.body.classList.remove('is-preload');
    setTimeout(function() {
    document.querySelector('.loading-container').classList.add('hide');
  }, 700);
});
