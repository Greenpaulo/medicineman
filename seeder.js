const fs = require('fs');
const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');


// Load env vars
dotenv.config({ path: './config/config.env'})

// Load models
const Essence = require('./models/Essence');
const Reference = require('./models/Reference');
const GroupInfo = require('./models/GroupInfo');

// Connect to DB
connectDB();

// Read JSON files
const abfe = JSON.parse(fs.readFileSync(`${__dirname}/_data/ABFE/abfe.json`, 'utf-8'));
const alaskanFlowers = JSON.parse(fs.readFileSync(`${__dirname}/_data/Alaskan/alaskanFlowers.json`, 'utf-8'));
const alaskanGems = JSON.parse(fs.readFileSync(`${__dirname}/_data/Alaskan/alaskanGems.json`, 'utf-8'));
const alaskanEnvironmental = JSON.parse(fs.readFileSync(`${__dirname}/_data/Alaskan/alaskanEnvironmental.json`, 'utf-8'));
const alaskanResearchFlowers= JSON.parse(fs.readFileSync(`${__dirname}/_data/Alaskan/alaskanResearchFlowers.json`, 'utf-8'));
const alaskanResearchGems= JSON.parse(fs.readFileSync(`${__dirname}/_data/Alaskan/alaskanResearchGems.json`, 'utf-8'));
const alaskanResearchEnvironmental= JSON.parse(fs.readFileSync(`${__dirname}/_data/Alaskan/alaskanResearchEnvironmental.json`, 'utf-8'));
// const alaskanCombinations = JSON.parse(fs.readFileSync(`${__dirname}/_data/Alaskan/alaskanCombinations.json`, 'utf-8'));
const orchids = JSON.parse(fs.readFileSync(`${__dirname}/_data/LTOE/orchids.json`, 'utf-8'));
const gems = JSON.parse(fs.readFileSync(`${__dirname}/_data/LTOE/gems.json`, 'utf-8'));
const livingIsleFlowers = JSON.parse(fs.readFileSync(`${__dirname}/_data/LTOE/livingIsleFlowers.json`, 'utf-8'));
const combinations = JSON.parse(fs.readFileSync(`${__dirname}/_data/LTOE/combinations.json`, 'utf-8'));
const otherEssences = JSON.parse(fs.readFileSync(`${__dirname}/_data/LTOE/otherEssences.json`, 'utf-8'));
const nativeWildFlowers = JSON.parse(fs.readFileSync(`${__dirname}/_data/Pacific/nativeWildFlowers.json`, 'utf-8'));
const newFlowers = JSON.parse(fs.readFileSync(`${__dirname}/_data/Pacific/newFlowers.json`, 'utf-8'));
const seaEssences = JSON.parse(fs.readFileSync(`${__dirname}/_data/Pacific/seaEssences.json`, 'utf-8'));
const springFlowers = JSON.parse(fs.readFileSync(`${__dirname}/_data/Pacific/springFlowers.json`, 'utf-8'));
const weae = JSON.parse(fs.readFileSync(`${__dirname}/_data/WEAE/weae.json`, 'utf-8'));
const crossreference = JSON.parse(fs.readFileSync(`${__dirname}/_data/CrossReference/crossreference.json`, 'utf-8'));
const groupDescriptions = JSON.parse(fs.readFileSync(`${__dirname}/_data/groupDescriptions.json`, 'utf-8'));


// Import into DB
const importData = async () => {
  try {
    await Essence.create(abfe);
    await Essence.create(alaskanFlowers);
    await Essence.create(alaskanGems);
    await Essence.create(alaskanEnvironmental);
    await Essence.create(alaskanResearchFlowers);
    await Essence.create(alaskanResearchGems);
    await Essence.create(alaskanResearchEnvironmental);
    await Essence.create(orchids);
    await Essence.create(gems);
    await Essence.create(livingIsleFlowers);
    await Essence.create(combinations);
    await Essence.create(otherEssences);
    await Essence.create(nativeWildFlowers);
    await Essence.create(newFlowers);
    await Essence.create(seaEssences);
    await Essence.create(springFlowers);
    await Essence.create(weae);
    await Reference.create(crossreference, { checkKeys: false});
    await GroupInfo.create(groupDescriptions);
    

    console.log('Data imported...'.green.inverse);
    process.exit();
  } catch (err) {
    console.error(err);
  }
}

// Delete data
const deleteData = async () => {
  try {
    await Essence.deleteMany();
    await Reference.deleteMany();
    await GroupInfo.deleteMany();

    console.log('Data deleted...'.red.inverse);
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

if(process.argv[2] === '-i') {
  importData();
} else if (process.argv[2] === '-d') {
  deleteData();
};
