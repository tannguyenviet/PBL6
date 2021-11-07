import React from "react";

function ButtonToTop(props) {
  const { active } = props;

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className={`btn-to-top ${active}`} onClick={handleScrollToTop}>
      <i className="fas fa-chevron-up"></i>
    </div>
  );
}

export default ButtonToTop;
