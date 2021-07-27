import { Swiper, SwiperSlide } from 'swiper/react';
import { Flex } from '@chakra-ui/react'
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper';
import CarouselCell from './CarouselCell';

SwiperCore.use([Navigation, Pagination, Autoplay])

type Continent = {
    id: number;
    name: string;
    description: string;
    carrouselImage: string;
}

interface CarouselProps {
    continents: Continent[];
}

export default function Carousel({ continents }: CarouselProps) {
    return (
        <Flex
            w="100%"
            h={["250px", "450px"]}
            maxW="1240px"
            mx="auto"
            mb={["5", "10"]}
            mt="12"
        >
            <Swiper
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 4000,
                }}
                style={{ width: '100%', flex: '1' }}
            >

                {continents.map(continent => (<SwiperSlide key={continent.id}>
                    <CarouselCell continent={continent}/>
                </SwiperSlide>
                ))}

            </Swiper>
        </Flex>
    );
}