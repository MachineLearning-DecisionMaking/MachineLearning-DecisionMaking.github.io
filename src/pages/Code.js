import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";

export default function () {
  const repos = [
    { name: "Reinforcement learning for de novo drug design", link: "https://github.com/MolecularAI/SMILES-RL" },
    { name: "Correlation clustering with active learning of pairwise similarities", link: "https://github.com/Linusaronsson/Active-Correlation-Clustering" },
    { name: "Combinatorial multi-armed bandits for charging station selection for electric vehicles", link: "https://github.com/volvo-cars/eene-nav-bandit-sim" },
  ]

  const rawFiles = [
    { name: "An efficient method for correlation clustering with fixed and variable number of clusters", link: "https://www.cse.chalmers.se/~haghir/index_files/Correlation_Clustering.py" }
  ]

  return (
    <>
      <section class="section container">
        <h1 class="title">Repositories</h1>
        <div>
          {repos.map((repo) => (
            <a style={{ display: "block" }} class="button is-medium is-link mb-4" href={repo.link} target="_blank" rel="noopener noreferrer">
              <span class="icon">
                <FontAwesomeIcon icon={faSquareGithub} />
              </span>
              <span>{repo.name}</span>
            </a>
          ))}
        </div>
      </section>

      <section class="section container">
        <h1 class="title">Other</h1>
        <div>
          {rawFiles.map((obj) => (
            <a style={{ display: "block" }} class="button is-medium is-link mb-4" href={obj.link} target="_blank" rel="noopener noreferrer">
              <span>{obj.name}</span>
            </a>
          ))}
        </div>
      </section>
    </>
  )
}
