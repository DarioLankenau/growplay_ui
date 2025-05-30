// Inserisce il footer in fondo alla pagina
fetch('components/footer.html')
  .then(res => res.text())
  .then(html => {
    const footer = document.createElement('div');
    footer.innerHTML = html;
    document.body.appendChild(footer);
    // Evidenzia la voce attiva
    const path = window.location.pathname;
    if (path.includes('challenges')) {
      document.getElementById('footer-challenges').classList.add('active');
    } else if (path.includes('discover')) {
      document.getElementById('footer-discover').classList.add('active');
    } else if (path.includes('events')) {
      document.getElementById('footer-events').classList.add('active');
    } else if (path.includes('sam')) {
      document.getElementById('footer-sam').classList.add('active');
    }
  }); 