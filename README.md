# Email Fraud & Spam Filter (Chrome Extension)

This Chrome extension detects and filters fraudulent emails using AI-powered phishing detection.

## 🚀 Features
✅ Uses AI (Random Forest + BERT) to detect phishing emails.  
✅ Integrates with Gmail to scan inbox messages.  
✅ Moves phishing emails to a separate folder.  

## 📌 How to Install
1. Click the **Code** button on GitHub and select **Download ZIP**.  
2. Extract the ZIP file on your computer.  
3. Open **Google Chrome** and go to `chrome://extensions/`.  
4. Enable **Developer mode** (top-right corner).  
5. Click **"Load unpacked"** and select the extracted folder.  
6. The extension is now installed! Click the extension icon to start scanning.  

## 🛠 How It Works
- When installed, the extension connects to a **Flask backend** running a phishing detection model.  
- It fetches recent Gmail emails and checks for phishing content.  
- If an email is suspicious, it moves it to a **FraudEmails folder**.  

## 🚀 Future Improvements
- Add real-time notifications for detected phishing emails.  
- Improve AI accuracy by fine-tuning the models.  
- Extend support to Outlook and Yahoo Mail.  

## 📩 Contribute
If you’d like to improve the extension, feel free to fork this repo and submit a pull request.

---

📌 **Developed by [Your Name]**  
