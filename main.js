window.addEventListener('DOMContentLoaded', (event) => {
    updateVisitorCount();
});

const apiUrl = 'https://azureresume-func.azurewebsites.net/api/VisitorCounter?code=ITsfnZ3uu49ArEbAXZJZyLK5BjL18XnTfmWl9nc6450bAzFuzPUYdQ==';

async function updateVisitorCount() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log('API response:', data);
    const count = data.VisitorCount;
    console.log('Visitor count:', count);
    document.getElementById('counter').innerText = count.toString();
}