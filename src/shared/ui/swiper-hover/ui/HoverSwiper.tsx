import { Children, FC, useRef } from 'react';
import { EffectFade, Pagination } from 'swiper/modules';
import { Swiper, SwiperRef } from 'swiper/react';

import { IHoverSwiper } from '../model/IHoverSwiper';

import style from './HoverSwiper.module.scss';

const DynamicHoverSwiper: FC<IHoverSwiper> = ({ children }) => {
  const swiperContainerRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperRef>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!swiperContainerRef.current || !swiperRef.current) return;

    const container = swiperContainerRef.current;
    const rect = container.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const containerWidth = rect.width;
    const progress = mouseX / containerWidth;

    const slidesCount = Children.toArray(children).length;

    if (slidesCount === 0) return;

    const targetIndex = Math.min(Math.floor(progress * slidesCount), slidesCount - 1);

    swiperRef.current.swiper.slideTo(targetIndex);
  };

  const handleMouseLeave = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(0);
    }
  };

  return (
    <div
      ref={swiperContainerRef}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <Swiper
        ref={swiperRef}
        slidesPerView={1}
        modules={[EffectFade, Pagination]}
        effect="fade"
        wrapperClass={style.swiper__wrapper}
        className={style.swiper}
        pagination={{}}
      >
        {children}
      </Swiper>
    </div>
  );
};

export default DynamicHoverSwiper;
