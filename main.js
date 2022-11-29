// Hide the current .post div
let oldPost = document.querySelector(".post");
oldPost.style.display = "none";

// Add a banner under the header and...
let header = document.getElementById("header");
let banner = document.createElement("div");
banner.setAttribute("class", "banner");
header.after(banner);

// create a list of topics for the blog
const topicsArray = [
    "css",
    "html",
    "flash",
    "php",
    "photoshop",
    "interface",
    "web design",
    "skeumorphin",
    "texture",
    "pixel fonts"
];
let topicTitle = document.createElement("h4");
topicTitle.innerText = "topics";
let topics = document.createElement("ul");

topicsArray.forEach((topic) => {
    let topicItem = document.createElement("li");
    topicItem.innerText = topic;
    topics.appendChild(topicItem);
});
// Update CSS property that determines number of columns in grid
let r = document.querySelector(":root");
r.style.setProperty("--num-of-topics", topicsArray.length);

// Add a search bar to the banner
const searchBar = document.createElement("div");
searchBar.setAttribute("class", "searchbar");
const input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "search topics...");
const button = document.createElement("button");
button.innerText = "Go";
searchBar.appendChild(input);
searchBar.appendChild(button);

banner.appendChild(topicTitle);
banner.appendChild(topics);
banner.appendChild(searchBar);

// Create a new .post div and populate with cards
let container = document.getElementById("container");
let post = document.createElement("div");
post.setAttribute("class", "post");
document.body.append(post);

