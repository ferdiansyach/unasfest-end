import { Activities } from "@/constants/Activites";
import Image from "next/image";
import {
  Card,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { activitiesData } from "@/lib/types/Activities";
import InfiniteSliding from "@/components/shared/InfiniteSlidingComponent/InfiniteSlidingComponent";
import FaqActivities from "@/components/shared/FaqActivities/FaqActivities";
import TimelineCards from "@/components/ui/timelineCards";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Slider from "@/components/shared/Slider/Slider";
import { Download } from "lucide-react";

type DetailCompetitionProps = { params: { slug: string } };

export default function DetailCompetition(props: DetailCompetitionProps) {
  const { params } = props;
  console.log("params", params.slug);
  const competition = Activities.find((comp) => comp.path === params.slug);

  if (!competition) {
    return <div>Kompetisi tidak ditemukan</div>;
  }

  const requirementsData = competition.requirements;

  const InfiniteSlidingProps = {
    icon: competition.infiniteSlidingIcon.src,
    text: competition.infiniteSlidingText,
  };

  return (
    <section>
      <div className="container mx-auto mt-16">
        <h1 className="text-4xl mb-9 tracking-wide font-semibold leading-normal text-left  lg:text-5xl font-bungee uppercase"
            style={{ color: competition.color }}>
          {competition.title}
        </h1>
        <Image
          src={competition.coverImage}
          alt={competition.title}
          width={1400}
          height={480}
          className="mx-auto -mb-[200px]"
        />
      </div>
      <div
        style={{ backgroundColor: competition.color }}
        className="text-page-white max-w-[1560px] mx-auto pt-[200px]"
      >
        {/* HERO */}
        <Card className="pb-2 text-center rounded-none overflow-hidden flex flex-col justify-center align-middle items-center container relative mb-12">
          <div className="flex flex-col justify-center items-center">
            <CardContent>
              <CardDescription className="text-start text-white text-xl">
                {competition.description}
              </CardDescription>
              <div className="flex gap-5 mt-10">
                <Button
                  size="xl"
                  variant="secondary"
                  className="text-page-black"
                >
                  Sign Up
                </Button>
                <Button size="xl" variant="outline" className="bg-transparant">
                  See More
                </Button>
              </div>
            </CardContent>
          </div>
        </Card>

        {/* INFINITE SLIDING */}
        <Card className="mb-10 w-full text-page-black">
          <InfiniteSliding props={InfiniteSlidingProps} />
        </Card>

        {/* REQUIREMENTS */}
        <Card className="pb-2 text-center overflow-hidden rounded-none container mx-auto relative mb-12">
          <CardTitle className="text-4xl tracking-wide font-semibold leading-normal lg:text-5xl">
            Competition Requirements
          </CardTitle>
          <CardDescription className="text-sm tracking-wide font-normal leading-normal mb-16 lg:text-xl text-page-white">
            {competition.requirementsTitle}
          </CardDescription>
          <CardContent>
            {/* <RequirementsSwipe requirements={competition.requirements} /> */}
            <Slider props={requirementsData} />
          </CardContent>
        </Card>

        {/* DOWNLOAD GUIDE BOOK */}
        <Card className="flex flex-col rounded-none justify-center items-center align-middle pb-20 text-center overflow-hidden w-full relative max-w-screen-xl m-auto  lg:w-[90%] mb-12">
          <CardTitle className="text-4xl tracking-wide font-semibold leading-normal lg:text-5xl">
            download guidebook
          </CardTitle>
          <CardDescription className="text-center tracking-wide font-normal mb-5 leading-normal text-xl text-page-white">
            Download the competition guidebook to find out the overall mechanism
            of the National University Festival debate competition
          </CardDescription>
          <Link href={competition.guideBook}>
            <Button
              variant="secondary"
              className="w-[235px] py-8 rounded-none mt-6 text-xl flex items-center gap-2"
            >
              <Download />
              Download
              <span></span>
            </Button>
          </Link>
        </Card>
      </div>

      {/* TIMELINE */}
      <TimelineCards
        title="Competition Timeline"
        description="Pay attention to the time and date of the race"
        timelines={competition.timeline}
      />

      <Card className="flex flex-col rounded-none justify-center items-center align-middle pb-20 text-center overflow-hidden w-full relative max-w-screen-xl m-auto  lg:w-[90%] mb-12">
        <CardTitle className="text-4xl tracrking-wide font-semibold leading-normal lg:text-5xl">
          competition judges
        </CardTitle>
        <CardDescription className="text-sm tracking-wide font-normal leading-normal mb-16 lg:text-xl">
          Competition Judges List
        </CardDescription>
        <CardContent className="w-full h-full flex justify-around">
          {competition.judgesData.map((judge, index) => (
            <div key={index} className="flex">
              <Image
                src={judge.image}
                alt={judge.name}
                width={400}
                height={400}
              />
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className=" rounded-none align-middle pb-20 text-center overflow-hidden w-full relative max-w-screen-xl m-auto  lg:w-[90%] mb-12">
        <CardTitle className="text-4xl tracrking-wide font-semibold leading-normal lg:text-5xl">
          frequently asked questions
        </CardTitle>
        <CardContent className="md:w-[60%]">
          <FaqActivities faqs={competition.faqs} />
        </CardContent>
      </Card>
    </section>
  );
}