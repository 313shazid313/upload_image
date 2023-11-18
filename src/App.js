import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const App = () => {
  const url = "http://localhost:8000/";
  const [imageFile, setImageFile] = useState(null);

  const handlePhoto = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", imageFile);

    axios
      .post(url, formData)
      .then((res) => {
        console.log(res);
        navigate('/read')
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <form action="" method="post" onSubmit={handleSubmit}>
        <div className="mb-3 m-5">
          <label className="form-label">Default file</label>
          <input
            className="form-control"
            name="image"
            type="file"
            id="FormData"
            onChange={handlePhoto}
          />
          <button type="submit" className="btn btn-success m-5">
            Success
          </button>
        </div>
      </form>
    </>
  );
};

export default App;
