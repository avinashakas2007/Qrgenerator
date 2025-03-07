
---

# 🌐 URL to QR Code Generator

Welcome to the **URL to QR Code Generator**! This tool helps you quickly turn any URL into a **QR code**, and saves it both as a **PNG image** and in a **text file** for easy access.

---

## ✨ Features

- **Prompt for URL**: Enter any URL you wish to convert into a QR code.
- **QR Code Generation**: Instantly generate a QR code for your URL.
- **File Saving**: 
  - Saves the QR code as `qr_img.png`.
  - Saves the URL in a text file `URL.txt`.

---

## 🚀 Installation

To get started with this project, follow these simple steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/avinashakas2007/Qrgenerator.git
   ```

2. **Navigate into the project folder**:
   ```bash
   cd url-to-qr-code
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

---

## 🖥️ Usage

1. Run the program:
   ```bash
   node index.js
   ```

2. You’ll be prompted to **enter a URL**.

3. After entering the URL:
   - A **QR code image** will be saved as `qr_img.png`.
   - The URL will be saved in a text file called `URL.txt`.

---

## 🛠️ Technologies Used

- **[inquirer](https://www.npmjs.com/package/inquirer)**: For getting user input through the terminal.
- **[qr-image](https://www.npmjs.com/package/qr-image)**: Converts URL into a QR code.
- **fs (Node.js File System)**: Used to save the QR code and the URL to local files.

---

## 📝 License

This project is licensed under the **MIT License**.

---

Let me know if you need anything else, and I hope this adds a nice touch to your README!
