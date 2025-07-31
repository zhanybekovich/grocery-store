import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

function Slider({ sliderList }) {
  return (
    <Carousel>
      <CarouselContent>
        {sliderList.map((slider) => (
          <CarouselItem key={slider.documentId}>
            <Image
              src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL + slider.image.url}
              alt={slider.name}
              width={1000}
              height={400}
              className="w-full h-[200px] md:h-[350px] object-cover rounded-2xl"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default Slider;
