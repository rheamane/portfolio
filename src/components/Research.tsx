import { Card, CardContent, CardDescription, CardHeader } from "./ui/card";
import Image from "next/image";

export default function Research() {
  return (
    <div className="flex flex-col gap-4 mx-auto container" id="research">
      <h2 className="text-4xl font-bold text-gray-800">Research</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        <Card className="bg-gray-100">
          <CardHeader className="font-semibold text-md">
            A Practical Application of Culturally Relevant Pedagogy in Computer
            Science
            <CardDescription>Barrett Honors Thesis</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2 justify-center items-center font-serif">
              <Image
                src={"/portfolio-website/paper1.png"}
                alt="paper1"
                width={300}
                height={300}
                className="rounded-md"
                unoptimized
              />
              <a
                href="HonorsThesis_RheaMane.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-xs"
              >
                View Full Paper
              </a>
              <ul>
                <li>
                  ● Conducted comprehensive research about culturally relevant
                  STEM education and formulated a practical application of it.
                </li>
                <li>
                  ● Surveyed over 500 students taking a CSE class and analyzed
                  the data to hypothesize the need for a culturally responsive
                  curriculum.
                </li>
                <li>
                  ● Presented findings and research at a public thesis defense
                  and published thesis paper.
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gray-100">
          <CardHeader className="font-semibold text-md">
            Modelling Misinformation - How Covid Death Statistics become
            Politicized on Social Media
            <CardDescription>
              Barrett Honors Fellows Research Program
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2 justify-center items-center font-serif">
              <Image
                src={"/portfolio-website/paper2.png"}
                alt="paper2"
                width={300}
                height={300}
                className="rounded-md"
                unoptimized
              />
              <a
                href="ModellingMisinformation_RheaMane.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-xs"
              >
                View Full Paper
              </a>
              <ul>
                <li>
                  ● Collaborated with a research lab studying misinformation in
                  data of COVID-19 fatalities in Arizona.
                </li>
                <li>
                  ● Collected twitter data using Tweepy, a Python library and
                  consolidated it using SQL. Also presented findings to research
                  directors.
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
