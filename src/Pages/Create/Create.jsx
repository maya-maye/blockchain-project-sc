import { useState } from 'react';
import "./Create.css"

const Create = () => {
    return (
        <div className = "create">
            {/* <h1>Hello! Create your new story here</h1>
            <h2>Title:</h2>
            <h2>Description</h2>
            <h2>Thumbnail</h2>
            <h2>Upload a pdf of your story</h2>
            <h2>Upload up to 3 tracks of music (mp3 only)</h2> */}

            <form className="createForm">
                <div className="createFormGroup">
                    <label htmlFor="fileInput">
                        <i className="createIcon fas fa-plus"></i>
                    </label>
                    <input id="fileInput" type="file" style={{display: "none"}} />
                    <input
                        className="createInput"
                        placeholder="Title"
                        type="text"
                        autoFocus={true}
                    />
                </div>
                <div className="createFormGroup">
                {/* upload text here */}
                    <textarea
                        className="createInput createText"
                        placeholder="Copy your story text here"
                        type="text"
                        autoFocus={true}
                    />
                </div>
                <div>
                    {/* upload music here (mp3), max 3 files */}
                    <input 
                        className="createInput createText"
                        type="file"
                        name="file"
                        accept="mp3"
                    />
                    <input type = "button" value = "Click to upload! (mp3 only)" name = "button" onClick = "submitSong();"/>

                </div>
                <button className="createSubmit" type="submit">
                    Publish
                </button>
            </form>

        </div>
    )
}

export default Create