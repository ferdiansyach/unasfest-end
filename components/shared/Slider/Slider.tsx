"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Card, CardContent } from "@/components/ui/card";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import { MoveRight } from "lucide-react";

type Prop = {
  index: number;
  detail: string;
};

type Props = Prop[];

type PropsTypes = {
  props: Props;
};

const MissionsSlider: React.FC<PropsTypes> = ({ props }) => {
  return (
    <div className="relative">
      <Swiper
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1440: { slidesPerView: 3 },
        }}
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Pagination, Navigation]}
        className="overflow-hidden"
      >
        {props.map((prop) => (
          <SwiperSlide key={prop.index} className="w-full h-full">
            <Card className="w-full h-full bg-page-white text-page-black flex flex-col justify-between rounded-none flex-shrink-0 cursor-grab">
              <CardContent className="flex flex-col gap-y-4 text-left">
                <h1 className="text-5xl font-bungee font-semibold">
                  0{prop.index}
                </h1>
                <p className="text-xl font-medium">{prop.detail}</p>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom Pagination and Navigation Container */}
      <div className="absolute -bottom-10 left-0 flex items-center space-x-4 z-10">
        <div className="custom-pagination" />
        <div className="swiper-button-next cursor-pointer p-2 bg-transparent ">
          <MoveRight />
        </div>
      </div>
    </div>
  );
};

export default MissionsSlider;
