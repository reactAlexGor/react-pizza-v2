import { useState, useEffect } from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort'
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import SkeletonPizzaBlock from '../components/PizzaBlock/SkeletonPizzaBlock';


const Home = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://660d5c466ddfa2943b3431c8.mockapi.io/items')
            .then(res => res.json())
            .then((arr) => {
                setItems(arr);
                setIsLoading(false);
            })
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="content__top">
                <Categories />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading
                    ? [...new Array(8)].map((_, index) => <SkeletonPizzaBlock key={index} />)
                    : items.map((item, i) => <PizzaBlock key={i} {...item} />)
                }
            </div>
        </>
    )
}

export default Home;