import React from "react";
import { Label } from "reactstrap";

function PreviewField(props) {
  const { filmId, listFilm, label, field } = props;
  const { name } = field;
  const previewSrc = listFilm.find((film) => film.value === filmId);

  return (
    <div className="mb-5 col-6">
      {previewSrc && (
        <div className="preview__area">
          {label && <Label for={name}>{label}</Label>}
          <img src={previewSrc.image} alt="NOT FOUND" />
        </div>
      )}
    </div>
  );
}

PreviewField.propTypes = {};

export default PreviewField;
