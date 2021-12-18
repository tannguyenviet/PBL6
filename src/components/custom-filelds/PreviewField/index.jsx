import React from "react";
import { Label } from "reactstrap";

function PreviewField(props) {
  const { filmId, listFilm, label, field } = props;
  const { name, value } = field;
  const previewSrc =
    filmId && listFilm ? listFilm.find((film) => film.value === filmId) : null;

  return (
    <div className="mb-5 col-6">
      {(value || previewSrc) && (
        <div className="preview__area">
          {label && <Label for={name}>{label}</Label>}
          <img src={value || previewSrc.image} alt="NOT FOUND" />
        </div>
      )}
    </div>
  );
}

PreviewField.propTypes = {};

export default PreviewField;
