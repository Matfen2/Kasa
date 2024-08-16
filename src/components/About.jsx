import React from 'react';
import Banner from '../components/Banner2';  
import Collapse from '../components/Collapse';
import '../styles/About.sass';
import '../styles/Collapse.sass'; // Import Collapse styles

function About() {
  return (
    <div className="about">
      <div className="freedom">
        <Banner />
      </div>
      <div className="listAbout">
        <Collapse title="Fiabilité" content="Lorem ipsum dolor sit amet. Non quibusdam nemo est mollitia neque est cumque minus et exercitationem aliquid ad voluptatibus alias qui explicabo officia? Aut obcaecati vero est voluptas pariatur ex facere enim." />
        <Collapse title="Respect" content="Lorem ipsum dolor sit amet. Non quibusdam nemo est mollitia neque est cumque minus et exercitationem aliquid ad voluptatibus alias qui explicabo officia? Aut obcaecati vero est voluptas pariatur ex facere enim." />
        <Collapse title="Service" content="Lorem ipsum dolor sit amet. Non quibusdam nemo est mollitia neque est cumque minus et exercitationem aliquid ad voluptatibus alias qui explicabo officia? Aut obcaecati vero est voluptas pariatur ex facere enim." />
        <Collapse title="Sécurité" content="Lorem ipsum dolor sit amet. Non quibusdam nemo est mollitia neque est cumque minus et exercitationem aliquid ad voluptatibus alias qui explicabo officia? Aut obcaecati vero est voluptas pariatur ex facere enim." />
      </div>
    </div>
  );
}

export default About;
