"use client";
import * as React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

const Testimonial = () => {
  const timelineData = [
    {
      time: "10 phút",
      title: "Kết nối quốc tế và nội địa",
      locations: [
        {
          icon: "ph:anchor",
          text: "Cảng biển quốc tế Liên Chiểu",
          distance: "2km",
        },
        { icon: "ph:train", text: "Ga hàng hóa Kim Liên", distance: "2-3km" },
      ],
      image: "/images/featuredproperty/image-1.jpg",
      alt: "Cảng biển quốc tế Liên Chiểu",
      color: "primary",
    },
    {
      time: "15 phút",
      title: "Trung tâm hành chính",
      locations: [
        {
          icon: "ph:road-horizon",
          text: "Hầm đường bộ Hải Vân 1 & 2",
          distance: "6-8km",
        },
        {
          icon: "ph:buildings",
          text: "Trung tâm hành chính Liên Chiểu",
          distance: "",
        },
      ],
      image: "/images/featuredproperty/image-2.jpg",
      alt: "Hầm đường bộ Hải Vân",
      color: "skyblue",
    },
    {
      time: "20 phút",
      title: "Trung tâm Đà Nẵng",
      locations: [
        {
          icon: "ph:buildings",
          text: "Trung tâm TP.Đà Nẵng",
          distance: "12km",
        },
        {
          icon: "ph:airplane-takeoff",
          text: "Sân bay quốc tế Đà Nẵng & Ga Đà Nẵng",
          distance: "",
        },
      ],
      image: "/images/featuredproperty/image-3.jpg",
      alt: "Trung tâm Đà Nẵng",
      color: "primary",
    },
    {
      time: "35 phút",
      title: "Điểm đến du lịch nổi tiếng",
      locations: [
        { icon: "ph:house-simple", text: "Phố cổ Hội An", distance: "" },
        {
          icon: "ph:compass",
          text: "Các điểm du lịch: Suối Lương, Rạn Nam Ô",
          distance: "",
        },
      ],
      image: "/images/featuredproperty/image-4.jpg",
      alt: "Phố cổ Hội An",
      color: "lightskyblue",
    },
  ];

  return (
    <section className="relative overflow-hidden py-8 md:py-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/map4.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority={false}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/40 dark:bg-gray-900/90 "></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container max-w-7xl mx-auto px-4 md:px-5 2xl:px-0">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 md:mb-6 leading-tight">
            Kết nối đa chiều – Linh hoạt di chuyển
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed px-2 sm:px-4">
            Vinhomes Hải Vân Bay không chỉ nổi bật về giá trị phong thủy mà còn
            sở hữu khả năng kết nối vùng linh hoạt, đồng bộ với các trục giao
            thông chiến lược đang được quy hoạch và nâng cấp mạnh mẽ
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central line - Hidden on mobile, shown on desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary/30 via-primary/60 to-primary rounded-full"></div>

          {/* Mobile timeline line */}
          <div className="md:hidden absolute left-6 top-0 w-0.5 h-full bg-gradient-to-b from-primary/30 via-primary/60 to-primary rounded-full"></div>

          <div className="space-y-8 md:space-y-16">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`relative ${
                  // Mobile: always flex-col, Desktop: alternating layout
                  "flex flex-col md:flex-row md:items-center"
                } ${
                  // Desktop alternating layout
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Mobile pin - Left aligned */}
                <div className="md:hidden absolute left-3 top-6 z-10">
                  <div
                    className={`w-6 h-6 rounded-full bg-${item.color} shadow-lg flex items-center justify-center border-2 border-white dark:border-gray-900`}
                  >
                    <Icon
                      icon="ph:map-pin"
                      className="text-white"
                      width={12}
                      height={12}
                    />
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`${
                    // Mobile: full width with left margin, Desktop: half width with padding
                    "w-full ml-12 md:ml-0 md:w-5/12"
                  } ${
                    // Desktop text alignment and padding
                    index % 2 === 0
                      ? "md:pr-8 md:text-right"
                      : "md:pl-8 md:text-left"
                  }`}
                >
                  <div className=" dark:bg-gray-800/95 backdrop-blur-[40px] rounded-xl shadow-lg p-4 md:p-6 border border-gray-200 dark:border-gray-700/50  ">
                    {/* Time badge */}
                    <div
                      className={`inline-flex items-center px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-4 bg-${item.color} text-white`}
                    >
                      <Icon
                        icon="ph:clock"
                        className="mr-1 md:mr-2"
                        width={14}
                        height={14}
                      />
                      {item.time}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4">
                      {item.title}
                    </h3>

                    {/* Locations */}
                    <div className="space-y-2 md:space-y-3">
                      {item.locations.map((location, locIndex) => (
                        <div
                          key={locIndex}
                          className="flex items-start md:items-center gap-2 md:gap-3 text-gray-700 dark:text-gray-300"
                        >
                          <div
                            className={`flex-shrink-0 w-6 md:w-8 h-6 md:h-8 rounded-full bg-${item.color}/10 flex items-center justify-center mt-0.5 md:mt-0`}
                          >
                            <Icon
                              icon={location.icon}
                              className={`text-${item.color}`}
                              width={12}
                              height={12}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="text-xs md:text-sm font-medium block">
                              {location.text}
                            </span>
                            {location.distance && (
                              <span
                                className={`inline-block mt-1 text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-${item.color}`}
                              >
                                {location.distance}
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Desktop center pin */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div
                    className={`w-12 h-12 rounded-full bg-${item.color} shadow-lg flex items-center justify-center border-4 border-white dark:border-gray-900`}
                  >
                    <Icon
                      icon="ph:map-pin"
                      className="text-white"
                      width={20}
                      height={20}
                    />
                  </div>
                </div>

                {/* Image */}
                <div
                  className={`${
                    // Mobile: full width with margin, Desktop: half width with padding
                    "w-full mt-4 ml-12 md:ml-0 md:mt-0 md:w-5/12"
                  } ${
                    // Desktop padding
                    index % 2 === 0 ? "md:pl-8" : "md:pr-8"
                  }`}
                >
                  <div className="relative h-48 md:h-64 w-full rounded-xl overflow-hidden shadow-lg group border border-gray-200">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 right-2 md:right-4">
                      <p className="text-white text-xs md:text-sm font-medium bg-black/50 backdrop-blur-sm rounded-lg px-2 md:px-3 py-1 md:py-2">
                        {item.alt}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="mt-8 md:mt-16 text-center backdrop-blur-xl">
          <div className="bg-gradient-to-br from-blue-50 to-white dark:bg-primary/20 backdrop-blur-sm rounded-2xl p-4 md:p-8 max-w-4xl mx-auto border border-primary/30">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4">
              Lợi thế kết nối vượt trội
            </h3>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              Với vị trí chiến lược, Vinhomes Hải Vân Bay mang đến khả năng kết
              nối toàn diện từ giao thông quốc tế, trung tâm hành chính, đến các
              điểm du lịch nổi tiếng, tạo nên một hệ sinh thái sống và làm việc
              hoàn hảo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
