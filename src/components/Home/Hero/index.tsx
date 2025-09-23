import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section className="!py-0">
      <div className="h-screen bg-gradient-to-b from-skyblue via-lightskyblue dark:via-[#4298b0] to-white/10 dark:to-black/10 overflow-hidden relative">
        <div className="absolute w-full h-full -top-0 -right-0">
          <Image
            src={"/images/hero/phoi-canh-du-an-the-legend-city-da-nang-3.jpg"}
            alt="heroImg"
            fill
            priority={false}
            unoptimized={true}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="container max-w-8xl mx-auto px-5 2xl:px-0 pt-32 md:pt-60 md:pb-68">
          <div className="relative text-white dark:text-dark text-center md:text-start z-10">
            <p className="text-inherit text-xm font-medium">
              Tổ hợp căn hộ – khách sạn – trung tâm thương mại
            </p>
            <h1 className="text-inherit text-6xl sm:text-9xl font-semibold -tracking-wider mt-4 mb-6">
              The Legend Đà Nẵng
            </h1>
            <div className="flex flex-col xs:flex-row justify-center md:justify-start gap-4">
              <Link
                href="/contactus"
                className="flex items-center gap-2 px-8 py-3 border border-white dark:border-dark bg-transparent text-white dark:text-dark hover:bg-white dark:hover:bg-dark dark:hover:text-white hover:text-dark duration-300 text-base font-semibold rounded-full hover:cursor-pointer"
              >
                <Icon icon={"ph:phone-bold"} width={24} height={24} />{" "}
                +1-212-456-789
              </Link>
            </div>
          </div>
        </div>
        <div className="md:absolute bottom-0 md:-right-68 xl:right-0 bg-gradient-to-t from-white/90 to-transparent dark:bg-gradient-to-t dark:from-black/90 dark:to-transparent  py-10 px-10 mobile:px-16 md:pl-16 md:pr-[50px] rounded-2xl md:rounded-none md:rounded-tl-full mt-24">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:flex gap-16 md:gap-24 sm:text-center dark:text-white text-black">
            <div className="col-span-2 sm:col-span-4 md:col-span-full">
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-start mr-8">
                  <p className="text-orange-600 dark:text-orange-400 text-sm font-medium">
                    Nhận thông tin và báo giá
                  </p>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white whitespace-nowrap">
                    Gửi yêu cầu tư vấn nhanh
                  </h3>
                </div>

                <input
                  type="text"
                  placeholder="Nhập Họ và Tên *"
                  className="px-4 py-3 border border-gray-300 rounded-md text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white min-w-[200px]"
                />

                <input
                  type="tel"
                  placeholder="Số điện thoại *"
                  className="px-4 py-3 border border-gray-300 rounded-md text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white min-w-[200px]"
                />

                <button
                  type="submit"
                  className="py-4 px-8 bg-primary text-base leading-4 block w-fit text-white rounded-full font-semibold hover:bg-dark duration-300 cursor-pointer"
                >
                  GỬI
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
