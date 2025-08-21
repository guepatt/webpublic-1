// src/components/HeroSlider.js
import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



const slides = [
  {
    title: "Welcome to Our Website",
    subtitle: "We build amazing web experiences.",
    background: "/images/slide1.jpg",
  },
  {
    title: "Modern Design",
    subtitle: "Beautiful UI with Material-UI.",
    background: "/images/slide2.jpg",
  },
  {
    title: "Fast and Responsive",
    subtitle: "Optimized for performance.",
    background: "/images/slide3.jpg",
  },
];

const SlidePage = () => {
  
  
  return (
    <Box sx={{ width: '100%', height: '100vh', overflow: 'hidden' }}>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        effect="fade"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                backgroundImage: `url(${slide.background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                textAlign: 'center',
                px: 3,
              }}
            >
              <Box sx={{ backgroundColor: 'rgba(0,0,0,0.5)', p: 4, borderRadius: 2 }}>
                <Typography variant="h3" component="h1" gutterBottom>
                  {slide.title}
                </Typography>
                <Typography variant="h6">{slide.subtitle}</Typography>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default SlidePage;
