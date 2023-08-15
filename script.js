document.addEventListener("DOMContentLoaded", () => {
  // Get the compose button element
  const composeButton = document.querySelector(".sidebar-compose");

  // Get the compose popup element
  const composePopup = document.getElementById("composePopup");

  // Get the close compose button element
  const closeComposeButton = document.querySelector(".compose-header .close-icon");

  // Get the send button element
  const sendButton = document.getElementById("sendButton");

  // Get the input elements for recipient, subject, and message
  const recipientInput = document.getElementById("recipientInput");
  const subjectInput = document.getElementById("subjectInput");
  const messageTextarea = document.getElementById("messageTextarea");

  // Add a click event listener to the compose button
  composeButton.addEventListener("click", () => {
    composePopup.style.display = "block";
  });

  // Add a click event listener to the close compose button
  closeComposeButton.addEventListener("click", () => {
    composePopup.style.display = "none";
  });

  // Add a click event listener to the send button
  sendButton.addEventListener("click", () => {
    // Get the values from input fields
    const recipient = recipientInput.value;
    const subject = subjectInput.value;
    const message = messageTextarea.value;

    // Check if all fields are not empty
    if (recipient.trim() !== "" && subject.trim() !== "" && message.trim() !== "") {
      // Store the composed email details in localStorage
      const composedEmail = {
        recipient,
        subject,
        message
      };
      localStorage.setItem("composedEmail", JSON.stringify(composedEmail));

      // Close the compose popup
      composePopup.style.display = "none";

      // Clear the input fields and textarea
      recipientInput.value = "";
      subjectInput.value = "";
      messageTextarea.value = "";
    }
  });
});
