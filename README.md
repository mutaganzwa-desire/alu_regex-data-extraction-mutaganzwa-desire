
# 📄 Regex Data Extraction Tool

## 🚀 Overview

This project is a **JavaScript-based tool** that uses **Regular Expressions (Regex)** to extract specific patterns of data from large blocks of unstructured text — such as API responses or scraped HTML content.

It simulates data coming from an API and extracts 8 types of information:

* 📧 Email addresses
* 🌐 URLs
* 📞 Phone numbers
* 💳 Credit card numbers
* 🕒 Time (12-hour and 24-hour format)
* 🏷️ HTML tags
* \#️⃣ Hashtags
* 💲 Currency amounts


## 📂 Git Structure

```
regex_data_extraction.js     # Main file
README.md                    # You're here!
```

---

## 🧠 How It Works

1. **Regex Definitions**
   The script includes a set of patterns to match common structured data like emails and hashtags.

2. **Simulated API Data**
   A `getApiData()` function returns an array of strings, simulating an API response.

3. **Extraction Function**
   `extractAllData()` loops through all data and collects matches using the defined regular expressions.

4. **Output**
   The data is organized into categories and displayed.

---

## 🌐 Running the Script

### 1. Open VS Code

Open the regex_data_extraction.js file in VS Code editor

![Screenshot (82)](https://github.com/user-attachments/assets/258a08ff-aa2a-4690-ac91-2db22a861276)

### 2. Run Code

Run the code by pressing the designated button in the top right hand side or by using the key combination ```Ctrl+Alt+N```

![Screenshot (83)](https://github.com/user-attachments/assets/a813a667-fa55-44e2-8306-f97fa128b8f5)


### 3. View extracted data

After running the code, you will be able to view the output as shown below

![Screenshot (90)](https://github.com/user-attachments/assets/95159e92-bf92-4d65-a556-c7ce150f31eb)

---

## 🧪 Customizing the Dataset

To test your own data:

1. Open `regex_data_extraction.js`
2. Modify the `getApiData()` function:

```javascript
return [
  "Insert your own strings with data to extract..."
];
```

---
