
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

//https://uploads.tickettailor.com/c_crop,dpr_1.0,h_506,q_100,w_1595,x_0,y_1/c_scale,g_center,h_204,q_85,w_640/v1/production/userfiles/y5t9vgc8mobf4serrp8v.jpg?_a=BAAAV6DQ


const images = [
   { src: 'https://static.wixstatic.com/media/8f1601_3d459feaa29c4c0f989f2c48980e5fa0~mv2.png/v1/fill/w_381,h_707,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/heartbeat%202024%20instagramstory.png', alt:'Baile 5'}, 
   
  { src: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=709,h=709,fit=crop/YBgyGg78D6T5LNkg/bbf24-ig-post-AVLNrzob7jc79Ovn.png', alt: 'Baile 1' },

  { src: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=709,h=709,fit=crop/YBgyGg78D6T5LNkg/instagram-fiesta-de-espana-AVLJaMKWjBur5lln.jpg', alt: 'Baile 3' },
];

const images_horizontal = [
    { src: 'https://static.wixstatic.com/media/8f1601_3d459feaa29c4c0f989f2c48980e5fa0~mv2.png/v1/fill/w_381,h_707,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/heartbeat%202024%20instagramstory.png', alt:'Baile 5'}, 
    { src: 'https://uploads.tickettailor.com/c_crop,dpr_1.0,h_506,q_100,w_1595,x_0,y_1/c_scale,g_center,h_204,q_85,w_640/v1/production/userfiles/y5t9vgc8mobf4serrp8v.jpg?_a=BAAAV6DQ', alt: 'Baile 1' },
   { src: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=709,h=709,fit=crop/YBgyGg78D6T5LNkg/bbf24-ig-post-AVLNrzob7jc79Ovn.png', alt: 'Baile 1' },
   { src: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1224,h=865,fit=crop/YBgyGg78D6T5LNkg/bbf24-detailed-schedule-mjE2N1lnJGfM5ENR.png', alt: 'Baile 2' },
   { src: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=709,h=709,fit=crop/YBgyGg78D6T5LNkg/instagram-fiesta-de-espana-AVLJaMKWjBur5lln.jpg', alt: 'Baile 3' },
 ];

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <>
        <Slider {...settings}>
            {images.map((image, index) => (
                <div key={index}>
                <img src={image.src} alt={image.alt} className="w-full h-64 object-cover rounded-lg shadow-lg" />
                </div>
            ))}
        </Slider>
    </>
  );
};

export default ImageSlider;