// Modal pop-up functionality
const modal = document.getElementById("contact-modal");
const openBtn = document.getElementById("share-details-btn");
const closeBtn = document.querySelector(".close-button");

openBtn.onclick = () => {
    modal.style.display = "block";
};

closeBtn.onclick = () => {
    modal.style.display = "none";
};

window.onclick = (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

// Form submission functionality
const form = document.getElementById('lead-capture-form');
const scriptURL = 'https://script.google.com/macros/s/AKfycbxdIeOtk2w4opqmAASbYip22Q9POVP2dXY-6g-OWDP9nPCQrwY6xQeQbYfEceX47G__/exec';

form.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  fetch(scriptURL, {
    method: 'POST',
    mode: 'no-cors', // Important for sending to Google Scripts
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    alert('Thank you! Your details have been sent.');
    form.reset();
    modal.style.display = "none";
  })
  .catch(error => {
    console.error('Error!', error.message);
    alert('There was an error sending your details. Please try again.');
  });

});
