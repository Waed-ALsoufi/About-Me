import './App.css';
import { AiFillPhone, AiTwotoneMail, AiFillFacebook, AiFillTwitterSquare, AiFillGithub, AiOutlineCheckSquare } from "react-icons/ai";
import profilePhote from './waed.png';

function App() {
  const awards = ["CFP Student", "Fourth Rank in Math Competition", "Third Rank in Programming Competition (in Scratch)",
    "Third Rank in Math Competition (Minds Challenge))", "Participant of  WI(Women Inclusivity) hackathon"];
  const listItemsAwards = awards.map((award, index) =>
    <li key={index}>{award}</li>
  );
  const hobbies = [{ icon: "🍕️", hobbie: "Being a foodie" },
  { icon: "🍳", hobbie: "Cooking" },
  { icon: "📚 ", hobbie: "Studying" },
  { icon: "🎧", hobbie: " Listening to music" },
  { icon: "💻", hobbie: "Coding" },
  { icon: "👟", hobbie: "Running" },
  { icon: "📽", hobbie: "Watching Films" },
  { icon: "📖", hobbie: "Reading" }
  ];


  return (
    <div className="aboutMe">
      <div className="container">
        <div className="column-1">
          <div className="photeName">
            <img src={profilePhote} alt="" />
            <h2>Waed Al-Soufi</h2>
          </div>
          <div className="quote">
            <p >“ Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present. ”</p>
          </div>
          <div className="part">
            <h2>CONTATO</h2>
            <div className="contact">
              <AiFillPhone className="icon" />
              <span>+970 59-785-3918</span>
            </div>
            <div className="contact">
              <AiTwotoneMail className="icon" />
              <span>waedalsoufi@gmail.com</span>
            </div>
            <div className="contact">
              <AiFillPhone className="icon" />
              <span>Rafah, Gaza - Palestine</span>
            </div>
            <div className="contact">
              <AiFillFacebook className="icon" />
              <a href="https://twitter.com/Alsoufi_Waed" target="_blank" rel="noreferrer" >Waed Alsoufi</a>

            </div>
            <div className="contact">
              <AiFillTwitterSquare className="icon" />
              <a href="https://twitter.com/Alsoufi_Waed" target="_blank" rel="noreferrer" >Alsoufi_Waed</a>

            </div>
            <div className="contact">
              <AiFillGithub className="icon" />
              <span></span>
              <a href="https://github.com/Waed-ALsoufi" target="_blank" rel="noreferrer" >Waed-ALsoufi</a>

            </div>
            <br />
          </div>

        </div>

        <div className="column-2">
          <div className="subtitle">
            <h2>Education</h2>
            <p>Al-Qadishia High School
              Rafah/ Gaza Strip.<br />
              Senior year: 2021 — 2022</p>
          </div>
          <div className="subtitle">
            <h2>Skills</h2>
            <div className="contact">
              <AiOutlineCheckSquare className="icon" />
              <span>Ability to Work Under Pressure.</span>
            </div>
            <div className="contact">
              <AiOutlineCheckSquare className="icon" />
              <span>Design thinking skills</span>
            </div>
            <div className="contact">
              <AiOutlineCheckSquare className="icon" />
              <span>Programming skills (eg. Python, JS, CSS, C++,React.js, and React Native).</span>
            </div>
            <div className="contact">
              <AiOutlineCheckSquare className="icon" />
              <span>Collaboration tools: Git, GitHub</span>
            </div>
            <div className="contact">
              <AiOutlineCheckSquare className="icon" />
              <span>Debug: chrome dev tools</span>
            </div>
            <div className="part">
              <h2>Languages</h2>
              <div className="contact">
                <AiOutlineCheckSquare className="icon" />
                <span>Arabic (Native)</span>
              </div>
              <div className="contact">
                <AiOutlineCheckSquare className="icon" />
                <span>English</span>
              </div>
            </div>

          </div>



        </div>
        <div className="column-3">
          <div className="subtitle">
            <h2>Awards</h2>
            <div>
              <ul >
                {listItemsAwards}
              </ul>

            </div>

          </div>

          <div className="subtitle">
            <h2>Hobbies</h2>
            <div className="allHobbies">
              {hobbies.map((hobbie, index) =>
                <div className="hobbie" key={index}>
                  <h3> {hobbie.icon} {hobbie.hobbie}</h3>
                </div>
              )}
            </div>
            <div>


            </div>
          </div>

        </div>
      </div>
    </div>
  )
};

export default App;
