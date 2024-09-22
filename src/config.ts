// Define types for the configuration
interface SocialMedia {
    name: string;
    url: string;
}

interface EmailContent {
    subject: string;
    body: string;
}

interface NavLink {
    name: string;
    url: string;
}

interface Colors {
    green: string;
    navy: string;
    darkNavy: string;
}

interface SrConfig {
    origin: string;
    distance: string;
    duration: number;
    delay: number;
    rotate: { x: number; y: number; z: number };
    opacity: number;
    scale: number;
    easing: string;
    mobile: boolean;
    reset: boolean;
    useDelay: string;
    viewFactor: number;
    viewOffset: { top: number; right: number; bottom: number; left: number };
}

// Main config interface
interface Config {
    siteTitle: string;
    siteDescription: string;
    siteKeywords: string;
    siteUrl: string;
    siteLanguage: string;
    googleAnalyticsID: string;
    googleVerification: string;
    name: string;
    location: string;
    email: string;
    emailContent: EmailContent;
    github: string;
    twitterHandle: string;
    socialMedia: SocialMedia[];
    navLinks: NavLink[];
    navHeight: number;
    colors: Colors;
    srConfig: (delay?: number) => SrConfig;
}

const config: Config = {
    siteTitle: "Harsh Jangid",
    siteDescription:
        "Harsh Jangid is a Software Developer, based in India, who loves learning new things and helping tech beginners.",
    siteKeywords:
        "Harsh Jangid, Harsh, Jangid, harshjangid, software engineer, web developer, javascript, python, java, svvv, indore",
    siteUrl: "https://harshjangid.github.io/",
    siteLanguage: "en_US",
    googleAnalyticsID: "UA-45666519-2",
    googleVerification: "DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk",
    name: "Harsh Jangid",
    location: "Rajasthan, India",
    email: "harshjangidd@gmail.com",
    github: "https://github.com/harshjangid",
    twitterHandle: "@",
    socialMedia: [
        {
            name: "GitHub",
            url: "https://github.com/harshjangid",
        },
        {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/harshjangidd/",
        },
        {
            name: "Codepen",
            url: "https://codepen.io/harshjjangid",
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com/harshjangidd",
        },
        {
            name: "Twitter",
            url: "https://twitter.com/harshjangidd",
        },
    ],
    emailContent: {
        subject: "Inquiry Regarding Your Work/Projects",
        body: `
            Hi Harsh,

            I recently visited your website and was impressed by your work, particularly [mention project or area of expertise].
            I would love to connect to discuss [job opportunity, collaboration, or learn more about your expertise].

            Looking forward to hearing from you!

            Best regards,
            [Visitor's Name]
            [Visitor's Position]
            [Visitor's Company]
            [Visitor's Contact Information]
        `,
    },

    navLinks: [
        {
            name: "About",
            url: "/#about",
        },
        {
            name: "Experience",
            url: "/#jobs",
        },
        {
            name: "Projects",
            url: "/#projects",
        },
        {
            name: "Contact",
            url: "/#contact",
        },
    ],

    navHeight: 100,

    colors: {
        green: "#64ffda",
        navy: "#0a192f",
        darkNavy: "#020c1b",
    },

    srConfig: (delay = 200): SrConfig => ({
        origin: "bottom",
        distance: "20px",
        duration: 500,
        delay,
        rotate: { x: 0, y: 0, z: 0 },
        opacity: 0,
        scale: 1,
        easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
        mobile: true,
        reset: false,
        useDelay: "always",
        viewFactor: 0.25,
        viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    }),
};

export default config;
