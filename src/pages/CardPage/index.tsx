const CardPage = () => {
    return (
        <div className={style.container}>
            <img src={data.imgUrl} alt="" />
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <h3>Старая цена: <br></br>{data.oldPrice} ₽</h3>
            <h3>Новая цена: <br></br>{data.price} ₽</h3>
        </div>
    )
};

export default CardPage;