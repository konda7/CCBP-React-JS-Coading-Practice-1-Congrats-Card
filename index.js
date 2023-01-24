const element = (
  <div className="bg-container">
    <h1 className="main-heading">Congratulations</h1>
    <div className="deatils-contaainer">
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
      />
      <p className="name">Kiran V</p>
      <p className="details">
        Vishnu Institute of Computer and Technology, Bhimavaram
      </p>
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
