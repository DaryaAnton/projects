const render = (card) => {
    const cardWrapper = document.querySelector('.hero__wrapper');
    cardWrapper.innerHTML = '';

    card.forEach((item) => {
        let cardBackContent = '';
        let moviesList = '';

        const keys = ['name', 'realName', 'actors', 'gender', 'species', 'citizenship', 'status', 'birthDay', 'deathDay'];
        
        keys.forEach(key => {
            if (item[key] !== undefined) {
                cardBackContent += `<div class="hero__list"><span>${key}:</span> ${item[key]}</div>`;
            }
        });

        if (item.movies && Array.isArray(item.movies)) {
            moviesList = `<ul class="hero__card-movies"><span>movies:</span>${
                item.movies.map(movie => `<li>${movie}</li>`).join('')
            }</ul>`;
        }

        cardWrapper.insertAdjacentHTML('beforeend', `
            <div class="hero__card" 
            data-status="${(item.status || '').toLowerCase()}" 
            data-gender="${(item.gender || '').toLowerCase()}" 
            data-species="${(item.species || '').toLowerCase()}">
                <div class="hero__card-front" style="background-image: url('${item.photo}')">
                </div>

                <div class="hero__card-back">
                    ${cardBackContent}  
                    ${moviesList}             
                </div>
            </div>
        `);
    });
}

export default render;