// Data for the cards
const cardsData = [
    {
        cardNum: 1,
        title: 'Rounded Corners in "just" 40 Lines of Code',
        body: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nostrum vero minima minus delectus, magni facere velit mollitia!"
        ]
    },
    {
        cardNum: 2,
        title: "Design Inspiration for this Week's Challenge",
        list: [
            {
                text: "45 More Excellent Blog Designs from Smashing Magazine, 2008",
                link:
                    "https://www.smashingmagazine.com/2008/02/45-more-excellent-blog-designs/"
            },
            {
                text:
                    "Grunge, y2k aesthetic, and paper texture designs from 2000-2009 at the Web Design Museum",
                link:
                    "https://www.webdesignmuseum.org/flash-websites/page/2/style/Grunge,Y2K%20Aesthetic,Paper"
            },
            {
                text: "Flowers Feed the Soul at The Favorite Website Awards, 2006",
                link: "https://thefwa.com/cases/flowers-feed-the-soul"
            }
        ],
        body: [
            "Iusto cumque quasi ratione modi fugiat necessitatibus corporis, magnam, veniam molestias voluptatum expedita dolorum, ullam recusandae optio officiis molestiae quidem provident porro architecto hicperferendis consequuntur dicta. Dolorem laboriosam ipsa ipsum minus minima quibusdam quam sunt nullaeaque neque et soluta explicabo deleniti dolore, dolor quia est nam eos, quod, optio quis. Velit inanimi harum quidem amet tenetur dignissimos quis recusandae sunt corrupti error rem vero, quae liberoveritatis asperiores voluptates.",
            "Dolorem laboriosam ipsa ipsum minus minima quibusdam quam sunt nullaeaque neque et soluta explicabo deleniti dolore, dolor quia est nam eos, quod, optio quis. Velit inanimi harum quidem amet tenetur dignissimos quis recusandae sunt corrupti error rem vero, quae liberoveritatis asperiores voluptates."
        ]
    },
    {
        cardNum: 3,
        title: "Whats your plan on sparkz",
        body: [
            "Cupiditate odit laborum exercitationem ut veniam enim, aut officia aspernatur, cumque ipsam voluptatibusneque architecto voluptatum! Doloremque voluptate dolore pariatur illum aliquid sed minima autem sunt! Aspernatur rem doloremque enim magnam, cupiditate beatae, quae ea odio eius ducimus vel fuga essedolorum ut commodi consequuntur! Similique in animi rem minus dicta impedit quaerat nemo! Tempore, in. Ut veniam temporibus, ratione iste odio ipsa consectetur blanditiis repellat maxime? Facilis nisi eiusvoluptatem.",
            "Laborum exercitationem ut veniam enim, aut officia aspernatur, cumque ipsam voluptatibusneque architecto voluptatum! Doloremque voluptate dolore pariatur illum aliquid sed minima autem sunt! Aspernatur rem doloremque enim magnam, cupiditate beatae, quae ea odio eius ducimus vel fuga essedolorum ut commodi consequuntur! Similique in animi rem minus dicta impedit quaerat nemo! Tempore, in. Ut veniam temporibus, ratione iste odio ipsa consectetur blanditiis repellat maxime? Facilis nisi eiusvoluptatem."
        ]
    },
    {
        cardNum: 4,
        title:
            "If your web design doesn't have a paper texture, is it really design?",
        body: [
            "Laboriosam cumque quam delectus earum voluptatibus aliquam perspiciatis maxime minima ipsum repellendus magnam dolorum ad provident, alias inventore sit quo reiciendis ex odio. Quae est distinctio atque officiis id soluta impedit eius odio deserunt modi. Odit unde labore error cupiditate, dicta solutarepellendus esse adipisci molestias culpa numquam quae itaque voluptatum, officia voluptatem saepe placeat nihil, dolor dolores omnis aut? Eveniet unde blanditiis recusandae eaque voluptate voluptas fugit neque veniam! Earum cumque itaque maxime hic illo unde eius architecto omnis nisi ab ea repudiandae magnam delectus sunt tempore placeat aperiam, facere possimus numquam soluta quidem deserunt dolores voluptates. Consectetur provident deserunt quis! Quidem nemo ullam expedita a rem dolor modi sitaliquam, vitae adipisci quibusdam consequatur voluptates, voluptatem consectetur at ex commodi faceremolestias natus repellat ipsa. Eius maxime, est, accusamus aspernatur laudantium, quam fuga undeconsequuntur non corrupti iste eligendi. Omnis, accusantium accusamus? Hic aspernatur error ullam,nostrum molestiae beatae cumque facilis quo voluptatem. Suscipit eligendi magnam adipisci.",
            "Cupiditate odit laborum exercitationem ut veniam enim, aut officia aspernatur, cumque ipsam voluptatibusneque architecto voluptatum! Doloremque voluptate dolore pariatur illum aliquid sed minima autem sunt! Aspernatur rem doloremque enim magnam, cupiditate beatae, quae ea odio eius ducimus vel fuga essedolorum ut commodi consequuntur! Similique in animi rem minus dicta impedit quaerat nemo! Tempore, in. Ut veniam temporibus, ratione iste odio ipsa consectetur blanditiis repellat maxime? Facilis nisi eiusvoluptatem."
        ]
    },
    {
        cardNum: 5,
        title: "Here comes CSS3!",
        body: [
            "Molestias commodi quaerat debitis eos voluptas voluptatum corporis nisi libero magnam facilis sapiente tempora eligendi, nulla asperiores sunt blanditiis sequi aperiam molestiae! Quo tenetur vitae voluptatibus corrupti necessitatibus neque nulla a, accusantium repellat provident. Exercitationem maiores nam animi dolore impedit provident vero debitis libero ducimus necessitatibus rerum quisquam esse ex, doloremque voluptatem quam aliquid. Repudiandae, numquam! Fugiat aut ad ipsa explicabo ut laboriosam molestiae corrupti quidem! Quis natus blanditiis iusto facilis odit!"
        ]
    }
];

// Creates the cards and populates them with the cardData array
const createCards = () => {
    cardsData.forEach((item) => {
        let card = document.createElement("div");
        card.setAttribute("class", `card card-${item.cardNum}`);
        let h2 = document.createElement("h2");
        h2.innerText = item.title;
        card.appendChild(h2);
        if (item.list) {
            let ul = document.createElement("ul");
            for (let j = 0; j < item.list.length; j++) {
                let li = document.createElement("li");
                let a = document.createElement("a");
                a.setAttribute("href", item.list[j].link);
                a.setAttribute("target", "blank");
                a.innerText = item.list[j].text;
                li.appendChild(a);
                ul.appendChild(li);
            }

            card.appendChild(ul);
        }
        for (let i = 0; i < item.body.length; i++) {
            let p = document.createElement("p");
            p.innerText = item.body[i];
            card.appendChild(p);
        }
        post.appendChild(card);
    });
};

createCards();

// Add the new .post div to the container
container.appendChild(post);
