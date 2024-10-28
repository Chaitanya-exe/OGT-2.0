import { Autocomplete, Chip, TextField } from "@mui/material";
import { IoClose } from "react-icons/io5";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { TiUser } from "react-icons/ti";
import { MdBookmarkAdded } from "react-icons/md";
import { RiFileEditFill } from "react-icons/ri";
import { MdWork } from "react-icons/md";
import { MdReviews } from "react-icons/md";






export const services = [
  {
    id: 1,
    title: "Unleash Your Potential on a Global Stage for tech startups.",
    content:
      "We envision a world where skilled individuals can seamlessly connect with exciting projects across the globe. Our platform fosters a vibrant marketplace of talent, empowering Developers to showcase their expertise and collaborate with businesses seeking the perfect fit.",
  },
  {
    id: 2,
    title: "Unleash Your Potential on a Global Stage for tech startups.",
    content:
      "We envision a world where skilled individuals can seamlessly connect with exciting projects across the globe. Our platform fosters a vibrant marketplace of talent, empowering Developers to showcase their expertise and collaborate with businesses seeking the perfect fit.",
  },
  {
    id: 3,
    title: "Join a thriving ecosystem for career growth.",
    content:
      "OGT transcends simple project matchmaking by providing access to diverse opportunities and fostering meaningful connections.",
  },
  {
    id: 4,
    title: "Build your fulfilling career with ease.",
    content:
      "Developers can grow professionally and achieve their dreams with our seamless platform.",
  },
];

export const tabs = [
  "Software Development",
  "Web Development",
  "Design",
  "Networking",
  "Database",
  "Systems Design",
  "Data Science",
  "Security Analyst",
  "UX/UI Designer",
  "Cloud",
  "Blockchain",
  "Cybersecurity",
  "Machine Learning",
  "AI",
  "Frontend development",
  "React",
  "Node.js",
  "React-Redux",
  "App Development",
  "Full-Stack",
];

export const StepsData = [
  {
    id: "1",
    role: "developer",
    tabNames: [
      {
        id: 1,
        name: "Post your job",
      },
      {
        id: 2,
        name: "Choose your developer",
      },
      {
        id: 3,
        name: "delivery upon conformation",
      },
    ],
    content: [
      {
        tab: "1",
        array: [
          {
            point: "Craft a Compelling Project Description :",
            text: "Start by providing a clear and concise title for your project. Next, fill out the project description, outlining the specific requirements, desired skills, and timeline for completion.",
          },
          {
            point: "Craft a Compelling Project Description :",
            text: "Start by providing a clear and concise title for your project. Next, fill out the project description, outlining the specific requirements, desired skills, and timeline for completion.",
          },
        ],
      },

      {
        tab: "2",
        array: [
          {
            point: "Craft a Compelling Project Description :",
            text: "Start by providing a clear and concise title for your project. Next, fill out the project description, outlining the specific requirements, desired skills, and timeline for completion.",
          },
          {
            point: "Craft a Compelling Project Description :",
            text: "Start by providing a clear and concise title for your project. Next, fill out the project description, outlining the specific requirements, desired skills, and timeline for completion.",
          },
          {
            point: "Craft a Compelling Project Description :",
            text: "Start by providing a clear and concise title for your project. Next, fill out the project description, outlining the specific requirements, desired skills, and timeline for completion.",
          },
        ],
      },
      {
        tab: "3",
        array: [
          {
            point: "Craft a Compelling Project Description :",
            text: "Start by providing a clear and concise title for your project. Next, fill out the project description, outlining the specific requirements, desired skills, and timeline for completion.",
          },
        ],
      },
    ],
  },
  {
    id: "2",
    role: "client",
    tabNames: [
      "Post your job",
      "Choose ypur developer",
      "delivery upon conformation",
    ],
    content: [
      {
        point: "Craft a Compelling Project Description :",
        text: "Start by providing a clear and concise title for your project. Next, fill out the project description, outlining the specific requirements, desired skills, and timeline for completion.",
      },
      {
        point: "Craft a Compelling Project Description :",
        text: "Start by providing a clear and concise title for your project. Next, fill out the project description, outlining the specific requirements, desired skills, and timeline for completion.",
      },
    ],
  },
];

