import React from "react";
import Article from "./Article";
import Spacy from "../assests/images/Blogs/Spacy.png";
import Soup from "../assests/images/Blogs/Soup.png";

const Blogs = () => {
  return (
    <div
      style={{
        marginTop: "50px",
        backgroundColor: "rgba(22, 22, 24, 0.8)",
        padding: "30px",
      }}
    >
      <h3 class="text-center" style={{ marginTop: "50px", color: "white" }}>
        Blogs
      </h3>
      <p
        class="text-center"
        style={{ marginTop: "20px", color: "white", opacity: 0.8 }}
      >
        Sharing the Outcomes and Knowledge gathered from reading, thinking and
        executing projects.
      </p>

      <div class="row" style={{ marginTop: "50px" }}>
        <div class="col-4">
          <Article
            Image={Soup}
            Tag={"#Beautiful Soup #Data Scrapping"}
            Header={"Beautiful Soup is indeed beautiful for scrapping"}
            Content={
              "What will you do before you start to train a model ? Collecting datasets, right ? but as you know in some...."
            }
            Link={
              "https://medium.com/@kpimbulgoda/beautiful-soup-is-indeed-beautiful-for-scrapping-b34fd033bca"
            }
          />
        </div>
        <div class="col-4">
          <Article
            Image={Spacy}
            Tag={"#Spacy #NER model"}
            Header={"SpaCy is a classy way for NER model creation"}
            Content={
              "Hello there, we have met again! As I have promised from my previous article, from this one we’re gonna..."
            }
            Link={
              "https://medium.com/@kpimbulgoda/spacy-is-a-classy-way-for-ner-model-creation-spacy-v3-6143b84a3f27"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
