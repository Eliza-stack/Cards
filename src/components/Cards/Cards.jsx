import style from './Cards.module.scss';


export const Cards =({title, description, image}) => {
  return (
    <>
      <div className={style.container}>
        <div className={style.card}>
            <div className={style.image}>
                <img src={image} alt="Avatar" />
            </div>
            <h3>{title}</h3>
            <p> {description}</p>
        </div>
      </div>
    </>
  );
}


