const genRand = (len) => {
  return Math.random()
    .toString(36)
    .substring(2, len + 2);
};

export const blogData = [
  {
    id: "whats-Web-Design",
    title: "What is Web Design",
    text: "Are you new business / startup looking to register new domain, get business address and hosting for your new website, there are many good hosting companies in South Africa and no need to register your domain with overseas companies like Godaddy. There many advantage for local business to register domain with local hosting company.",
    createDate: new Date(2022, 9, 10).toDateString(),
    image: "/images/website_design.jpg",
  },
  {
    id: "10-reasons-why-your-business-needs-a-website",
    title: "10 reasons why your business needs a website",
    text: "Website design and development prices depend on certain factors, some depend on your requirements as a business, startup or blogger, what type of website you are looking for, what’s your budgets, what features you want to be on the website ex blog, gallery, upload, forum, events, directory listing, user registration …etc.DevOps Business is a designed company in Johannesburg, we offer affordable web design pricing, our team of designers has the experience of all type of websites, we use mostly WordPress for all our designs.",
    createDate: new Date(2022, 9, 10).toDateString(),
    image: "/images/hosting.jpg",
  },
  {
    id: "10-ways-you-can-give-you-business-a-proper-online-presence",
    title: "10 ways you can give you business a proper online presence",
    text: "Website design and development prices depend on certain factors, some depend on your requirements as a business, startup or blogger, what type of website you are looking for, what’s your budgets, what features you want to be on the website ex blog, gallery, upload, forum, events, directory listing, user registration …etc.DevOps Business is a designed company in Johannesburg, we offer affordable web design pricing, our team of designers has the experience of all type of websites, we use mostly WordPress for all our designs.",
    createDate: new Date(2022, 9, 10).toDateString(),
    image: "/images/seo.jpg",
  },
  {
    id: "tricks-to-rank-you-website-top-on-google",
    title: "Tricks to rank you website top on google",
    text: "Website design and development prices depend on certain factors, some depend on your requirements as a business, startup or blogger, what type of website you are looking for, what’s your budgets, what features you want to be on the website ex blog, gallery, upload, forum, events, directory listing, user registration …etc.DevOps Business is a designed company in Johannesburg, we offer affordable web design pricing, our team of designers has the experience of all type of websites, we use mostly WordPress for all our designs.",
    createDate: new Date(2022, 9, 10).toDateString(),
    image: "/images/website_design.jpg",
  },
];
