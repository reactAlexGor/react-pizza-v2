import ContentLoader from "react-content-loader"

const SkeletonPizzaBlock = () => (
    <ContentLoader
        className="pizza-block"
        speed={4}
        width={280}
        height={500}
        viewBox="0 0 280 500"
        backgroundColor="#fff5d6"
        foregroundColor="#ffe4a8"
    >
        <circle cx="134" cy="136" r="125" />
        <rect x="0" y="279" rx="0" ry="10" width="280" height="23" />
        <rect x="0" y="326" rx="0" ry="10" width="280" height="68" />
        <rect x="0" y="436" rx="0" ry="10" width="95" height="30" />
        <rect x="125" y="427" rx="24" ry="0" width="152" height="45" />
    </ContentLoader>
)

export default SkeletonPizzaBlock;