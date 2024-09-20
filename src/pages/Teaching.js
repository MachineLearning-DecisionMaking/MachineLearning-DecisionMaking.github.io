import CourseCard from "../components/CourseCard";

export default function () {
  const currentCourses = [
    {
      name: "Advanced Topics in Machine Learning", link: "https://www.chalmers.se/en/education/your-studies/find-course-and-programme-syllabi/course-syllabus/DAT441", code: "DAT441/DIT41", when: "since 2021", desc: "Thee course is focused on advanced theory, methods and mathematical understanding of machine learning in particular in the context of sequential decision making. It covers the following topics: reinforcement learning, multi-armed bandits, active learning, and the relevant deep learning methods, e.g., deep reinforcement learning."
    },
    {
      name: "Algorithms for Machine Learning and Inference", link: "https://www.chalmers.se/en/education/your-studies/find-course-and-programme-syllabi/course-syllabus/TDA233", code: "TDA233/DIT382", when: "since 2018", desc: "The course is focused on supervised and unsupervised learning methods in machine learning including regression models, various classification algorithms, kernel methods, evaluation of machine learning methods, MCMC methods, Laplace approximation, Bayesian learning, deep learning (e.g., standard neural networks, convolutional neural networks – CNNs, and recurrent neural networks – RNNs), clustering, and Gaussian mixture models. The course aims to provide a deep rigorous understanding of these topics."
    },
  ]
  const previousCourses = [
    "Advanced Topics in Multi-Armed Bandits (PhD course), 2023 (examiner).",
    "Statistical Methods for Data Science, with Magnus V. Persson, Fall 2019.",
    "Theoretical Foundations of Machine Learning (PhD course), with Devdatt Dubhashi, Fredrik Johansson, Ashkan Panahi, Fall 2019.",
    "An intense course on Machine Learning to the Chalmers CSE faculty, June 2019.",
    "Statistical Methods for Data Science, with Richard Johansson, Fall 2018.",
    "ML-HW CoDesign (Efficient Deep Learning, PhD course), with Fredrik Dahlgren, Devdatt Dubhashi, Olof Mogren, Miquel Pericas, Pedro Petersen, Ioannis Sourdis and Per Stenström, Spring 2018."
  ];
  return (
    <section class="section content is-medium container">
      <h1 class="title">Teaching</h1>
      <p>
        Morteza Haghir Chehreghani (Group Leader) is the examiner and teacher of the following courses:
      </p>
      <div class="mb-6">
        {currentCourses.map((course) => (
          <CourseCard course={course} />
        ))
        }
      </div>
      <p>Other teaching activity at Chalmers include</p>
      <ul>
        {previousCourses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
    </section>
  );
}
