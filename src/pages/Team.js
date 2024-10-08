import ProfileCard from "../components/ProfileCard";

export default function () {
  const groupLeader = { name: "Morteza Haghir Chehreghani" };

  const phdStudents = [
    { name: "Valter Schütz" },
    { name: "Jack Sandberg" },
    { name: "Linus Aronsson" },
    { name: "Hampus Gummesson Svensson" },
    { name: "Deepthi Pathare" },
  ].sort((a, b) => a.name.split(" ")[1].localeCompare(b.name.split(" ")[1]));

  const affiliatedPhdStudents = [
    { name: "Hannes Nilsson" },
    { name: "Kilian Tamino Tamino Freitag" },
  ].sort((a, b) => a.name.split(" ")[1].localeCompare(b.name.split(" ")[1]));

  const alumni = [
    { name: "Niklas Åkerblom", desc: "PhD student, defense: 2024" },
    { name: "Arman Rahbar", desc: "PhD student, defense: soon" },
    { name: "Fazeleh Sadat Hoseini", desc: "PhD student, defense: 2023" },
  ].sort((a, b) => a.name.split(" ")[1].localeCompare(b.name.split(" ")[1]));

  return (
    <>
      <section class="section container">
        <h2 class="title">Group Leader</h2>
        <div
          class="is-flex is-flex-direction-row is-justify-content-start is-flex-wrap-wrap"
          style={{ gap: "20px" }}
        >
          <ProfileCard name={groupLeader.name} role="Group Leader" />
        </div>
      </section>

      <section class="section container">
        <h2 class="title">PhD Students</h2>
        <div
          class="is-flex is-flex-direction-row is-justify-content-start is-flex-wrap-wrap"
          style={{ gap: "20px" }}
        >
          {phdStudents.map((member) => (
            <ProfileCard name={member.name} role={member.role} />
          ))}
        </div>
      </section>

      <section class="section container">
        <h2 class="title">Affiliated PhD Students</h2>
        <div
          class="is-flex is-flex-direction-row is-justify-content-start is-flex-wrap-wrap"
          style={{ gap: "20px" }}
        >
          {affiliatedPhdStudents.map((member) => (
            <ProfileCard name={member.name} role={member.role} />
          ))}
        </div>
      </section>

      <section class="section container">
        <h2 class="title">Alumni</h2>
        <div
          class="is-flex is-flex-direction-row is-justify-content-start is-flex-wrap-wrap"
          style={{ gap: "20px" }}
        >
          {alumni.map((member) => (
            <ProfileCard name={member.name} role={member.role} />
          ))}
        </div>
      </section>
    </>
  );
}
