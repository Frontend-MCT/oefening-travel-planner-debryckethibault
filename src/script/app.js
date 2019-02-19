let countryHolder;

const localKey = "travel-planner";

const hasItem = key => {
    
};

const addItem = key => {

};

const removeItem = key => {

};

const countItems = () => {

};


const addListenersToCountries = function(classSelector){
    const countries = document.querySelectorAll(classSelector);
    for (const country of countries){
        country.addEventListener("click", function(){
            console.log("You clicked me ", this)
        });
    }
};

const showCounties = data => {
    console.log(data);
    let countries = "";
    for (const c of data) {
        countries += `
        <article>
                    <input id="${c.cioc}-${c.alpha2Code}" class="o-hide c-country-input" type="checkbox">
                    <label for="${c.cioc}-${c.alpha2Code}" class="c-country js-country">
                    <div class="c-country-header">
                        <h2 class="c-country-header__name">${c.name}</h2>
                        <img class="c-country-header__flag" src="${c.flag}" alt="The flag of ${c.flag}.">
                    </div>
                    <p class="c-country__native-name">${c.nativeName}</p>
                </label>
                </article>
                `;
    }

    countryHolder.innerHTML = countries;    

    addListenersToCountries('.js-country');

};

const fetchCountries = region => {

    let url = `https://restcountries.eu/rest/v2/region/${region}`;
    fetch(url)
        .then((result) => result.json())
        .then((data) => showCounties(data))
        .catch(err => console.error(`Error, ${err}`));
};

const enableListeners = () => {
    const regionButtons = document.querySelectorAll(".js-region-select");
    for (const button of regionButtons) {
        button.addEventListener("click", function () {
            const region = this.getAttribute("data-region");

            fetchCountries(region);
        });
    }
    countryHolder = document.querySelector(".js-country-holder");

    fetchCountries("europe");
};

const init = () => {
    console.log("Init")
    enableListeners();
}

document.addEventListener("DOMContentLoaded", init);