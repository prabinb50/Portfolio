import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'joshiprabin17@gmail.com',
    emailSubject: "Let's discuss your project",
    emailBody:
        'Hi Prabin, I came across your portfolio and would like to discuss a project with you.',

    github: 'https://github.com/prabinb50',
    linkedin: 'https://www.linkedin.com/in/prabin-joshi-3854ab258',
    whatsapp: 'https://wa.me/9779841120883',
};

export const SOCIAL_LINKS = [
    {
        name: 'GitHub',
        url: GENERAL_INFO.github,
    },
    {
        name: 'LinkedIn',
        url: GENERAL_INFO.linkedin,
    },
    {
        name: 'WhatsApp',
        url: GENERAL_INFO.whatsapp,
    },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'HTML5',
            icon: '/logo/html5.png',
        },
        {
            name: 'Shadcn UI',
            icon: '/logo/shadcn.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'GSAP',
            icon: '/logo/gsap.png',
        },
        {
            name: 'Framer Motion',
            icon: '/logo/framer-motion.png',
        },
        {
            name: 'CSS3',
            icon: '/logo/css3.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.png',
        },
    ],

    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
    ],

    'Database & Data': [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'Postgresql',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.png',
        },
        {
            name: 'Firebase',
            icon: '/logo/firebase.png',
        },
        {
            name: 'Prisma',
            icon: '/logo/prisma.png',
        },
        {
            name: 'Supabase',
            icon: '/logo/supabase.png',
        },
    ],

    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Postman',
            icon: '/logo/postman.png',
        },
        {
            name: 'GitHub',
            icon: '/logo/github.png',
        },
        {
            name: 'Jira',
            icon: '/logo/jira.png',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'VibeRoom',
        category: 'Full Stack Social Platform',
        shortDescription:
            'A full-stack social media platform featuring real-time messaging, rich content creation, authentication, and an interactive social feed.',
        slug: 'viberoom',
        liveUrl: 'https://viberoom-omega.vercel.app/',
        sourceCode:
            'https://github.com/prabinb50/full-stack-social-media-app-next.js16.git',
        description: {
            overview:
                'VibeRoom is a full-stack social media platform designed to deliver a fast, scalable, and engaging user experience. Built with Next.js 16, React 19, TypeScript, and Lucia Auth, the platform enables users to connect, share content, communicate in real time, and discover trending topics through a responsive and performance-focused interface.',
            features: [
                {
                    title: 'Secure Authentication and User Management',
                    description:
                        'Implemented secure user authentication using Lucia Auth, supporting username/password login, Google OAuth2, and secure session management for a seamless and protected user experience.',
                },
                {
                    title: 'Interactive Social Feed',
                    description:
                        'Built a dynamic social feed with TipTap-powered rich text posts, post creation and deletion, infinite scrolling, optimistic UI updates, and server-side rendering with caching for a fast and seamless user experience.',
                },
                {
                    title: 'Real Time Communication',
                    description:
                        'Integrated Stream Chat to enable real-time direct messaging, along with instant notifications that keep users updated about interactions and platform activities.',
                },
                {
                    title: 'Social Engagement Features',
                    description:
                        'Implemented essential social networking features such as like/unlike posts, comment system (with pagination), bookmark posts, follow/unfollow functionality, and personalized content feeds to enhance user engagement.',
                },
                {
                    title: 'Media Sharing and Profile Customization',
                    description:
                        'Built support for image and video uploads with drag-and-drop functionality, avatar customization, profile management, and SEO-friendly user profiles.',
                },
                {
                    title: 'Search and Content Discovery',
                    description:
                        'Implemented advanced search capabilities with hashtags, mentions, and trending topics, making it easier for users to discover relevant content and connect with others.',
                },
                {
                    title: 'Modern Responsive UI',
                    description:
                        'Designed a clean, fully responsive interface with Tailwind CSS and shadcn/ui, including dark, light, and system theme support to ensure an accessible experience across all devices.',
                },
            ],
        },
        techStack: {
            Frontend: [
                'Next.js',
                'TypeScript',
                'Tailwind CSS',
                'shadcn/ui',
                'TipTap Editor',
                'React Hook Form',
                'Zod',
            ],
            Backend: [
                'Next.js Server Actions',
                'Prisma ORM',
                'PostgreSQL (Vercel Postgres)',
            ],
            Authentication: ['Lucia Auth', 'Google OAuth2'],
            'State Management': [
                'TanStack React Query',
                'Infinite Queries',
                'Optimistic UI Updates',
            ],
            'Real-Time': ['Stream Chat'],
            'File Upload': ['UploadThing'],
            Deployment: ['Vercel', 'Vercel Cron Jobs', 'ESLint', 'Prettier'],
        },
        listTechStack: ['Next.js', 'TypeScript', 'Lucia Auth', 'Stream Chat'],
        thumbnail: '/projects/thumbnail/viberoom.png',
        image: '/projects/images/viberoom.png',
    },

    {
        title: 'Zyphora',
        category: 'Full Stack E-commerce',
        shortDescription:
            'An e-commerce platform featuring secure authentication, a modern storefront, cart and wishlist management, Stripe checkout, and an admin dashboard.',
        slug: 'zyphora',
        liveUrl: 'https://zyphora-full-stack-ecommerce-platfo.vercel.app/',
        sourceCode:
            'https://github.com/prabinb50/Zyphora-FullStackEcommercePlatform.git',
        description: {
            overview:
                'Zyphora is a full-stack e-commerce platform built with a React + Vite frontend and an Express + MongoDB backend following a client-server architecture. It features a modern customer storefront with secure authentication, product search, filtering, wishlist and cart management, embedded Stripe checkout, persistent user sessions, and order history. The platform also includes a role-based admin dashboard for product management, featured-product management, order processing, and business analytics.',
            features: [
                {
                    title: 'Modern E-commerce Storefront',
                    description:
                        'Developed a responsive storefront featuring live product search with autocomplete, category and price filtering, sorting, pagination, featured products, quick-view modals, wishlist and cart actions, detailed product pages with size, color, and quantity selection, and responsive navigation.',
                },
                {
                    title: 'Secure Authentication & User Management',
                    description:
                        'Implemented JWT authentication with HttpOnly access and refresh token cookies, automatic session restoration and token refresh, role-based access control, shared Zod validation, and authentication/upload rate limiting for enhanced security.',
                },
                {
                    title: 'Shopping Cart & Wishlist',
                    description:
                        'Built a persistent shopping cart with guest-to-user synchronization, variant-aware items, coupon management, and an authenticated wishlist with optimistic UI updates and client-side caching.',
                },
                {
                    title: 'Secure Checkout & Order Management',
                    description:
                        'Integrated Stripe Embedded Checkout with coupon support, post-payment order verification, automated cart processing, customer order history, and comprehensive order management for administrators.',
                },
                {
                    title: 'Admin Dashboard & Business Analytics',
                    description:
                        'Designed a role-based admin dashboard with business analytics, product creation and management, image uploads, featured product controls, order management, and session-persisted dashboard navigation.',
                },
                {
                    title: 'Performance & User Experience',
                    description:
                        'Enhanced user experience with Framer Motion animations, reusable shadcn/ui components, skeleton loaders, toast notifications, reusable loading and error states, and a polished responsive interface.',
                },
            ],
        },
        techStack: {
            Frontend: [
                'React',
                'TypeScript',
                'Tailwind CSS',
                'Zustand',
                'React Router',
                'Framer Motion',
                'Stripe React Elements',
                'Axios',
                'Zod',
                'shadcn/ui',
                'Lucide React',
                'Recharts',
                'Swiper.js',
                'React Toastify',
                'React Confetti',
            ],
            Backend: [
                'Node.js',
                'Express.js',
                'TypeScript',
                'MongoDB with Mongoose',
                'JSON Web Tokens',
                'bcryptjs',
                'cookie-parser',
                'CORS',
                'ioredis',
                'Stripe SDK',
                'Cloudinary',
                'express-rate-limit',
                'Zod',
            ],
            Deployment: ['Vercel', 'Render', 'ESLint', 'Prettier'],
        },
        listTechStack: ['React', 'TypeScript', 'Node.js', 'Redis'],
        thumbnail: '/projects/thumbnail/zyphora.png',
        image: '/projects/images/zyphora.png',
    },

    {
        title: 'SkyCast',
        category: 'Weather Application',
        shortDescription:
            'A real-time weather application with interactive maps, air quality insights, forecasts, and optimized SSR.',
        slug: 'skycast',
        liveUrl: 'https://skycast-webapp.vercel.app/',
        sourceCode: 'https://github.com/prabinb50/SkyCast-WeatherApp.git',
        description: {
            overview:
                'SkyCast is a full-stack weather application built with Next.js that delivers real-time weather conditions, hourly and daily forecasts, air quality information, and interactive map-based location search. By combining SSR and CSR, it provides fast performance, improved SEO, and a seamless user experience.',
            features: [
                {
                    title: 'Real-Time Weather & Forecasts',
                    description:
                        'Integrated WeatherAPI to provide current weather conditions, hourly forecasts, daily forecasts, and air quality information.',
                },
                {
                    title: 'Interactive Location Search',
                    description:
                        'Implemented location search with a customized Leaflet map, allowing users to search for locations or select them directly from the map to view weather information.',
                },
                {
                    title: 'Optimized Rendering & SEO',
                    description:
                        'Leveraged Next.js SSR, CSR, pre-rendering, and dynamic metadata generation to improve performance and search engine optimization.',
                },
                {
                    title: 'Efficient Data Fetching',
                    description:
                        'Implemented server-side and client-side data fetching using React Query and Axios to enable efficient API communication and improved application performance.',
                },
                {
                    title: 'Modern User Interface',
                    description:
                        'Enhanced the user experience with smooth Framer Motion animations, reusable animation HOCs, and flexible React Icons for an engaging interface.',
                },
                {
                    title: 'Application Architecture',
                    description:
                        'Managed application state using the Context API and utilized Next.js API Routes to securely handle client-server communication.',
                },
            ],
        },
        techStack: [
            'Next.js',
            'React',
            'TypeScript',
            'Tailwind CSS',
            'React Query',
            'Axios',
            'Framer Motion',
            'React Icons',
            'Leaflet.js',
            'WeatherAPI',
            'Vercel',
        ],
        listTechStack: ['Next.js', 'TypeScript', 'WeatherAPI', 'React Query'],
        thumbnail: '/projects/thumbnail/skycast.png',
        image: '/projects/images/skycast.png',
    },

    {
        title: 'DineTime',
        category: 'Mobile Application',
        shortDescription:
            'A restaurant reservation mobile application featuring restaurant discovery, table booking, booking management, and personalized user profiles.',
        slug: 'dinetime',
        sourceCode:
            'https://github.com/prabinb50/DineTime-RestaurantBookingMobileApp.git',
        description: {
            overview:
                'DineTime is a restaurant booking mobile application built with React Native, Expo, and Firebase. The app enables users to discover restaurants, reserve tables, manage bookings, and personalize their profiles through a seamless, responsive, and user-friendly mobile experience.',
            features: [
                {
                    title: 'Secure Authentication & Guest Access',
                    description:
                        'Implemented secure user authentication with Firebase Authentication, including email/password sign-up and sign-in, Firestore user profile management, persistent user sessions, and guest access for restaurant reservations without account creation.',
                },
                {
                    title: 'Restaurant Discovery & Reservations',
                    description:
                        'Developed an intuitive restaurant browsing experience with detailed restaurant information and an easy-to-use table reservation system for selecting dates, times, and guest counts.',
                },
                {
                    title: 'Booking Management',
                    description:
                        'Built a booking history system that enables authenticated users to view and track both upcoming and previous restaurant reservations.',
                },
                {
                    title: 'User Profile Management',
                    description:
                        'Enabled profile customization with profile image uploads, editable personal information, booking statistics, and secure password updates through Firebase Authentication.',
                },
                {
                    title: 'Cloud-Based Data Management',
                    description:
                        'Integrated Firebase Firestore and Firebase Storage to securely store user profiles, booking records, and profile images.',
                },
                {
                    title: 'Session Persistence & Form Validation',
                    description:
                        'Implemented persistent user sessions using AsyncStorage along with Formik-based form validation, shared validation schemas, and comprehensive error handling.',
                },
            ],
        },
        techStack: [
            'React Native',
            'Expo',
            'NativeWind',
            'Expo Router',
            'Firebase Authentication',
            'Firebase Firestore',
            'Firebase Storage',
            'Formik',
            'Yup',
            'AsyncStorage',
        ],
        listTechStack: ['React Native', 'Expo', 'Firebase', 'Formik'],
        thumbnail: '/projects/thumbnail/dinetime.png',
        image: '/projects/images/dinetime.png',
    },

    {
        title: 'Vexon',
        category: 'Full Stack Blog Platform',
        shortDescription:
            'A MERN blog platform featuring secure authentication, rich content management, blog publishing, and advanced search capabilities.',
        slug: 'vexon',
        liveUrl: 'https://vexon-fullstack-blog-platform.vercel.app/',
        sourceCode:
            'https://github.com/prabinb50/Vexon-FullStackBlogPlatform.git',
        description: {
            overview:
                'Vexon is a full-stack blog platform built with the MERN Stack, providing a seamless content publishing experience for both readers and authors. The platform enables secure user authentication, rich blog management, search and filtering, and a responsive user interface enhanced with modern animations and performance optimizations.',
            features: [
                {
                    title: 'Secure Authentication & User Management',
                    description:
                        'Implemented secure JWT authentication with user registration, login, protected routes, password hashing, and password strength validation for enhanced account security.',
                },
                {
                    title: 'Blog Content Management',
                    description:
                        'Developed a complete blog management system with rich text editing, CRUD operations for blog posts, category management, author attribution, and responsive image handling.',
                },
                {
                    title: 'Search & Discovery',
                    description:
                        'Built an advanced search and filtering system with category browsing, author filtering, sorting options, and shareable URL parameters for improved content discovery.',
                },
                {
                    title: 'Media Management',
                    description:
                        'Integrated image upload and cloud storage functionality using Multer and Cloudinary, enabling efficient media handling for blog posts and categories.',
                },
                {
                    title: 'Responsive & Interactive User Experience',
                    description:
                        'Designed a fully responsive interface optimized for mobile, tablet, and desktop devices with Framer Motion animations, intuitive navigation, loading states, toast notifications, and mobile back button support.',
                },
                {
                    title: 'Performance Optimization',
                    description:
                        'Improved application performance through lazy loading, skeleton loaders, minimum loading durations to prevent UI flashes, route-based scroll management, API timeout handling, and robust error recovery mechanisms.',
                },
            ],
        },
        techStack: {
            Frontend: [
                'React.js',
                'JavaScript',
                'React Router',
                'Tailwind CSS',
                'Axios',
                'Framer Motion',
                'GSAP',
                'React Bits',
                'React Toastify',
                'Material UI',
                'Swiper.js',
                'React Stars',
            ],
            Backend: [
                'Node.js',
                'Express.js',
                'MongoDB (with Mongoose ODM)',
                'JWT',
                'Multer',
                'Cloudinary',
                'RESTful API',
                'CORS',
            ],
            Deployment: ['Vercel', 'Render', 'ESLint'],
        },
        listTechStack: ['MERN', 'JWT', 'Tailwind CSS', 'REST API'],
        thumbnail: '/projects/thumbnail/vexon.png',
        image: '/projects/images/vexon.png',
    },
];

