import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { MOBILE_BREAKPOINT } from "../../../../constants/breakpoints";

// react content loader
import ContentLoader from "react-content-loader";

// react img magnifiers
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import "./styles.scss";

function DetailImage(props) {
  const { product } = props;
  const { img } = product ? product : "";

  const [isAtDesktop, setIsAtDesktop] = useState(true);
  const [isLast, setIsLast] = useState(false);

  const handleResizeWindow = () => {
    if (window.innerWidth > MOBILE_BREAKPOINT) {
      setIsAtDesktop(true);
    } else {
      setIsAtDesktop(false);
    }
  };

  window.addEventListener("resize", handleResizeWindow);

  // reset img when window is resized
  useEffect(() => {
    window.addEventListener("resize", handleResizeWindow);

    return window.removeEventListener("resize", handleResizeWindow);
  }, []);

  const contentLoader = () => (
    <ContentLoader viewBox="0 0 100 100">
      <rect x="0" y="0" width="100%" height="100%" />
    </ContentLoader>
  );

  return (
    <div className="detail-img">
      {isAtDesktop ? (
        img ? (
          <InnerImageZoom
            src={img}
            className={isLast ? "detail-img__main last" : "detail-img__main"}
          />
        ) : (
          contentLoader()
        )
      ) : img ? (
        <div className={isLast ? "detail-img__main last" : "detail-img__main"}>
          <img className="detail-img__main-mobile" src={img} alt="Foods" />
        </div>
      ) : (
        contentLoader()
      )}

      <div className="detail-img__slides">
        {img ? (
          <>
            <div
              onClick={() => setIsLast(false)}
              className={
                isLast ? "detail-img__slide last" : "detail-img__slide"
              }
            >
              <img src={img} alt="Slide" />
            </div>
            <div
              onClick={() => setIsLast(true)}
              className={
                isLast ? "detail-img__slide" : "detail-img__slide last"
              }
            >
              <img src={img} alt="Slide" />
            </div>
          </>
        ) : (
          <>
            {contentLoader()}
            {contentLoader()}
          </>
        )}
      </div>
    </div>
  );
}

DetailImage.propsTypes = {
  product: PropTypes.object,
};

export default DetailImage;
