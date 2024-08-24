const path = require("path");
const express = require("express");
const app = express();

const data = {
  title: "Kevin Rebakure",
  present: {
    title: "Junior Developer",
    paragraphs: [
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quodvoluptatibus doloremque veniam, eligendi quidem repudiandae omnisnatus laborum obcaecati eveniet quae voluptate tempora maioresenim nobis vero. Eum, aperiam nihil tenetur fugit accusamus esseipsa sed quisquam, officia quis quidem saepe? Blanditiis, delectusdolore nulla aperiam nostrum dolorem esse consectetur modi. Loremipsum dolor sit amet consectetur, adipisicing elit. Quodvoluptatibus doloremque veniam, eligendi quidem repudiandae omnisnatus laborum obcaecati eveniet quae voluptate tempora maioresenim nobis vero. Eum, aperiam nihil tenetur fugit accusamus esseipsa sed quisquam, officia quis quidem saepe? Blanditiis, delectusdolore nulla aperiam nostrum dolorem esse consectetur modi.",
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quodvoluptatibus doloremque veniam, eligendi quidem repudiandae omnisnatus laborum obcaecati eveniet quae voluptate tempora maioresenim nobis vero. Eum, aperiam nihil tenetur fugit accusamus esseipsa sed quisquam, officia quis quidem saepe? Blanditiis, delectusdolore nulla aperiam nostrum dolorem esse consectetur modi. Loremipsum dolor sit amet consectetur, adipisicing elit. Quodvoluptatibus doloremque veniam, eligendi quidem repudiandae omnisnatus laborum obcaecati eveniet quae voluptate tempora maioresenim nobis vero. Eum, aperiam nihil tenetur fugit accusamus esseipsa sed quisquam, officia quis quidem saepe? Blanditiis, delectusdolore nulla aperiam nostrum dolorem esse consectetur modi.",
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quodvoluptatibus doloremque veniam, eligendi quidem repudiandae omnisnatus laborum obcaecati eveniet quae voluptate tempora maioresenim nobis vero. Eum, aperiam nihil tenetur fugit accusamus esseipsa sed quisquam, officia quis quidem saepe? Blanditiis, delectusdolore nulla aperiam nostrum dolorem esse consectetur modi. Loremipsum dolor sit amet consectetur, adipisicing elit. Quodvoluptatibus doloremque veniam, eligendi quidem repudiandae omnisnatus laborum obcaecati eveniet quae voluptate tempora maioresenim nobis vero. Eum, aperiam nihil tenetur fugit accusamus esseipsa sed quisquam, officia quis quidem saepe? Blanditiis, delectusdolore nulla aperiam nostrum dolorem esse consectetur modi.",
    ],
  },
  profile: {
    names: "Kevin Rebakure",
    occupation: "Software Developer",
    location: "Kigali, Rwanda",
    date: "August 21<sup>st</sup>, 2024",
  },
  about: {
    sections: [
      {
        title: "🪴Bio",
        paragraph:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita at reprehenderit natus dolorum consequatur distinctio id quae sapiente odio veritatis, dolorem voluptatum labore reiciendis, ea ratione doloremque. Voluptatum a modi perspiciatis, quis dolore obcaecati in omnis? Eaque nihil ipsa at delectus veritatis non, nisi a et nobis temporibus unde quidem rem assumenda totam! Nesciunt minus exercitationem incidunt explicabo voluptatem omnis vitae possimus asperiores. Molestiae, aliquam eaque esse animi non minima, qui officia necessitatibus totam suscipit assumenda, fugiat magnam quaerat enim. Itaque velit obcaecati illo officia ad rerum, exercitationem nobis quas, quos enim alias recusandae beatae eaque sit minima delectus saepe?",
      },
      {
        title: "😎My Experience",
        paragraph:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita at reprehenderit natus dolorum consequatur distinctio id quae sapiente odio veritatis, dolorem voluptatum labore reiciendis, ea ratione doloremque. Voluptatum a modi perspiciatis, quis dolore obcaecati in omnis? Eaque nihil ipsa at delectus veritatis non, nisi a et nobis temporibus unde quidem rem assumenda totam! Nesciunt minus exercitationem incidunt explicabo voluptatem omnis vitae possimus asperiores. Molestiae, aliquam eaque esse animi non minima, qui officia necessitatibus totam suscipit assumenda, fugiat magnam quaerat enim. Itaque velit obcaecati illo officia ad rerum, exercitationem nobis quas, quos enim alias recusandae beatae eaque sit minima delectus saepe?",
      },
      {
        title: "🤝I'm looking forward to",
        paragraph:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita at reprehenderit natus dolorum consequatur distinctio id quae sapiente odio veritatis, dolorem voluptatum labore reiciendis, ea ratione doloremque. Voluptatum a modi perspiciatis, quis dolore obcaecati in omnis? Eaque nihil ipsa at delectus veritatis non, nisi a et nobis temporibus unde quidem rem assumenda totam! Nesciunt minus exercitationem incidunt explicabo voluptatem omnis vitae possimus asperiores. Molestiae, aliquam eaque esse animi non minima, qui officia necessitatibus totam suscipit assumenda, fugiat magnam quaerat enim. Itaque velit obcaecati illo officia ad rerum, exercitationem nobis quas, quos enim alias recusandae beatae eaque sit minima delectus saepe?",
      },
    ],
  },
  contact: {
    addresses: [
      {
        label: "Email",
        icon: "https://cdn-icons-png.flaticon.com/128/732/732200.png",
        username: "kevinrebakure@gmail.com",
      },
      {
        label: "GitHub",
        icon: "https://cdn-icons-png.flaticon.com/128/2111/2111425.png",
        username: "KevinRebakure",
      },
      {
        label: "Instagram",
        icon: "https://cdn-icons-png.flaticon.com/128/1409/1409946.png",
        username: "kevinrebakure",
      },
      {
        label: "LinkedIn",
        icon: "https://cdn-icons-png.flaticon.com/128/3536/3536505.png",
        username: "Kevin Rebakure",
      },
    ],
  },
  error: {
    message: "404 - Page not found",
  },
  footer: {
    credit: " &copy;2024 A Kevin Rebakure Production",
  },
};

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "../public")));

app.listen(3000);

app.get("/", (req, res) => {
  res.render("index", { data });
});

app.get("/about", (req, res) => {
  res.render("about", { data });
});

app.get("/contact", (req, res) => {
  res.render("contact", { data });
});

app.get("/profile", (req, res) => {
  res.render("profile", { data });
});

app.use((req, res) => {
  res.render("404", { data });
});
