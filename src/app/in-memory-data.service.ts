import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let resumes = [
      {
        id: 1, 
        name: 'Brian William Zanti',        
        content: `        
        <h1>Brian William Zanti</h1>
        <span style="margin-right:2em;">(703) 870-8748</span><span style="margin-left:2em;">BrianZanti@gmail.com</span>
        <h2>Professional Experience</h2>
        <h3>Simon Computing (Alexandria, VA)</h3>
        <h4>Software Developer, June 2016 - May 2016</h4>
        <ul>
          <li>Developed a library for reliable asynchronous control of a 
          motorized Camera Assembly, designed firmware and circuity, and 
          built prototypes utilizing CADD, 3D printing, and laser cutting
          </li>
          <li>Led intern team that built a robot arm capable of locating 
          and moving objects using machine vision
          </li>
          <li>Trained in full-stack web development</li>
          <li>Facilitated a one week “Sprint” to rapidly create realistic 
          prototypes for new product ideas, identify key risks, and gather 
          feedback from users to address those risks
          </li>
          <li>Established the company brand and networked with candidates 
          as a member of the recruitment team
          </li>
        </ul>        
        <h3>Inova Solutions, Inc. (Charlottesville, VA)</h3>
        <h4>Engineering Intern, May 2015 - August 2015</h4>
        <ul>
          <li>Developed a web app to monitor a network of devices, sourcing 
          data from a cloud API
          </li>
          <li>
          Developed a Raspberry Pi app to extract meta data from devices connected by Ethernet
          </li>
          <li>Managed the development process by participating in daily and weekly Scrum meetings
          </li>          
        </ul>
        <h3>Stanford Health Care (Palo Alto, CA)</h3>
        <h4>Business Development Intern, June 2014 - August 2014</h4>
        <ul>
          <li>Gathered data on the Bay Area’s competitive health care market, created statistical 
          and qualitative reports, and presented findings to the Directors of Business Development
          </li>
          <li>Used LEAN technique of Value Stream Mapping to identify efficient workflows for potential programs
          </li>
        </ul>
        <h2>Technical Skills</h2>
        <ul>
          <li>Java, C, C++, Python, HTML, CSS, JavaScript, Typescript, PHP, SQL</li>
          <li>Angular, Bootstrap, Spring Boot, AWS, Docker, Jenkins, Maven, Django</li>
          <li>Windows, Unix, Linux, OSX, Android, iOS, Arduino, MSP430</li>
          <li>Agile and Scrum, Git Version Control, Test Driven Development, Sprint Rapid Prototyping</li>
        </ul>
        <h2>Education</h2>
        <h3>University of Virginia (Charlottesville, VA)</h3>
        <h4>Bachelor of Science with Distinction, Computer Engineering, Minor in Engineering Business</h4>
        <ul>
          <li>Cumulative GPA of 3.5</li>
          <li>Led a five person Technical Capstone team that developed an embedded system to 
          coordinate two robots using decentralized intelligence
          </li>
          <li>Wrote Thesis on international policy regarding artificially intelligent weapon systems</li>
        </ul>  
        <h2>Leadership Experience</h2>
        <h3>Sigma Pi, Beta Pi Chapter (University of Virginia)</h3>
        <h4>New Member Educator, House Manager</h4>
        <ul>
          <li>Led a committee to develop and execute a risk-free new member education plan</li>
          <li>Managed budgets of $1000 for new member education and $800 for house supplies and maintenance</li>
        </ul>
        <h3>School of Engineering and Applied Sciences (University of Virginia)</h3>
        <h4>Private Tutor</h4>
        <ul>
          <li>Educated first and second year students on the principles of computer science</li>
          <li>Developed rewarding relationships with pupils as they grew as students and succeeded academically</li>
        </ul>
        `,
        userId: 1,
        creationDate: 2014,
        lastEditDate: 2017
      },      
    ];
    return {resumes};
  }
}
