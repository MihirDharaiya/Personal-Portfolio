import globe from "../../assets/img/Globe.svg";
import '../Globe/Globe.css';

export const Globe = () => {
    return (
        <div className="globe">
            <img className={"image-profile"} src={globe} alt="Contact Us" />
        </div>
    )
}