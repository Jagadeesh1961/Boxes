const Box = (props) => {
  const { boxName, className } = props;
  return (
    <div className={`box-container ${className}`}>
      <p>{boxName}</p>
    </div>
  );
};

const element = (
  <div className="boxes-bg-container">
    <h1 className="heading">Boxes</h1>
    <div className="boxes-container">
      <Box boxName="Small" className="small" />
      <Box boxName="Medium" className="medium" />
      <Box boxName="Large" className="large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
