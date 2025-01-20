import React from 'react';
import './resume-style.css'
import Pdf from './Resume - Kritan Aryal.pdf'
import ballRollImg from './ball roll.png'
import website from './website.png'
import geometric from './geometric.png'
import loading from './noimg.jpeg'
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';

export default function Resume() {
    return ( 
           <div class="resume">
                    <a class="btn download-link" href={Pdf} download>Download PDF</a>
            {/* <!-- //  INTRO  // --> */}
            <header>
              <div class="head-content-wrapper">
                <h1>Kritan Aryal</h1>
                <h2>B.S. Computer Science</h2>
              </div>
            </header>

            {/* <!-- //  EDUCATION   // --> */}
            <section class="resume-section">
                <h2>Education</h2>

                <section class="education-item">
                  <h3>The University of Toledo - Toledo,Ohio</h3>
                  <p>Bachelor of Science: Computer Science </p>

                  <Popup trigger=
                  {<button class="btn"> Unofficial transcript </button>}
                  modal nested>
                {
                    close => (
                        <div class="content-bg"> 
                            <div>
                                <p>Please email at kritan.aryal@rockets.utoledo.edu to request for the unofficial transcript.</p>
                            </div>
                            <div>
                                <button onClick=
                                    {() => close()}>
                                        Done
                                </button>
                            </div>
                        </div>
                    )
                }
                  </Popup>
                  
                </section>
              </section>

            <main class="content-wrapper">
              {/* <!-- //  PROFILE  // --> */}
              <section class="resume-section">
                <h2>Profile</h2>
                <p> I am a senior majoring in B.S Computer Science. I will be graduating in December 2025. </p>
                
                <Link to ="/" >Back to homepage</Link>
              </section>

              {/* <!-- //  PROJECTS  // --> */}
              <section class="resume-section">
                <h2>Projects</h2>

                <div class="project-wrapper">

                    
                    <section class="project-item">
                      <img src={loading}  alt="Desk Robot Pet" />
                      <h3>Desk Robot Pet</h3>
                      <p>Created an interactive desk robot using Micro:bit and Python, featuring advanced functionalities such as temperature sensing and radio communication. Also, implemented functions to maintain a state of contentment with continuous interaction, display frustration based on gesture, and offers a fully functional Snake game.</p>
                    
                    </section>
                    
                    <section class="project-item">
                      <img src={loading}  alt="Airline Reservation System" />
                      <h3>Airline Reservation System</h3>
                      <p>Implemented a comprehensive Airline system using Python, facilitating functionalities such as seat reservation and cancellation, reservation detail search, seat availability display, and waitlist with distinct function for both admin and guest users.</p>
                    
                    </section>

                    <section class="project-item">
                      <img src={loading}  alt="Smartcash" />
                      <h3>Smartcash</h3>
                      <p>Created a website in HackPSU using React, Python, and MongoDB to develop a budgeting tool that predicts future balances and warns if balance is projected to go negative, highlighting expertise in AI integration, and database management.</p>
                    
                    </section>
                    
                    <section class="project-item">
                      <img src={loading}  alt="ReEdu" />
                      <h3>ReEdu</h3>
                      <p>Developed a lecture summarization platform in HackPrinceton using WhisperAI to encourage student comprehension and facilitate quick assessment of student understanding, emphasizing tailored teaching approaches satisfying student needs.</p>
                    
                    </section>

                    <section class="project-item">
                      <img src={loading}  alt="AR interaction" />
                      <h3>Immersive AR Interaction</h3>
                      <p>Constructed an innovative augmented reality (AR) experience for VisionOS, skillfully merging Unity's assets with RealityKit and Swift to craft a user-friendly interface. This project not only demonstrates my proficiency in AR game development but also showcases expertise in user interaction design. By seamlessly integrating these technologies, the result is an immersive experience that transcends traditional boundaries, reflecting my commitment to pushing the boundaries of technology for a more engaging and dynamic user experience.</p>
                        
                    </section>
                    <section class="project-item">
                      <img src={loading}  alt="Tower of Hanoi" />
                      <h3>Tower of Hanoi</h3>
                      <p>I created an efficient algorithm in Java, leveraging my strong recursion proficiency to elegantly solve a complex puzzle. The solution demonstrated my in-depth understanding of algorithmic principles and showcased my problem-solving skills. By implementing an effective and elegant algorithm, I highlighted my ability to translate complex coding concepts into practical solutions that deliver results. Overall, the project was a significant accomplishment, providing a clear picture of my coding abilities and my proficiency in developing efficient and effective solutions for complex problems.</p>
                        
                    </section>

                   <section class="project-item">
                    <img src={loading}  alt="Amusement Park Simulation" />
                    <h3>Amusement Park Simulation</h3>
                    <p>With expert knowledge in system simulation and advanced data structures, I engineered a cutting-edge Amusement Park Simulation in Java, effectively modeling every aspect of the park's operations from dawn till dusk. The project involved meticulously modeling rides, visitor behavior, and park operations using advanced simulation tools, resulting in a highly sophisticated solution and an outstanding display of my coding expertise. Overall, the project was incredibly rewarding, allowing me to leverage my advanced technical skills to create a one-of-a-kind simulation of an amusement park that could potentially be used for real-life applications.</p>
                    
                  </section>

                  <section class="project-item">
                    <img src={website}  alt="Screenshot of my website" />
                    <h3>Personal Website</h3>
                    <p>Creating my personal website using React was a testament to my skills in web design, front-end development, and content presentation. The website serves as a dynamic platform that not only showcases my professional background but also presents my projects and resume in a visually appealing and user-friendly manner. Leveraging the power of React, I implemented responsive design principles, ensuring that the website seamlessly adapts to various devices and screen sizes. The incorporation of a clean and intuitive user interface enhances the overall user experience, allowing visitors to navigate effortlessly through the comprehensive information about my skills, experiences, and accomplishments. The use of React's component-based architecture not only streamlined the development process but also facilitated easy maintenance and scalability. Through this project, I not only demonstrated my technical proficiency but also my commitment to creating a visually compelling and informative online presence that effectively communicates my capabilities and achievements.</p>
                    
                  </section>

                  <section class="project-item">
                    <img src={geometric} alt="screenshot of geometric analysis project" />
                    <h3>Geometric Analysis</h3>
                    <p>In the development of my Java program, I undertook the task of reading and processing files containing coordinates of triangles, rectangles, and points, showcasing my adeptness in both programming and data analysis. Employing advanced algorithms, the program systematically determined relationships between the geometric shapes, meticulously checking for containment and overlap. The results were elegantly presented in a tabular format, reflecting my commitment to clear and concise data representation. Notably, the program calculated and displayed the percentage of points residing within the geometric figures, providing a quantitative measure of spatial relationships. This project not only demonstrated my proficiency in Java programming but also highlighted my analytical skills in interpreting and presenting meaningful insights from complex datasets. The meticulous attention to detail in handling geometric relationships and the effective communication of results underscored my ability to merge technical expertise with a comprehensive understanding of data analysis.</p>
                    
                  </section>
                  
                  
                </div>
              </section>

              {/* <!-- //  WORK EXPERIENCE  // --> */}
              <section class="resume-section">
                {/* <!-- Start content edits below this line.  --> */}
                <h2>Work Experience</h2>
                <p>My complete work history is available on <a href="http://linkedin.com/in/kritan-aryal-45ab55234" target="_blank">LinkedIn</a>.</p>

                <section class="work-item">
                  <div class="work-details">
                    <h3>Software Engineering Intern - MES</h3>
                    <p>First Solar Inc.</p>
                    <p>May 2024 - Present</p>
                  </div>
                  
                  <div class="work-summary">
                    <ul>
                        <li>Led the transformation of the ScrapStation webapp, modifying dot net and related NuGet packages with a new process ordering logic which resolved issues of running processes twice and eliminated process-related scrap issues.</li>
                        <li>Addressed critical ScrapStation bugs by prioritizing configuration retrieval to prevent null value comparison, integrating dropdowns with loading animation to prevent value resets, and incorporating hash keys to resolve cache problems.</li>
                        <li>Effectively executed remote server updates, conducting meticulous software installations, reboots, and service restorations, while constantly monitoring rework, resulting in successful completion of a server patch.</li>
                        <li>Developed a highly efficient navigational menu with Ignition for MES Dashboards, consolidating all dashboard resources into a single platform, resulting in easier accessibility for critical data and improved user experience.</li>
                        <li>Created and integrated new pages into various web applications using Ignition, ensuring alignment with design requirements and seamlessly incorporating data from provided tags.</li>
                        <li>Developed a stored procedure and job in SSMS to monitor job executions, identifying and notifying the team of any job failing three consecutive times, significantly improving error tracking and team responsiveness.</li>
                        <li>Consistently resolved numerous tickets each week, which included tasks such as modifying/updating/creating tables and data, history tables, triggers, data custodian tasks, and handling other database management responsibilities.</li>
                    </ul>
                    </div>
                </section>
                
                <section class="work-item">
                  <div class="work-details">
                    <h3>Manufacturing Engineering Intern</h3>
                    <p>First Solar Inc.</p>
                    <p>August 2023 - April 2024</p>
                  </div>
                  
                  <div class="work-summary">
                    <ul>
                        <li>Built a Python program to automate the retrieval of warehouse stock reports from Oracle and order parts accordingly using selenium form web scraping, leading to 90% improvement in parts availability and 83% reduction in downtime.</li>
                        <li>Developed specialized JMP scripts for edge seal dispenser extracting data from SQL, delivering precise shot weights and ratio of each nozzle head, including control limit and specification limit, resulting in accurate data accessibility.</li>
                        <li>Boosted module data retrieval speed by 3 times by integrating a SubID search feature in FIN1 JMP script.</li>
                        <li>Debugged and revitalized 10+ scripts, rescuing valuable codes ensuring seamless compatibility with newer JMP versions.</li>
                        <li>Conducted a DMAIC analysis to address low throughputs during shift changes using fishbone and 5 Whys methodologies to identify bottlenecks and implemented targeted solutions to achieve a 14% increase in throughput.</li>
                        <li>Engineered specialized tools using SolidWorks to ensure worker safety when cleaning automated machines, creating a safer workspace, and mitigating the risk of work-related accidents and promoting a culture of safety-first.</li>
                    </ul>
                    </div>
                </section>
          
                <section class="work-item">
                  <div class="work-details">
                    <h3>Engagement Ambassador</h3>
                    <p>The University of Toledo Foundation</p>
                    <p>September 2021 - May 2022</p>
                  </div>
                  
                  <div class="work-summary">
                    
                    <ul>
                      <li>Initiated effective communication with university alumni, conducting surveys that resulted in a 20% increase in participation and a 15% boost in contributions to the foundation, fostering a stronger sense of community support.</li>
                      <li>Demonstrated strong teamwork, and communication playing a pivotal role in conducting a successful fundraising campaign, raising $1.9 million during the Giving Day, surpassing previous year’s total by 46%.</li>
                    </ul>
                  </div>
                </section>
              </section>

              {/* <!-- // CERTIFICATIONS //-->    */}
              <section class="resume-section">
                <h2>Certificates</h2>
                <section class="education-item">
                  <h3>Dale Carnefie Certification</h3> <a class="btn" href="https://www.linkedin.com/posts/kritan-aryal-45ab55234_dalecarnegie-professionaldevelopment-communication-activity-7055271121868242944-MBb2?utm_source=share&utm_medium=member_desktop" target="_blank">Show certificate</a>
                </section>
                <section class="education-item">
                  <h3>Six Sigma: Green Belt</h3> <a class="btn" href="https://www.linkedin.com/learning/certificates/0c60399c275503600bad0c0600aafa990e1c50060a2249c3078b1591faa39805?u=88585826" target="_blank">Show certificate</a>
                </section>
                <section class="education-item">
                  <h3>Career Essentials in Software Development</h3> <a class="btn" href="https://www.linkedin.com/learning/certificates/39678b0022ec4f761328d4aa7e3029925a6ad8c0ed6f065f542fc0ad304a972b" target="_blank">Show certificate</a>
                </section>
          
              
              </section>
            </main>
           </div>
        );
    }
    
