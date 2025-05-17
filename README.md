---

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

---

## 📂 File Structure

```
regex_data_extraction.js     # Main logic (to embed in an HTML file)
README.md                    # You're here!
```

---

## 🧠 How It Works

1. **Regex Definitions**
   The script includes a set of patterns to match common structured data like emails and hashtags.

2. **Simulated API Data**
   A `getApiData()` function returns an array of strings, simulating an API response.

3. **Extraction Function**
   `extractAllData()` loops through all data and collects matches using the defined regex.

4. **Output**
   The data is organized into categories and displayed in the browser's developer console.

---

## 🌐 Running the Script in a Browser

### 1. Create an HTML file

Create a new file named `index.html` and add the following:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Regex Data Extraction</title>
</head>
<body>
  <h1>Open Developer Console to See Extracted Data</h1>

  <script src="regex_data_extraction.js"></script>
</body>
</html>
```

### 2. Place your `regex_data_extraction.js` in the same directory

Make sure the script file is saved in the same folder as your `index.html`.

### 3. Open the HTML File in Your Browser

* Double-click `index.html`, or
* Right-click → “Open With” → Choose your browser

### 4. View Results

* Open the **Developer Console** (press `F12` or right-click → "Inspect" → "Console")
* You’ll see an output like this:

```js
Extracted Data: {
  emails: ['user@example.com', 'test@domain.org', 'hello@company.co.uk'],
  urls: ['https://www.example.com', 'https://sub.site.org/page.html'],
  phones: ['(123) 456-7890', '123-456-7890'],
  creditCards: ['1234-5678-9012-3456'],
  time: ['2:30 PM', '14:30'],
  htmlTags: ['<div class="example">', '</div>'],
  hashtags: ['#OfferTime'],
  currency: ['$1,234.56']
}
```

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
