// MODULES
import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { MdOutlineDateRange } from 'react-icons/md';

// COMPONENTS
import Slider from '../../components/Slider';

// STYLES
import styles from './Post1.module.scss';

function Post1() {
  return (
    <>
      <section className={cn(styles['background-section'])} />
      <section className={cn(styles['post-section'])}>
        <h1 className={cn(styles['blog-title'])}>Posts</h1>
        <div className={cn(styles['post'])}>
          <Slider
            imgSrcs={[
              '/assets/images/IMG_5456.jpg',
              '/assets/images/butik.jpeg',
            ]}
            title="Esnaf Göçmenlerden Şikayetçi"
          />

          <div className={cn(styles['info-area'])}>
            <div className={cn(styles['date'])}>
              Thursday 07 April 2022 <MdOutlineDateRange />
            </div>
            <div className={cn(styles['author'])}>by Ruzgar Ata Ozkan</div>
          </div>

          <h2>Esenyurt Esnafı Göçmenlerden Şikayetçi</h2>

          <div className={cn(styles['content'])}>
            <p>
              İstanbul Esenyurt bölgesinde göçmenlerin yoğunluğu her geçen gün
              artmakta ve haliyle göçmen esnaflarında sayısı artmış durumda.
              Peki yerli esnaf bu konu hakkında ne düşünüyor? Bölgedeki
              esnafların uyrukları yabancılaşmaya başlamasıyla oradaki yerli
              vatandaşın tepkisi nedir?
            </p>

            <div className={cn(styles['visual-area'])}>
              <div className={cn(styles['left'])}>
                <img src="/assets/images/IMG_5489.jpg" alt="r" />
              </div>
              <div className={cn(styles['right'])}>
                <p>
                  Avcilar Firuzköy mahalle Muhtarından aldığımız bilgilere göre
                  Beylikdüzü, Küçükçekmece ve özellikle Avcılar bölgesi 1920 den
                  beri yoğun olarak göçmen yerleşkesi haline gelmiş durumda.
                  Mahalle muhtarına göre bölgenin yüzde 50sinden fazlası göçmen
                  veya yabancı uyruklu. Göçmenlerin kökeni Firuzköy civarında
                  genellikle Bulgar, Beylikdüzü / Esenyurt bölgesinde ise
                  genellikle Arap uyruklu. Hal böyleyken Beylikdüzü gibi göçmen
                  nüfusu yüksek olan bir yerde marketlerin, giyim butik
                  mağazalarının ve bazı esnafların ve müşterilerin yabancı
                  uyruklu olması kaçınılmaz. Fakat yerli esnaf bu durum hakkında
                  ne düşünüyor?
                </p>
              </div>
            </div>

            <p>
              Beylikdüzü / Esenyurt merkezde Butik bir işletme sahibi olan
              Gökhan Yalçın Bey bu durumdan oldukça şikayetçi olan esnaflardan
              bir tanesi. Dediğine göre butiğine gelen göçmen müşterilerden
              bazıları diğer müşterileri rahatsız ve taciz ediyor ve bu durumda
              butiğin müşteri kaybetmesine yol açıyor. Bir diğer durumun ise
              göçmenlerin esnaf rekabetini arttırması ve işletmesinin müşteri
              kaybetmesine yol açması.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Post1;
