const Box = (props) => {
  //  Write your code here.
  const { text, box } = props;
  return (
    <div className={box}>
      <p>{text}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="container">
    <h1 className="heading">Boxes</h1>
    <div className="box-container">
      <Box text="small" box="green-box" />
      <Box text="medium" box="blue-box" />
      <Box text="large" box="pink-box" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
