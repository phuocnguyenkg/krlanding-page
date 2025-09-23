import { Icon } from '@iconify/react';
import Image from 'next/image';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const FAQ: React.FC = () => {
    return (
        <section id='faqs'>
            <div className='container max-w-8xl mx-auto px-5 2xl:px-0'>
                <div className="grid lg:grid-cols-2 gap-10 ">
                    <div className='lg:mx-0 mx-auto'>
                        <Image
                            src="/images/faqs/faq-image.png"
                            alt='hình ảnh'
                            width={680}
                            height={644}
                            className='lg:w-full'
                            unoptimized={true}
                        />
                    </div>
                    <div className='lg:px-12'>
                        <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2">
                            <Icon icon="ph:house-simple-fill" className="text-2xl text-primary " />
                            Câu hỏi thường gặp
                        </p>
                        <h2 className='lg:text-52 text-40 leading-[1.2] font-medium text-dark dark:text-white'>
                            Mọi thứ về ngôi nhà Homely
                        </h2>
                        <p className='text-dark/50 dark:text-white/50 pr-20'>
                            Chúng tôi hiểu rằng việc mua, bán hoặc đầu tư bất động sản có thể rất phức tạp. Dưới đây là một số câu hỏi thường gặp để giúp bạn trong quá trình này
                        </p>
                        <div className="my-8">
                            <Accordion type="single" defaultValue="item-1" collapsible className="w-full flex flex-col gap-6">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>1. Tôi có thể cá nhân hóa ngôi nhà Homely của mình không?</AccordionTrigger>
                                    <AccordionContent>
                                        Khám phá đa dạng các bất động sản cao cấp, từ căn hộ sang trọng đến biệt thự rộng rãi, được thiết kế phù hợp với nhu cầu của bạn.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>2. Tôi có thể tìm ngôi nhà Homely ở đâu?</AccordionTrigger>
                                    <AccordionContent>
                                        Khám phá đa dạng các bất động sản cao cấp, từ căn hộ sang trọng đến biệt thự rộng rãi, được thiết kế phù hợp với nhu cầu của bạn.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger>3. Các bước để mua một ngôi nhà Homely là gì?</AccordionTrigger>
                                    <AccordionContent>
                                        Khám phá đa dạng các bất động sản cao cấp, từ căn hộ sang trọng đến biệt thự rộng rãi, được thiết kế phù hợp với nhu cầu của bạn.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
