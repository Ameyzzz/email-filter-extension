chrome.runtime.onInstalled.addListener(() => {
    console.log("Email Fraud & Spam Filter extension installed.");
});

async function checkEmails() {
    let emails = await getEmailsFromGmail(); // Function to fetch emails

    for (let email of emails) {
        let response = await fetch("http://localhost:5000/predict", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: email.body })
        });

        let result = await response.json();
        if (result.phishing > 0.7) {
            console.log("⚠️ Phishing detected: " + email.subject);
            moveEmailToSpam(email.id);
        }
    }
}

async function getEmailsFromGmail() {
    // Gmail API call to fetch emails (Implement this)
}

async function moveEmailToSpam(emailId) {
    // Gmail API call to move email to Spam folder (Implement this)
}

chrome.runtime.onStartup.addListener(checkEmails);
chrome.runtime.onInstalled.addListener(checkEmails);
