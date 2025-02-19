import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
export default function Achievements() {
  return (
    <div className="flex flex-col gap-4 mx-auto container" id="achievements">
      <h2 className="text-4xl font-bold text-gray-800">Achievements</h2>
      <Carousel>
        <CarouselContent className="items-center">
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Card className="bg-gray-100 p-3">
              <CardContent className="text-gray-800 text-md font-serif">
                <div className="flex flex-col gap-5 justify-between items-center">
                  <Image
                    src={"/degree.png"}
                    alt="degree"
                    width={250}
                    height={250}
                    className="rounded-md"
                    unoptimized
                  />
                  <h4 className="text-md font-semibold">
                   Summa Cum Laude B.S. Computer Science with Honors 
                  </h4>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Card className="bg-gray-100 p-3">
              <CardContent className="text-gray-800 text-md font-serif">
                <div className="flex flex-col gap-5 justify-between items-center">
                  <Image
                    src={"/deanslistf24.png"}
                    alt="degree"
                    width={250}
                    height={250}
                    className="rounded-md"
                    unoptimized
                  />
                  <h4 className="text-md font-semibold">
                   Dean&apos;s List Fall 2024
                  </h4>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Card className="bg-gray-100 p-3">
              <CardContent className="text-gray-800 text-md font-serif">
                <div className="flex flex-col gap-5 justify-between items-center">
                  <Image
                    src={"/achieve1.jpg"}
                    alt="achieve1"
                    width={250}
                    height={250}
                    className="rounded-md"
                    unoptimized
                  />
                  <h4 className="text-md font-semibold">
                    Women in Computer Science Annual Coding Competition - 7 th
                    Position Winner 2024
                  </h4>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Card className="bg-gray-100 p-3">
              <CardContent className="text-gray-800 text-md font-serif">
                <div className="flex flex-col gap-5 justify-between items-center">
                  <Image
                    src={"/achieve2.jpg"}
                    alt="achieve2"
                    width={250}
                    height={250}
                    className="rounded-md"
                    unoptimized
                  />
                  <h4 className="text-md font-semibold">
                    Women in Computer Science Annual Coding Competition - Top
                    Female Team Winner 2022
                  </h4>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Card className="bg-gray-100 p-3">
              <CardContent className="text-gray-800 text-md font-serif">
                <div className="flex flex-col gap-5 justify-between items-center">
                  <Image
                    src={"/achieve3.jpg"}
                    alt="achieve3"
                    width={250}
                    height={250}
                    className="rounded-md"
                    unoptimized
                  />
                  <h4 className="text-md font-semibold">
                    Sun Hacks Hackathon at Arizona State University - Winner for
                    the Best Domain Name 2023
                  </h4>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
