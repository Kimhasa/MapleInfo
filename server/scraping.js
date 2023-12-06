const axios = require('axios');
const cheerio = require('cheerio');
const targetURL = 'https://maplestory.nexon.com/N23Ranking/Contents/Dojang/ThisWeek?t=2';

async function scrapingNexon(req, res) {
    try {
        const response = await axios.get(targetURL);
        const $ = cheerio.load(response.data);

        const userData = $('div.rank_table_wrap > table > tbody > tr.rank01');

        const imageSrc1 = userData.find('td.left span img:first-child').attr('src');
        const userName1 = userData.find('td.left dl dt a').text();
        const userLevel1 = userData.find('td:nth-child(3)').text();
        const userClass1 = userData.find('td.left dl dd').text();
        const userRank1 = userData.find('td:nth-child(4)').text();
        const userRecord1 = userData.find('td:nth-child(5)').text();

        res.json({ imageSrc1, userName1, userLevel1, userClass1, userRank1, userRecord1 });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


function initScraping(app) {
    app.get('/scraping', scrapingNexon);
}

module.exports = initScraping;
