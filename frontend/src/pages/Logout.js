import { removeLSToken } from "../util/auth";
import { redirect } from "react-router-dom";

export const action = async () => {
    removeLSToken('EVENTS_APP_TOKEN');
    removeLSToken('EVENTS_APP_EXPIRATION');
    return redirect('/');
}
