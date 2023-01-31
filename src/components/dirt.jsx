import ImgDirt from "../../public/dirt.svg"

const Dirt = ({pos}) => {

    return (
    
        <img 
          className={`dirt ${pos}`}
          src={ImgDirt} 
          alt="dirt image"/>
    
    )
}
export default Dirt
