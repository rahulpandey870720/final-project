import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {addCategoryStart,updateCategoryStart,} from "../../../redux/action/category.action";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { toast } from "react-toastify";
import { storage } from "../../../FirebaseConfig";
import Categories from './Categories'

let initialState = {
  name: "",
  image: "",
  status: "",
};
export default function AddorEditcategories() {
  let Categories = useSelector((state) => state.category.Categories);
  
  let { id } = useParams();
  if (id) {
        
    let category = Categories?.find((cat) => cat.id === id);
    
    if (category) {
      delete category.id;
      initialState = {...category};
    }
  } else {
    initialState = {
      name: "",
      image: "",
      status: "",
    };
  }
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let [formData, setFormData] = useState(initialState);

  let { name, image, status } = formData;

  const inputChange = (event) => {
    setFormData((prevValue) => ({
      ...prevValue,
      [event.target.name]: event.target.value,
    }));
  };
  const fileChange = (event) => {
    uploadFile(event.target.files[0]);
  };

  const uploadFile = (file) => {
    const storageRef = ref(storage, file.name);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        switch (snapshot.state) {
          case "paused":
           
            break;
          case "running":
           
            break;
        }
      },
      (error) => {},
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        
          setFormData((prevValue) => ({
            ...prevValue,
            image: downloadURL,
          }));
        });
      }
    );
  };
  const Submit = (event) => {
    event.preventDefault();
    if (id) {
      dispatch(updateCategoryStart(id, formData))
      
      toast.success("category updated successfully!");
    } else {
      dispatch(addCategoryStart(formData))
      toast.success("category added successfully!");
    }

    setTimeout(() => {
      navigate("/admin/categories");
    }, 2000);
  };
  return (
    <div className="card">
      <div className="card-header bg-primary txt-white d-flex justify-content-between ">
        <div> Add Category</div>
        <div>
          <Link to="/admin/categories" className="btn btn-success">
            Back
          </Link>
        </div>
      </div>
      <div className="card-body">
        <form onSubmit={Submit}>
          <div className="mb-4">
            <label htmlFor="name" className="form-label">
              name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              onChange={inputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">image</label>
            <input
              className="form-control"
              type="file"
              id="image"
              onChange={fileChange}
            />
            {image && (
              <div>
                <img src={image} />
              </div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="status">Status</label>
            <select
              className="form-control"
              id="status"
              name="status"
              defaultValue={status}
              onChange={inputChange}
            >
              <option hidden>Select Status</option>
              <option value="1">Active</option>
              <option value="0">Inactive</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
