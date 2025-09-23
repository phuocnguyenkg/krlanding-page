"use client";
import * as React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

const Amenities = () => {
  const amenitiesData = {
    title: "QUY MÔ ĐÀ NẴNG DOWNTOWN – SIÊU TỔ HỢP NGHỈ DƯỠNG, GIẢI TRÍ & THƯƠNG MẠI BẬC NHẤT MIỀN TRUNG",
    description:
      "Với tổng vốn gần 80.000 tỷ đồng, Đà Nẵng Downtown được định vị là một trong những tổ hợp đa chức năng lớn nhất miền Trung, nơi hội tụ kinh tế đêm – thương mại – văn hóa – nghệ thuật hàng đầu Việt Nam.",
    features: [
      {
        icon: "ph:buildings",
        title: "07 tòa thương mại dịch vụ ven sông",
        description:
          "Chuỗi tòa nhà thương mại dịch vụ cao cấp tọa lạc ven sông Hàn, tạo nên không gian kinh doanh đẳng cấp với view sông tuyệt đẹp.",
        bgColor: "bg-gradient-to-r from-blue-500 to-blue-600",
      },
      {
        icon: "ph:city",
        title: "08 tòa cao ốc kề Công viên 2/9",
        description:
          "Khu phức hợp cao ốc hiện đại nằm liền kề Công viên 2/9, mang đến không gian sống và làm việc xanh, trong lành.",
        bgColor: "bg-gradient-to-r from-green-500 to-green-600",
      },
      {
        icon: "ph:building-office",
        title: "09 tòa bao quanh tháp biểu tượng 69 tầng",
        description:
          "Tòa cao thứ 2 Việt Nam (408m), tích hợp khách sạn, văn phòng, căn hộ và trung tâm thương mại, biểu tượng mới của Đà Nẵng.",
        bgColor: "bg-gradient-to-r from-purple-500 to-purple-600",
      },
      {
        icon: "ph:mask-happy",
        title: "Công viên văn hóa – nghệ thuật",
        description:
          "Quy mô Nhà hát Opera, bảo tàng và triển lãm quốc tế, trung tâm văn hóa nghệ thuật hàng đầu khu vực.",
        bgColor: "bg-gradient-to-r from-pink-500 to-pink-600",
      },
    ],
    commercialTitle: "Tổ hợp vui chơi giải trí đa trải nghiệm",
    commercialFeatures: [
      {
        icon: "ph:users-three",
        title: "Phục vụ cư dân",
        description:
          "Không gian giải trí cao cấp dành riêng cho cư dân với các tiện ích đẳng cấp quốc tế",
        bgColor: "bg-gradient-to-r from-cyan-600 to-cyan-700",
      },
      {
        icon: "ph:airplane-takeoff",
        title: "Phục vụ du khách",
        description:
          "Điểm đến du lịch hấp dẫn với chuỗi trải nghiệm giải trí đa dạng cho khách du lịch trong và ngoài nước",
        bgColor: "bg-gradient-to-r from-orange-600 to-orange-700",
      },
      {
        icon: "ph:clock",
        title: "Hoạt động 24/7",
        description: "Kinh tế đêm sôi động với các hoạt động giải trí, thương mại không ngừng nghỉ",
        bgColor: "bg-gradient-to-r from-indigo-600 to-indigo-700",
      },
    ],
  };

  return (
    <section className="relative overflow-hidden py-6 sm:py-8 md:py-12 lg:py-16 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-blue-900">
      <div className="container max-w-7xl mx-auto px-3 sm:px-4 md:px-5 2xl:px-0">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
          <div className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-semibold mb-6">
            🏙️ Siêu Tổ Hợp Đa Chức Năng
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 md:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              {amenitiesData.title}
            </span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed px-2 sm:px-4">
            {amenitiesData.description}
          </p>
        </div>

        {/* Main Features Section */}
        <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-stretch">
            {/* Left Content */}
            <div className="order-2 lg:order-1 flex">
              <div className="bg-gradient-to-br from-white to-blue-50 dark:from-slate-800 dark:to-blue-900 text-slate-800 dark:text-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl border border-blue-200 dark:border-blue-700 flex-1">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 md:mb-6 text-blue-900 dark:text-blue-100">
                  Quy Mô Dự Án
                </h3>
                <div className="space-y-3 sm:space-y-4 md:space-y-6">
                  {amenitiesData.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 sm:gap-3 md:gap-4 bg-white/70 dark:bg-slate-700/70 rounded-lg p-3 sm:p-4 hover:bg-white dark:hover:bg-slate-700 transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                      <div className={`flex-shrink-0 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 rounded-full ${feature.bgColor} flex items-center justify-center shadow-lg`}>
                        <Icon
                          icon={feature.icon}
                          className="text-white"
                          width={20}
                          height={20}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-sm sm:text-base md:text-lg mb-1 md:mb-2 leading-tight text-blue-900 dark:text-blue-100">
                          {feature.title}
                        </h4>
                        <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="order-1 lg:order-2 flex">
              <div className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-xl group flex-1">
                <Image
                  src="/images/da-nang-downtown-1555.jpg"
                  alt="Đà Nẵng Downtown - Siêu tổ hợp đa chức năng"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent"></div>
                
                {/* Icon overlay */}
                <div className="absolute top-4 right-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 border border-white/30">
                    <Icon
                      icon="ph:building-office"
                      className="text-white"
                      width={32}
                      height={32}
                    />
                  </div>
                </div>
                
                <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-2 sm:left-3 md:left-4 right-2 sm:right-3 md:right-4">
                  <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2 sm:py-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Icon
                        icon="ph:buildings"
                        className="text-blue-600"
                        width={16}
                        height={16}
                      />
                      <p className="text-blue-900 dark:text-blue-100 text-xs sm:text-sm font-bold">
                        Tháp biểu tượng 69 tầng - 408m
                      </p>
                    </div>
                    <p className="text-blue-700 dark:text-blue-300 text-xs">
                      Tòa cao thứ 2 Việt Nam
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Entertainment Complex Section */}
        <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-20 last:mb-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-stretch">
            {/* Left Image */}
            <div className="flex">
              <div className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-xl group flex-1">
                <Image
                  src="/images/featuredproperty/image-2.jpg"
                  alt="Tổ hợp vui chơi giải trí đa trải nghiệm"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/60 via-transparent to-transparent"></div>
                
                {/* Icon overlay */}
                <div className="absolute top-4 right-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 border border-white/30">
                    <Icon
                      icon="ph:mask-happy"
                      className="text-white"
                      width={32}
                      height={32}
                    />
                  </div>
                </div>
                
                <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-2 sm:left-3 md:left-4 right-2 sm:right-3 md:right-4">
                  <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2 sm:py-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Icon
                        icon="ph:clock"
                        className="text-cyan-600"
                        width={16}
                        height={16}
                      />
                      <p className="text-cyan-900 dark:text-cyan-100 text-xs sm:text-sm font-bold">
                        Kinh tế đêm sôi động
                      </p>
                    </div>
                    <p className="text-cyan-700 dark:text-cyan-300 text-xs">
                      Hoạt động 24/7
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="flex">
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-slate-800 dark:to-cyan-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-cyan-200 dark:border-cyan-700 shadow-xl flex-1">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-cyan-900 dark:text-cyan-100 mb-3 sm:mb-4 md:mb-6">
                  {amenitiesData.commercialTitle}
                </h3>
                <div className="grid grid-cols-1 gap-3 sm:gap-4 md:gap-6">
                  {amenitiesData.commercialFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-lg border border-cyan-100 dark:border-cyan-600 hover:shadow-xl hover:border-cyan-300 dark:hover:border-cyan-500 transition-all duration-300 group"
                    >
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className={`flex-shrink-0 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 rounded-full ${feature.bgColor} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <Icon
                            icon={feature.icon}
                            className="text-white"
                            width={20}
                            height={20}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-sm sm:text-base md:text-lg text-gray-900 dark:text-white mb-1 md:mb-2 leading-tight">
                            {feature.title}
                          </h4>
                          <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Investment Highlight */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-white shadow-2xl">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Icon
                icon="ph:currency-circle-dollar"
                className="text-yellow-300"
                width={48}
                height={48}
              />
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                Tổng Vốn Đầu Tư
              </h3>
            </div>
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-yellow-300">
              80.000 Tỷ Đồng
            </p>
            <p className="text-lg sm:text-xl opacity-90 max-w-3xl mx-auto">
              Một trong những tổ hợp đa chức năng lớn nhất miền Trung
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
