import axios from '../axios-service';
import {FIREBASE_ROOT_URL, HTTP_INGREDIENTS_CONST} from "../../consts/http_consts";

class IngredientsHttpService {

    static getAllIngredients() {
        return axios.get(FIREBASE_ROOT_URL + HTTP_INGREDIENTS_CONST.getAllIngredients);
    }

};

export default IngredientsHttpService;