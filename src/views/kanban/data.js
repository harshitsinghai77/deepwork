const jakeImg =
  "https://static.wikia.nocookie.net/phineasandferb/images/e/ea/Profile_-_Phineas_Flynn.PNG/revision/latest?cb=20200401182458";
const bmoImg =
  "https://static.wikia.nocookie.net/phineasandferb/images/e/ea/Profile_-_Phineas_Flynn.PNG/revision/latest?cb=20200401182458";
const princessImg =
  "https://static.wikia.nocookie.net/phineasandferb/images/e/ea/Profile_-_Phineas_Flynn.PNG/revision/latest?cb=20200401182458";
const finnImg =
  "https://static.wikia.nocookie.net/phineasandferb/images/e/ea/Profile_-_Phineas_Flynn.PNG/revision/latest?cb=20200401182458";

const backlog = {
  id: "1",
  name: "Backlog",
  url: "http://adventuretime.wikia.com/wiki/Jake",
  avatarUrl: jakeImg,
  colors: {
    soft: "rgb(234, 230, 255)",
    hard: "rgba(9, 30, 66, 0.71)",
  },
};

const today = {
  id: "2",
  name: "Today",
  url: "http://adventuretime.wikia.com/wiki/BMO",
  avatarUrl: bmoImg,
  colors: {
    soft: "rgb(227, 252, 239)",
    hard: "rgba(9, 30, 66, 0.71)",
  },
};

const progress = {
  id: "3",
  name: "In Progress",
  url: "http://adventuretime.wikia.com/wiki/Finn",
  avatarUrl: finnImg,
  colors: {
    soft: "rgb(222, 235, 255)",
    hard: "rgba(9, 30, 66, 0.71)",
  },
};

const completed = {
  id: "4",
  name: "Completed",
  url: "http://adventuretime.wikia.com/wiki/Princess_Bubblegum",
  avatarUrl: princessImg,
  colors: {
    soft: "rgb(234, 230, 255)",
    hard: "rgba(9, 30, 66, 0.71)",
  },
};

export const types = [backlog, today, progress, completed];

export const quotes = [
  {
    id: "1",
    content: "Sometimes life is scary and dark",
    type: today,
  },
  {
    id: "2",
    content:
      "Sucking at something is the first step towards being sorta good at something.",
    type: backlog,
  },
  {
    id: "3",
    content: "You got to focus on what's real, man",
    type: backlog,
  },
  {
    id: "4",
    content: "Is that where creativity comes from? From sad biz?",
    type: progress,
  },
  {
    id: "5",
    content: "Homies help homies. Always",
    type: progress,
  },
  {
    id: "6",
    content: "Responsibility demands sacrifice",
    type: completed,
  },
  {
    id: "7",
    content: "That's it! The answer was so simple, I was too smart to see it!",
    type: completed,
  },
  {
    id: "8",
    content: "People make mistakes. It’s a part of growing up",
    type: progress,
  },
  {
    id: "9",
    content: "Don't you always call sweatpants 'give up on life pants,' Jake?",
    type: progress,
  },
  {
    id: "10",
    content: "I should not have drunk that much tea!",
    type: completed,
  },
  {
    id: "11",
    content: "Please! I need the real you!",
    type: completed,
  },
  {
    id: "12",
    content: "Haven't slept for a solid 83 hours, but, yeah, I'm good.",
    type: completed,
  },
];

const getByType = (type, items) => items.filter((quote) => quote.type === type);

export const authorQuoteMap = types.reduce(
  (previous, type) => ({
    ...previous,
    [type.name]: getByType(type, quotes),
  }),
  {}
);
