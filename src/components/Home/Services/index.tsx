import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

const Categories = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Khu.jpg"
          alt="plaza background"
          fill
          className="object-cover w-full h-full"
          unoptimized={true}
        />
        {/* Overlay với gradient đẹp hơn */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/80 to-white/20 dark:bg-gradient-to-r dark:from-black/90 dark:via-black/70 dark:to-black/30"></div>
      </div>
      {/* Vector decorations */}
      <div className="absolute left-0 top-0 z-15">
        <Image
          src="/images/categories/Vector.svg"
          alt="vector"
          width={800}
          height={1050}
          className="dark:hidden"
          unoptimized={true}
        />
        <Image
          src="/images/categories/Vector-dark.svg"
          alt="vector"
          width={800}
          height={1050}
          className="hidden dark:block"
          unoptimized={true}
        />
      </div>
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0 relative z-10">
        <div className="grid grid-cols-12 gap-10">
          <div className="lg:col-span-6 mt-4 col-span-12 row-span-2 relative">
            {/* Background gradient overlay cho text - mờ dần từ trái sang phải */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 via-white/70 to-transparent dark:from-gray-900 dark:via-gray-900/80 dark:via-gray-900/60 dark:to-transparent rounded-lg z-0"></div>

            {/* Content với z-index cao hơn */}
            <div className="relative z-10 p-6">
              <p className="flex items-center gap-2 text-lg font-semibold text-primary mb-2">
                <Icon
                  icon="ph:house-simple-fill"
                  className="text-2xl text-primary"
                />
                Giới thiệu
              </p>
              <h2 className="lg:text-52 text-40 mt-4 mb-2 lg:max-w-full font-bold leading-[1.2] text-gray-800 dark:text-white">
                Tổng quan dự án
              </h2>
              <p className="text-gray-700 dark:text-gray-200 text-lg lg:max-w-full leading-[1.4] md:max-w-3/4 font-medium">
                Dự án The Legend Đà Nẵng là một khu phức hợp căn hộ và khách sạn
                cao cấp, tọa lạc tại vị trí đắc địa trên đường Võ Văn Kiệt,
                phường An Hải Tây, quận Sơn Trà, thành phố Đà Nẵng.
                <br />
                <br />
                <strong className="text-primary">
                  Thông tin chi tiết dự án:
                </strong>
                <br />• Tên dự án: The Legend Da Nang
                <br />• Chủ đầu tư: ROX Signature
                <br />• Vị trí: A20 Võ Văn Kiệt, Phường An Hải Tây, Quận Sơn
                Trà, TP. Đà Nẵng
                <br />• Đơn vị vận hành (Tòa khách sạn): Accor Hotels (theo tiêu
                chuẩn 5 sao quốc tế)
                <br />• Tên pháp lý: Tổ hợp Trung tâm thương mại – Khách sạn –
                Căn hộ cao cấp
                <br />
                <br />
                <strong className="text-primary">Quy mô:</strong>
                <br />• Tòa khách sạn: Cao 25 tầng nổi và 3 tầng hầm
                <br />• Tòa căn hộ: Cao 29 tầng nổi và 3 tầng hầm
                <br />
                <br />
                <strong className="text-primary">Tiến độ:</strong>
                <br />• Ngày khởi công: 28/02/2025
                <br />• Bàn giao dự kiến: Quý IV/2028
                <br />
                <br />
                The Legend Danang được thiết kế theo phong cách hiện đại, sang
                trọng, với các căn hộ có diện tích đa dạng từ 1 đến 3 phòng ngủ.
                Dự án tích hợp nhiều tiện ích cao cấp như hồ bơi, phòng tập gym,
                khu vui chơi trẻ em, trung tâm thương mại, nhà hàng, quán cà
                phê,… đáp ứng mọi nhu cầu sinh hoạt và giải trí của cư dân.
              </p>
            </div>
          </div>
          <div className="lg:col-span-6 col-span-12">
            <div className="relative rounded-2xl overflow-hidden group shadow-2xl border border-gray-200/20 backdrop-blur-sm bg-white/5 hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
              <Link href="/residential-homes">
                <Image
                  src="/images/Khu.jpg"
                  alt="villas"
                  width={680}
                  height={386}
                  className="w-full"
                  unoptimized={true}
                />
              </Link>
              <Link
                href="/residential-homes"
                className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between pl-10 pb-10 group-hover:top-0 duration-500"
              >
                <div className="flex justify-end mt-6 mr-6">
                  <div className="bg-white text-dark rounded-full w-fit p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <Icon icon="ph:arrow-right" width={24} height={24} />
                  </div>
                </div>
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-white text-2xl drop-shadow-lg">
                    Residential Homes
                  </h3>
                  <p className="text-white/80 text-base leading-6 drop-shadow-md">
                    Experience elegance and comfort with our exclusive luxury
                    villas, designed for sophisticated living.
                  </p>
                </div>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-3 col-span-6">
            <div className="relative rounded-2xl overflow-hidden group shadow-2xl border border-gray-200/20 backdrop-blur-sm bg-white/5 hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
              <Link href="/appartment">
                <Image
                  src="/images/da-nang-downtown-1555.jpg"
                  alt="villas"
                  width={320}
                  height={386}
                  className="w-full"
                  unoptimized={true}
                />
              </Link>
              <Link
                href="/appartment"
                className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between pl-10 pb-10 group-hover:top-0 duration-500"
              >
                <div className="flex justify-end mt-6 mr-6">
                  <div className="bg-white text-dark rounded-full w-fit p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <Icon icon="ph:arrow-right" width={24} height={24} />
                  </div>
                </div>
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-white text-2xl drop-shadow-lg">
                    Appartment
                  </h3>
                  <p className="text-white/80 text-base leading-6 drop-shadow-md">
                    Experience elegance and comfort with our exclusive luxury
                    villas, designed for sophisticated living.
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-3 col-span-6">
            <div className="relative rounded-2xl overflow-hidden group shadow-2xl border border-gray-200/20 backdrop-blur-sm bg-white/5 hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
              <Link href="/office-spaces">
                <Image
                  src="/images/categories/office.jpg"
                  alt="office"
                  width={320}
                  height={386}
                  className="w-full"
                  unoptimized={true}
                />
              </Link>
              <Link
                href="/office-spaces"
                className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between pl-10 pb-10 group-hover:top-0 duration-500"
              >
                <div className="flex justify-end mt-6 mr-6">
                  <div className="bg-white text-dark rounded-full w-fit p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <Icon icon="ph:arrow-right" width={24} height={24} />
                  </div>
                </div>
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-white text-2xl drop-shadow-lg">
                    Office Spaces
                  </h3>
                  <p className="text-white/80 text-base leading-6 drop-shadow-md">
                    Experience elegance and comfort with our exclusive luxury
                    villas, designed for sophisticated living.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
