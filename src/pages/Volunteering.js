import React from "react";
import PicInfo from "../components/PicInfo";
import University from "../assests/images/Home/University.png";
import Technology from "../components/Technology";
import Events from "../components/Events";
import Cyber from "../assests/images/Volunteering/Cyber.jpg";
import Upskill from "../assests/images/Volunteering/Upskill.jpg";
import Fresh from "../assests/images/Volunteering/Fresh.jpg";
import Develop from "../assests/images/Volunteering/Develop.jpg";
import Presentation from "../assests/images/Volunteering/Presentation.jpg";
import Research from "../assests/images/Volunteering/Research.jpg";
import Three_min from "../assests/images/Volunteering/Three_min.jpg";
import Empower from "../assests/images/Volunteering/Empower.jpg";
import Sip from "../assests/images/Volunteering/Sip.jpg";
import Accelerate from "../assests/images/Volunteering/Accelerate.jpg";
import CSM1 from "../assests/images/Volunteering/CSM1.jpg";
import CSM2 from "../assests/images/Volunteering/CSM2.jpg";

const Volunteering = () => {
  return (
    <div
      style={{
        marginTop: "50px",
        backgroundColor: "rgba(22, 22, 24, 0.8)",
        padding: "30px",
      }}
    >
      <h3 class="text-center" style={{ marginTop: "50px", color: "white" }}>
        Volunteer
      </h3>
      <p
        class="text-center"
        style={{ marginTop: "20px", color: "white", opacity: 0.8 }}
      >
        Societies joined with, Roles undertaken and Events orgainzed to give
        back to the community.
      </p>

      {/* IEEE YP */}

      <h4 style={{ marginTop: "60px", color: "#e3ceb3" }}>
        IEEE Young Professionals Sri Lanka
      </h4>
      <p style={{ marginTop: "20px", color: "white", opacity: 0.8 }}>
        IEEE Young Professionals is the group of IEEE members and volunteers who
        have graduated from their first professional degree within the past 15
        years. I am currently working in the secretariat team of the Let's Talk
        project. These are some of the webinars and events I have contributed by
        organizing by content writing and compering.
      </p>
      <div class="row">
        <div class="col-3">
          <Events
            Image={Cyber}
            Header={"Legal Intervention for a Safer Cyberspace"}
            Height={"23em"}
            Content={
              "With Mrs. Aparajitha Ariyadasa, Attorney at Law & Entrepreneur "
            }
            Link={"https://www.facebook.com/ypsrilanka/videos/207055237967362"}
          />
        </div>
        <div class="col-3">
          <Events
            Image={Upskill}
            Header={"UPSKILL Sri Lanka 2021"}
            Height={"23em"}
            Content={"Two days event with many technology leaders"}
            Link={"https://www.youtube.com/watch?v=9KHRT9EhgS0"}
          />
        </div>
        <div class="col-3">
          <Events
            Image={Fresh}
            Header={"What does the industry expect from a fresh graduate "}
            Height={"23em"}
            Content={"With Mr. Mangala Perera, COO of Rootcode Lab"}
            Link={"https://www.youtube.com/watch?v=FTimMxh3ASQ"}
          />
        </div>
        <div class="col-3">
          <Events
            Image={Develop}
            Header={"Develop T Shaped Skills, Optimize Your Personal Brand"}
            Height={"23em"}
            Content={
              "With Mr. Niroshan Madampitige, Head of Projects of Vestoria"
            }
            Link={"https://www.youtube.com/watch?v=6_pT3Yk_jc0"}
          />
        </div>
      </div>

      {/* IEEE Procomm */}

      <h4 style={{ marginTop: "60px", color: "#e3ceb3" }}>
        IEEE Professional Communication Student Society - University of Moratuwa
      </h4>
      <p style={{ marginTop: "20px", color: "white", opacity: 0.8 }}>
        IEEE Procomm student chapter - UOM is the first ever IEEE Procomm
        student body established in Sri Lanka on a mission to develop the
        written, verbal, and nonverbal communication skills of the
        undergraduates. Serving as the editor of the society in the executive
        committee for the 2021/22, I have contributed by organizing these events
        by leading the editorial team and content writing.
      </p>

      <div class="row">
        <div class="col-4">
          <Events
            Image={Presentation}
            Height={"19.5em"}
            Header={"Presentation Skills for Academics "}
            Content={
              "With Ms. Lydia Wilkinson, Assistant Professor of University of Toronto"
            }
          />
        </div>
        <div class="col-4">
          <Events
            Image={Research}
            Header={"A beginners' guide to research communication"}
            Content={
              "With Dr. H. Niles Perera, Senior Lecturer of University of Moratuwa"
            }
          />
        </div>
        <div class="col-4">
          <Events
            Image={Three_min}
            Header={"3 min Competition"}
            Height={"19.5em"}
            Content={"Coming Soon..."}
            Link={
              "https://www.linkedin.com/posts/ieeeprocommuom_are-you-up-for-a-challenge-for-the-first-activity-6881579982020337664-ULL7"
            }
          />
        </div>
      </div>

      {/* IEEE WIE */}

      <h4 style={{ marginTop: "60px", color: "#e3ceb3" }}>
        IEEE Woman in Engineering Affinity Group - University of Moratuwa
      </h4>
      <p style={{ marginTop: "20px", color: "white", opacity: 0.8 }}>
        This is the first-ever WIE Affinity Group in Sri Lanka strives for the
        promotion and betterment of Women Engineers. I have worked as the
        Planning Director of the society in 2020, has contributed to organize
        events and flyer designing. I was the Co-chairperson of the events
        Empower Yourself as a Women in Engineering and Accelerate your technical
        Career.
      </p>

      <div class="row">
        <div class="col-4">
          <Events
            Image={Empower}
            Header={"Empower Yourself as a Women in Engineering"}
            Content={
              "With Eng. Thilini Wasundara, Chairperson of IET YP Sri Lanka"
            }
          />
        </div>
        <div class="col-4">
          <Events
            Image={Sip}
            Header={"Sip Abises - 2"}
            Height={"19.5em"}
            Content={"Virtual Seminar Series for Ordinary Level students"}
          />
        </div>
        <div class="col-4">
          <Events
            Image={Accelerate}
            Height={"19.5em"}
            Header={"Accelerate your Technical Career"}
            Content={
              "Mr Milton Silva, Former Divisional Chief Engineer at Intel USA"
            }
          />
        </div>
      </div>

      {/* Catholic Student Movement - University of Moratuwa */}

      <h4 style={{ marginTop: "60px", color: "#e3ceb3" }}>
        Catholic Student Movement - University of Moratuwa
      </h4>
      <p style={{ marginTop: "20px", color: "white", opacity: 0.8 }}>
        Catholic Students Movement (CSM) is one of the oldest and most dynamic
        clubs in the University of Moratuwa which consists of the Catholic
        Students of the university. I have participated in the carol service
        which is held every year in december.
      </p>

      <div class="row">
        <div class="col-4">
          <Events Image={CSM1} Header={"Carol Service 2018"} />
        </div>
        <div class="col-4">
          <Events Image={CSM2} Header={"Carol Service 2019"} />
        </div>
        <div class="col-4"></div>
      </div>
    </div>
  );
};

export default Volunteering;
