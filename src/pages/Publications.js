export default function () {
  const publications = [
    {
      title:
        "Hierarchical Correlation Clustering and Tree Preserving Embedding",
      authors: "Morteza Haghir Chehreghani, and Mostafa H. Chehreghani",
      year: 2024,
      source:
        "The Thirty-Fourth IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
      link: "#",
    },
    {
      title:
        "Correlation Clustering with Active Learning of Pairwise Similarities",
      authors: "Linus Aronsson, and Morteza Haghir Chehreghani",
      year: 2024,
      source: "Transactions on Machine Learning Research (TMLR)",
      link: "#",
    },
    {
      title: "Utilizing Reinforcement Learning for de novo Drug Design",
      authors:
        "Hampus Gummesson Svensson, Christian Tyrchan, Ola Engkvist, and Morteza Haghir Chehreghani",
      year: 2024,
      source: "Machine Learning (MLJ)",
      link: "#",
    },
    {
      title:
        "Online Learning Models for Vehicle Usage Prediction During COVID-19",
      authors:
        "Tobias Lindroth, Axel Svensson, Niklas Åkerblom, Mitra Pourabdollah, and Morteza Haghir Chehreghani",
      year: 2024,
      source: "IEEE Transactions on Intelligent Transportation Systems",
      link: "#",
    },
    {
      title: "de novo generated combinatorial chemical libraries",
      authors:
        "Simon Johansson, Morteza Haghir Chehreghani, Ola Engkvist, and Alexander Schliep",
      year: 2024,
      source: "Digital Discovery",
      link: "#",
    },
    {
      title:
        "A contextual combinatorial semi-bandit approach to network bottleneck identification",
      authors:
        "Fazeleh Hoseini, Niklas Åkerblom, and Morteza Haghir Chehreghani",
      year: 2024,
      source:
        "33rd ACM International Conference on Information and Knowledge Management (CIKM)",
      link: "#",
    },
    {
      title:
        "Recovery Bounds on Class-Based Optimal Transport: A Sum-of-Norms Regularization Framework",
      authors:
        "Arman Rahbar, Ashkan Panahi, Morteza Haghir Chehreghani, Devdatt Dubhashi, and Hamid Krim",
      year: 2023,
      source: "40th International Conference on Machine Learning (ICML)",
      link: "#",
    },
    {
      title:
        "Efficient Online Decision Tree Learning with Active Feature Acquisition",
      authors:
        "Arman Rahbar, Ziyu Ye, Yuxin Chen, and Morteza Haghir Chehreghani",
      year: 2023,
      source:
        "32nd International Joint Conference on Artificial Intelligence (IJCAI)",
      link: "#",
    },
    {
      title:
        "Online Learning of Energy Consumption for Navigation of Electric Vehicles",
      authors: "Niklas Åkerblom, Yuxin Chen, and Morteza Haghir Chehreghani",
      year: 2023,
      source: "Artificial Intelligence (AIJ)",
      link: "#",
    },
    {
      title:
        "A Combinatorial Semi-Bandit Approach to Charging Station Selection for Electric Vehicles",
      authors: "Niklas Åkerblom, and Morteza Haghir Chehreghani",
      year: 2023,
      source: "Transactions on Machine Learning Research (TMLR)",
      link: "#",
    },
  ];

  return (
    <section class="section container is-medium content">
      <h1 class="title">Publications</h1>
      <p>
        Pre-prints can be found in the{" "}
        <a href="https://arxiv.org/search/?searchtype=author&query=Chehreghani%2C+M+H">
          arXiv
        </a>{" "}
        and
        <a href="https://dblp.org/pid/67/3586.html"> DBLP</a> profiles.
      </p>
      <ul style={{ listStyleType: "none" }}>
        {publications.map((pub, index) => (
          <li key={index} class="mb-5">
            <a href={pub.link} target="_blank" rel="noopener noreferrer">
              [{index + 1}] {pub.title}
            </a>
            <br />
            <span>{pub.authors}</span>
            <br />
            <span>{pub.year}</span>
            <br />
            <span>{pub.source}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
