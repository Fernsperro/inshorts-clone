const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const newsData = [
    {
        photo: "https://pplx-res.cloudinary.com/image/upload/v1739026305/user_uploads/iZUZZrfJQCKhiaQ/WhatsApp-Image-2025-02-08-at-20.11.24_9be36fd8.jpg",
        title: "What is net worth of hhhfdhfkjhsjkdhj h kjdfnkjParvesh",
        description: "BJP's 'giant-killer' Parvesh Verma, who famously defeated Arvind Kejriwal in Delhi Assembly polls, has a declared personal net worth of ₹89 crore. This substantial wealth, accumulated through various investments and holdings, makes him one of the wealthier politicians in the region. His combined wealth with his wife, Swati Singh, reaches a staggering ₹113 crore, showcasing a significant accumulation of assets and financial resources. Verma's financial portfolio includes ₹2.2 lakh in cash, a substantial investment of nearly ₹53 crore in equity and stock market ventures, and ₹17 lakh dedicated to insurance investments, highlighting a diversified approach to wealth management. In addition to these financial assets, Verma owns three cars, further contributing to his overall asset base. His rise in politics, coupled with his significant wealth, has made him a prominent figure in Delhi's political landscape.",
        date: "February 8, 2025",
        time: "21:15",
        location: "Delhi",
        author: "Perplexity AI",
        id: 1,
        updatedAt: "2025-02-08T21:15:00Z"
    },
    {
        photo: "https://cdn.pixabay.com/photo/2020/04/29/07/59/street-4107820_1280.jpg",
        title: "Another News Title Example",
        description: "This is another example description...",
        date: "February 8, 2025",
        time: "10:00",
        location: "Mumbai",
        author: "Example Author",
        id: 2,
        updatedAt: "2025-02-08T10:00:00Z"
    },
    {
        photo: "https://cdn.pixabay.com/photo/2020/07/14/13/07/people-5403359_1280.jpg",
        title: "Breaking: Something Important Happened",
        description: "Details about the important event...",
        date: "February 7, 2025",
        time: "22:00",
        location: "London",
        author: "News Corp",
        id: 3,
        updatedAt: "2025-02-07T22:00:00Z"
    },
    {
        photo: "https://cdn.pixabay.com/photo/2016/11/22/23/08/adventure-1851059_1280.jpg",
        title: "Adventure Awaits!",
        description: "A thrilling tale of exploration...",
        date: "February 7, 2025",
        time: "08:00",
        location: "New York",
        author: "Explorer Dude",
        id: 4,
        updatedAt: "2025-02-07T08:00:00Z"
    }
];

function compareNews(a, b) {
    const dateA = new Date(a.updatedAt);
    const dateB = new Date(b.updatedAt);
    return dateB - dateA;
}

newsData.sort(compareNews);

app.get('/news', (req, res) => {
    res.json(newsData);
});

app.listen(port, () => {
    console.log(`Temporary backend listening at http://localhost:${port}`);
});
