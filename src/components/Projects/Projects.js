import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/emotion.png";
import autodocx from "../../Assets/Projects/auto_docx_converter.png";
import nari from "../../Assets/Projects/nari.png";
import programmingQuiz from "../../Assets/Projects/programming-quiz.png";
import calc from "../../Assets/Projects/calc.png";
import zipfood from '../../Assets/Projects/zipfood.png';
import aicodewriter from '../../Assets/Projects/ai-code-writer.jpeg';
import volumecontrol from "..//..//Assets//Projects//volumecontrol.jpeg";
import pricepred from "..//..//Assets//Projects//pricepred.png";
import homesecuritysystem from "..//..//Assets//Projects//homesecuritysystem.png";
import alertzy from "..//..//Assets//Projects//alaertzy.jpg";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nari}
              isBlog={false}
              title="Nari-A Woman Safety App"
              description="Nari is a woman safety application developed using Flutter. It features a Firebase-based login system for secure access, and utilizes Firestore for efficient data management.The application integrates Google Maps API for real-time location tracking, and includes an auto SMS send feature that triggers when the device is heavily shaken. This feature sends an SMS to a pre-set contact. Additionally, Nari includes a Fake Call feature that generates a fake call to the user's phone."
              ghLink="https://github.com/solankismit/NARI_APP.git"
              demoLink="https://drive.google.com/drive/folders/1mQEf1tu69mTsKzPNIxds6fEI5dB5WeWS?usp=drive_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={programmingQuiz}
              isBlog={false}
              title="Programming Quiz App"
              description="The Programming Quiz App is a user-friendly application developed using Firestore for database management, Provider for state management, and a Scroll to next question UI. It allows users to log in anonymously or with their Google ID, and stores completed quiz results in Firestore."
              ghLink="https://github.com/solankismit/ProgrammingQuizApp"
              demoLink="https://drive.google.com/drive/folders/13gANk41OLn1TbLGfK-wJ2RORrSaJghY0?usp=drive_link"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calc}
              isBlog={false}
              title="Calculator"
              description="The Calculator App is a user-friendly application inspired by the iOS native calculator. It features a swipe to undo and redo functionality, haptic feedback when pressing a button, and a design aesthetic similar to the iOS native calculator."
              ghLink="https://github.com/solankismit/Calculator-App"
              demoLink="https://drive.google.com/drive/folders/13jv4tRc190vkrb7GKUYwCkomu6ko-iB3?usp=drive_link"              
            />
          </Col> */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zipfood}
              isBlog={false}
              title="ZipFood-An Ingredients Delivery App"
              description="ZipFood is a unique ingredients delivery app developed using Flutter and Firebase. The app utilizes Firebase Authentication for OTP login and Firestore database for data management. The major challenge was creating a unique dataset of food ingredients, which included not only the food and its ingredients but also recipe videos. The UI was inspired by designs from Dribble. I leveraged my Python skills to create this unique dataset as it was not available online. The app also includes a shopping cart feature where the total price is calculated based on the items added to the cart."
              ghLink="https://github.com/solankismit/ZipFood"
              demoLink="https://drive.google.com/drive/folders/1YZVyZBtOPsgOWO7zysEb1YEEyGcxm3-p?usp=drive_link"              
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Certificate Generator"
              description="The Certificate Generator is a script that automates the creation of personalized certificates. It uses a template certificate image, a font file, a font size, and a CSV file containing the names of recipients. The script uses OpenCV to identify the exact location on the certificate where the recipient's name should be placed, and to determine the color of the certificate to set the color of the text. This automation significantly reduces the time taken to generate multiple certificates, leveraging the skills in OpenCV and Python."
              ghLink=""
              demoLink=""
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={autodocx}
              isBlog={false}
              title="Auto Docx Converter"
              description="I developed a docx creator tool using Python that automates the process of generating documentation for practical programs. The tool takes the aim and the code of each program as input, runs the code, captures the output screenshot, and inserts them into a doc file. The tool can create a final document for all the aims in just 2-3 minutes, saving me a lot of time and effort."
              ghLink="https://github.com/solankismit/AutoDocCreatorTool"
              demoLink="https://www.linkedin.com/posts/solankismit_python-tool-activity-7045118909343027200-uibo?utm_source=share&utm_medium=member_desktop" 
               />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Expression Detection"
              description="This project demonstrates how to use PyTorch and CNNs to create a machine learning model that can classify images of faces with different expressions. The model is trained on a custom dataset of face images and achieves an accuracy of 90%. The project also shows how to use the model to make predictions on new images"
              ghLink="https://github.com/solankismit/PytorchNeuralNetwork"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Sculpture Eye Detection"
              description="It is a unique project that leverages the power of OpenCV, Google's Mediapipe, and Python to detect the exact location of eyes on a sculpture. The script is designed to work in real-time with a webcam, providing precise eye location data. This data can be used to generate a dataset for machine learning models, enabling the creation of a robot that can place eye stickers on sculptures. The project showcases the potential of combining computer vision and machine learning to create innovative solutions."
              ghLink=""
              // demoLink=""      <--------Please include a demo link here 
            />
          </Col> */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aicodewriter}
              isBlog={false}
              title="AI Code Writer"
              description="This project leverages the Google Bard API to autonomously generate code, an advanced feature of the auto docx converter. Unlike my previous project auto docx convert that requires a code file as input, this version writes the code independently. It also includes error checking and execution capabilities, and can generate screenshots for documentation."
              ghLink="https://github.com/solankismit/AICodeWriter"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={volumecontrol}
              isBlog={false}
              title="HandsFree Volume Control"
              description="It is a Python-based project that addresses the common issue of volume control while sitting on a sofa. It uses OpenCV and mediaPipe to detect the hand's fingers in the camera feed, and then calculates the distance between the thumb and the first finger to set the PC's volume. The project is currently not relative to the distance between the person and the screen, but with the addition of a sensor to determine this distance, the volume can be adjusted accordingly."
              ghLink="https://github.com/solankismit/GestureVolumeControl"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pricepred}
              isBlog={false}
              title="Real Estate Price Prediction"
              description="Developed a Machine Learning model for Real Estate House Price Prediction using the Boston House Dataset. Performed comprehensive data cleaning and preprocessing to ensure data quality. Employed Linear Regressor, Decision Tree, and Random Forest Regressor models to predict house prices. Utilized Mean Squared Error (MSE) as the evaluation metric to assess model performance and optimize results."
              ghLink="https://github.com/solankismit/RealEstatePricePrediction"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={homesecuritysystem}
              isBlog={false}
              title="Home Security System"
              description="Our innovative home security system leverages the power of an ESP32-CAM development board, a PIR sensor, and an Arduino Uno microcontroller. It captures images upon triggering by the PIR sensor or a voice command from Google Assistant, and sends these images as email attachments. Additionally, it sends an SMS alert to pre-configured phone numbers via IFTTT. It offers prompt notifications and advanced monitoring capabilities, ensuring homeowners feel secure and confident in their property's safety."
              // ghLink="https://github.com/solankismit/PytorchNeuralNetwork"
              demoLink="https://drive.google.com/file/d/1Xb4S8VKmKkK589haZs2nTB4mEdU17xCb/view?usp=drive_link"    
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={alertzy}
              isBlog={false}
              title="Alertzy-Elderly Safety Device"
              description= "It is a safety device designed to prevent incidents before they occur and alert guardians or family members in real-time. It uses a pulse oximeter, gyroscope, accelerometer, magnetometer, and barometer to detect falls, high fluctuation in blood pressure, and unconsciousness. The device also provides a button gesture for reporting unconsciousness. The application developed with Flutter, Arduino IDE, and Firebase allows users to view all health parameters, consult doctors, and remind about medicine intake."
              // ghLink="https://github.com/solankismit/PytorchNeuralNetwork"
              demoLink="https://drive.google.com/file/d/1_-0VhgP10BSskp4KiPtV54tKQd0AeumI/view?usp=drive_link"     
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
