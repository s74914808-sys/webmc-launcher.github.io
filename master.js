document.addEventListener('contextmenu', event => event.preventDefault());
if (!(location.href.includes('about:srcdoc'))) {
  window.addEventListener('beforeunload', function (e) {
      e.preventDefault();
      e.returnValue = '';
  });
}

function fetchLoading() {
  fetch('/loading.html')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.text();
    })
    .then(html => {
      window.loaderHTML = html;
    })
    .catch(error => {
      console.error('Error fetching loading: ', error);
    });
  return window.loaderHTML;
}
fetchLoading();