export const MY_EXPERIENCE = {
    company: 'Fusobotics Nepal Pvt. Ltd.',

    roles: [
        {
            title: 'Junior Software Engineer',
            duration: '1 December 2025 - 15 June 2026',
            responsibilities: [
                'Developed scalable and secure full-stack features using React.js, Next.js, TypeScript, Node.js, and RESTful APIs, contributing to the continuous enhancement of the HRX Nexus SaaS platform.',
                'Designed and implemented modern authentication and authorization systems, including MFA, magic link authentication, role-based access control, and secure session management.',
                'Collaborated on microservices-based architecture, participated in technical planning, and improved application performance through debugging, optimization, and clean coding best practices.',
                'Worked closely with cross-functional teams to deliver maintainable, production-ready software while ensuring scalability, reliability, and an excellent user experience.',
            ],
        },

        {
            title: 'Software Engineer (Intern)',
            duration: '29 September 2025 - 30 November 2025',
            responsibilities: [
                'Built responsive landing pages, reusable UI components, and dashboard interfaces using React.js, Next.js, and Tailwind CSS, ensuring a consistent and user-friendly experience.',
                'Assisted in integrating frontend applications with backend services through RESTful APIs while supporting API testing and documentation.',
                'Contributed throughout the SDLC by participating in planning, development, testing, debugging, and maintenance of web applications.',
                'Learned and applied modern software engineering practices, including component-based architecture, performance optimization, version control, and collaborative Agile development.',
            ],
        },
    ],
};

export const MY_STATS = [
    {
        value: '8 months',
        label: 'Industry Experience',
    },
    {
        value: '6+',
        label: 'Completed Projects',
    },
    {
        value: '2',
        label: 'Hackathon Awards',
    },
    {
        value: '3.77',
        label: 'WCGPA',
    },
];
