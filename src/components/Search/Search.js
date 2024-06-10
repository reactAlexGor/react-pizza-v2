import styles from './Search.module.scss';

const Search = (props) => {
    return (
        <div className={styles.root}>
            <input placeholder="Поиск..." className={styles.input} />

            <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 100 125" x="0px" y="0px"><defs></defs><path class="b" d="m47.95,65.38c-9.61,0-17.43-7.82-17.43-17.43s7.82-17.43,17.43-17.43,17.43,7.82,17.43,17.43-7.82,17.43-17.43,17.43Zm0-31.85c-7.95,0-14.43,6.47-14.43,14.43s6.47,14.43,14.43,14.43,14.43-6.47,14.43-14.43-6.47-14.43-14.43-14.43Z" /><path class="b" d="m72.98,74.48c-.38,0-.77-.15-1.06-.44l-13.65-13.65c-.59-.59-.59-1.54,0-2.12.59-.59,1.54-.59,2.12,0l13.65,13.65c.59.59.59,1.54,0,2.12-.29.29-.68.44-1.06.44Z" /></svg>
        </div>
    )
}

export default Search;