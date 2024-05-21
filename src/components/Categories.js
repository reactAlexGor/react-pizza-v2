import React from "react";

function Categories(props) {
    const [activeIndex, setActiveIndex] = React.useState(0);

    const categories = [
        'Все',
        'Мясные',
        'Вегетарианская',
        'Гриль',
        'Острые',
        'Закрытые',
    ]

    const onClickCategories = (index) => {
        setActiveIndex(index);
    }

    return (
        <div className="categories">
            <ul>
                {categories.map((item, i) => (
                    <li className={activeIndex === i ? 'active' : i}
                        onClick={() => onClickCategories(i)}
                        key={i}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Categories;