import emoji from 'react-easy-emoji';
import akdeniz from './assets/images/akdeniz.png';
import maeal from './assets/images/maeal.png';
import hotech from './assets/images/hotech-logo.svg';
import radaar from './assets/images/radaar.jpeg';

const illustration = {
    animated: true, // set to false to use static SVG
};

const about = {
    username: 'cd home',
    title: "Hello, I'm Turhan Sel",
    jobTitle: emoji(
        "Front-End Developer🚀"
    ),
    subTitle: emoji(
        "I'm very enthusiastic about JavaScript. I really want to specialize in Front-End as part of rapidly developing technology. "
    ),
    resumeLink:
        'https://drive.google.com/file/d/1iQB0tfpYiiwx9MtmsCkbjP9msrJfeRw6/view?usp=sharing',
    displayAbout: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
    github: 'https://github.com/turhansel',
    linkedin: 'https://www.linkedin.com/in/turhansel/',
    gmail: 'turhansel@gmail.com',
    twitter: 'https://www.twitter.com/in/imturhansel/',
    // Instagram and Twitter are also supported in the links!
    display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
    title: 'What I do',
    subTitle: 'CRAZY JR FRONT-END DEVELOPER WHO WANTS TO EXPLORE EVERY TECH',
    // skills: [emoji('⚡ Lorem'), emoji('⚡ Lorem'), emoji('⚡ Lorem')],
    skills: [],

    /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

    softwareSkills: [
        {
            skillName: 'html-5',
            sclassName: 'fab fa-html5',
        },
        {
            skillName: 'css3',
            sclassName: 'fab fa-css3-alt',
        },
        {
            skillName: 'sass',
            sclassName: 'fab fa-sass',
        },
        {
            skillName: 'JavaScript',
            sclassName: 'fab fa-js',
        },
        {
            skillName: 'reactjs',
            sclassName: 'fab fa-react',
        },

        {
            skillName: 'npm',
            sclassName: 'fab fa-npm',
        },

        {
            skillName: 'firebase',
            sclassName: 'fas fa-fire',
        },
        {
            skillName: 'git',
            sclassName: 'fab fa-git-alt',
        },
        {
            skillName: 'github',
            sclassName: 'fab fa-github',
        },
        <i class='fab fa-git-alt'></i>,
    ],
    display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
    display: true, // Set false to hide this section, defaults to true
    schools: [
        {
            schoolName: 'AKDENIZ UNIVERSITY',
            logo: akdeniz,
            subHeader: 'MANAGEMENT INFORMATION SYSTEM',
            duration: 'September 2017 - June 2021',
            desc: 'GPA: 4/3.26',
            descBullets: [
                'MIS expanded my creativity',
                'I learned OOP, C, C#, Java with Anroid Studio and Web Development',
            ],
        },
        {
            schoolName: 'MEHMET AKIF ERSOY HIGH SCHOOL',
            logo: maeal,
            subHeader: 'TURKISH-MATHEMATICS',
            duration: 'September 2012 - June 2016',
            // desc:
            //   "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
            // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"],
        },
    ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
    viewSkillBars: true, //Set it to true to show Proficiency Section
    experience: [
        {
            Stack: 'Frontend/Design', //Insert stack or technology you have experience in
            progressPercentage: '77%', //Insert relative proficiency in percentage
        },
        {
            Stack: 'Backend',
            progressPercentage: '40%',
        },
        {
            Stack: 'Programming',
            progressPercentage: '50%',
        },
    ],
    displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
    display: true, //Set it to true to show workExperiences Section
    experience: [
        {
            role: 'Front-End Developer',
            company: 'RADAAR',
            companylogo: radaar,
            date: 'SEPTEMBER 2021 – PRESENT',
            desc:
                // 'bla',
                '',
            descBullets: [
                'To develop new features using ReactJS, Redux and Bootstrap.',
                'To accommodate oneself the startup culture.',
                'To gain experience about teamwork and task management.',
            ],
        },
        {
            role: 'Front-End Intern',
            company: 'HOTECH SOFTWARE',
            companylogo: hotech,
            date: 'MARCH 2021 – JUNE 2021',
            desc:
                // 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                '',
            descBullets: [
                'To code design tasks which are given with ReactJS- MaterialUI,',
                'To gain experience in real projects with scrum methodology,',
                'To update the designs requested to be changed on the website',
            ],
        },
    ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
    showGithubProfile: 'true', // Set true or false to show Contact profile using Github, defaults to true
    display: true, // Set false to hide this section, defaults to true
};

const contactInfo = {
    title: emoji('Contact Me ☎️'),
    subtitle:
        'Discuss a project or just want to say hi? My Inbox is open for all.',
    number: '+90(543)8955350',
    email_address: 'turhansel@gmail.com',
};

// Twitter Section

const twitterDetails = {
    userName: 'twitter', //Replace "twitter" with your twitter username without @
    display: true, // Set true to display this section, defaults to false
};

export {
    illustration,
    about,
    socialMediaLinks,
    skillsSection,
    educationInfo,
    techStack,
    workExperiences,
    openSource,
    contactInfo,
    twitterDetails,
};
