const filter = (card) => {

    const moviesId = document.getElementById('movies');
    const statusId = document.getElementById('status');
    const genderId = document.getElementById('gender');
    const speciesId = document.getElementById('species');
    const allMovies = new Set();
    const allStatus = new Set();
    const allGender = new Set();
    const allSpecies = new Set();

    const cards = document.querySelectorAll('.hero__card');

    const resultsFilters = {
        status: '',
        gender: '',
        species: ''
    };

    card.forEach((item) => {
        if(item.movies) {
            item.movies.forEach((movie) => {
                allMovies.add(movie);
            });
        }
        if(item.status) {
            allStatus.add(item.status.toLowerCase());
        }
        if(item.gender) {
            allGender.add(item.gender.toLowerCase());
        }
        if(item.species) {
            allSpecies.add(item.species.toLowerCase());
        }
    });

    //movies
    allMovies.forEach((item) => {
        const option = document.createElement('option');
        option.textContent = item;
        moviesId.append(option);
    });

    moviesId.addEventListener('change', (event) => {
        const selectedMovie = event.target.value;

        if (selectedMovie === '') {
            cards.forEach((card) => {
                card.style.display = '';
            });
        }else {
            cards.forEach((card) => {
                const moviesList = card.querySelectorAll('.hero__card-movies li');
                const moviesArray = Array.from(moviesList).map(function(li) {
                    return li.textContent;
                });
    
                if (!moviesArray.includes(selectedMovie)) {
                    card.style.display = 'none';
                } else {
                    card.style.display = '';
                };
            });
        }
    });

    //status
    allStatus.forEach((status) => {
        const option = document.createElement('option');
        option.textContent = status;
        statusId.append(option);
    });

    statusId.addEventListener('change', (event) => {
        const selectedStatus = event.target.value;

        cards.forEach((card) => {
            const cardStatus = card.getAttribute('data-status');

            if (selectedStatus === '' || cardStatus === selectedStatus) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    });

    //gender
    allGender.forEach((gender) => {
        const option = document.createElement('option');
        option.textContent = gender;
        genderId.append(option);
    });

    genderId.addEventListener('change', (event) => {
        const selectedGender = event.target.value;

        cards.forEach((card) => {
            const cardGender = card.getAttribute('data-gender');

            if (selectedGender === '' || cardGender === selectedGender) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    });

    //species
    allSpecies.forEach((species) => {
        const option = document.createElement('option');
        option.textContent = species;
        speciesId.append(option);
    });

    speciesId.addEventListener('change', (event) => {
        const selectedSpecies = event.target.value;

        cards.forEach((card) =>{
            const cardSpecies = card.getAttribute('data-species');

            if (selectedSpecies === '' || cardSpecies === selectedSpecies) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    });

    //dependence
    const applyFilters = () => {
        cards.forEach((card) => {
            const matchesStatus = resultsFilters.status === '' || card.getAttribute('data-status') === resultsFilters.status;
            const matchesGender = resultsFilters.gender === '' || card.getAttribute('data-gender') === resultsFilters.gender;
            const matchesSpecies = resultsFilters.species === '' || card.getAttribute('data-species') === resultsFilters.species;
    
            if (matchesStatus && matchesGender && matchesSpecies) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    };
    
    statusId.addEventListener('change', (event) => {
        resultsFilters.status = event.target.value;
        applyFilters();
    });
    
    genderId.addEventListener('change', (event) => {
        resultsFilters.gender = event.target.value;
        applyFilters();
    });
    
    speciesId.addEventListener('change', (event) => {
        resultsFilters.species = event.target.value;
        applyFilters();
    });
}
export default filter;

