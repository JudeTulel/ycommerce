import banner from "../../assets/Banner.jpg";
import banner2 from "../../assets/Banner2.jpg";
import banner3 from '../../assets/Banner3.jpg'
import RedDress from "../../assets/RedDress.jpg";
import MensTshirt from "../../assets/MensTshirt.jpg";
import PurpleDress from "../../assets/PurpleDress.jpg";
import SweaterFemale from "../../assets/SweaterFemale.jpg";
import SweaterFemale2 from "../../assets/SweaterFemale2.jpg";
import BlueSuiT from "../../assets/BlueSuiT.jpg";
import GreySuit from "../../assets/GreySuit.jpg";
import AllBlackFemale from "../../assets/AllBlackFemale.jpg";

const bannerData = {
    images: [
        {
            src: banner,
            description: "Enjoy our stylish collection of handbags. Available in different colors and sizes.",
            title: "Leather handbag",
            ratings: 3
        },
        {
            src: banner2,
            description: "Image 3Image 3Image 3Image 3Image 3Image 3Image 3Image 3",
            title: "Title 3",
            ratings: 4
        },
        {
            src: banner3,
            description: "Image 4Image 4Image 4Image 4Image 4Image 4Image 4Image 4",
            title: "Title 4",
            ratings: 2
        },
        {
            src: AllBlackFemale,
            description: "All black female suit ",
            title: "Title 4",
            ratings: 2
        }

    ],
    popularProducts:[
        {
            src: MensTshirt,
            description: 'Tshirt male',
            title: "Mens T-shirt",
            ratings: 4
        },
        { 
            src: PurpleDress ,
            description:'Purple Dress for all occassions',
            title:'Purple Dress',
            ratings:3},
            {
            src: SweaterFemale  ,
            description:'Sweater Female  for all occassions',
            title:'Sweater',
            ratings:3
            },
            {
                src: SweaterFemale2,
                description:'Sweater Female  for all occassions',
                title:'Sweater',
                ratings:3

            },
            {
                src: BlueSuiT ,
                description:'Blue Suit for all occassions',
                title:'Sweater',
                ratings:3

            },
            {
                src: GreySuit ,
                description:'Grey Suit for all occassions',
                title:'Suit',
                ratings:2

            },
            {
                src: AllBlackFemale ,
                description:'AllBlack for all occassions',
                title:'Sweater',
                ratings:3

            },
        
    ]
};


export default bannerData;