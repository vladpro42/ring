import { CircularProgress } from "@mui/material"
import "./Spiner.scss"


const Spinner = () => {
    return (
        <div className="spiner">
            <h1 className="spiner__title">Loading...</h1>
            <CircularProgress style={{ width: '70px', height: '70px' }} />
        </div>
    )
}

export default Spinner