export const testimonialData = [
  {
    id: 1,
    userName: "Rashmi",
    company: "RSMI",
    feedback:
      "Start by providing a clear and concise title for your project. Next, fill out the project description, outlining the specific requirements, desired skills, and timeline for completion.",
    ratingCount: 4,
  },
  {
    id: 2,
    userName: "Rashmi",
    company: "RSMI",
    feedback:
      "Start by providing a clear and concise title for your project. Next, fill out the project description, outlining the specific requirements, desired skills, and timeline for completion.",
    ratingCount: 3,
  },
  {
    id: 3,
    userName: "Rashmi",
    company: "RSMI",
    feedback:
      "Start by providing a clear and concise title for your project. Next, fill out the project description, outlining the specific requirements, desired skills, and timeline for completion.",
    ratingCount: 4,
  },
  {
    id: 4,
    userName: "Rashmi",
    company: "RSMI",
    feedback:
      "Start by providing a clear and concise title for your project. Next, fill out the project description, outlining the specific requirements, desired skills, and timeline for completion.",
    ratingCount: 4,
  },
  {
    id: 5,
    userName: "Rashmi",
    company: "RSMI",
    feedback:
      "Start by providing a clear and concise title for your project. Next, fill out the project description, outlining the specific requirements, desired skills, and timeline for completion.",
    ratingCount: 4,
  },
  {
    id: 6,
    userName: "Rashmi",
    company: "RSMI",
    feedback:
      "Start by providing a clear and concise title for your project. Next, fill out the project description, outlining the specific requirements, desired skills, and timeline for completion.",
    ratingCount: 4,
  },
  {
    id: 7,
    userName: "Rashmi",
    company: "RSMI",
    feedback:
      "Start by providing a clear and concise title for your project. Next, fill out the project description, outlining the specific requirements, desired skills, and timeline for completion.",
    ratingCount: 4,
  },
  {
    id: 8,
    userName: "Rashmi",
    company: "RSMI",
    feedback:
      "Start by providing a clear and concise title for your project. Next, fill out the project description, outlining the specific requirements, desired skills, and timeline for completion.",
    ratingCount: 4,
  },
  {
    id: 9,
    userName: "Rashmi",
    company: "RSMI",
    feedback:
      "Start by providing a clear and concise title for your project. Next, fill out the project description, outlining the specific requirements, desired skills, and timeline for completion.",
    ratingCount: 4,
  },
  {
    id: 10,
    userName: "Rashmi",
    company: "RSMI",
    feedback:
      "Start by providing a clear and concise title for your project. Next, fill out the project description, outlining the specific requirements, desired skills, and timeline for completion.",
    ratingCount: 4,
  },
  {
    id: 11,
    userName: "Rashmi",
    company: "RSMI",
    feedback:
      "Start by providing a clear and concise title for your project. Next, fill out the project description, outlining the specific requirements, desired skills, and timeline for completion.",
    ratingCount: 4,
  },
];

export const footerDummyData = [
  {
    name: "Help & support",
    list: ["about", "Why ogt?", "email", "faqs", "terms & services"],
    list: [
      {
        name: "about",
        link: "/about",
      },
      {
        name: "Why OGT ?",
        link: "/why",
      },
      {
        name: "email",
        link: "/",
      },
      {
        name: "faqs",
        link: "/faqs",
      },
      {
        name: "Terms & Services",
        link: "/terms&services",
      },
    ],
  },
  {
    name: "resources",
    list: [
      {
        name: "Free Courses",
        link: "/resources",
      },
      {
        name: "Blogs",
        link: "/blogs",
      },
    ],
  },
];

export const projectsData = [
  {
    id: 1,
    companyName: "Google",
    companyNote:
      "Short company description To display an array of skills separated by commas, you can use the join() method in JavaScript, which concatenates array elements into a string with a specified separator.",
    role: "cyber security",
    stipend: "10000",
    timeline: "1 month",
    skills: ["WebScraping", "injections", "buffering", "NLP"],
    requirements: ["Landing page", "Home Page"],
    applicants: "100",
    status: "Active",
    postedOn: "20/4/24",
    
  },
  {
    id: 2,
    companyName: "Google",
    companyNote:
      "Short company description To display an array of skills separated by commas, you can use the join() method in JavaScript, which concatenates array elements into a string with a specified separator.",
    role: "cyber security",
    stipend: "15000",
    timeline: "1 month",
    skills: ["WebScraping", "injections", "buffering", "NLP"],
    applicants: "100",
    requirements: ["Landing page", "Home Page"],
    postedOn: "20/4/24",

    status: "Active",
  },
  {
    id: 3,
    companyName: "Google",
    companyNote:
      "Short company description To display an array of skills separated by commas, you can use the join() method in JavaScript, which concatenates array elements into a string with a specified separator.",
    role: "cyber security",
    stipend: "50000",
    timeline: "1 month",
    skills: ["WebScraping", "injections", "buffering", "NLP"],
    requirements: ["Landing page", "Home Page"],

    applicants: "100",
    status: "Active",
    postedOn: "20/4/24",
  },
  {
    id: 4,
    companyName: "Google",
    companyNote:
      "Short company description To display an array of skills separated by commas, you can use the join() method in JavaScript, which concatenates array elements into a string with a specified separator.",
    role: "frontend development",
    stipend: "45000",
    timeline: "1 month",
    skills: ["WebScraping", "injections", "buffering", "NLP"],
    requirements: ["Landing page", "Home Page"],

    applicants: "100",
    status: "Active",
    postedOn: "20/4/24",
  },
  {
    id: 5,
    companyName: "Google",
    companyNote:
      "Short company description To display an array of skills separated by commas, you can use the join() method in JavaScript, which concatenates array elements into a string with a specified separator.",
    role: "web development",
    stipend: "60000",
    timeline: "1 month",
    skills: ["WebScraping", "injections", "buffering", "NLP"],
    requirements: ["Landing page", "Home Page"],

    applicants: "100",
    status: "Active",
    postedOn: "20/4/24",
  },
  {
    id: 6,
    companyName: "Google",
    companyNote:
      "Short company description To display an array of skills separated by commas, you can use the join() method in JavaScript, which concatenates array elements into a string with a specified separator.",
    role: "app development",
    stipend: "20000",
    timeline: "1 month",
    skills: ["WebScraping", "injections", "buffering", "NLP"],
    requirements: ["Landing page", "Home Page"],

    applicants: "100",
    status: "Active",
    postedOn: "20/4/24",
  },
];


