"use client";
import * as React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { testimonials } from "@/app/api/testimonial";

const Testimonial = () => {
  const [api, setApi] = React.useState<CarouselApi | undefined>(undefined);
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleDotClick = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  return (
    <section className="bg-dark relative overflow-hidden" id="testimonial">
      <div className="absolute right-0">
        <Image
          src="/images/testimonial/Vector.png"
          alt="victor"
          width={700}
          height={1039}
          unoptimized={true}
        />
      </div>
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
        <div>
          <p className="text-white text-base font-semibold flex gap-2">
            <Icon
              icon="ph:house-simple-fill"
              className="text-2xl text-primary"
            />
            Nhà đầu tư
          </p>
          <h2 className="lg:text-52 text-40 font-medium text-white">
            Chủ đầu tư ROX Signature
          </h2>
        </div>
        <div className="flex">
          <div className="flex max-w-1/2 items-start gap-11 lg:pr-20 mt-5">
            <Icon
              icon="ph:house-simple"
              width={32}
              height={32}
              className="text-primary"
            />
            <div>
              <h4 className="text-white lg:text-[20px] text-2xl">
                Dự án The Legend Đà Nẵng được đầu tư bởi Công ty ROX Signature.
                Đây là một doanh nghiệp có tiềm lực tài chính vững mạnh và kinh
                nghiệm trong lĩnh vực bất động sản.
              </h4>
              <p className="text-white mt-4">
                Công ty ROX Signature:
                <br />
                <p className="text-white pl-4">
                  • Là chủ đầu tư chính thức của dự án The Legend Đà Nẵng.
                </p>
                <p className="text-white pl-4">
                  • Công ty này có tiềm lực tài chính mạnh mẽ, đảm bảo cho việc
                  triển khai dự án một cách suôn sẻ và đúng tiến độ.
                </p>
                <p className="text-white pl-4">
                  • Ngoài ra, Central trúng thầu dự án The Legend Đà Nẵng.
                  Central là một nhà thầu xây dựng lớn và uy tín tại Việt Nam,
                  đã có kinh nghiệm thi công nhiều dự án lớn và phức tạp.
                </p>
                <br />
                Với sự kết hợp giữa tiềm lực tài chính của chủ đầu tư và uy tín
                của đơn vị thi công, The Legend Đà Nẵng hứa hẹn sẽ là một dự án
                bất động sản chất lượng cao, mang đến cho khách hàng những trải
                nghiệm sống đẳng cấp
              </p>
            </div>
          </div>
          <Carousel
            setApi={setApi}
            opts={{
              loop: true,
            }}
          >
            <CarouselContent>
              {testimonials.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="lg:flex gap-11">
                    <div className="w-full h-full rounded-2xl overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={440}
                        height={440}
                        className="lg:block hidden !w-full !h-[440px] object-cover"
                        unoptimized={true}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex gap-2.5 p-2.5 bg-white/20 rounded-full">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2.5 h-2.5 rounded-full ${
                current === index + 1 ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
