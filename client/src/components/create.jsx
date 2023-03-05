import React, {useState} from 'react';


const Create = () => {

    //const [postDoc, setPostDoc] = useState("")

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [info, setInfo] = useState("");
    const [wordcount, setWordcount] = useState(0);
    const [text, setText] = useState("");
    const [image_url, setImage_url] = useState("");

    const publish = async () => {
        const response = await fetch("/docs",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "title": title,
                "author": author,
                "info": info,
                "wordcount": wordcount,
                "text": text,
                "image_url": image_url

            })
        })
        if (response.ok) {
            response.json().then(data => {
                console.log(data)
            })
          } else {
            response.json().then(data => {
                console.log(data.error)
            })
    }}
       
return (
        <div>
            <textarea type = "text" placeholder = "Type away..." value = {text} onChange = {(e) => setText(e.target.value)} ></textarea>
            <br/>
            <input type = "text" placeholder = "Title *" value = {title} onChange = {(e) => setTitle(e.target.value)}></input>
            <input type = "text" placeholder = "Author *" value = {author} onChange = {(e) => setAuthor(e.target.value)}></input>
            <br/>
            <input type = "text" placeholder = "Info" value = {info} onChange = {(e) => setInfo(e.target.value)}></input>
            <input type = "text" placeholder = "Image URL" value = {image_url} onChange = {(e) => setImage_url(e.target.value)}></input>
            <input type = "text" placeholder = "Image URL" value = {wordcount} onChange = {(e) => setWordcount(e.target.value)}></input>

            <br/>

            <button onClick = {publish} >Publish</button>
        </div>
) 

}
 
export default Create;