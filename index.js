const axios = require('axios');
const cheerio = require('cheerio');
const https = require('https');

async function googleSearch(query) {
    const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    try {
        const { data } = await axios.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        });
        const $ = cheerio.load(data);
        const results = [];
        $('.tF2Cxc').each((i, el) => {
            const title = $(el).find('.DKV0Md').text();
            const link = $(el).find('.yuRUbf a').attr('href');
            const snippet = $(el).find('.VwiC3b').text();
            if (link) results.push({ title, link, snippet });
        });
        return results;
    } catch (error) {
        throw new Error(`Failed to fetch Google search results. Error: ${error.message}`);
    }
}

async function checkWebsiteForKeywords(url) {
    try {
        const keywords = ["gacor", "slot", "judi", "betting", "jackpot", 'togel', 'togel', 'WD', 'JP', 'macau', 'Toto', 'depo', 'hoki', 'rungkat', 'thailand', 'spin', 'profit', 'scatter', 'zeus'];
        const httpsAgent = new https.Agent({ rejectUnauthorized: false });
        const response = await axios.get(url, { httpsAgent });
        const html = response.data;
        const $ = cheerio.load(html);
        const textElements = $('body *').contents().map((i, el) => $(el).text().trim().toLowerCase()).get();
        for (const text of textElements) {
            for (const keyword of keywords) {
                if (text.includes(keyword)) {
                    const highlightedText = text.replace(
                        new RegExp(keyword, 'gi'),
                        (match) => `<mark>${match}</mark>`
                    );
                    return `Keyword "${keyword}" found in text: "${highlightedText}"`;
                }
            }
        }
        return `No suspicious keywords found on ${url}.`;
    } catch (error) {
        return `Failed to access ${url}. Error: ${error.message}`;
    }
}

module.exports = {
    googleSearch,
    checkWebsiteForKeywords
};
