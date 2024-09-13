import swedishResearchCouncilImage from "../images/swedish-research-council.png";
import chalmersImage from "../images/chalmers.png";
import vinnovaImage from "../images/vinnova.png";
import waspImage from "../images/wasp.jpg";

export default function () {
  return (
    <>
      <section class="hero is-primary">
        <div class="hero-body has-text-centered">
          <h2 class="title">Machine Learning and Decision Making</h2>
          <p class="subtitle mt-2">
            The Machine Learning and Decision Making Lab (ML-DM) is based in the
            Data Science and AI division in the Department of Computer Science
            and Engineering (CSE) at Chalmers University of Technology,
            Gothenburg, Sweden. The lab, led by Morteza Haghir Haghir
            Chehreghani, conducts research in different areas of machine
            learning and AI-enabled decision making.
          </p>
        </div>
      </section>
      <section class="section content is-medium container">
        <h2>Research</h2>
        <p>
          Our research spans both the foundations of machine learning and
          decision making as well as real-world applications, aiming to push the
          boundaries of machine learning while addressing practical challenges
          across diverse domains such as transport, energy, life sciences,
          autonomous systems, recommendation systems, and decision support
          systems. Our current research focuses on the following topics.
        </p>
        <ul>
          <li>Interactive Machine Learning and Sequential Decision Making</li>
          <ul>
            <li>Active learning and active decision making</li>
            <li>Online learning / multi-armed bandits</li>
            <li> (Deep) Reinforcement learning</li>
            <li>Human-in-the-loop machine learning</li>
            <li>Multi-agent / federated learning</li>
          </ul>

          <li>Unsupervised Learning</li>
          <ul>
            <li>Generative AI & Large Language Models</li>
            <li>Unsupervised representation learning</li>
            <li>Cluster modelling</li>
            <li>Learning with graphs and networks</li>
          </ul>

          <li>Efficient Deep Learning</li>
          <ul>
            <li>Computation-Efficient Deep Learning</li>
            <li>Data-Efficient Deep Learning</li>
            <li>Uncertainty-Aware Deep Learning</li>
          </ul>
        </ul>

        <p>
          Our research is supported by Swedish Research Council (VR), Vinnova,
          WASP (Wallenberg AI, Autonomous Systems and Software Program), and
          Transport Area of Advance.
        </p>

        <div class="columns">
          <figure class="column image is-128x128">
            <img src={swedishResearchCouncilImage} />
          </figure>
          <figure class="column image is-4by5">
            <img src={chalmersImage} />
          </figure>
          <figure class="column image is-128x128">
            <img src={vinnovaImage} />
          </figure>
          <figure class="column image is-128x128">
            <img src={waspImage} />
          </figure>
        </div>
      </section>
      );
    </>
  );
}
