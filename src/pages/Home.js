import { Grid } from "@mui/material";
import React from "react";
import me from "../assests/images/Home/me.png";
import PicInfo from "../components/PicInfo";
import Technology from "../components/Technology";

const Home = () => {
  return (
    <div class="container" style={{ marginBottom: "50px", marginLeft: "20px" }}>
      {/* Profile Pic */}
      <div class="row " style={{ marginTop: "50px" }}>
        <div class="col-lg-5">
          <img
            src={me}
            style={{
              width: "375px",
              height: "375px",
              marginTop: "50px",
              marginLeft: "120px",
            }}
          ></img>
        </div>
        <div class="col-lg-1" style={{}}></div>
        <div
          class="col-lg-5 list-unstyled"
          style={{
            marginTop: "40px",
            marginBottom: "20px",

            padding: "35px",
            color: "white",
          }}
        >
          <li>
            <p style={{}}>Hello !!</p>
            <h3> I'm Kavindya Imbulgoda</h3>
            <p style={{}}>
              I am a versatile, hardworking and a committed person with good
              organizing, managerial and analytical skills. Currently I am
              seeking a career opportunity to apply my knowledge and skills to
              full use. I am willing to bring great values and profitable ideas
              to the workplace while serving for the betterment of the
              community.
            </p>
            <h6 className="list-unstyled">
              Interests
              <li>
                Data Science, Machine Learning, Software Development, Web
                Development
              </li>
            </h6>
          </li>
        </div>
        <div class="col-lg-1"></div>
      </div>

      {/* University Internship Volunteer */}
      <div class="row " style={{ marginTop: "70px" }}>
        <div class="col">
          <PicInfo
            Header={"Education"}
            Icon={1}
            Content={
              "I am a final year undergraduate in Department of Electronic and Telecommunication Engineering at University of Moratuwa. I am also a proud product of Holy Cross College Gampaha."
            }
          />
        </div>
        <div class="col">
          <PicInfo
            Header={"Work Experience"}
            Icon={2}
            Content={
              "I have completed my internship for one year period in Data Science at MillenniumIT ESP where I worked in dashboard development projects, sales forecasting model, recommendation system building projects etc. "
            }
          />
        </div>
        <div class="col">
          <PicInfo
            Header={"Volunteering"}
            Icon={3}
            Content={
              "I am currently working in the secretariat team of Lets Talk - IEEE Young Professionals Sri Lanka and as the editor of the IEEE Procomm Student Society - University of Moratuwa."
            }
          />
        </div>
      </div>

      <div
        style={{
          marginTop: "50px",

          padding: "30px",
        }}
      >
        <h3 class="text-center" style={{ marginTop: "50px", color: "white" }}>
          Technologies Familiar With
        </h3>
        <div class="row" style={{ marginTop: "50px" }}>
          <div class="col">
            <Technology
              Header={"Programming Language"}
              Talent={["Python", "Java (basics)", "SQL (basics)"]}
            />
          </div>
          <div class="col">
            <Technology
              Header={"Data Science"}
              Talent={[
                "Pandas",
                "Numpy",
                "Matplotlib",
                "Seaborn",
                "Scikit",
                "Spacy",
                "Beautiful Soup",
              ]}
            />
          </div>
          <div class="col" style={{ marginTop: "0px" }}>
            <Technology
              Header={"Front End Development"}
              Talent={["HTML", "CSS", "React JS", "Material UI", "Bootstrap"]}
            />
          </div>

          <div class="col" style={{ marginTop: "0px" }}>
            <Technology
              Header={"Dashboard Development"}
              Talent={["Power BI", "Qlik Sense", "QuickSight"]}
            />
          </div>
          <div class="col" style={{ marginTop: "20px" }}>
            <Technology
              Header={"Database Management"}
              Talent={["Microsoft SQL Management Studio", "Hue"]}
            />
          </div>
          <div class="col">
            <Technology
              Header={"Machine Vision"}
              Talent={["OpenCV", "Pillow", "TensorFlow", "Sewar"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
