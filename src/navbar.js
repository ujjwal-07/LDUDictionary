import 'bootstrap/dist/css/bootstrap.css'
import { FcSearch } from "react-icons/fc";

function navbar(){
    return(
        <div className="divclass">
        <navbar>
            <input type="text"></input>
            <button> 
            <FcSearch />
            </button>

        </navbar>
        </div>
    );
}

export default navbar;