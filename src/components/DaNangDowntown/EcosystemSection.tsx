import React from 'react';
import { Building2, ShoppingBag, Users, MapPin, Clock, Star } from 'lucide-react';

const EcosystemSection = () => {
  const culturalFeatures = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Nhà hát Opera 9.000m²",
      description: "4.000 chỗ đạt chuẩn quốc tế"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Bảo tàng & Trung tâm triển lãm hiện đại",
      description: "Điểm hẹn của sự kiện tầm vóc khu vực"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Chuỗi show nghệ thuật đêm",
      description: "Biến Đà Nẵng Downtown thành 'thủ phủ ánh sang' bên sông Hàn"
    }
  ];

  const commercialFeatures = [
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "Phố thương mại & ẩm thực",
      description: "Shophouse thấp tầng sầm uất, kết nối mua sắm – du lịch – ẩm thực"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Khu vui chơi trong nhà & ngoài trời",
      description: "Ứng dụng công nghệ hiện đại, phù hợp mọi lứa tuổi"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Chuỗi cao ốc thương mại dịch vụ & phố đi bộ",
      description: "Nhịp sống sôi động 24/7"
    }
  ];

  const publicSpaceFeatures = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Quảng trường trung tâm & công viên văn hóa",
      description: "Lá phổi xanh của cộng đồng"
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Khu ẩm thực quốc tế, khách sạn & lưu trú 5 sao",
      description: "Phục vụ chuẩn mực cho du khách và cư dân thượng lưu"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Đài quan sát trên tháp 69 tầng",
      description: "Thu trọn sông Hàn và toàn cảnh Đà Nẵng từ độ cao 408m"
    }
  ];

  const FeatureCard = ({ feature, index }: { feature: any; index: number }) => (
    <div 
      className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
          {feature.icon}
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {feature.title}
          </h4>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            {feature.description}
          </p>
        </div>
      </div>
    </div>
  );

  const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
    <div className="text-center mb-12">
      <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
        {title}
      </h3>
      {subtitle && (
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );

  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent">
              HỆ SINH THÁI TIỆN ÍCH
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              ĐÀ NẴNG DOWNTOWN
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-blue-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Đà Nẵng Downtown không chỉ là dự án bất động sản, mà là{' '}
            <span className="font-semibold text-blue-600 dark:text-blue-400">một thành phố thu nhỏ bên sông Hàn</span>{' '}
            – nơi hội tụ thương mại, văn hóa, giải trí, nghệ thuật và nghỉ dưỡng trong cùng một điểm đến.
          </p>
        </div>

        {/* Cultural & Arts Center */}
        <div className="mb-20">
          <SectionHeader 
            title="TRUNG TÂM VĂN HÓA VÀ NGHỆ THUẬT"
            subtitle="Nơi hội tụ văn hóa và nghệ thuật đẳng cấp quốc tế"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {culturalFeatures.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>

        {/* Entertainment & Commerce */}
        <div className="mb-20">
          <SectionHeader 
            title="TRẢI NGHIỆM GIẢI TRÍ – THƯƠNG MẠI KHÔNG GIỚI HẠN"
            subtitle="Không gian sống động với đầy đủ tiện ích hiện đại"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commercialFeatures.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>

        {/* Public Spaces */}
        <div>
          <SectionHeader 
            title="KHÔNG GIAN CÔNG ĐỒNG – ĐỈNH CAO TRẢI NGHIỆM"
            subtitle="Những tiện ích đẳng cấp thế giới ngay tại trung tâm thành phố"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publicSpaceFeatures.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Khám Phá Hệ Sinh Thái Đẳng Cấp
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Trải nghiệm cuộc sống thượng lưu tại trung tâm Đà Nẵng
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Tìm Hiểu Thêm
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;