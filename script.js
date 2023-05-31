const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];

function fetchData(url) {
  return fetch(url)
    .then(response => response.json())
    .catch(error => console.log(error));
}

function displayTimeTaken(id, startTime) {
  const endTime = new Date().getTime();
  const timeTaken = endTime - startTime;
  document.getElementById(id).textContent = timeTaken + ' ms';
}

function fetchWithPromiseAll() {
  const startTime = new Date().getTime();
  Promise.all(apiUrls.map(fetchData))
    .then(() => displayTimeTaken('output-all', startTime));
}

function fetchWithPromiseAny() {
  const startTime = new Date().getTime();
  Promise.any(apiUrls.map(fetchData))
    .then(() => displayTimeTaken('output-any', startTime));
}

fetchWithPromiseAll();
fetchWithPromiseAny();
