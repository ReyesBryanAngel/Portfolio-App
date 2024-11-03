import { Finxp, Unexus, Taskus, Dynata } from "../assets";
import { 
  ReactLogo, 
  AngularLogo, 
  LaravelLogo, 
  TailwindLogo, 
  PostmanLogo,
  DockerLogo,
  MySql,
  PhpLogo,
  NestJS,
  NextJS,
  TypeScript,
  GTS,
  mongoDB,
  expressJS,
  nodeJS
} from "../assets";
export const companyProjectDescription =
  `Apply Corporate is an application that allow companies to apply to FinXp as their financial payment solution.
  This app gather several data from the clients and implement complex API and Front End feature integration. This app uses
  auto saving feature, upload/download of documents, conditional form rendering based on data from different components, complex
  section context error for incomplete inputs, and disabling all the fields once application is submitted.`


export const newBornDescription = 
`The New Born application is an online administration platform that saves birth records for new-born babies. 
It also provides specific report data about their health and employs manual courier information tracking when sending the
data to the admin.`;

export const creditorIdentifier =
`Maltese Creditor Identifier is a key feature of FinXp Portal Admin application system, where I was assigned to create our 
own MCI generator algorithm, so that operations can easily track clients' identifier number. 
The MCI is typically used in various financial processes such as banking transactions, 
credit reporting, tax reporting, and other financial documentation where the identification of creditors is necessary.`

export const BOAPI = 
`Business Onboarding is an API that allow customers to enter company names, members information/position,
shareholding percentage, and document upload/downlaod. My participation on this project is I implemented conditional required values based on shareholding percentage,
created some of the api flow structure based on the requirements, write unit testing for each task and create documentation.`

export const experiences = [
  {
    logo: GTS,
    title: "Backend Developer",
    company: "Gametime Solutions Inc. | Project based",
    description: `- Develop the API of 2d and 3d lotto system.
                  - Integrate balance system, declaration of winners, declare correction and identifier of winners for payout per rounds.
                  - Implement web socket.io with nodeJS for real time data of player head counts per boards and winning notification for each winners.
                  -  Utilize PHPUnit for function test cases.`
  },
  {
    logo: Finxp,
    title: "Fullstack Developer",
    company: "FinXP Ltd. | Full-time",
    description: `- Add the Maltese creditor identifier feature to the portal web application.
                  - Integrate API logic and database model structure for business application requirements.
                  - Built Apply Corporate application that gathers documents and business information of FinXPs' clients.`,
    date: "August 2022 — April 2024"
  },
  {
    logo: Unexus,
    title: "Software Engineer",
    company: "Unexus Inc. | Project based",
    description: `Built the Newborn Application for saving records of newly birth babies, health statuses, 
    and tracking of record deliveries.`
  },
  {
    logo: Taskus,
    title: "Transcriptionist",
    company: "TaskUs | Full-time",
    description: `Accurately transcribe alumni interviews for publication on university websites.`,
    date: "February 2021 — January 2022"
  },
  {
    logo: Dynata,
    title: "Survey Interviewer",
    company: "Dynata SSI Phil Inc. | Full-time",
    description: `Contact list of respondents for a phone survey to gather statistical records related
    to consumer preferences of company products.`,
    date: "July 2020 — November 2020"
  }
];

export const skillsData = [
  { logo: mongoDB, title: "Mongo DB", progressValue: 65 },
  { logo: expressJS, title: "Express JS", progressValue: 70 },
  { logo: ReactLogo, title: "React JS", progressValue: 85 },
  { logo: nodeJS, title: "Node JS", progressValue: 65 },
  { logo: LaravelLogo, title: "Laravel", progressValue: 80 },
  { logo: PhpLogo, title: "PHP", progressValue: 80 },
  {logo: NextJS, title: "NextJS", progressValue: 70},
  { logo: AngularLogo, title: "Angular", progressValue: 60 },
  {logo: TypeScript, title: "TypeScript", progressValue: 60},
  {logo: NestJS, title: "NestJS", progressValue: 60},
  { logo: TailwindLogo, title: "Tailwind CSS", progressValue: 75 },
  { logo: PostmanLogo, title: "Postman", progressValue: 85 },
  { logo: DockerLogo, title: "Docker", progressValue: 65 },
  { logo: MySql, title: "MySql", progressValue: 75 }
];