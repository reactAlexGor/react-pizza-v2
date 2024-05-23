import React from "react";

function Categories({ category, setCategory }) {

    const categories = [
        'Все',
        'Мясные',
        'Вегетарианская',
        'Гриль',
        'Острые',
        'Закрытые',
    ];


    return (
        <div className="categories">
            <ul>
                {categories.map((item, i) => (
                    <li className={category === i ? 'active' : i}
                        onClick={() => setCategory(i)}
                        key={i}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Categories;