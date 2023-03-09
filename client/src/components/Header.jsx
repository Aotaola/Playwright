import { useNavigate } from "react-router-dom"

function Header({user, setUser}){

    const navigate = useNavigate()

    function handleLogin(){
        navigate("/login")
    }

    function handleHome(){
        navigate("/")
    }

    function handleAbout(){
        navigate("/about")
    }

    function handleprofile(){
        navigate("/me")
    }

    function handlecreate(){
        navigate("/feature")
    }

    function handleDelete(e){
        e.preventDefault()
        if(window.confirm("Are you sure you want to log out?")){
            setUser(null)
            fetch(`/logout`,{ method: 'DELETE' })
            .then(req => req.json())
            .then()
            .catch(error => console.error("Error:", error));
            navigate("/")
        }
    }

    return(
        <div className="header-bar">
            <br/>
            <div className="image-container">
                <h1 className="uppercase"> Writers playground</h1>
                {/* <img onClick={handleHome} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPMAAADQCAMAAADlEKeVAAAAA1BMVEXuI1tGFj9tAAAASElEQVR4nO3BAQ0AAADCoPdPbQ43oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+DcZAAAFpTHXUAAAAAElFTkSuQmCC" alt="logo"></img> */}
            </div>
            <br/>
            <div>

                {user ? (
                    <div className="button-container">
                        {/* <button onClick={handleHome} className="header-button">Home</button> */}
                        {/* <button onClick={handleAbout} className="header-button">About</button> */}
                        {/* <button onClick={handleprofile} className="header-button">Profile</button> */}
                        {/* <button onClick={handlecreate} className="header-button">Create</button> */}
                        <button onClick={handleDelete} className="header-button"> Log Out </button>
                    </div>
                ):(
                    <button onClick={handleLogin} className="header-button"> Log in </button>
                    )}
                    </div>
            
        </div>
    )
}

export default Header