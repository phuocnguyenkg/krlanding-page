"use client";

import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Home,
  Maximize,
  Users,
  MapPin,
  Building2,
  Palette,
  ShoppingBag,
  TreePine,
} from "lucide-react";
import Image from "next/image";

const VillaShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const ecosystemSections = [
    {
      id: "culture-arts",
      name: "VĂN HÓA VÀ NGHỆ THUẬT",
      icon: Palette,
      isActive: true,
      images: [
        "/images/properties/property1/property1.jpg",
        "/images/properties/property1/image-2.jpg",
        "/images/properties/property1/image-3.jpg",
        "/images/properties/property1/image-4.jpg",
      ],
      features: [
        "Nhà hát Opera 9.000m² – 4.000 chỗ đạt chuẩn quốc tế",
        "Bảo tàng & Trung tâm triển lãm hiện đại – điểm hẹn của sự kiện tầm vóc khu vực",
        'Chuỗi show nghệ thuật đêm biến Đà Nẵng Downtown thành "thủ phủ ánh sáng" bên sông Hàn',
      ],
    },
    {
      id: "entertainment-commerce",
      name: "TRẢ NGHIỆM GIẢI TRÍ",
      icon: ShoppingBag,
      isActive: false,
      images: [
        "/images/properties/property2/property2.jpg",
        "/images/properties/property2/image-2.jpg",
        "/images/properties/property2/image-3.jpg",
        "/images/properties/property2/image-4.jpg",
      ],
      features: [
        "Phố thương mại & ẩm thực: shophouse thấp tầng sầm uất, kết nối mua sắm – du lịch – ẩm thực",
        "Khu vui chơi trong nhà & ngoài trời: ứng dụng công nghệ hiện đại, phù hợp mọi lứa tuổi",
        "Chuỗi cao ốc thương mại dịch vụ & phố đi bộ: nhịp sống sôi động 24/7",
      ],
    },
    {
      id: "community-spaces",
      name: "KHÔNG GIAN CỘNG ĐỒNG",
      icon: TreePine,
      isActive: false,
      images: [
        "/images/properties/property3/property3.jpg",
        "/images/properties/property3/image-2.jpg",
        "/images/properties/property3/image-3.jpg",
        "/images/properties/property3/image-4.jpg",
      ],
      features: [
        "Quảng trường trung tâm & công viên văn hóa: lá phổi xanh của cộng đồng",
        "Khu ẩm thực quốc tế, khách sạn & lưu trú 5 sao: phục vụ chuẩn mực cho du khách và cư dân thượng lưu",
        "Đài quan sát trên tháp 69 tầng: thu trọn sông Hàn và toàn cảnh Đà Nẵng từ độ cao 408m",
      ],
    },
  ];

  const currentSection = ecosystemSections[activeTab];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % currentSection.images.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + currentSection.images.length) % currentSection.images.length
    );
  };

  const TabButton = ({
    section,
    index,
    isActive,
  }: {
    section: any;
    index: number;
    isActive: boolean;
  }) => {
    const IconComponent = section.icon;
    return (
      <button
        onClick={() => {
          setActiveTab(index);
          setCurrentSlide(0);
        }}
        className={`relative px-6 py-4 text-sm md:text-base border-b-2 font-semibold transition-all duration-300 rounded-t-2xl cursor-pointer ${
          isActive
            ? "text-cyan-600 bg-white dark:bg-gray-800  border-cyan-500"
            : "text-gray-500 hover:text-gray-700 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
        }`}
      >
        <div className="flex items-center space-x-2">
          <IconComponent className="w-5 h-5" />
          <span className="hidden md:inline">{section.name}</span>
          <span className="md:hidden">{section.name.split(" ")[0]}</span>
        </div>
      </button>
    );
  };

  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/da-nang-downtown-1555.jpg"
          alt="Đà Nẵng Downtown Background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700/35 via-cyan-700/30 to-gray-700/35"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10"></div>
        {/* Pattern overlay */}
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.25'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-8 py-3 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-semibold mb-8 border border-white/30">
            🏙️ Ecosystem Overview
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">
            HỆ SINH THÁI TIỆN ÍCH ĐÀ NẴNG DOWNTOWN
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Đà Nẵng Downtown không chỉ là dự án bất động sản, mà là một thành
            phố thu nhỏ bên sông Hàn – nơi hội tụ thương mại, văn hóa, giải trí,
            nghệ thuật và nghỉ dưỡng trong cùng một điểm đến.
          </p>
        </div>

        {/* Section Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {ecosystemSections.map((section, index) => (
            <TabButton
              key={section.id}
              section={section}
              index={index}
              isActive={activeTab === index}
            />
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Section Info */}
          <div className="lg:col-span-1 space-y-8">
            {/* Section Header Card */}
            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl p-8 text-white shadow-2xl backdrop-blur-sm border border-white/20">
              <div className="flex items-center mb-6">
                <currentSection.icon className="w-8 h-8 mr-4" />
                <h3 className="text-xl md:text-2xl font-bold leading-tight">
                  {currentSection.name}
                </h3>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Building2 className="w-6 h-6 mr-3 text-cyan-500" />
                Điểm Nổi Bật
              </h4>
              <ul className="space-y-4">
                {currentSection.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start text-gray-600 dark:text-gray-300"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-sm md:text-base leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main Image Carousel */}
          <div className="lg:col-span-2">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-white/20 backdrop-blur-sm">
              {/* Main Image */}
              <div className="relative h-80 md:h-[500px]">
                <Image
                  src={currentSection.images[currentSlide]}
                  alt={`${currentSection.name} - Image ${currentSlide + 1}`}
                  fill
                  className="object-cover"
                  priority
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                {/* Section name overlay */}
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 leading-tight drop-shadow-lg">
                    {currentSection.name}
                  </h3>
                  <p className="text-white/80 text-sm md:text-base drop-shadow-md">
                    Hình {currentSlide + 1} / {currentSection.images.length}
                  </p>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-700" />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                >
                  <ChevronRight className="w-6 h-6 text-gray-700" />
                </button>

                {/* Slide Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {currentSection.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentSlide === index
                          ? "bg-white scale-125"
                          : "bg-white/50 hover:bg-white/75"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-4 mt-6">
              {currentSection.images.map((image, index) => (
                <div
                  key={index}
                  className={`relative h-20 md:h-32 rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300 shadow-lg border border-white/20 backdrop-blur-sm ${
                    currentSlide === index ? "ring-3 ring-cyan-400" : ""
                  }`}
                  onClick={() => setCurrentSlide(index)}
                >
                  <Image
                    src={image}
                    alt={`${currentSection.name} - Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                  {currentSlide === index && (
                    <div className="absolute inset-0 bg-cyan-500/20 border-2 border-cyan-400 rounded-2xl"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VillaShowcase;
