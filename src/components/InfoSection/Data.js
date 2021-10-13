//File to create reusable components

export const homeObjectOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'About Us',
    headline: 'Description',
    description: 'More detailed information',
    buttonLabel: 'Learn more',
    imgStart: false,
    img: require('../../images/svg-1.svg').default,
    alt: 'House',
    dark: true,
    primary: true,
    darkText: false
};

export const homeObjectTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Discover',
    headline: 'Info about the service',
    description: 'More specific description',
    buttonLabel: 'Ask a question',
    imgStart: true,
    img: require('../../images/svg-2.svg').default,
    alt: 'Home',
    dark: false,
    primary: false,
    darkText: true
};

export const homeObjectThree = {
    id: 'services',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Services',
    headline: 'Description of the types of services',
    description: 'In depth information',
    buttonLabel: 'Make a request',
    imgStart: false,
    img: require('../../images/svg-3.svg').default,
    alt: 'Explore',
    dark: true,
    primary: true,
    darkText: false
};

export const homeObjectFour = {
    id: 'signup',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Sign Up',
    headline: 'Join our community',
    description: 'Become a member for more opportunities',
    buttonLabel: 'Start now',
    imgStart: true,
    img: require('../../images/svg-4.svg').default,
    alt: 'Search',
    dark: false,
    primary: false,
    darkText: true
};