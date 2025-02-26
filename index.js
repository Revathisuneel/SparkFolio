// Select the form and status message container
const contactForm = document.getElementById("contactForm");
const statusMessage = document.getElementById("statusMessage");

// Listen for form submission
contactForm.addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevent default form submission

  // Clear any previous status message
  statusMessage.textContent = "";

  // Validate required fields (HTML required attribute also does basic validation)
  const nameValue = document.getElementById("name").value.trim();
  const emailValue = document.getElementById("email").value.trim();
  const messageValue = document.getElementById("message").value.trim();

  // Additional custom validation if needed
  if (!nameValue || !emailValue || !messageValue) {
    statusMessage.textContent = "Please fill out all required fields.";
    statusMessage.style.color = "red";
    return;
  }

  // Collect form data
  const formData = new FormData(contactForm);

  try {
    // 1) If you have your own backend endpoint:
    //    Replace "YOUR_SERVER_ENDPOINT" with your actual server endpoint.
    //    Example: "https://example.com/api/contact"
    const response = await fetch("YOUR_SERVER_ENDPOINT", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      // Success
      statusMessage.textContent = "Message sent successfully!";
      statusMessage.style.color = "green";
      contactForm.reset(); // Clear the form
    } else {
      // Server error
      statusMessage.textContent = "Error sending message. Please try again later.";
      statusMessage.style.color = "red";
    }
  } catch (error) {
    // Network error or other issues
    statusMessage.textContent = "An error occurred. Please check your connection.";
    statusMessage.style.color = "red";
  }
});

