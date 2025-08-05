import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';

import { IProductCard } from '../model/IProductCard';

import style from './ProductCard.module.scss';

import Button from '@/shared/ui/button/ui/Button';
import HoverSwiper from '@/shared/ui/swiper-hover/ui/HoverSwiper';
import Text from '@/shared/ui/text/ui/Text';
import Title from '@/shared/ui/title/ui/Title';

const ProductCard: FC<IProductCard> = props => {
  const { id, userId, title, price, images } = props;
  const navigate = useNavigate();

  const handleClickCard = () => {
    navigate(`/product/${id}`);
  };

  const handleClickBuy = (e: React.MouseEvent) => {
    console.log(`В корзину добавлен товар: ${id} от пользователя: ${userId}`);
    e.stopPropagation();
  };

  return (
    <article
      className={style.card}
      onClick={handleClickCard}
    >
      <HoverSwiper>
        {images.map(image => (
          <SwiperSlide key={image}>
            <div className={style.card__image}>
              <img
                src={image}
                alt=""
              />
            </div>
          </SwiperSlide>
        ))}
      </HoverSwiper>

      <div className={style.card__content}>
        <Title
          variant="30"
          className={style.card__price}
        >
          {price} ₽
        </Title>
        {title ? (
          <Text
            variant="18"
            className={style.card__title}
          >
            {title}
          </Text>
        ) : (
          <Text
            variant="18"
            className={style.card__title}
          >
            Не определено описание!!!
          </Text>
        )}

        <Text
          variant="13"
          className={style.card__title}
        >
          Продает пользователь {userId} по цене {price}
        </Text>
        <Button
          text="Добавить в корзину"
          onClick={handleClickBuy}
          className={style.card__button}
        />
      </div>
    </article>
  );
};

export default ProductCard;
