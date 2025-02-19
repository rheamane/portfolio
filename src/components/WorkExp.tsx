import { Card, CardContent, CardDescription, CardHeader } from "./ui/card";

export default function WorkExp() {
  return (
    <div className="flex flex-col gap-4 mx-auto container" id="work">
      <h2 className="text-4xl font-bold text-gray-800">Work Experience</h2>
      <Card className="bg-gray-100">
        <CardHeader className="font-semibold text-lg">
          Application Developer Intern
          <CardDescription>
            W.P Carey School of Business TSO , Tempe, AZ • Jan 2025 - Present
          </CardDescription>
        </CardHeader>
        <CardContent className="text-gray-800 text-md font-serif">
          <ul>
            <li>
              • Contributed to the developement and maintenence of Advising SOS,
              a flagship application deployed to over 10,000+ business students
              and staff, using NextJS, React, TypeScript, and SQL.
            </li>
            <li>
              • Implemented new features and resolved system bugs to improve
              functionality and ensure seamless case management for academic
              advisors.
            </li>
            <li>
              • Leveraged Docker and TRPC to enhance application deployment and
              streamline API communication, contributing to system reliability
              and performance.
            </li>
          </ul>
        </CardContent>
      </Card>
      <Card className="bg-gray-100">
        <CardHeader className="font-semibold text-lg">
          Intern - Digital Service Center,
          <CardDescription>
            Ricoh USA, Tempe, AZ (Remote) • Aug 2024 - Dec 2024
          </CardDescription>
        </CardHeader>
        <CardContent className="text-gray-800 text-md font-serif">
          <ul>
            <li>
              • Optimized Agile processes across 4 projects, improving
              documentation, estimation techniques, and reporting for over 30
              developers.
            </li>
            <li>
              • Evaluated tools and methods, delivering insights on AI test case
              generators, Agile metrics, and BDD frameworks like Cucumber.
            </li>
            <li>
              • Streamlined onboarding with Azure Wiki reorganization and
              supported sprint ceremonies across cross-functional teams.
            </li>
          </ul>
        </CardContent>
      </Card>
      <Card className="bg-gray-100">
        <CardHeader className="font-semibold text-lg">
          Technical Intern
          <CardDescription>
            Drive Insight, Tempe, AZ (Remote) • Sep 2024 - Nov 2024
          </CardDescription>
        </CardHeader>
        <CardContent className="text-gray-800 text-md font-serif">
          <ul>
            <li>
              • Developed a product dashboard website for the company’s flagship
              product which provides driving insights, enhancing user engagemen
            </li>
            <li>
              • Designed and implemented responsive UI/UX for the home and store
              pages using TypeScript, ReactJS, NextJS, and Tailwind CSS.
            </li>
          </ul>
        </CardContent>
      </Card>
      <Card className="bg-gray-100">
        <CardHeader className="font-semibold text-lg">
          IT Support Specialist,
          <CardDescription>
            WP Carey Technology Strategy and Operations, Tempe, AZ • Mar 2022 -
            Aug 2024
          </CardDescription>
        </CardHeader>
        <CardContent className="text-gray-800 text-md font-serif">
          <ul>
            <li>
              • Assisted over 500 faculty and staff members and students with
              general IT issues including classroom and remote support.
            </li>
            <li>
              • Documented and solved over 300 technical issues by creating and
              resolving tickets on Salesforce and ServiceNow.
            </li>
            <li>
              • Managed and mentored 5 new members by equipping them with
              essential skills and knowledge required to excel at the workplace.
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
