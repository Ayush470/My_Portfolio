import Notes from "../assets/notes.jpg";
import Dsa from "../assets/DSA.jpg";
import Logistic from "../assets/Logistic-regression.jpeg";

const ProjectCardData = [
    {
        imgsrc: Notes,
        title: "NoteKeep",
        text: " Developed a sophisticated MERN stack note-keeping application with user authentication and RESTful API architecture. Orchestrated cloud deployment, integrating MongoDB for storage, & streamlined frontend-backend interaction using Axios. Designed an elegant & responsive user interface leveraging React and Material-UI, enabling effective note management. Employed cors module for enabling Cross-Origin Resource Sharing and dotenv module for managing environment variables.",
        view: "https://notekeep-app.onrender.com",
        source: "https://github.com/Ayush470/NoteKeep",
    },
    {
        imgsrc: Dsa,
        title: "Data Structures in Real Life",
        text: " Implemented a Huffman-based file zipper achieving 1.5-2.0 compression ratio, potential for higher ratios on larger files. Developed cached-based chat list using unordered map and doubly linked list, with O(1) time for search, insert and delete. Designed a text editor that combines stack-based undo, OOPs principles and a constant buffer to control undo length. Implemented cash flow minimization using unordered map & multiset, optimizing number of exchanges among individuals.",
        view: "https://github.com/Ayush470/Data_Structures_in_Real_Life",
        source: "https://github.com/Ayush470/Data_Structures_in_Real_Life",
    },
    {
        imgsrc: Logistic,
        title: "Decode HexaCaptcha",
        text: " Designed an algorithm to classify parity (odd/even) of 4-digit hex numbers within 500x100 pixel CAPTCHA images. Implemented Logistic Regression model and performed hyperparameter optimization via GridSearch with cross-validation. Achieved high model performance by leveraging 2000 training images and employing appropriate validation procedures.",
        view: "https://github.com/Ayush470/Decode_HexaCAPTCHA",
        source: "https://github.com/Ayush470/Decode_HexaCAPTCHA",
    }
];

export default ProjectCardData;