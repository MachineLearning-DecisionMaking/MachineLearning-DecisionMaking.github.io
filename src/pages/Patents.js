export default function () {
  const patents = [
    {
      title:
        "System and method for performing k-nearest neighbor search based on minimax distance measure and efficient outlier detection",
      authors: "Morteza Chehreghani",
      number: "10073887",
      date: "September 11, 2018",
      type: "Grant",
    },
    {
      title: "Efficient Calculation of All-Pair Path-based Distance Measures",
      authors: "Morteza Haghir Chehreghani",
      number: "9805138",
      date: "October 31, 2017",
      type: "Grant",
    },
    {
      title:
        "Method of Trip Prediction by Leveraging Trip Histories from Neighboring Users",
      authors: "Morteza Haghir Chehreghani and Yuxin Chen",
      number: "20180012141",
      date: "January 11, 2018",
      type: "Application",
    },
    {
      title:
        "Adaptive Trajectory Analysis of Replicator Dynamics for Data Clustering",
      authors: "Morteza Haghir Chehreghani",
      number: "20160179923",
      date: "June 23, 2016",
      type: "Application",
    },
  ];

  return (
    <section class="section container content is-medium">
      <h1 class="title">Patents</h1>
      <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
        {patents.map((patent, index) => (
          <li key={index} class="mb-5">
            <span>
              [{index + 1}] {patent.title}
            </span>
            <br />
            <span>{patent.authors}</span>
            <br />
            <span>Patent number: {patent.number}</span>
            <br />
            <span>Date of Patent: {patent.date}</span>
            <br />
            <span>Type: {patent.type}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
