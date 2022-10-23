import watah from '../../assets/1938.jpg';

const Banner_img = () => {
    return <>
    <img src={watah} style={{  
        position: "absolute",
        width: "100%",
        height: "330px",
        objectFit: "cover",
        background: "url(1938.jpg)",
        opacity: "0.12",
    }} 
    ></img>
    </>
}

export default Banner_img;