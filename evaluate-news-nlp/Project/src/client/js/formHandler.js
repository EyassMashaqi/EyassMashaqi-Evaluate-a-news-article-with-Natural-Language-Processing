import { validateURL } from './urlValidator';

const serverURL = 'http://localhost:8000/api';

const form = document.getElementById('urlForm');
form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
    event.preventDefault();
    const formText = document.getElementById('name').value;

    console.log('Submitted URL:', formText); // Log the URL

    if (validateURL(formText)) {
        console.log('Valid URL:', formText);

        try {
            const response = await fetch(serverURL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ url: formText }),
            });

            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }

            const data = await response.json();
            console.log('Data received from backend:', data); // Log the received data

            // Update the DOM
            document.getElementById('results').innerHTML = `
                <p><strong>Polarity:</strong> ${data.polarity}</p>
                <p><strong>Subjectivity:</strong> ${data.subjectivity}</p>
                <p><strong>Text Snippet:</strong> ${data.text}</p>
            `;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    } else {
        alert('Invalid URL. Please enter a valid URL.');
    }
}

export { handleSubmit };
     