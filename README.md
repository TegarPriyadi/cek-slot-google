<p>Cek slot google</p>

# search for sites that are indicated to be affected by slots in google search

Examples:

```javascript
const {googleSearch, checkWebsiteForKeywords} = require('cek-slot-google');

const flaggedResults={};
const searchResults = await googleSearch('bandung');
    for (const result of searchResults) {
    const checkResult = await checkWebsiteForKeywords(result.link);
if (checkResult.includes('Keyword')) {
```
