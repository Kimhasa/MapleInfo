const axios = require('axios');
const cheerio = require('cheerio');
const targetURL1 = 'https://maple.gg/';
const targetURL2 = "https://maple.gg/";
const targetURL3 = "https://maple.gg/";
const targetURL4 = "https://maple.gg/";
const worldRank = "https://maplestory.nexon.com/N23Ranking/World/Total";
const rebootWorldRank ="https://maplestory.nexon.com/N23Ranking/World/Total?w=254";
const dojangRank = "https://maplestory.nexon.com/N23Ranking/Contents/Dojang/ThisWeek?t=2";
async function scrapingDojang(req, res) {
    try {
        const response = await axios.get(targetURL1);
        const $ = cheerio.load(response.data);

        const userData1 = $('div > div:nth-child(1) > section > div');

        const imageSrc1 = userData1.find('div.text-center.pl-3.pr-3.pb-2 > img').attr('src');
        const userName1 = userData1.find('div.mb-2.text-center.small > b').text();
        const userLevel1 = userData1.find('div.mb-2.text-center.small > span:nth-child(3)').text();
        const userClass1 = userData1.find('div.mb-2.text-center.small > span.text-secondary').text();
        const userRank1 = userData1.find('div.text-center.pb-3.pl-3.pr-3.w-100 > span').text();
        const userRecord1 = userData1.find('div.text-center.pb-3.pl-3.pr-3.w-100 > small').text();

        res.json({ imageSrc1, userName1, userLevel1, userClass1, userRank1, userRecord1 });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function scrapingSeed(req, res){
    try {
        const response = await axios.get(targetURL2);
        const $ = cheerio.load(response.data);

        const userData2 = $('div > div:nth-child(2) > section > div');

        const imageSrc2 = userData2.find('div.text-center.pl-3.pr-3.pb-2 > img').attr('src');
        const userName2 = userData2.find('div.mb-2.text-center.small > b').text();
        const userLevel2 = userData2.find('div.mb-2.text-center.small > span:nth-child(3)').text();
        const userClass2 = userData2.find('div.mb-2.text-center.small > span.text-secondary').text();
        const userRank2 = userData2.find('div.text-center.pl-3.pr-3.w-100 > div.weekly-card-floor.align-middle').text();
        const userRecord2 = userData2.find('div.text-center.pl-3.pr-3.w-100 > div.weekly-card-duration.align-middle').text();

        res.json({ imageSrc2, userName2, userLevel2, userClass2, userRank2, userRecord2 });
    } catch (error){
        res.status(500).json({ error: error.message });
    }
}

async function scrapingAchive(req, res){
    try {
        const response = await axios.get(targetURL3);
        const $ = cheerio.load(response.data);

        const userData3 = $('div > div:nth-child(3) > section > div >');
        const imageSrc3 = userData3.find('div.text-center.pl-3.pr-3.pb-2 > img').attr('src');
        const userName3 = userData3.find('div.mb-2.text-center.small > b').text();
        const userLevel3 = userData3.find('div.mb-2.text-center.small > span:nth-child(3)').text();
        const userClass3 = userData3.find('div.mb-2.text-center.small > span.text-secondary').text();
        const userRank3 = userData3.find('div.text-center.pl-3.pr-3.w-100 > div.weekly-card-floor.align-middle > span').text();
        const userRecord3 = userData3.find('div.text-center.pl-3.pr-3.w-100 > div.weekly-card-duration.align-middle').text();

        res.json({ imageSrc3, userName3, userLevel3, userClass3, userRank3, userRecord3 });
    } catch (error){
        res.status(500).json({ error: error.message });
    }
}

async function scrapingUnion(req, res){
    try {
        const response = await axios.get(targetURL4);
        const $ = cheerio.load(response.data);

        const userData4 = $('div > div:nth-child(4) > section > div >');
        const imageSrc4 = userData4.find('div.text-center.pl-3.pr-3.pb-2 > img').attr('src');
        const userName4 = userData4.find('div.mb-2.text-center.small > b').text();
        const userLevel4 = userData4.find('div.mb-2.text-center.small > span:nth-child(3)').text();
        const userClass4 = userData4.find('div.mb-2.text-center.small > span.text-secondary').text();
        const userRank4 = userData4.find('div.text-center.pl-3.pr-3.w-100 > div.weekly-card-floor.align-middle > span').text();
        const userRecord4 = userData4.find('div.text-center.pl-3.pr-3.w-100 > div.weekly-card-duration.align-middle').text();
        res.json({ imageSrc4, userName4, userLevel4, userClass4, userRank4, userRecord4 });
    } catch (error){
        res.status(500).json({ error: error.message });
    }
}

async function scrapingWorldRank(req, res) {
    try {
        const response = await axios.get(worldRank);
        const $ = cheerio.load(response.data);

        const rankData1 = $('div.rank_table_wrap > table > tbody > tr.rank01');
        const rankName1 = rankData1.find('td.left > dl > dt').text();
        const rankLevel1 = rankData1.find('td:nth-child(3)').text();
        const rankClass1 = rankData1.find('td.left > dl > dd').text();
        const rankGuild1 = rankData1.find(' td:nth-child(6)').text();

        const rankData2 = $('div.rank_table_wrap > table > tbody > tr.rank02');
        const rankName2 = rankData2.find('td.left > dl > dt').text();
        const rankLevel2 = rankData2.find('td:nth-child(3)').text();
        const rankClass2 = rankData2.find('td.left > dl > dd').text();
        const rankGuild2 = rankData2.find(' td:nth-child(6)').text();

        const rankData3 = $('div.rank_table_wrap > table > tbody > tr.rank03');
        const rankName3 = rankData3.find('td.left > dl > dt').text();
        const rankLevel3 = rankData3.find('td:nth-child(3)').text();
        const rankClass3 = rankData3.find('td.left > dl > dd').text();
        const rankGuild3 = rankData3.find(' td:nth-child(6)').text();

        const rankData4 = $('div.rank_table_wrap > table > tbody > tr:nth-child(4)');
        const rankName4 = rankData4.find('td.left > dl > dt').text();
        const rankLevel4 = rankData4.find('td:nth-child(3)').text();
        const rankClass4 = rankData4.find('td.left > dl > dd').text();
        const rankGuild4 = rankData4.find(' td:nth-child(6)').text();

        const rankData5 = $('div.rank_table_wrap > table > tbody > tr:nth-child(5)');
        const rankName5 = rankData5.find('td.left > dl > dt').text();
        const rankLevel5 = rankData5.find('td:nth-child(3)').text();
        const rankClass5 = rankData5.find('td.left > dl > dd').text();
        const rankGuild5 = rankData5.find(' td:nth-child(6)').text();

        const rankData6 = $('div.rank_table_wrap > table > tbody > tr:nth-child(6)');
        const rankName6 = rankData6.find('td.left > dl > dt').text();
        const rankLevel6 = rankData6.find('td:nth-child(3)').text();
        const rankClass6 = rankData6.find('td.left > dl > dd').text();
        const rankGuild6 = rankData6.find(' td:nth-child(6)').text();

        const rankData7 = $('div.rank_table_wrap > table > tbody > tr:nth-child(7)');
        const rankName7 = rankData7.find('td.left > dl > dt').text();
        const rankLevel7 = rankData7.find('td:nth-child(3)').text();
        const rankClass7 = rankData7.find('td.left > dl > dd').text();
        const rankGuild7 = rankData7.find(' td:nth-child(6)').text();

        const rankData8 = $('div.rank_table_wrap > table > tbody > tr:nth-child(8)');
        const rankName8 = rankData8.find('td.left > dl > dt').text();
        const rankLevel8 = rankData8.find('td:nth-child(3)').text();
        const rankClass8 = rankData8.find('td.left > dl > dd').text();
        const rankGuild8 = rankData8.find(' td:nth-child(6)').text();



        res.json({
            rankName1, rankLevel1, rankClass1, rankGuild1,
            rankName2, rankLevel2, rankClass2, rankGuild2,
            rankName3, rankLevel3, rankClass3, rankGuild3,
            rankName4, rankLevel4, rankClass4, rankGuild4,
            rankName5, rankLevel5, rankClass5, rankGuild5,
            rankName6, rankLevel6, rankClass6, rankGuild6,
            rankName7, rankLevel7, rankClass7, rankGuild7,
            rankName8, rankLevel8, rankClass8, rankGuild8
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function scrapingRebootWorldRank(req, res) {
    try {
        const response = await axios.get(rebootWorldRank);
        const $ = cheerio.load(response.data);

        const rebootRankData1 = $('div.rank_table_wrap > table > tbody > tr.rank01');
        const rebootRankName1 = rebootRankData1.find('td.left > dl > dt > a').text();
        const rebootRankLevel1 = rebootRankData1.find('td:nth-child(3)').text();
        const rebootRankClass1 = rebootRankData1.find('td.left > dl > dd').text();
        const rebootRankGuild1 = rebootRankData1.find(' td:nth-child(6)').text();

        const rebootRankData2 = $('div.rank_table_wrap > table > tbody > tr.rank02');
        const rebootRankName2 = rebootRankData2.find('td.left > dl > dt > a').text();
        const rebootRankLevel2 = rebootRankData2.find('td:nth-child(3)').text();
        const rebootRankClass2 = rebootRankData2.find('td.left > dl > dd').text();
        const rebootRankGuild2 = rebootRankData2.find(' td:nth-child(6)').text();

        const rebootRankData3 = $('div.rank_table_wrap > table > tbody > tr.rank03');
        const rebootRankName3 = rebootRankData3.find('td.left > dl > dt > a').text();
        const rebootRankLevel3 = rebootRankData3.find('td:nth-child(3)').text();
        const rebootRankClass3 = rebootRankData3.find('td.left > dl > dd').text();
        const rebootRankGuild3 = rebootRankData3.find(' td:nth-child(6)').text();

        const rebootRankData4 = $('div.rank_table_wrap > table > tbody > tr:nth-child(4)');
        const rebootRankName4 = rebootRankData4.find('td.left > dl > dt > a').text();
        const rebootRankLevel4 = rebootRankData4.find('td:nth-child(3)').text();
        const rebootRankClass4 = rebootRankData4.find('td.left > dl > dd').text();
        const rebootRankGuild4 = rebootRankData4.find(' td:nth-child(6)').text();

        const rebootRankData5 = $('div.rank_table_wrap > table > tbody > tr:nth-child(5)');
        const rebootRankName5 = rebootRankData5.find('td.left > dl > dt > a').text();
        const rebootRankLevel5 = rebootRankData5.find('td:nth-child(3)').text();
        const rebootRankClass5 = rebootRankData5.find('td.left > dl > dd').text();
        const rebootRankGuild5 = rebootRankData5.find(' td:nth-child(6)').text();

        const rebootRankData6 = $('div.rank_table_wrap > table > tbody > tr:nth-child(6)');
        const rebootRankName6 = rebootRankData6.find('td.left > dl > dt > a').text();
        const rebootRankLevel6 = rebootRankData6.find('td:nth-child(3)').text();
        const rebootRankClass6 = rebootRankData6.find('td.left > dl > dd').text();
        const rebootRankGuild6 = rebootRankData6.find(' td:nth-child(6)').text();

        const rebootRankData7 = $('div.rank_table_wrap > table > tbody > tr:nth-child(7)');
        const rebootRankName7 = rebootRankData7.find('td.left > dl > dt > a').text();
        const rebootRankLevel7 = rebootRankData7.find('td:nth-child(3)').text();
        const rebootRankClass7 = rebootRankData7.find('td.left > dl > dd').text();
        const rebootRankGuild7 = rebootRankData7.find(' td:nth-child(6)').text();

        const rebootRankData8 = $('div.rank_table_wrap > table > tbody > tr:nth-child(8)');
        const rebootRankName8 = rebootRankData8.find('td.left > dl > dt > a').text();
        const rebootRankLevel8 = rebootRankData8.find('td:nth-child(3)').text();
        const rebootRankClass8 = rebootRankData8.find('td.left > dl > dd').text();
        const rebootRankGuild8 = rebootRankData8.find(' td:nth-child(6)').text();

        res.json({
            rebootRankName1, rebootRankLevel1, rebootRankClass1, rebootRankGuild1,
            rebootRankName2, rebootRankLevel2, rebootRankClass2, rebootRankGuild2,
            rebootRankName3, rebootRankLevel3, rebootRankClass3, rebootRankGuild3,
            rebootRankName4, rebootRankLevel4, rebootRankClass4, rebootRankGuild4,
            rebootRankName5, rebootRankLevel5, rebootRankClass5, rebootRankGuild5,
            rebootRankName6, rebootRankLevel6, rebootRankClass6, rebootRankGuild6,
            rebootRankName7, rebootRankLevel7, rebootRankClass7, rebootRankGuild7,
            rebootRankName8, rebootRankLevel8, rebootRankClass8, rebootRankGuild8
        });


    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function scrapingDojangRank(req, res) {
    try {
        const response = await axios.get(dojangRank);
        const $ = cheerio.load(response.data);

        const dojangRankData1 = $('div.rank_table_wrap > table > tbody > tr.rank01');
        const dojangRankName1 = dojangRankData1.find('td.left > dl > dt > a').text();
        const dojangRankLevel1 = dojangRankData1.find('td:nth-child(3)').text();
        const dojangRankClass1 = dojangRankData1.find('td.left > dl > dd').text();
        const dojangRank1 = dojangRankData1.find('td:nth-child(4)').text();
        const dojangRankRecord1 = dojangRankData1.find(' td:nth-child(5)').text();

        const dojangRankData2 = $('div.rank_table_wrap > table > tbody > tr.rank02');
        const dojangRankName2 = dojangRankData2.find('td.left > dl > dt > a').text();
        const dojangRankLevel2 = dojangRankData2.find('td:nth-child(3)').text();
        const dojangRankClass2 = dojangRankData2.find('td.left > dl > dd').text();
        const dojangRank2 = dojangRankData2.find('td:nth-child(4)').text();
        const dojangRankRecord2 = dojangRankData2.find(' td:nth-child(5)').text();

        const dojangRankData3 = $('div.rank_table_wrap > table > tbody > tr.rank03');
        const dojangRankName3 = dojangRankData3.find('td.left > dl > dt > a').text();
        const dojangRankLevel3 = dojangRankData3.find('td:nth-child(3)').text();
        const dojangRankClass3 = dojangRankData3.find('td.left > dl > dd').text();
        const dojangRank3 = dojangRankData3.find('td:nth-child(4)').text();
        const dojangRankRecord3 = dojangRankData3.find(' td:nth-child(5)').text();

        const dojangRankData4 = $('div.rank_table_wrap > table > tbody > tr:nth-child(4)');
        const dojangRankName4 = dojangRankData4.find('td.left > dl > dt > a').text();
        const dojangRankLevel4 = dojangRankData4.find('td:nth-child(3)').text();
        const dojangRankClass4 = dojangRankData4.find('td.left > dl > dd').text();
        const dojangRank4 = dojangRankData4.find('td:nth-child(4)').text();
        const dojangRankRecord4 = dojangRankData4.find('td:nth-child(5)').text();

        const dojangRankData5 = $('div.rank_table_wrap > table > tbody > tr:nth-child(5)');
        const dojangRankName5 = dojangRankData5.find('td.left > dl > dt > a').text();
        const dojangRankLevel5 = dojangRankData5.find('td:nth-child(3)').text();
        const dojangRankClass5 = dojangRankData5.find('td.left > dl > dd').text();
        const dojangRank5 = dojangRankData5.find('td:nth-child(4)').text();
        const dojangRankRecord5 = dojangRankData5.find('td:nth-child(5)').text();

        const dojangRankData6 = $('div.rank_table_wrap > table > tbody > tr:nth-child(6)');
        const dojangRankName6 = dojangRankData6.find('td.left > dl > dt > a').text();
        const dojangRankLevel6 = dojangRankData6.find('td:nth-child(3)').text();
        const dojangRankClass6 = dojangRankData6.find('td.left > dl > dd').text();
        const dojangRank6 = dojangRankData6.find('td:nth-child(4)').text();
        const dojangRankRecord6 = dojangRankData6.find('td:nth-child(5)').text();

        const dojangRankData7 = $('div.rank_table_wrap > table > tbody > tr:nth-child(7)');
        const dojangRankName7 = dojangRankData7.find('td.left > dl > dt > a').text();
        const dojangRankLevel7 = dojangRankData7.find('td:nth-child(3)').text();
        const dojangRankClass7 = dojangRankData7.find('td.left > dl > dd').text();
        const dojangRank7 = dojangRankData7.find('td:nth-child(4)').text();
        const dojangRankRecord7 = dojangRankData7.find('td:nth-child(5)').text();

        const dojangRankData8 = $('div.rank_table_wrap > table > tbody > tr:nth-child(8)');
        const dojangRankName8 = dojangRankData8.find('td.left > dl > dt > a').text();
        const dojangRankLevel8 = dojangRankData8.find('td:nth-child(3)').text();
        const dojangRankClass8 = dojangRankData8.find('td.left > dl > dd').text();
        const dojangRank8 = dojangRankData8.find('td:nth-child(4)').text();
        const dojangRankRecord8 = dojangRankData8.find('td:nth-child(5)').text();



        res.json({
            dojangRankName1, dojangRankLevel1, dojangRankClass1, dojangRank1, dojangRankRecord1,
            dojangRankName2, dojangRankLevel2, dojangRankClass2, dojangRank2, dojangRankRecord2,
            dojangRankName3, dojangRankLevel3, dojangRankClass3, dojangRank3, dojangRankRecord3,
            dojangRankName4, dojangRankLevel4, dojangRankClass4, dojangRank4, dojangRankRecord4,
            dojangRankName5, dojangRankLevel5, dojangRankClass5, dojangRank5, dojangRankRecord5,
            dojangRankName6, dojangRankLevel6, dojangRankClass6, dojangRank6, dojangRankRecord6,
            dojangRankName7, dojangRankLevel7, dojangRankClass7, dojangRank7, dojangRankRecord7,
            dojangRankName8, dojangRankLevel8, dojangRankClass8, dojangRank8, dojangRankRecord8
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

function initScraping(app) {
    app.get('/scrapingDojang', scrapingDojang);
    app.get('/scrapingSeed', scrapingSeed);
    app.get('/scrapingAchive', scrapingAchive);
    app.get('/scrapingUnion', scrapingUnion);
    app.get('/scrapingWorldRank', scrapingWorldRank);
    app.get('/scrapingRebootWorldRank', scrapingRebootWorldRank);
    app.get('/scrapingDojangRank', scrapingDojangRank);
}

module.exports = initScraping;
