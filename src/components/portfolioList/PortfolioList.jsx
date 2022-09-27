import "./portfolioList.scss";

const portfolioList = ({id, title, active, setSelected}) => {
  return (
    <section data-scroll-section>
    <li className={active ? "portfolioList active": "portfolioList"}
    onClick = {() => setSelected(id)}
    >
    {title}      
    </li>
    </section>
  );
}

export default portfolioList
