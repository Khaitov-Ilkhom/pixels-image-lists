import axios from "./axios.js";
import {renderPreviewImage} from "./render.js";

const URL = location.search
const imageID = new URLSearchParams(URL).get("image-id")

const loadPhoto = async (id) => {
    try {
        const response = await axios(`v1//photos/${id}`)
        renderPreviewImage(response.data)
        console.log(response)
    } catch (error) {
    }
}

loadPhoto(imageID)