import { Finxp, Unexus, Taskus, Dynata } from "../assets";
import { 
  ReactLogo, 
  AngularLogo, 
  LaravelLogo, 
  TailwindLogo, 
  WebLogo, 
  PostmanLogo,
  DockerLogo,
  FastApi,
  MySql,
  Azure,
  MongoLogo,
  PhpLogo,
  NestJS,
  NextJS,
  TypeScript
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
    logo: Finxp,
    title: "Fullstack Developer",
    company: "FinXp Ltd. | Full-time",
    description: `My job at FinXp involves implementing improvements for Fintech application and Portal Admin systems. My recent project 
    was creating an Apply Corporate application using React and Laravel. 
    Following development processes is a crucial part of my role, including conducting feature/unit tests, 
    ensuring compatibility with CI/CD processes, and refactoring code that is both reusable 
    and well-structured for future use.`,
    date: "August 2022 — April 2024"
  },
  {
    logo: Unexus,
    title: "Software Engineer",
    company: "Unexus Inc. | Part-time",
    description: `In my previous role at Unexus, I was responsbile for maintaining and building healthcare applications using 
    React and Laravel. I also handled bug fixes for existing applications and worked closely with QA and designers 
    to enhance application performance and usability.`,
    date: "September 2023 — January 2024"
  },
  {
    logo: Finxp,
    title: "Fullstack Developer Intern",
    company: "FinXp Ltd. | Full-time",
    description: `During my internship, my responsibility is included attending Angular and Laravel training sessions. 
    I actively participated in the Business Onboarding API project by designing API model structures, implementing business rules with PHP(Laravel),
    and documenting newly added API features.
    Additionally, I developed an Onboarding Application using Angular and Laravel 
    as part of my internship assessment. Throughout these tasks, I ensured thorough documentation of all newly 
    implemented features and regulations for the Business Onboarding API.`,
    date: "August 2022 — November 2023"
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
  { logo: WebLogo, title: "Html CSS JS", progressValue: 85 },
  { logo: ReactLogo, title: "React", progressValue: 85 },
  {logo: TypeScript, title: "TypeScript", progressValue: 75},
  {logo: NextJS, title: "NextJS", progressValue: 75},
  { logo: AngularLogo, title: "Angular", progressValue: 60 },
  { logo: TailwindLogo, title: "Tailwind CSS", progressValue: 80 },
  { logo: LaravelLogo, title: "Laravel", progressValue: 85 },
  { logo: PhpLogo, title: "PHP", progressValue: 80 },
  {logo: NestJS, title: "NestJS", progressValue: 75},
  { logo: PostmanLogo, title: "Postman", progressValue: 85 },
  { logo: DockerLogo, title: "Docker", progressValue: 70 },
  { logo: MySql, title: "MySql", progressValue: 65 },
  { logo: FastApi, title: "Fast API", progressValue: 45 },
  {logo: Azure, title: "Azure", progressValue: 45},
  {logo: MongoLogo, title: "MongoDB", progressValue: 45}
];