import React from 'react';
import { 
  BookOpen, 
  Award, 
  Users, 
  Briefcase, 
  CheckCircle, 
  Globe, 
  BarChart2, 
  TrendingUp,
  Monitor,
  Landmark,
  FileText,
  Lightbulb,
  Search,
  Book,
  Leaf,
  Mic,
  Tent,
  Heart,
  Shovel,
  Megaphone
} from 'lucide-react';

// Using a placeholder that looks professional. 
// User provided link: https://ibb.co/V0zkjd4h (This is a viewer page, not direct image).
// I am using a high-quality placeholder for the demo, but the user should ideally replace this with the direct link to their photo.
export const PROFILE_IMAGE_URL = "https://i.ibb.co/5XSJMdHz/Whats-App-Image-2025-12-15-at-10-41-14-AM-1.jpg"; 
export const NSS_LOGO_URL = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/National_Service_Scheme_logo.svg/250px-National_Service_Scheme_logo.svg.png";

export const CONTACT_INFO = {
  name: "Ganesh Nayak",
  title: "Lecturer | Researcher | Commerce & Finance Academic",
  email: "ganeshnayak939@gmail.com",
  phone: "+91 9535580597",
  address: "Shantha Durga Nilaya, Santhekatte Post, Kelarkalabettu, Garadimajal, Udupi – 576105",
  location: "Udupi, Karnataka, India"
};

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Teaching', href: '#teaching' },
  { name: 'Experience', href: '#experience' },
  { name: 'NSS', href: '#nss' },
  { name: 'Media', href: '#media' },
  { name: 'Research', href: '#research' },
  { name: 'Leadership', href: '#leadership' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

export const TIMELINE_DATA = [
  {
    year: '2015',
    degree: 'M.Com (Finance)',
    institution: 'Milagres College, Kallianpur',
    board: 'Mangalore University',
    details: 'Secured 74% | Specialization in Finance'
  },
  {
    year: '2013',
    degree: 'B.Com',
    institution: 'Milagres College, Kallianpur',
    board: 'Mangalore University',
    details: 'Secured 71% | Advanced Accounting & Auditing'
  },
  {
    year: '2010',
    degree: 'PUC',
    institution: 'Milagres College, Kallianpur',
    board: 'Dept. of Pre-University Education',
    details: 'Secured 68% | Commerce Stream'
  },
  {
    year: '2008',
    degree: 'SSLC',
    institution: 'Nittur High School, Udupi',
    board: 'Karnataka Secondary Education Board',
    details: 'Secured 62.08%'
  }
];

export const EXPERIENCE_DATA = [
  {
    role: 'Lecturer',
    institution: 'Milagres College, Kallianpur',
    period: '8 Years',
    type: 'Full Time',
    description: 'Teaching undergraduate and postgraduate students, mentoring research projects, and organizing academic events like "Vidyarthi Darbar".'
  },
  {
    role: 'Guest Lecturer',
    institution: 'L.S.B G.F.G.C, Kota, Padukere',
    period: '6 Months',
    type: 'Guest Faculty',
    description: 'Delivered specialized lectures on Financial Management and Corporate Accounting.'
  }
];

export const PUBLICATIONS = [
  {
    id: 1,
    title: "Assessing the Impact of Festive Seasons and Historical Significance on Tourism in Udupi Region",
    journal: "International Journal for Multidisciplinary Research",
    year: "July 2024",
    doi: "UGC Approved",
    tags: ["Tourism", "Udupi", "Economics"],
    abstract: "This study investigates the correlation between festive seasons and tourist footfall in the Udupi region. By analyzing historical data and economic indicators, the research highlights how religious and cultural events act as primary drivers for the local hospitality and tourism economy."
  },
  {
    id: 2,
    title: "Embracing Academic Entrepreneurship in Rural Colleges: Addressing Skill Deficits",
    journal: "International Journal of Creative Research Thoughts",
    year: "May 2024",
    doi: "UGC Approved",
    tags: ["Entrepreneurship", "Rural Education", "Skill Development"],
    abstract: "A critical analysis of the skill gap in rural educational institutions. The paper proposes a framework for integrating entrepreneurial training into traditional commerce curriculums to empower students in non-urban settings."
  },
  {
    id: 3,
    title: "A Study of Drastic Effects in Education Standards by the Influence of ChatGPT",
    journal: "International Journal of Research and Analytical Reviews",
    year: "May 2024",
    doi: "UGC Approved",
    tags: ["AI in Education", "ChatGPT", "EdTech"],
    abstract: "This paper explores the dual-edged nature of Large Language Models (LLMs) like ChatGPT in higher education. It assesses the impact on academic integrity, assessment methodologies, and the evolving role of educators in an AI-driven landscape."
  },
  {
    id: 4,
    title: "Pandemic Stressed Digital Marketing",
    journal: "International Journal of Research and Analytical Reviews",
    year: "Aug 2023",
    doi: "UGC Approved",
    tags: ["Digital Marketing", "Pandemic", "Consumer Behavior"],
    abstract: "An empirical study on the shift in consumer behavior during the COVID-19 pandemic. The research documents the forced digital transformation of local businesses and the long-term effectiveness of crisis-response digital marketing strategies."
  },
  {
    id: 5,
    title: "A Study on Financial Inclusion",
    journal: "National Seminar @ Milagres College",
    year: "2016",
    doi: "ISBN 978-81-929263-3-9",
    tags: ["Financial Inclusion", "Economics", "Banking"],
    abstract: "Presented at a UGC sponsored seminar, this paper analyzes the reach of banking services in rural Karnataka. It identifies key barriers to financial literacy and proposes community-driven models to enhance financial inclusion among marginalized groups."
  }
];

export const EVENTS_STATS = [
  { label: 'Seminars & Conferences', value: 25, suffix: '+' },
  { label: 'FDPs & Workshops', value: 30, suffix: '+' },
  { label: 'Research Papers', value: 5, suffix: '' },
  { label: 'Years Experience', value: 8, suffix: '+' }
];

export const CERTIFICATIONS = [
  {
    category: "Recent FDPs & Workshops (2024-25)",
    items: [
      "Research Methodology for Teachers - ICSSR-NERC (2025)",
      "Project Writing for Grants - Research Foundation of India (2025)",
      "Development Research Methods - NPTEL (AICTE) (2024)",
      "AI Tools for Smart Teaching - AIACHE (2024)",
      "My Bharat & Digital Literacy - MAHE (2024)"
    ]
  },
  {
    category: "Technical & Professional Courses",
    items: [
      "Tally ERP 9 - Professional Certification",
      "Microsoft Power BI Desktop - Course Completion",
      "Advanced Microsoft Excel & Power Query",
      "SPSS Masterclass: Scratch to Advanced",
      "Introduction to Digital Marketing - GLA"
    ]
  },
  {
    category: "Academic Certifications (NPTEL/SWAYAM)",
    items: [
      "Research Methodology & Statistical Analysis - SWAYAM",
      "Global Marketing Management - NPTEL",
      "Financial Management for Managers - NPTEL",
      "Enhancing Soft Skills and Personality - NPTEL",
      "English for Research Paper Writing - SWAYAM"
    ]
  }
];

export const RESPONSIBILITIES = [
  { icon: <Users className="w-6 h-6" />, title: "NSS Officer", desc: "Spearheading community service & social welfare projects." },
  { icon: <Briefcase className="w-6 h-6" />, title: "Placement Officer", desc: "Bridging the gap between academia and industry for students." },
  { icon: <BookOpen className="w-6 h-6" />, title: "Convener", desc: "Structuring Add-on Courses & Curriculum Planning." },
  { icon: <CheckCircle className="w-6 h-6" />, title: "Internal Auditor", desc: "Ensuring academic quality and institutional compliance." },
  { icon: <Users className="w-6 h-6" />, title: "Commerce Association", desc: "Coordinating departmental events and student activities." },
  { icon: <Leaf className="w-6 h-6" />, title: "Eco Club", desc: "Driving environmental awareness and campus green initiatives." },
];

export const SKILLS = [
  { name: "Research Methodology", level: 90, icon: <BookOpen size={16}/> },
  { name: "Financial Analysis", level: 85, icon: <TrendingUp size={16}/> },
  { name: "SPSS / Data Analysis", level: 80, icon: <BarChart2 size={16}/> },
  { name: "Tally ERP 9", level: 95, icon: <Monitor size={16}/> },
  { name: "Power BI", level: 75, icon: <BarChart2 size={16}/> },
  { name: "Digital Marketing", level: 70, icon: <Globe size={16}/> },
];

export const PERSONAL_DETAILS = {
  fatherName: "Prabhakar Nayak",
  dob: "28th December, 1992",
  languages: ["English", "Kannada", "Hindi", "Konkani"],
  hobbies: ["Listening to Bhajans", "Spiritual Speeches", "Solving Puzzles", "Computer Games"]
};

export const SOCIAL_LINKS = [
  { name: "Google Scholar", url: "https://scholar.google.com/citations?hl=en&user=TcttpLQAAAAJ", icon: "GS" },
  { name: "ResearchGate", url: "https://www.researchgate.net/profile/Ganesh-Nayak-11", icon: "RG" },
  { name: "ORCID", url: "https://orcid.org/0009-0002-3082-8282", icon: "OR" },
  { name: "Vidwan", url: "https://vidwan.inflibnet.ac.in/profile/611895", icon: "V" },
];

export const GALLERY_SECTIONS = [
  {
    title: "Session on Presentation of Financial Statements - Ind AS 1",
    location: "Sri Poornaprajna Evening College, Udupi",
    images: [
      { url: "https://images.unsplash.com/photo-1544531696-2822a09966ce?auto=format&fit=crop&w=800", caption: "Session Overview" },
      { url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800", caption: "Student Interaction" },
      { url: "https://images.unsplash.com/photo-1558021284-836d851e950e?auto=format&fit=crop&w=800", caption: "Key Note Address" },
      { url: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800", caption: "Audience" },
      { url: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800", caption: "Q&A Session" },
      { url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800", caption: "Felicitation" }
    ]
  },
  {
    title: "Special Lecture on Ind AS",
    location: "Crossland College Bramhavar, Udupi",
    images: [
        { url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800", caption: "Lecture Delivery" },
        { url: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800", caption: "Academic Discussion" },
        { url: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800", caption: "Topic Presentation" },
        { url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800", caption: "Classroom" },
        { url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800", caption: "Strategic Analysis" },
        { url: "https://images.unsplash.com/photo-1513258496098-91626db527c5?auto=format&fit=crop&w=800", caption: "Group Photo" }
    ]
  },
  {
    title: "Workshop on 'Inclination Persona'",
    location: "Crossland College Bramhavar, Udupi",
    images: [
        { url: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800", caption: "Role Plays" },
        { url: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800", caption: "Personality Dev" },
        { url: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=800", caption: "Interactive Session" },
        { url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800", caption: "Student Activities" },
        { url: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800", caption: "Workshop Start" },
        { url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800", caption: "Closing Ceremony" }
    ]
  }
];

export const TEACHING_INTERESTS = [
  { subject: "Financial Management", description: "Strategic financial planning, capital budgeting, and corporate finance.", icon: <BarChart2 size={24}/> },
  { subject: "Corporate Accounting", description: "Advanced accounting principles, standards, and company law compliance.", icon: <Book size={24}/> },
  { subject: "Research Methodology", description: "Statistical analysis, hypothesis testing, and academic report writing.", icon: <Search size={24}/> },
  { subject: "Banking & Finance", description: "Modern banking systems, financial inclusion, and monetary policy.", icon: <Landmark size={24}/> },
  { subject: "GST & Taxation", description: "Indirect tax laws, GST filing procedures, and fiscal policy.", icon: <FileText size={24}/> },
  { subject: "Entrepreneurship", description: "Business model development, startup ecosystem, and innovation.", icon: <Lightbulb size={24}/> }
];

export const KEY_INITIATIVES = [
  {
    title: "Vidyarthi Darbar",
    role: "Event Organizer",
    icon: <Mic className="w-6 h-6 text-white"/>,
    description: "A flagship student-centric academic event designed to foster public speaking, debate skills, and critical thinking among commerce students."
  },
  {
    title: "Career Guidance",
    role: "Placement Officer",
    icon: <Briefcase className="w-6 h-6 text-white"/>,
    description: "Spearheading campus recruitment drives, connecting students with top industry players, and conducting employability skills training."
  },
  {
    title: "Eco Club Initiatives",
    role: "Coordinator",
    icon: <Leaf className="w-6 h-6 text-white"/>,
    description: "Leading sustainability drives including campus greening, waste management awareness, and plastic-free campus campaigns."
  }
];

export const NSS_ACTIVITIES = [
  {
    title: "Annual Special Camps",
    description: "Organized 7-day residential camps in adopted villages, focusing on rural infrastructure development, shramadan, and cultural exchange programs.",
    icon: <Tent size={24} className="text-white"/>,
    bg: "bg-emerald-600"
  },
  {
    title: "Blood Donation Drives",
    description: "Coordinated mega blood donation camps in collaboration with district hospitals and Red Cross, mobilizing student donors.",
    icon: <Heart size={24} className="text-white"/>,
    bg: "bg-red-500"
  },
  {
    title: "Swachh Bharat Abhiyan",
    description: "Led cleanliness drives at tourist spots, campus surroundings, and public places to promote hygiene and environmental responsibility.",
    icon: <Shovel size={24} className="text-white"/>,
    bg: "bg-blue-600"
  },
  {
    title: "Social Awareness",
    description: "Conducted rallies and street plays on critical issues like drug abuse, road safety, voter awareness, and gender equality.",
    icon: <Megaphone size={24} className="text-white"/>,
    bg: "bg-amber-500"
  }
];

export const MEDIA_COVERAGE = [
  {
    title: "Expert Lecture on Ind AS 16",
    source: "Kallianpur.com",
    url: "https://kallianpur.com/expert-lecture-on-indian-accounting-standard-16-ind-as-16-property-plant-and-equipment/",
    date: "Academic Event",
    image: "https://images.unsplash.com/photo-1544531696-2822a09966ce?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Personality Development Programme",
    source: "Jananudi.com",
    url: "https://jananudi.com/personality-development-programme-inclination-persona/",
    date: "Workshop",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Talk on Research Techniques & Career",
    source: "Jananudi.com",
    url: "https://jananudi.com/milagres-pu-college-hosts-special-talk-on-research-techniques-and-career-opportunities/",
    date: "Career Guidance",
    image: "https://images.unsplash.com/photo-1477281765962-ef34e8bb0967?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "NSS Camp & Social Activities",
    source: "Kemmannu.com",
    url: "http://www.kemmannu.com/index.php?action=topstory&type=23091",
    date: "NSS Feature",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Community Outreach Program",
    source: "Bellevision.com",
    url: "https://www.bellevision.com/index.php?action=news_diggest&type=6087",
    date: "News Report",
    image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Student Leadership Initiative",
    source: "Kemmannu.com",
    url: "http://www.kemmannu.com/index.php?action=topstory&type=23271",
    date: "Campus News",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Academic Excellence Awards",
    source: "Bellevision.com",
    url: "http://www.bellevision.com/index.php?action=news_diggest&type=6090",
    date: "Event Coverage",
    image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "College Cultural Fest",
    source: "Kemmannu.com",
    url: "https://kemmannu.com/index.php?action=topstory&type=25708",
    date: "Cultural Event",
    image: "https://images.unsplash.com/photo-1514525253440-b393452e8d26?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Special Talk on Commerce",
    source: "Bellevision.com",
    url: "https://www.bellevision.com/index.php?action=topnews&type=26652",
    date: "Guest Lecture",
    image: "https://images.unsplash.com/photo-1558021284-836d851e950e?auto=format&fit=crop&w=800&q=80"
  }
];