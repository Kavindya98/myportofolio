import React from "react";
import Topic from "../components/Topic";

const Projects = () => {
  return (
    <div
      style={{
        marginTop: "50px",
        backgroundColor: "rgba(22, 22, 24, 0.8)",
        padding: "30px",
      }}
    >
      <h3 class="text-center" style={{ marginTop: "50px", color: "white" }}>
        Projects
      </h3>
      <p
        class="text-center"
        style={{ marginTop: "20px", color: "white", opacity: 0.8 }}
      >
        Group and Individual projects that I have done as university assignments
        and for fun.
      </p>

      {/* FYP */}
      <div>
        <Topic
          Heading={
            "Object Detection, Tracking, Re-identification and Activity Recognition for Maritime Surveillance using Thermal Vision - Stage II"
          }
          Group={2}
        />
        <p style={{ color: "white", opacity: 0.5 }}>Final Year Project </p>
        <p style={{ color: "white", opacity: 0.5, marginTop: "-20px" }}>
          Technologies - TensorFlow, Pytorch, OpenCV, Pillow, Python
        </p>
        <p style={{ color: "white" }}>
          The aim of the project is to develop wave compensated stabilization
          platform to mount the FLIR M232 camera and to develop a full system
          comprised with a maritime object detection and tracking model, a
          maritime activities detection model, a vessel re-identification model
          and a graphical user interface which will display useful information
          of the environment for surveillence when the thermal video feed of the
          camera provided.
        </p>
        <p style={{ color: "white" }}>
          I am currently working for developing a vessel re identification
          system using thermal vision. For that my main research is to explore
          methods for building a synthetic thermal vision dataset using GANs due
          to the unavailability of a proper thermal IR vessel dataset and to
          find a novel method for vessel/vehicle re identification using thermal
          imagery.
        </p>
      </div>

      {/* CV */}
      <div>
        <Topic
          Heading={
            "Building a Named Entity Recognition Model for CV Screening System "
          }
          Group={1}
          Code={"https://github.com/Kavindya98/CV_screening"}
        />
        <p style={{ color: "white", opacity: 0.5 }}>
          A project in the Sustainable Education Foundation Mentoring Program{" "}
        </p>
        <p style={{ color: "white", opacity: 0.5, marginTop: "-20px" }}>
          Technologies - Python, Spacy, Beautiful Soup
        </p>

        <p style={{ color: "white" }}>
          An individual project to learn basics of natural language processing
          with the supervision given by Mr. Mirantha Jayathilaka (PhD researcher
          at University of Manchester). The goal of the project is to build a
          system that will detect the keywords of a CV and comparing the
          requirements given by the recruiter, evaluate and rank the CV.
          Currently developing a model to identify the specific keywords in a
          CV.
        </p>
        <p style={{ color: "white" }}>
          Engaged in data scraping, data annotation for creating a quality
          dataset of CVs and created a named entity recognition model using
          Spacy Library and a PDF to text converter. Check the block page or the
          github repo for the articles.
        </p>
      </div>

      {/* Beulah */}
      <div>
        <Topic
          Heading={"An Audio Player with Customised Features "}
          Group={2}
        />
        <p style={{ color: "white", opacity: 0.5 }}>A Freelancing Project </p>
        <p style={{ color: "white", opacity: 0.5, marginTop: "-20px" }}>
          Technologies - React.js, Material UI, Electron, SQlite
        </p>

        <p style={{ color: "white" }}>
          This is a freelancing project to deliver an audio player with
          customised features requested by the client, Beulah Studio. Worked as
          the responsible person for interacting with the client, requirement
          gathering and managing the team. It is a desktop application which has
          been developed using React Js, Electron, Node.js and SQLite for the
          database. Use clickup as the mamagement platform
        </p>
        <p style={{ color: "white" }}>
          Worked as the responsible person for interacting with the client,
          requirement gathering and managing the team. Also developed the
          frontend of the application.
        </p>
      </div>

      {/* Hotel */}
      <div>
        <Topic
          Heading={"System for Predicting Hotel Reservation Status"}
          Group={1}
          Code={"https://github.com/Kavindya98/Hotel-reservation-status"}
        />
        <p style={{ color: "white", opacity: 0.5 }}> </p>
        <p style={{ color: "white", opacity: 0.5, marginTop: "-20px" }}>
          Technologies - Python, Pandas, Numpy, Matplotlib, Power BI
        </p>

        <p style={{ color: "white" }}>
          The project aim is to identify whether the customer who has made a
          reservation will cancel it or appear on time or will not show, using
          the given dataset by the Datastorm team. Used python,pandas,numpy and
          matplotlib for dataset manipulation, analysis, visualization and
          feature engineering. Catboost has been used for modelling, grid search
          used for finding the optimal hyperparameters and used functions to
          handle imbalance data. Also developed a Power BI dashboard to
          visualize the end results.
        </p>
      </div>

      {/* sales */}
      <div>
        <Topic
          Heading={
            "Build a Model for Sales Forecasting System using AWS services like S3 bucket, Sagemaker"
          }
          Group={1}
          Code={"https://github.com/Kavindya98/sales-forecasting"}
        />
        <p style={{ color: "white", opacity: 0.5 }}>Ongoing </p>
        <p style={{ color: "white", opacity: 0.5, marginTop: "-20px" }}>
          Technologies - Python, Pandas, Numpy, S3, Sagemaker
        </p>

        <p style={{ color: "white" }}>
          Aim of this project is to build a full pipeline for sales forecasting
          using AWS services. The data storage component S3 bucket was used, for
          data analysis, feature engineering and modeling the Sagemaker notebook
          instance was utilized. The Xgboost model has been used and tested in
          two ways; importing the library using the conda environment and also
          the service provided by AWS which is implemented by creating a
          training job. Hope to integrate a dashboard build using Quick Sight
          with endpoints of the model.
        </p>
      </div>
    </div>
  );
};

export default Projects;
