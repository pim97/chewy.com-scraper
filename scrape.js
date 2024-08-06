const Scrappey = require('scrappey-wrapper');
const parse = require('./parse');

// Replace the following details with your own details
const SCRAPPEY_API_KEY = 'API_KEY';

// Create an instance of Scrappey
const scrappey = new Scrappey(SCRAPPEY_API_KEY);

async function run() {
    try {

        const session = await scrappey.createSession({
            //Using a premium proxy
            "premiumProxy": true,
            "proxyCountry": "UnitedStates",

            //Using patched chrome
            "noDriver": true,
            "browser": [
                {
                    "name": "chrome",
                    //Setting chromev126
                    "minVersion": 126,
                    "maxVersion": 126
                }
            ]
        })

        //Scraping chwey with the session created above
        const scrape = await scrappey.get({
            "url": "https://www.chewy.com/go-pet-club-dog-grooming-table-arm/dp/133877",
            "session": session.session
        })

        console.log(JSON.stringify(scrape.solution, undefined, 4))
        
        const parsed = parse(scrape.solution.response);

        console.log(parsed)

        //Destroying the session
        await scrappey.destroySession(session.session)

    } catch (error) {
        console.error(error);
    }
}

run();