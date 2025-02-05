import img from "../../assets/img.jpg";

export const Portfolio_Data = [
  {
    id: 1,
    name: "Tamado Print Shop",
    client: "Tamadon Print Shop",
    category: "E-commerce",
    rating: {
      top: true,
      image: "/images/school-mis-mobile.png",
    },
    websiteLink: "https://github.com/tetteam4/Tamado-PrintShop",
    colors: ["Black", "Blue", "Yellow", "Pink"],
    images: {
      mobile: "/images/tamado-printshop-mobile.png",
      laptop: img,
      dashboard: "/images/tamado-printshop-dashboard.png",
    },
    usedTechnologies: {
      frontend: [
        { name: "React.js", icon: "/icons/react.svg" },
        { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
        { name: "HTMX", icon: "/icons/htmx.svg" },
      ],
      backend: [
        { name: "Django", icon: "/icons/django.svg" },
        { name: "Django REST Framework", icon: "/icons/drf.svg" },
      ],
      database: { name: "MySQL", icon: "/icons/mysql.svg" },
      other: [
        { name: "Redux", icon: "/icons/redux.svg" },
        { name: "Cloudinary", icon: "/icons/cloudinary.svg" },
        { name: "AI-based recommendation system", icon: "/icons/ai.svg" },
      ],
    },
    description: {
      projectOverview:
        "Tamado Print Shop is an advanced e-commerce platform tailored for printing services...",
      frontendSection:
        "Developed using React.js and Tailwind CSS, featuring a **dynamic search**, **cart management**, and **secure checkout**.",
      backendSection:
        "Built with Django & Django REST Framework, handling **user authentication**, **order processing**, and **blog API services**.",
      databaseSection:
        "MySQL stores **user profiles, order history, product listings, and blog content**.",
      usageSection:
        "Used by **customers, businesses, and print shop admins** for **placing and tracking orders**.",
      otherTechnologies:
        "Includes **Redux for state management, Cloudinary for optimized images, and AI for recommendations**.",
    },
  },
  {
    id: 2,
    name: "Shoe Shopping Platform",
    client: "Sneaker World",
    category: "Fashion",
    websiteLink: "https://github.com/example/shoe-shop",
    colors: ["White", "Red", "Black"],
    images: {
      mobile: "/images/shoe-shop-mobile.png",
      laptop: img,
      productPage: "/images/shoe-shop-product.png",
      cartPage: "/images/shoe-shop-cart.png",
    },
    usedTechnologies: {
      frontend: [
        { name: "React.js", icon: "/icons/react.svg" },
        { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
      ],
      backend: [
        { name: "Node.js", icon: "/icons/node.svg" },
        { name: "Express.js", icon: "/icons/express.svg" },
      ],
      database: { name: "MongoDB", icon: "/icons/mongodb.svg" },
      other: [
        { name: "Redux Toolkit", icon: "/icons/redux.svg" },
        { name: "Stripe API", icon: "/icons/stripe.svg" },
      ],
    },
    description: {
      projectOverview:
        "An e-commerce platform specializing in sneakers and sports shoes...",
      frontendSection:
        "Built with React.js and Tailwind, featuring product filtering, search, and cart functionality.",
      backendSection:
        "Node.js and Express handle authentication, product management, and order processing.",
      databaseSection:
        "MongoDB stores user data, orders, and inventory details.",
      usageSection:
        "Users can browse shoes, add to cart, and purchase using Stripe payment.",
      otherTechnologies:
        "Stripe API enables secure transactions and Redux manages state.",
    },
  },
  {
    id: 3,
    name: "School Management System",
    client: "Greenfield Academy",
    category: "Education",
    rating: {
      top: true,
      image: "/images/school-mis-mobile.png",
    },
    websiteLink: "https://github.com/example/school-mis",
    colors: ["Blue", "White", "Green"],
    images: {
      mobile: "/images/school-mis-mobile.png",
      laptop: img,
      studentDashboard: "/images/school-mis-dashboard.png",
      classManagement: "/images/school-mis-classes.png",
    },
    usedTechnologies: {
      frontend: [
        { name: "React.js", icon: "/icons/react.svg" },
        { name: "Bootstrap", icon: "/icons/bootstrap.svg" },
      ],
      backend: [
        { name: "Django", icon: "/icons/django.svg" },
        { name: "GraphQL", icon: "/icons/graphql.svg" },
      ],
      database: { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
      other: [
        { name: "Firebase", icon: "/icons/firebase.svg" },
        { name: "Docker", icon: "/icons/docker.svg" },
      ],
    },
    description: {
      projectOverview:
        "A comprehensive school management system for student registration and course tracking...",
      frontendSection:
        "React.js and Bootstrap provide an intuitive dashboard for teachers and students.",
      backendSection:
        "Django & GraphQL enable efficient data management for student performance tracking.",
      databaseSection: "PostgreSQL is used for scalable data storage.",
      usageSection:
        "Admins manage school activities, teachers upload assignments, and students access schedules.",
      otherTechnologies:
        "Firebase supports notifications and Docker ensures smooth deployment.",
    },
  },
  {
    id: 4,
    name: "School Management System",
    client: "Greenfield Academy",
    category: "E-commerce",
    rating: {
      top: true,
      image: "/images/school-mis-mobile.png",
    },

    websiteLink: "https://github.com/example/school-mis",
    colors: ["Blue", "White", "Green"],
    images: {
      mobile: "/images/school-mis-mobile.png",
      laptop: img,
      studentDashboard: "/images/school-mis-dashboard.png",
      classManagement: "/images/school-mis-classes.png",
    },
    usedTechnologies: {
      frontend: [
        { name: "React.js", icon: "/icons/react.svg" },
        { name: "Bootstrap", icon: "/icons/bootstrap.svg" },
      ],
      backend: [
        { name: "Django", icon: "/icons/django.svg" },
        { name: "GraphQL", icon: "/icons/graphql.svg" },
      ],
      database: { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
      other: [
        { name: "Firebase", icon: "/icons/firebase.svg" },
        { name: "Docker", icon: "/icons/docker.svg" },
      ],
    },
    description: {
      projectOverview:
        "A comprehensive school management system for student registration and course tracking...",
      frontendSection:
        "React.js and Bootstrap provide an intuitive dashboard for teachers and students.",
      backendSection:
        "Django & GraphQL enable efficient data management for student performance tracking.",
      databaseSection: "PostgreSQL is used for scalable data storage.",
      usageSection:
        "Admins manage school activities, teachers upload assignments, and students access schedules.",
      otherTechnologies:
        "Firebase supports notifications and Docker ensures smooth deployment.",
    },
  },
  {
    id: 5,
    name: "Portfolio Website",
    client: "Personal Project",
    category: "Portfolio",
    websiteLink: "https://github.com/example/portfolio",
    colors: ["Dark", "Blue", "Purple"],
    images: {
      mobile: "/images/portfolio-mobile.png",
      laptop: img,
    },
    usedTechnologies: {
      frontend: [
        { name: "Next.js", icon: "/icons/nextjs.svg" },
        { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
      ],
      backend: [{ name: "Sanity CMS", icon: "/icons/sanity.svg" }],
      database: { name: "Not Required", icon: "/icons/database.svg" },
      other: [
        { name: "Framer Motion", icon: "/icons/framer.svg" },
        { name: "Vercel", icon: "/icons/vercel.svg" },
      ],
    },
    description: {
      projectOverview:
        "A personal portfolio showcasing web development projects and skills...",
      frontendSection:
        "Built with Next.js and Tailwind CSS for performance and responsiveness.",
      backendSection: "Sanity CMS is used for blog and content management.",
      databaseSection:
        "No database required as content is managed through Sanity.",
      usageSection:
        "Visitors can explore projects, read blogs, and contact me.",
      otherTechnologies:
        "Framer Motion adds animations and Vercel ensures fast deployment.",
    },
  },
  {
    id: 6,
    name: "Chat Application",
    client: "Private Client",
    category: "Communication",
    websiteLink: "https://github.com/example/chat-app",
    colors: ["Purple", "Gray", "Dark"],
    images: {
      mobile: "/images/chat-app-mobile.png",
      laptop: "/images/chat-app-laptop.png",
      chatScreen: "/images/chat-app-chat.png",
    },
    usedTechnologies: {
      frontend: [
        { name: "Vue.js", icon: "/icons/vue.svg" },
        { name: "Vuetify", icon: "/icons/vuetify.svg" },
      ],
      backend: [
        { name: "Node.js", icon: "/icons/node.svg" },
        { name: "Socket.io", icon: "/icons/socket.svg" },
      ],
      database: { name: "MongoDB", icon: "/icons/mongodb.svg" },
      other: [{ name: "Firebase Auth", icon: "/icons/firebase.svg" }],
    },
    description: {
      projectOverview:
        "A real-time chat application with group and private messaging...",
      frontendSection: "Vue.js and Vuetify create a modern chat interface.",
      backendSection: "Node.js and Socket.io handle real-time communication.",
      databaseSection: "MongoDB stores messages and user data.",
      usageSection:
        "Users can chat privately or in groups, with media sharing support.",
      otherTechnologies: "Firebase Authentication ensures secure login.",
    },
  },
  {
    id: 6,
    name: "Chat Application",
    client: "Private Client",
    category: "Communication",
    rating: {
      top: true,
      image: "/images/school-mis-mobile.png",
    },

    websiteLink: "https://github.com/example/chat-app",
    colors: ["Purple", "Gray", "Dark"],
    images: {
      mobile: "/images/chat-app-mobile.png",
      laptop: "/images/chat-app-laptop.png",
      chatScreen: "/images/chat-app-chat.png",
    },
    usedTechnologies: {
      frontend: [
        { name: "Vue.js", icon: "/icons/vue.svg" },
        { name: "Vuetify", icon: "/icons/vuetify.svg" },
      ],
      backend: [
        { name: "Node.js", icon: "/icons/node.svg" },
        { name: "Socket.io", icon: "/icons/socket.svg" },
      ],
      database: { name: "MongoDB", icon: "/icons/mongodb.svg" },
      other: [{ name: "Firebase Auth", icon: "/icons/firebase.svg" }],
    },
    description: {
      projectOverview:
        "A real-time chat application with group and private messaging...",
      frontendSection: "Vue.js and Vuetify create a modern chat interface.",
      backendSection: "Node.js and Socket.io handle real-time communication.",
      databaseSection: "MongoDB stores messages and user data.",
      usageSection:
        "Users can chat privately or in groups, with media sharing support.",
      otherTechnologies: "Firebase Authentication ensures secure login.",
    },
  },
  {
    id: 6,
    name: "Chat Application",
    client: "Private Client",
    category: "Communication",
    websiteLink: "https://github.com/example/chat-app",
    colors: ["Purple", "Gray", "Dark"],
    images: {
      mobile: "/images/chat-app-mobile.png",
      laptop: "/images/chat-app-laptop.png",
      chatScreen: "/images/chat-app-chat.png",
    },
    usedTechnologies: {
      frontend: [
        { name: "Vue.js", icon: "/icons/vue.svg" },
        { name: "Vuetify", icon: "/icons/vuetify.svg" },
      ],
      backend: [
        { name: "Node.js", icon: "/icons/node.svg" },
        { name: "Socket.io", icon: "/icons/socket.svg" },
      ],
      database: { name: "MongoDB", icon: "/icons/mongodb.svg" },
      other: [{ name: "Firebase Auth", icon: "/icons/firebase.svg" }],
    },
    description: {
      projectOverview:
        "A real-time chat application with group and private messaging...",
      frontendSection: "Vue.js and Vuetify create a modern chat interface.",
      backendSection: "Node.js and Socket.io handle real-time communication.",
      databaseSection: "MongoDB stores messages and user data.",
      usageSection:
        "Users can chat privately or in groups, with media sharing support.",
      otherTechnologies: "Firebase Authentication ensures secure login.",
    },
  },
];
