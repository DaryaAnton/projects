import getData from './getData';
import render from './render';
import filter from './filter';

const card = () => {

    getData().then((data) => {
        render(data);
        filter(data);
    });
}

export default card;