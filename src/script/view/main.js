import '../component/anime-list';
import endpoint from '../data/api';
import DataSource from '../data/data-source';

const main = () => {
    const btnSearchElement = document.querySelector('#btn-search');
    const keyword = document.querySelector('#keyword');
    const animeListElement = document.querySelector('anime-list');
    const tabNavigation = document.querySelector('tab-navigation');

    const clearTabSelected = () => {
        tabNavigation.querySelectorAll(".nav .nav-item .nav-link").forEach((item) => {
            item.classList.remove("active");
        });
    }

    btnSearchElement.addEventListener('click', () => {
        
        if (keyword.value === "") {
            animeListElement.errorRender('danger', `Keyword can't be empty`)
            return false
        }
        
        const errorRender = document.querySelector('#error-render')
        if (errorRender) {
            errorRender.remove()
        }
        
        const animeItem = document.querySelectorAll('anime-item')
        if (animeItem) {
            animeItem.forEach(item => {
                item.remove()
            });
        }
        searchAnime(keyword.value)
        keyword.value = ''
    })

    const searchAnime = async(keyword) => {
        try {
            clearTabSelected();
            const results = await DataSource.searchAnime(keyword)
            animeListElement.series = results
        } catch (error) {
            animeListElement.errorRender('danger', `${keyword} Not Found`)
        }
    }

    const getAnime = endpoint => {
        DataSource.getAnime(endpoint)
            .then(renderResult)
            .catch(fallbackResult);
    };

    const renderResult = (results) => {
        animeListElement.series = results;
    }

    const fallbackResult = message => {
        animeListElement.renderError(message);
    };

    const onTabSelect = () => {
        const category = tabNavigation.value;
        switch (category) {
            case 'airing': getAnime(endpoint.airing); break;
            case 'topAnime': getAnime(endpoint.topAnime); break;
            case 'upcoming': getAnime(endpoint.upcoming); break;
        }
    }
    
    tabNavigation.clickEvent = onTabSelect;

    getAnime(endpoint.airing);
};

export default main;