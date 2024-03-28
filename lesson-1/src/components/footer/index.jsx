import "./style.css";
function footer(){
    return  <footer>
                <div className="container">
                   <p>{new Date().getFullYear()}</p>
                </div>
            </footer>
}

export default  footer;