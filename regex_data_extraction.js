// Regular expressions we will need to extract the desired data
const patterns = {
  emails: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g,
  urls: /https?:\/\/[\w\-]+(\.[\w\-]+)+([\/\w\-._~:?#[\]@!$&'()*+,;=]*)?/g,
  phones: /(\(\d{3}\)\s?|\d{3}[-.])\d{3}[-.]\d{4}/g,
  creditCards: /\b\d{4}[-\s]?\d{4}[-\s]?\d{4}[-\s]?\d{4}\b/g,
  time: /\b((1[0-2]|0?[1-9]):[0-5][0-9]\s?(AM|PM))|([01]?[0-9]|2[0-3]):[0-5][0-9]\b/g,
  htmlTags: /<\/?[a-z][\s\S]*?>/gi,
  hashtags: /#\w+/g,
  currency: /\$\d{1,3}(,\d{3})*(\.\d{2})?/g
};

// Simulate a large dataset: API returns an array of strings (pages)
function getApiData() {
  // This would be replaced by actual API call in production
  return [
    `Contact us at user@example.com. Visit https://www.example.com. Call (123) 456-7890.`,
    `<div class="example">Price is $1,234.56. Use card 1234-5678-9012-3456. #OfferTime</div>`,
    `Meeting is at 2:30 PM or 14:30. More info at https://sub.site.org/page.html`,
    `Emails: test@domain.org, hello@company.co.uk | Phone: 123-456-7890`
    // ...hundreds or thousands more pages
  ];
}

// Extracting data from pages using the regex

function extractAllData(pages) {
  const results = {
    emails: [],
    urls: [],
    phones: [],
    creditCards: [],
    time: [],
    htmlTags: [],
    hashtags: [],
    currency: []
  };

  for (let page of pages) {
    for (let key in patterns) {
      const matches = page.match(patterns[key]);
      if (matches) {
        results[key].push(...matches);
      }
    }
  }

  return results;
}

// Execution
const apiResponse = getApiData();
const extractedData = extractAllData(apiResponse);

console.log("Extracted Data:", extractedData);
