import { useState, useEffect } from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort'
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import SkeletonPizzaBlock from '../components/PizzaBlock/SkeletonPizzaBlock';
import Pagination from '../pagination/pagination';

const Home = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState(0);
    const [sortObj, setSortObj] = useState({ name: 'популярности', sortProperty: 'rating' });
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setIsLoading(true);

        const category = activeCategory > 0 ? `category=${activeCategory}` : '';
        const sortBy = sortObj.sortProperty.replace('-', '');
        const order = sortObj.sortProperty.includes('-') ? 'asc' : 'desc';


        fetch(`https://660d5c466ddfa2943b3431c8.mockapi.io/items?page=${currentPage}&limit=4${category}&sortBy=${sortBy}&order=${order}`)
            .then(res => res.json())
            .then((arr) => {
                setItems(arr);
                setIsLoading(false);
            })
        window.scrollTo(0, 0);
    }, [activeCategory, sortObj, currentPage]);

    console.log(activeCategory, sortObj);

    const setCategory = (category) => {
        console.log(category);
        setActiveCategory(() => category);
    }

    const setSort = (obj) => {
        setSortObj(() => obj);
    }

    return (
        <>
            <div className="content__top">
                <Categories category={activeCategory} setCategory={setCategory} />
                <Sort sortObj={sortObj} setSort={setSort} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading
                    ? [...new Array(8)].map((_, index) => <SkeletonPizzaBlock key={index} />)
                    : items.map((item, i) => <PizzaBlock key={i} {...item} />)
                }
                <Pagination onPageChange={(number) => setCurrentPage(number)} />
            </div>
        </>
    )
}

export default Home;