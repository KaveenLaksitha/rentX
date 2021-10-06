import axios from 'axios';
import React, { useState } from 'react'





function ImageUplaod() {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [image, setImage] = useState();


    function sendData(e) {

        const formData = new FormData()
        formData.append('file', image)
        const file = {

            image
        }

        console.log("image eka", file);

        axios.post("http://localhost:4000/upload/uploadImage", formData)
            .then(() => {
                console.log("image sent", file);

            }).catch((err) => {
                alert("image not uploaded", err)
            })
    }





    return (
        <div>

            <form enctype="multipart/form-data" onSubmit={sendData}>
                {/* <div>
                    <label for="name">Image Title</label>
                    <input type="text" id="name" placeholder="Name"
                        name="name"
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}

                        required>
                    </input>
                </div>
                <div>
                    <label for="desc">Image Description</label>
                    <textarea id="desc" name="pesc" rows="2"
                        placeholder="Description"
                        onChange={(e) => {
                            setDesc(e.target.value);
                        }}

                    >
                    </textarea>
                </div> */}
                <div>
                    <label for="image">Upload Image</label>
                    <input type="file" id="image"
                        name="image"
                        onChange={(e) => {
                            setImage(e.target.files[0]);
                        }}

                        required />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>


            <div>










            </div>

        </div>
    )
}

export default ImageUplaod
