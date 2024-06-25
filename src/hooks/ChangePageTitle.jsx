import { useEffect } from "react";
import PropTypes from "prop-types";

const ChangePageTitle = ({ pageTitle }) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = pageTitle;
    return () => {
      document.title = prevTitle;
    };
  });

  return <></>;
};

ChangePageTitle.propTypes = {
  pageTitle: PropTypes.string.isRequired,
};

export default ChangePageTitle;
