import "./testimonials.scss";

const Testimonials = () => {
  const data = [
    {
      id: 1,
      name: "Tom Durden",
      title: "Senior Developer",
      img:
        "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/twitter.png",
      desc:
        "In a riddle whose answer is chess, what is the only prohibited word?",
    },
    {
      id: 2,
      name: "Alex Kalinski",
      title: "Co-Founder of DELKA",
      img:
        "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/youtube.png",
      desc:
        "In a riddle whose answer is chess, what is the only prohibited word?",
      featured: true,
    },
    {
      id: 3,
      name: "Martin Harold",
      title: "CEO of ALBI",
      img:
        "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/linkedin.png",
      desc:
        "In a riddle whose answer is chess, what is the only prohibited word?",
    },
  ];
  return (

    <section data-scroll-section>
    
    <div className="testimonials" id="testimonials">

    <h1>Testimonials</h1>
    <div className="container">
    {data.map((d)=>(
    <div className={d.featured ? "card featured" : "card"}>
      <div className="top">
      <img src="assets/right-arrow.png" className="left" alt="arrow"/>
      <img src={d.img} className="user" alt="profile"/>
      <img src={d.icon} className="right" alt="arrow"/>      
      </div>
      <div className="center">
      {d.desc}
      </div>
      <div className="bottom">
      <h3>{d.name}</h3>
      <h4>{d.title}</h4>
      </div>      
    </div>
    ))}
    </div>      
    </div>
    </section>
  );
}

export default Testimonials
