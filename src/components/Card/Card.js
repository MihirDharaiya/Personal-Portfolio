import React from "react";
import google from "../../assets/img/google.png";

export const Card = ({ title, description, imgUrl, link }) => {
    return (
        <div class="card" style={{ width: "25rem", borderRadius: "20px", margin: "15px", justifyContent: "center", alignItems: "center" }}>
            <img src={imgUrl} alt="Hello" />
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">{description}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}
