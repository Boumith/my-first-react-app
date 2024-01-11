import React from "react";
import vg from "../assets/2.webp";
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai"
const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechyStar</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aut
            rerum voluptatum necessitatibus aliquam recusandae quisquam, impedit
            expedita pariatur molestiae ex perferendis, dolorum molestias
            assumenda quia, eveniet alias voluptate error. Quisquam ullam ipsa
            reprehenderit repellat officia! Non vel, pariatur quaerat numquam
            perferendis similique quos voluptatem excepturi nihil quas debitis
            animi veniam doloribus qui. Adipisci amet dolorem vitae totam
            doloribus quidem. Recusandae cum consequuntur similique suscipit
            alias deleniti ipsa. Molestias eligendi amet maxime at rem dolores
            consequatur sint doloribus dolorem magni architecto laudantium,
            animi soluta! Suscipit eligendi at vel commodi repellat. Sequi, sit
            voluptatibus.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
            <h1>Brands</h1>

            <article>
                <div style={{
                    animationDelay:'0.3s',
                }}>
                    <AiFillGoogleCircle/>
                    <p>Google</p>
                </div>

                <div style={{
                    animationDelay:'0.5s',
                }}>
                    <AiFillAmazonCircle/>
                    <p>Amazon</p>
                </div>

                <div style={{
                    animationDelay:'0.7s',
                }}>
                    <AiFillYoutube/>
                    <p>Youtube</p>
                </div>

                <div style={{
                    animationDelay:'1s',
                }}>
                    <AiFillInstagram/>
                    <p>Instagram</p>
                </div>
            </article>
        </div>
      </div>
    </>
  );
};

export default Home;
