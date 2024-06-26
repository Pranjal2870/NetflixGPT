export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR = "https://avatars.githubusercontent.com/u/96439012?s=400&u=8d3697e4bfa119e1be6beb4d4273a6c5f94a4750&v=4";

export const BG_LOGO = "https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const SUPPORTED_LANGUAGES = [{identifier: "en", name:"English"}, {identifier: "hindi", name:"Hindi"}, {identifier: "spanish", name:"Spanish"},];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY

export const FIREBASE_KEY = process.env.REACT_APP_FIREBASE_KEY

export const AUTH_DOMAIN = process.env.REACT_APP_AUTH_DOMAIN

export const MESSAGING_SENDER_ID = process.env.REACT_APP_MESSAGING_SENDER_ID

export const APPS_ID = process.env.REACT_APP_APPS_ID