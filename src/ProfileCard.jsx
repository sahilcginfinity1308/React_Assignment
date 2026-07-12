function ProfileCard({ name, bio, children }) {
  return (
    <article className="profile-card">
      <header>
        <h1>{name}</h1>
        <p className="bio">{bio}</p>
      </header>
      <section className="card-content">{children}</section>
    </article>
  );
}

export default ProfileCard;
