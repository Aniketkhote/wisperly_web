import { IHashtag, IJob, IPod, IPodPost, IUser } from "./types";

export const jobData: IJob[] = [
  {
    id: 1,
    title: "Create Figma Designs for Web Application",
    company: "NexaVision Technologies",
    description:
      "Looking for an experienced UI/UX designer for an ongoing project...",
    tags: [
      "User Interface Design",
      "Figma",
      "Wireframing",
      "User Experience",
      "Styleguide",
      "Prototyping",
    ],
    location: "New York, Manhattan",
    logo: "https://api.multiavatar.com/Skeleto811.png",
  },
  {
    id: 2,
    title: "Looking for a Graphic Designer",
    company: "QuantumPeak Solutions",
    description:
      "We are a direct-to-consumer saas company looking to improve...",
    tags: [
      "User Interface",
      "User Experience",
      "Web Design",
      "Human-Centered Design",
      "Figma",
      "Wireframing",
    ],
    location: "New York, Brooklyn",
    logo: "https://api.multiavatar.com/Skeleto812.png",
  },
  {
    id: 3,
    title: "Senior Backend Developer",
    company: "ApexWave Innovations",
    description:
      "Seeking a senior backend developer experienced in Node.js and MongoDB...",
    tags: ["Node.js", "MongoDB", "Backend Development", "API", "Microservices"],
    location: "San Francisco, CA",
    logo: "https://api.multiavatar.com/Skeleto813.png",
  },
  {
    id: 4,
    title: "Frontend Developer",
    company: "StellarSync Systems",
    description:
      "We need a frontend developer proficient in React and Tailwind CSS...",
    tags: [
      "React",
      "Tailwind CSS",
      "Frontend Development",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    location: "Austin, TX",
    logo: "https://api.multiavatar.com/Skeleto814.png",
  },
  {
    id: 5,
    title: "Mobile App Developer",
    company: "FusionPulse Enterprises",
    description:
      "Looking for a mobile app developer experienced with Flutter...",
    tags: ["Flutter", "Dart", "Mobile Development", "iOS", "Android"],
    location: "Remote",
    logo: "https://api.multiavatar.com/Skeleto815.png",
  },
  {
    id: 6,
    title: "DevOps Engineer",
    company: "CyberQuest Dynamics",
    description:
      "Seeking a DevOps engineer to manage our AWS infrastructure...",
    tags: ["DevOps", "AWS", "CI/CD", "Docker", "Kubernetes"],
    location: "Seattle, WA",
    logo: "https://api.multiavatar.com/Skeleto816.png",
  },
  {
    id: 7,
    title: "Data Scientist",
    company: "LuminaCore Labs",
    description:
      "We are looking for a data scientist with experience in Python and machine learning...",
    tags: [
      "Python",
      "Machine Learning",
      "Data Science",
      "Statistics",
      "Pandas",
      "NumPy",
    ],
    location: "Boston, MA",
    logo: "https://api.multiavatar.com/Skeleto817.png",
  },
  {
    id: 8,
    title: "UX Researcher",
    company: "VertexVantage Ventures",
    description:
      "Seeking a UX researcher to conduct user studies and improve our product design...",
    tags: [
      "UX Research",
      "User Studies",
      "Product Design",
      "Usability Testing",
    ],
    location: "Los Angeles, CA",
    logo: "https://api.multiavatar.com/Skeleto817.png",
  },
  {
    id: 9,
    title: "Content Writer",
    company: "OptiLink Networks",
    description:
      "Looking for a content writer to create engaging blog posts and articles...",
    tags: ["Content Writing", "SEO", "Blogging", "Copywriting"],
    location: "Remote",
    logo: "https://api.multiavatar.com/Skeleto818.png",
  },
  {
    id: 10,
    title: "Project Manager",
    company: "AstroNova Enterprises",
    description:
      "We need a project manager to oversee our software development projects...",
    tags: ["Project Management", "Agile", "SCRUM", "Leadership"],
    location: "Chicago, IL",
    logo: "https://api.multiavatar.com/Skeleto819.png",
  },
];

export const pods: IPod[] = [
  {
    id: 1,
    name: "Workplace Issues",
    description: "Discuss workplace challenges anonymously",
    members: 3450,
    imageUrl: "images/banner.png",
  },
  {
    id: 2,
    name: "Mental Health",
    description: "Share and support each other on mental health topics",
    members: 5120,
    imageUrl: "images/banner.png",
  },
  {
    id: 3,
    name: "Health",
    description: "Tips and discussions on maintaining a healthy lifestyle",
    members: 7840,
    imageUrl: "images/banner.png",
  },
  {
    id: 4,
    name: "Education",
    description: "Explore and discuss educational resources and experiences",
    members: 6290,
    imageUrl: "images/banner.png",
  },
  {
    id: 5,
    name: "Government",
    description: "Debate and share information on government policies and news",
    members: 4120,
    imageUrl: "images/banner.png",
  },
  {
    id: 6,
    name: "Jobs",
    description: "Find job postings and career advice",
    members: 9100,
    imageUrl: "images/banner.png",
  },
  {
    id: 7,
    name: "Movies",
    description: "Discuss the latest movies and film industry news",
    members: 7560,
    imageUrl: "images/banner.png",
  },
  {
    id: 8,
    name: "Technology",
    description: "Stay updated on the latest tech trends and innovations",
    members: 12450,
    imageUrl: "images/banner.png",
  },
  {
    id: 9,
    name: "Memes",
    description: "Share and enjoy the funniest memes on the internet",
    members: 13480,
    imageUrl: "images/banner.png",
  },
];

export const suggestions: IUser[] = [
  {
    id: 1,
    src: "https://api.multiavatar.com/Skeleto81.png",
    name: "Roger Korsgaard",
    role: "UX Designer",
  },
  {
    id: 2,
    src: "https://api.multiavatar.com/Skeleto82.png",
    name: "Terry Torff",
    role: "Frontend Developer",
  },
  {
    id: 3,
    src: "https://api.multiavatar.com/Skeleto83.png",
    name: "Angel Bergson",
    role: "Product Manager",
  },
  {
    id: 4,
    src: "https://api.multiavatar.com/Skeleto84.png",
    name: "Lisa Chen",
    role: "Data Analyst",
  },
  {
    id: 5,
    src: "https://api.multiavatar.com/Skeleto85.png",
    name: "Mark Johnson",
    role: "Backend Developer",
  },
  {
    id: 6,
    src: "https://api.multiavatar.com/Skeleto86.png",
    name: "Sarah Williams",
    role: "Marketing Specialist",
  },
];

export const posts = [
  {
    userImg: suggestions[Math.floor(Math.random() * suggestions.length)].src,
    userName: suggestions[Math.floor(Math.random() * suggestions.length)].name,
    date: "23 Aug at 4:21 PM",
    text: "Loving the new updates on this platform. Great job, team!",
    postImg: ["https://via.placeholder.com/600?text=Image1"],
    likes: "30",
    comments: "12",
    shares: "5",
  },
  {
    userImg: suggestions[Math.floor(Math.random() * suggestions.length)].src,
    userName: suggestions[Math.floor(Math.random() * suggestions.length)].name,
    date: "23 Aug at 4:21 PM",
    text: "Just visited an amazing restaurant! The food was fantastic and the ambiance was perfect.",
    postImg: [],
    likes: "30",
    comments: "12",
    shares: "5",
  },
  {
    userImg: suggestions[Math.floor(Math.random() * suggestions.length)].src,
    userName: suggestions[Math.floor(Math.random() * suggestions.length)].name,
    date: "23 Aug at 4:21 PM",
    text: "Check out this cool coffee shop I found downtown. The coffee is to die for!",
    postImg: [
      "https://via.placeholder.com/600?text=Image1",
      "https://via.placeholder.com/600?text=Image2",
    ],
    likes: "30",
    comments: "12",
    shares: "5",
  },
  {
    userImg: suggestions[Math.floor(Math.random() * suggestions.length)].src,
    userName: suggestions[Math.floor(Math.random() * suggestions.length)].name,
    date: "23 Aug at 4:21 PM",
    text: "Check out this cool coffee shop I found downtown. The coffee is to die for!",
    postImg: [
      "https://via.placeholder.com/600?text=Image1",
      "https://via.placeholder.com/600?text=Image2",
      "https://via.placeholder.com/600?text=Image3",
      "https://via.placeholder.com/600?text=Image4",
      "https://via.placeholder.com/600?text=Image5",
      "https://via.placeholder.com/600?text=Image6",
    ],
    likes: "30",
    comments: "12",
    shares: "5",
  },
  {
    userImg: suggestions[Math.floor(Math.random() * suggestions.length)].src,
    userName: suggestions[Math.floor(Math.random() * suggestions.length)].name,
    date: "23 Aug at 4:21 PM",
    text: "Check out this cool coffee shop I found downtown. The coffee is to die for!",
    postImg: [
      "https://via.placeholder.com/600?text=Image1",
      "https://via.placeholder.com/600?text=Image2",
      "https://via.placeholder.com/600?text=Image3",
    ],
    likes: "30",
    comments: "12",
    shares: "5",
  },
];

export const hashtags: IHashtag[] = [
  { tag: "#travel", postCount: 1500000 },
  { tag: "#food", postCount: 2000000 },
  { tag: "#photography", postCount: 1800000 },
  { tag: "#fitness", postCount: 2200000 },
  { tag: "#fashion", postCount: 2500000 },
];

export const podPosts: IPodPost = {
  id: 1,
  author: suggestions[0],
  content: "Just finished a great book! What's everyone reading these days?",
  createdAt: "2024-07-25T10:30:00Z",
  likes: 15,
  comments: [
    {
      id: 1,
      author: suggestions[1],
      content: "I'm currently reading '1984' by George Orwell. It's a classic!",
      createdAt: "2024-07-25T11:00:00Z",
      replies: [
        {
          id: 2,
          author: suggestions[2],
          content:
            "Oh, that's one of my favorites! Have you read 'Brave New World' as well?",
          createdAt: "2024-07-25T11:15:00Z",
        },
        {
          id: 3,
          author: suggestions[1],
          content:
            "Not yet, but it's on my list. Thanks for the recommendation!",
          createdAt: "2024-07-25T11:30:00Z",
        },
      ],
    },
    {
      id: 4,
      author: suggestions[3],
      content:
        "I just finished 'The Midnight Library' by Matt Haig. It was amazing!",
      createdAt: "2024-07-25T12:00:00Z",
      replies: [
        {
          id: 5,
          author: suggestions[0],
          content:
            "I've heard good things about that one. I'll have to check it out!",
          createdAt: "2024-07-25T12:15:00Z",
        },
      ],
    },
    {
      id: 6,
      author: suggestions[4],
      content:
        "I'm more into non-fiction. Currently reading 'Sapiens' by Yuval Noah Harari.",
      createdAt: "2024-07-25T13:00:00Z",
    },
  ],
};
