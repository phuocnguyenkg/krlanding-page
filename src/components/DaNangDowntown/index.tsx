import React from "react";
import Image from "next/image";
import Link from "next/link";

const DaNangDowntown = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-3xl lg:text-4xl font-bold text-red-600 leading-tight">
                ĐÀ NẴNG DOWNTOWN – SIÊU TỔ HỢP GIẢI TRÍ VÀ THƯƠNG MẠI BẬC NHẤT
                MIỀN TRUNG
              </h1>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <span className="text-blue-600 font-semibold">
                  Đà Nẵng Downtown
                </span>{" "}
                – kết tạo mới của Sun Group với tổng vốn đầu tư{" "}
                <span className="text-blue-600 font-semibold">
                  gần 80.000 tỷ đồng
                </span>
                , tọa lạc trên quỹ đất "kim cương" ven sông Hàn, giữa hai cây
                cầu biểu tượng{" "}
                <span className="text-blue-600 font-semibold">
                  Trần Thị Lý và Tiên Sơn
                </span>
                , không chỉ đơn thuần là một dự án bất động sản, đây là siêu tổ
                hợp all-in-one hiếm có, tụ hội đầy đủ các tiện ích văn hóa, giải
                trí, thương mại cao cấp, lưu trú, mua sắm và đặc biệt là trung
                tâm kinh tế đêm số đông bậc nhất miền Trung.
              </p>

              <p>
                Điểm nhấn của Đà Nẵng Downtown mang tính biểu tượng chính là tòa
                tháp 65 tầng cao 408m –{" "}
                <span className="text-blue-600 font-semibold">
                  công trình cao nhất miền Trung và top 2 tại Việt Nam
                </span>
                . Tòa tháp vượt cao kiêu hãnh bên bờ sông Hàn, khẳng định vị thế
                của Đà Nẵng như một biểu tượng mới trên bản đồ du lịch – thương
                mại quốc tế.
              </p>
            </div>

            <div className="pt-4">
              <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
                Nhận thông tin dự án
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/da-nang-downtown-1555.jpg"
                alt="Đà Nẵng Downtown - Siêu tổ hợp giải trí và thương mại"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                unoptimized={true}
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full opacity-50"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-red-100 rounded-full opacity-30"></div>
          </div>
        </div>
      </div>

      {/* Contact floating button */}
      <div className="fixed bottom-8 left-8 z-50">
        <Link href="tel:+84123456789">
          <div className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
          </div>
        </Link>
      </div>

      {/* Zalo floating button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Link href="https://zalo.me/your-zalo-number">
          <div className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer flex items-center space-x-2">
            <span className="font-semibold">Zalo</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DaNangDowntown;
