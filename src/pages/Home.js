import { useState, useEffect } from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort'
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import SkeletonPizzaBlock from '../components/PizzaBlock/SkeletonPizzaBlock';
import Pagination from '../pagination/pagination';

const Home = ({ searchValue }) => {
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
        const search = searchValue ? `&search=${searchValue}` : '';

        fetch(`https://660d5c466ddfa2943b3431c8.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`)
            .then(res => res.json())
            .then((arr) => {
                setItems(arr);
                setIsLoading(false);
            })
        window.scrollTo(0, 0);
    }, [activeCategory, sortObj, currentPage, searchValue]);

    const setCategory = (category) => {
        setActiveCategory(() => category);
    }

    const setSort = (obj) => {
        setSortObj(() => obj);
    }

    const skeletons = [...new Array(8)].map((_, index) => <SkeletonPizzaBlock key={index} />);

    const pizzas = items.map((item, i) => <PizzaBlock key={i} {...item} />);

    return (
        <>
            <div className="content__top">
                <Categories category={activeCategory} setCategory={setCategory} />
                <Sort sortObj={sortObj} setSort={setSort} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading
                    ? skeletons
                    : pizzas
                }
                <Pagination onPageChange={(number) => setCurrentPage(number)} />
            </div>
        </>
    )
}

export default Home;