export const SkillsInput =({value,onChangeFunction}) => {
  return (
    <Autocomplete
      multiple
      id="tags-standard"
      options={tabs}
      getOptionLabel={(option) => option}
      defaultValue={[tabs[3]]}
      value={value}
      onChange={onChangeFunction}
      className="border-b text-white w-full border-white/10 focus:outline-none min-w-2xl"
      renderInput={(params) => (
        <TextField
          {...params}
          variant="standard"
          label="Choose skills "
          placeholder="+ Add Skils"
          className="text-white text-capitalize"
          InputLabelProps={{
            className: "text-white ", // Custom text color for label
          }}
          InputProps={{
            ...params.InputProps,
            className:
              "text-white bg-bgColor/0 px-3 py-2 min-w-2xl flex flex-wrap gap-x-2 gap-y-2",
          }}
        />
      )}
      renderOption={(props, option) => (
        <li
          {...props}
          className="text-white  p-3 min-w-2xl bg-bgColor/90 hover:bg-bgColor/70" // Custom text and background color for each option
        >
          {option}
        </li>
      )}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip
            key={index}
            variant="outlined"
            label={option}
            {...getTagProps({ index })}
            className="bg-l2 m-2.5 text-capitalize text-white"
            deleteIcon={<IoClose className="text-white" />}
          />
        ))
      }
      ChipProps={{
        className: "bg-l2 m-2 text-capitalize text-white",
      }}
    />
  );
}

export const DatePickerInput = ({value,onChangeFunction}) =>{
  return (
    <DatePicker
      name="DOB"
      selected={value ? new Date(value) : null}
      onChange={(date) => onChangeFunction(date)}
      dateFormat="dd-MM-yyyy"
      placeholderText="Select your date of birth"
      className="border border-white/10 p-4 w-[340px] text-white bg-transparent rounded-md block focus:outline outline-purple-400"
      showYearDropdown
      scrollableYearDropdown
      yearDropdownItemNumber={50}
    />
  );
}


export const CountryInput = ({value,onChangeFunction,countryList}) =>{
  return (
    <select
      value={value}
      name="country"
      onChange={onChangeFunction}
      className=" bg-transparent border border-white/10 text-BO   p-3 rounded-md focus:outline outline-purple-400"
    >
      {countryList?.map((country) => (
        <option
          value={country}
          className="bg-B bg-transparent py-2 text-bgColor hover:white/10"
        >
          {country}
        </option>
      ))}
    </select>
  );
}


export const developerDashBoard = [
  {
    id: 1,
    name: "My Profile",
    link: "myProfile",
    icon: <TiUser className="size-7" />,
  },
  {
    id: 2,
    name: "saved Projects",
    link: "savedProjects",
    icon: <MdBookmarkAdded className="size-6" />,
  },
  {
    id: 3,
    name: "applied projects",
    link: "appliedProjects",
    icon: <RiFileEditFill className="size-6" />,
  },
  {
    id: 4,
    name: "working projects",
    link: "workingProjects",
    icon: <MdWork className="size-6" />,
  },
  {
    id: 5,
    name: "rating & reviews",
    link: "reviews",
    icon: <MdReviews className="size-6" />,
  },
  {
    id: 6,
    name: "payments",
    link: "payments",
    svg: "/Wallet.svg",
  },
  {
    id: 1,
    name: "help & support",
    link: "help",
    svg : "/support.svg"
  },
];