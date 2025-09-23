"use client";
import * as React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

const ProjectMasterplan = () => {
  const masterplanData = {
    badge: "Mặt bằng dự án",
    title: "VINHOMES HẢI VÂN BAY",
    description:
      "Vinhomes Hải Vân Bay được quy hoạch trên tổng diện tích 512 ha với 6.169 sản phẩm và 4 phân khu nổi bật. Dự án được định hướng trở thành khu đô thị nghỉ dưỡng - giải trí - thương mại - lưu trú cao cấp mang tầm vóc quốc tế.",

    functionalAreas: {
      title: "Phân khu chức năng và các hạng mục chính",
      description:
        "Vinhomes Hải Vân Bay được quy hoạch thành một khu đô thị nghỉ dưỡng toàn diện với hơn 15 hạng mục chức năng trong điểm, phân bố hài hòa trên diện tích đồ sộ.",
      areas: [
        {
          title: "Khu biệt thự nghỉ dưỡng ven cảp",
          subtitle:
            "Biệt thự ven biển, biệt thự trên đồi, bungalow và khách sạn từ 3 đến 7 tầng",
          color: "bg-primary",
        },
        {
          title: "Tổ hợp khách sạn - nghỉ dưỡng 5 sao",
          subtitle: "Quy mô lên đến 1.000 phòng nghỉ hạu, chuẩn quốc tế",
          color: "bg-skyblue",
        },
        {
          title: "Trung tâm thương mại - dịch vụ",
          subtitle:
            "Trung tâm thương mại, nhà hàng, spa, câu lạc bộ golf và các tiện ích giải trí khác",
          color: "bg-lightskyblue",
        },
        {
          title: "Khu thể thao - công viên giải trí",
          subtitle:
            "Công viên nước, sân golf, câu lạc bộ thể thao, đường dạo bộ, đường đua xe đạp, khu vui chơi trẻ em",
          color: "bg-primary",
        },
      ],
    },

    districts: [
      {
        title: "Phân khu Châu Âu - Khu 1",
        features: [
          "Khu vực Châu Âu đầu tiên tại Việt Nam được xây dựng theo phong cách kiến trúc tân cổ điển phương Tây",
          "Khoảng 2.668 căn biệt thự với diện tích từ 62 - 65m²",
          "Khoảng 460 căn shophouse với diện tích từ 90 - 120m² được thiết kế theo phong cách tân cổ điển",
          "Hơn 60 Suất Lượng Trung tâm Châm sóc Sức khỏe Khoáng nóng, Khu Thương mại và Ẩm thực, Khu Câu cá Biển NOXX",
        ],
      },
      {
        title: "Phân khu Đông Dương - Khu 2",
        features: [
          "Khu Đông Dương mang hơi hướng giáo Phật Á Đông, đậm chất văn hóa và kiến trúc",
          "Dự kiến có khoảng 705 căn biệt thự cao cấp được bố trí với kiến trúc và phong cách thiết kế độc đáo",
          "Nhà hàng 360 độ Panorama view biển với không gian mở, tầm nhìn bao quát cảnh đường, hòa hợp với thiên nhiên biển",
          "Ga tàu điện ngầm khu vực hỗ trợ hạ tầng giao thông phân khu",
        ],
      },
    ],
  };

  return (
    <section className="relative overflow-hidden py-6 sm:py-8 md:py-12 lg:py-16 bg-white dark:bg-gray-900">
      <div className="container max-w-7xl mx-auto px-3 sm:px-4 md:px-5 2xl:px-0">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
          <div className="rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8">
            <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2.5 items-center justify-center mb-4">
              <Icon
                icon="ph:house-simple-fill"
                className="text-2xl text-primary"
              />
              {masterplanData.badge}
            </p>
            <h2 className="lg:text-52 text-40 font-medium text-dark dark:text-white mb-3 sm:mb-4 md:mb-6 leading-tight">
              {masterplanData.title}
            </h2>
            <p className="text-dark/50 dark:text-white/50 text-lg max-w-5xl mx-auto leading-relaxed px-2 sm:px-4">
              {masterplanData.description}
            </p>
          </div>
        </div>

        {/* Functional Areas Section */}
        <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-200 dark:border-gray-700">
            <div className="text-center mb-6 sm:mb-8 md:mb-10">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-dark dark:text-white mb-3 sm:mb-4">
                {masterplanData.functionalAreas.title}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                {masterplanData.functionalAreas.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {masterplanData.functionalAreas.areas.map((area, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-700 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div
                    className={`w-8 h-8 sm:w-10 sm:h-10 ${area.color} rounded-lg mb-3 sm:mb-4 flex items-center justify-center`}
                  >
                    <Icon
                      icon="ph:building"
                      className="text-white text-lg sm:text-xl"
                    />
                  </div>
                  <h4 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 leading-tight">
                    {area.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {area.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Districts Section */}
        <div className="mb-8 sm:mb-12 md:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {masterplanData.districts.map((district, index) => (
              <div
                key={index}
                className="rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-primary/20"
              >
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-dark dark:text-white mb-4 sm:mb-6">
                  {district.title}
                </h3>
                <ul className="space-y-3 sm:space-y-4">
                  {district.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                        {feature}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Card */}
        <div className="bg-primary/5 dark:bg-teal-900 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 text-center border border-primary/20 dark:border-teal-700">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-teal-100 mb-4 sm:mb-6">
            Lợi thế kết nối vượt trội
          </h3>
          <p className="text-gray-600 dark:text-teal-200 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto">
            Với vị trí chiến lược, Vinhomes Hải Vân Bay mang đến khả năng kết
            nối toàn diện từ giao thông quốc tế, trung tâm hành chính, đến các
            điểm du lịch nổi tiếng, tạo nên một hệ sinh thái sống và làm việc
            hoàn hảo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectMasterplan;
