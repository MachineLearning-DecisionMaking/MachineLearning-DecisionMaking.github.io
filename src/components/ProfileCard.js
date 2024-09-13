export default function ({ name, desc }) {
  return (
    <div class="card" style={{ width: "300px" }}>
      <div class="card-image">
        <figure class="image is-4by3">
          <img
            src="https://bulma.io/assets/images/placeholders/1280x960.png"
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div class="card-content">
        <p class="title is-4">{name}</p>

        <div class="content">{desc}</div>
      </div>
    </div>
  );
}
