export type Category = "genai" | "mlops" | "dataanalytics" | "nlp" | "cv" | "recommendation" | "mp" | "fullstack";

export type ProjectItem = {
    id: string;
    title: string;
    description: string;
    websiteLink: string;
    sourceLink: string;
    techStacks: string[];
};

export const projectItems = {
    genai: [
        {
            id: "microsoft-todo-clone",
            title: "Microsoft To-Do Clone",
            description:
                "This is the biggest project that I have in my portfolio. It took me so long even to get the project so far. I could not finish it due to work but I have done a lot. I owe a lot of new knowledge to this project. In this project I have used TypeScript, SCSS, Firebase Authentication, and MongoDB. I learnt MongoDB from scratch with this project.",
            websiteLink: "https://microsoft-todo-clone.vercel.app",
            sourceLink: "https://github.com/anni/microsoft-todo-clone",
            techStacks: ["NextJS", "MongoDB", "Firebase", "SCSS", "TypeScript"]
        },
        {
            id: "add-your-website",
            title: "Add Your Websites",
            description:
                "I have developed this project as a part of a tutorial from Youtube thanks to Lee Robinson for inspiration. I have used Chakra UI, useSWR, and Skeleton loading for the first time with this project. I also stored the user information on Firebase Firestore and login was implemented with Firebase authentication. It has Github login authentication.",
            websiteLink: "https://anni-list-your-websites.vercel.app",
            sourceLink:
                "https://github.com/anni/react-projects/tree/main/7-list-your-websites",
            techStacks: [
                "NextJS",
                "ChakraUI",
                "Firebase",
                "useSWR",
                "TypeScript"
            ]
        },
        {
            id: "shopify-clone",
            title: "Shopify Clone",
            description:
                "I have completed this project and I got inspired from Shopify website. It is kind of e-commerce website. There are sign in and sign up proccess. User can create a product, delete a product if they created it, and also add to cart. I used minimal workflow with this project and no extra framework.",
            websiteLink: "https://anni-e-commerce.netlify.app",
            sourceLink:
                "https://github.com/anni/react-projects/tree/main/6-e-commerce",
            techStacks: ["NextJS", "TailwindCSS", "JavaScript"]
        }
    ],
    mlops: [
        {
            id: "create-blog-posts",
            title: "Create Blog Posts",
            description:
                "I have completed this blog website. It has sign in and sign up utilities. User can sign up, sign in, and create a blog post. sign in and sign up credentials is stored on firebase real-time database. After blog post is created, it will be shown on the home page. I also experienced framer-motion library with this project.",
            websiteLink: "https://anni-blog.netlify.app",
            sourceLink:
                "https://github.com/anni/react-projects/tree/main/5-blog-website",
            techStacks: [
                "ReactJS",
                "TailwindCSS",
                "Framer Motion",
                "JavaScript"
            ]
        },
        {
            id: "crypto-marketcap",
            title: "CryptoCurrency MarketCap",
            description:
                "I have completed this cryptocurrency marketcap website. It has landing page, and a header to show some crypto statistics. It also has coins tab and user can see Top 100 coins with images and some other values. I have used Cryptomarketcap API for this project. Finally, there were some errors about CORS policy and I used netlify-cli tool for that as well.",
            websiteLink: "https://anni-crypto-marketcap.netlify.app",
            sourceLink:
                "https://github.com/anni/react-projects/tree/main/4-cryptocurrency-marketcap",
            techStacks: ["ReactJS", "TailwindCSS", "Netlify", "JavaScript"]
        },
        {
            id: "auth-firebase",
            title: "Auth Firebase",
            description:
                "This was my first project using TailwindCSS. It has basically two screens sign up and sign in. There is no react-router setup. I learned basics of React. I used Firebase real-time database to store user credentials.",
            websiteLink: "https://anni-login-firebase.netlify.app",
            sourceLink:
                "https://github.com/anni/react-projects/tree/main/3-login-with-firebase",
            techStacks: ["ReactJS", "TailwindCSS", "Firebase", "JavaScript"]
        },
        {
            id: "currency-converter",
            title: "Currency Converter",
            description:
                "This is a basic currency converter website. I have used currency API to retrieve data of currencies. I also used react-select library to be specific about currency exchanges.",
            websiteLink: "https://anni-currency-converter.netlify.app",
            sourceLink:
                "https://github.com/anni/react-projects/tree/main/2-currency-converter",
            techStacks: ["ReactJS", "JavaScript"]
        },
        {
            id: "resipe-search",
            title: "Resipe Search",
            description:
                "This is my very first React single page application. I have used edamam API for this project. It basically has an input field for searching some recipes. I also used react-loader-spinner for loading state for this project for better user experience.",
            websiteLink: "https://anni-react-recipe.netlify.app",
            sourceLink:
                "https://github.com/anni/react-projects/tree/main/1-basic-recipe-app",
            techStacks: ["ReactJS", "JavaScript"]
        }
    ],
    dataanalytics: [
        {
            id: "register-and-search-news",
            title: "Stock recommandation via machine learning algorithms",
            description:
                "This is a stock recommendation project developed with Sklearn, Python, multiprocessing, Tushare API. I utilised some supervised machine learning models to choose stocks, such as Logistic Regression, Random Forest, and Support Vector Machine. With these models, I can predict the stock’s 60 days’ return rate based on stock price data from 2019Q1-2020Q1. If a specific stock outperformed the average return rate, the model would recommend holding the position. The data is from stocks of the listed companies in China from Tushare’ API, which is a financial data platform.",
            websiteLink: "https://github.com/WideSu/Stock-recommandation-via-machine-learning-algorithms",
            sourceLink:
                "https://github.com/WideSu/Stock-recommandation-via-machine-learning-algorithms",
            techStacks: [
                "Sklearn",
                "Seaborn",
                "Python",
                "multiprocessing",
                "Tushare"
            ]
        },
        {
            id: "restaurant-search",
            title: "Home Credit Default Risk",
            description:
                "This project is a kaggle challenge. I used 4 machine learning models namely Logistic Regression, SVM, Random Forest and LGBM and one deep learning model namely DeepFM to classify whether an applicant is capable to pay a loan.",
            websiteLink: "https://github.com/WideSu/CreditRiskDetection",
            sourceLink:
                "https://github.com/WideSu/CreditRiskDetection",
            techStacks: [
                "Sklearn",
                "PyTorch",
                "Seaborn",
                "Python",
            ]
        },
        {
            id: "auth-screen",
            title: " Screen",
            description:
                "This is a basic UI implementation for react-native. It has just sign up and sign in screens with no interactivity like signing in. I have used bottom tab navigator with this project and also I improved my layout skills in react-native.",
            websiteLink: "https://expo.dev/@anni/signin-signup-design",
            sourceLink:
                "https://github.com/anni/react-native-projects/tree/main/2-register-login-design",
            techStacks: [
                "React-Native",
                "React-Navigation",
                "Expo",
                "TypeScript"
            ]
        }
    ],
    nlp: [
        {
            id: "budget-tracker",
            title: "Multilingual Named Entity Recognition",
            description:
                "Multiligual Named Entity Recognition by Finetunning flair model on CoNLL 2003 dataset and WeiBo dataset. Max F1-score is 93.5% which is 0.7% lower than the SOTA reported by Wang et al. (2019)",
            websiteLink: "https://anni-budget-tracker.netlify.app",
            sourceLink:
                "https://github.com/anni/javascript-projects/tree/main/5-budget-tracker",
            techStacks: ["text-processing", "pooled-embeddings","Pandas","named-entity-recognition"]
        }
    ],
    cv: [
        {
            id: "register-and-search-news",
            title: "Register and Search News",
            description:
                "This is my news application developed with React-Native. I have used lots of frameworks with this project. It has sign up and sign in screens. Once user is authenticated it redirects user to home page to show the latest news from news API. I implemented categories, search, and skeleton loading into this project. There is also a profile section which user can see information about itself.",
            websiteLink: "https://expo.dev/@anni/news-app",
            sourceLink:
                "https://github.com/anni/react-native-projects/tree/main/3-news-app",
            techStacks: [
                "React-Native",
                "Firebase",
                "React-Hook-Form",
                "useSWR",
                "Native-Base",
                "Expo",
                "TypeScript"
            ]
        }
    ],
    recommendation: [
        {
            id: "register-and-search-news",
            title: "Register and Search News",
            description:
                "This is my news application developed with React-Native. I have used lots of frameworks with this project. It has sign up and sign in screens. Once user is authenticated it redirects user to home page to show the latest news from news API. I implemented categories, search, and skeleton loading into this project. There is also a profile section which user can see information about itself.",
            websiteLink: "https://expo.dev/@anni/news-app",
            sourceLink:
                "https://github.com/anni/react-native-projects/tree/main/3-news-app",
            techStacks: [
                "React-Native",
                "Firebase",
                "React-Hook-Form",
                "useSWR",
                "Native-Base",
                "Expo",
                "TypeScript"
            ]
        }
    ],
    mp: [
        {
            id: "register-and-search-news",
            title: "Register and Search News",
            description:
                "This is my news application developed with React-Native. I have used lots of frameworks with this project. It has sign up and sign in screens. Once user is authenticated it redirects user to home page to show the latest news from news API. I implemented categories, search, and skeleton loading into this project. There is also a profile section which user can see information about itself.",
            websiteLink: "https://expo.dev/@anni/news-app",
            sourceLink:
                "https://github.com/anni/react-native-projects/tree/main/3-news-app",
            techStacks: [
                "React-Native",
                "Firebase",
                "React-Hook-Form",
                "useSWR",
                "Native-Base",
                "Expo",
                "TypeScript"
            ]
        }
    ],
    fullstack: [
        {
            id: "register-and-search-news",
            title: "Register and Search News",
            description:
                "This is my news application developed with React-Native. I have used lots of frameworks with this project. It has sign up and sign in screens. Once user is authenticated it redirects user to home page to show the latest news from news API. I implemented categories, search, and skeleton loading into this project. There is also a profile section which user can see information about itself.",
            websiteLink: "https://expo.dev/@anni/news-app",
            sourceLink:
                "https://github.com/anni/react-native-projects/tree/main/3-news-app",
            techStacks: [
                "React-Native",
                "Firebase",
                "React-Hook-Form",
                "useSWR",
                "Native-Base",
                "Expo",
                "TypeScript"
            ]
        }
    ]
} satisfies Record<Category, ProjectItem[]>;
