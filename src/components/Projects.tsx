import { Card, CardContent, CardDescription, CardHeader } from "./ui/card";

export default function Projects() {
  return (
    <div className="flex flex-col gap-4 mx-auto container" id="projects">
      <h2 className="text-4xl font-bold text-gray-800">Projects</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card className="bg-gray-100">
          <CardHeader className="font-semibold text-lg">
            ASU Capstone Helpdesk
            <CardDescription>Issue Ticketing System </CardDescription>
          </CardHeader>
          <CardContent className="text-gray-800 text-md font-serif">
            <p>
              Led a team of five to develop the ASU Capstone Helpdesk, a
              ticketing system for managing student issues in the capstone
              program. Designed UI prototypes in Figma, built a responsive
              ReactJS frontend with a PostgreSQL backend, and utilized Scrum
              methodologies with Taiga for project management and progress
              tracking.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-gray-100">
          <CardHeader className="font-semibold text-lg">
            OneGen for OneDrug Inc.
            <CardDescription>
              Integrated Healthcare Web Application
            </CardDescription>
          </CardHeader>
          <CardContent className="text-gray-800 text-md font-serif">
            <p>
              Led a team of ten to develop OneGen, a cross-platform healthcare
              web application for OneDrug Inc. Built a ReactJS frontend and a
              Node.js backend with MongoDB, implementing CI/CD pipelines for
              efficient integration, deployment, and comprehensive
              documentation.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-gray-100">
          <CardHeader className="font-semibold text-lg">
            ToothHurty
            <CardDescription>Full Stack Web Application</CardDescription>
          </CardHeader>
          <CardContent className="text-gray-800 text-md font-serif">
            <p>
              A full-stack dental appointment scheduling platform for
              streamlined management of patient appointments. Built the frontend
              with HTML and Tailwind CSS, integrated a Supabase SQL backend, and
              created a REST API using Node.js and Express for seamless
              frontend-backend communication.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-gray-100">
          <CardHeader className="font-semibold text-lg">
            StudPals
            <CardDescription>
              Study Buddy Matching Web Application
            </CardDescription>
          </CardHeader>
          <CardContent className="text-gray-800 text-md font-serif">
            <p>
              A web application that matches students for collaborative
              studying, featuring a Python and Flask-based matching algorithm.
              Built an interactive frontend with HTML, CSS, and Bootstrap, and
              showcased the project&apos;s innovative concept at the SunHacks
              Hackathon.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-gray-100">
          <CardHeader className="font-semibold text-lg">
            Effort Logger
            <CardDescription>
              Productivity Managing Web Application
            </CardDescription>
          </CardHeader>
          <CardContent className="text-gray-800 text-md font-serif">
            <p>
              Built Effort Logger, a productivity management web application for
              tracking tasks and monitoring time efficiency. Developed using
              Java and JavaFX, leveraging Agile methodology and CI/CD pipelines
              to address stakeholder requirements, with project progress
              documented through Jira.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
