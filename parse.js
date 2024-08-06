const cheerio = require('cheerio');

function parse(html) {
    if (!html) {

        html = `
            <div class="product">
                <h1 class="product-name">Go Pet Club Dog Grooming Table with Arm</h1>
                <span class="manufacturer-name">By <a href="https://www.chewy.com/brands/go-pet-club-12906">Go Pet Club</a></span>
                <div class="ratings">
                    <span class="ratings-count">471 Ratings</span>
                    <span class="rating">Rated 4.7 out of 5 stars</span>
                </div>
            </div>
    `;
    }

    const $ = cheerio.load(html);

    // Extract data
    const productName = $('.product-name').text();
    const manufacturerName = $('.manufacturer-name a').text();
    const ratingsCount = $('.ratings-count').text();
    const rating = $('.rating').text();

    const productData = {
        productName,
        manufacturerName,
        ratingsCount,
        rating,
    };

    return productData;
}

module.exports = parse;