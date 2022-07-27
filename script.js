const { GOOGLE_IMG_SCRAP , GOOGLE_QUERY } = require ('google-img-scrap');

(async function(){
    const test = await GOOGLE_IMG_SCRAP({
        search: "programacao",
        limit: 5,
    });
    console.log(test);
}());