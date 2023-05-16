import { removeAuthToken } from "../util/auth";
import { redirect } from "react-router-dom";

export const action = async () => {
    removeAuthToken()
    return redirect('/');
}
