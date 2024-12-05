// 'use client'
// import Image from 'next/image';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// const ImageSlider = () => {
//   const images = [
//     'https://themewant.com/products/wordpress/almaris/wp-content/uploads/2024/08/room-image-2-600x400.webp',
//     'https://themewant.com/products/wordpress/almaris/wp-content/uploads/2024/08/room-image-2-600x400.webp',
//     'https://themewant.com/products/wordpress/almaris/wp-content/uploads/2024/08/room-image-2-600x400.webp',
//     'https://themewant.com/products/wordpress/almaris/wp-content/uploads/2024/08/room-image-2-600x400.webp',
//     'https://themewant.com/products/wordpress/almaris/wp-content/uploads/2024/08/room-image-2-600x400.webp',
//   ];

//   return (
//     <div className="w-full max-w-4xl mx-auto">
//       <Swiper
//         modules={[Navigation, Pagination]}
//         spaceBetween={30}
//         slidesPerView={1}
//         navigation
//         pagination={{ clickable: true }}
//         loop
//       >
//         {images.map((src, index) => (
//           <SwiperSlide key={index}>
//             <Image
//               src={src}
//               alt={`Slide image ${index + 1}`}
//               width={400}
//               height={500}
//               className="object-cover"
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default ImageSlider;





// 'use client';
// import Image from 'next/image';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// const ImageSlider = () => {
//   const images = [
//     'https://themewant.com/products/wordpress/almaris/wp-content/uploads/2024/08/room-image-2-600x400.webp',
//     'https://themewant.com/products/wordpress/almaris/wp-content/uploads/2024/08/room-image-2-600x400.webp',
//     'https://themewant.com/products/wordpress/almaris/wp-content/uploads/2024/08/room-image-2-600x400.webp',
//     'https://themewant.com/products/wordpress/almaris/wp-content/uploads/2024/08/room-image-2-600x400.webp',
//     'https://themewant.com/products/wordpress/almaris/wp-content/uploads/2024/08/room-image-2-600x400.webp',
//   ];

//   return (
//     <div className="w-full max-w-6xl mx-auto py-6">
//       <Swiper
//         modules={[Navigation, Pagination]}
//         // spaceBetween={30}
//         slidesPerView={3}
//         navigation
//         pagination={{ clickable: true }}
//         centeredSlides
//         loop
//       >
//         {images.map((src, index) => (
//           <SwiperSlide key={index}>
//             <div className="relative flex justify-center">
//               <Image
//                 src={src}
//                 alt={`Slide image ${index + 1}`}
//                 width={index === 1 ? 450 : 300} // Larger size for the middle image
//                 height={index === 1 ? 500 : 350} // Adjust height accordingly
//                 className={`object-cover transition-all ${
//                   index === 1
//                     ? 'scale-110'
//                     : 'scale-90 opacity-70'
//                 }`} // Different styles for the middle image
//               />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default ImageSlider;





'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ImageSlider = () => {
  const images = [
    'https://themewant.com/products/wordpress/almaris/wp-content/uploads/2024/08/room-image-2-600x400.webp',
    'https://themewant.com/products/wordpress/almaris/wp-content/uploads/2024/08/room-image-2-600x400.webp',
    'https://themewant.com/products/wordpress/almaris/wp-content/uploads/2024/08/room-image-2-600x400.webp',
  ];

  return (
    <div className="w-full max-w-6xl mx-auto py-8">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={3}
        spaceBetween={30}
        navigation
        pagination={{ clickable: true }}
        centeredSlides
        loop
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div
              className={`relative overflow-hidden ${
                index === 1 ? 'scale-105 z-10' : 'scale-90 opacity-80'
              } transition-all duration-300`}
            >
              <Image
                src={src}
                alt={`Slide image ${index + 1}`}
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-md"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
