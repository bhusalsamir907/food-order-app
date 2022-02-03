import React from 'react';
import AboutImage from '../assets/about.jpg';
import "../styles/About.css";

function About() {
  return (
      <div className="about">
          <div className="aboutTop" style={{backgroundImage:`url(${AboutImage})`}}>
          </div>
          <div className="aboutBottom">
              <h1>About Us</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro dicta mollitia vitae id, ea veritatis eius, adipisci voluptates possimus officia, laborum modi dignissimos perferendis ex sapiente dolor ratione itaque beatae exercitationem voluptatibus ipsam iste quasi velit nostrum! Ullam nam ipsum repellat, consequatur officiis, soluta eum nobis enim fugit sapiente praesentium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quam veniam cupiditate, facilis corporis exercitationem expedita architecto officia fuga qui enim reiciendis labore, est aliquam consequatur quo in rem consequuntur quis asperiores amet, ducimus earum at. Reiciendis quidem repellendus provident, illo nesciunt impedit est minus ipsa porro, nihil, vero natus error. Necessitatibus quam consequuntur a temporibus asperiores inventore sequi laudantium esse mollitia blanditiis suscipit quas officiis earum ipsam unde, qui voluptatibus reprehenderit dolorum architecto sunt ea! Possimus, harum deleniti. Quos quae rem eos harum quo. Deserunt corrupti iure esse delectus ratione officiis quaerat. Impedit porro, ea quisquam modi voluptas nobis.</p>

          </div>
      </div>
  );
  
}

export default About;
