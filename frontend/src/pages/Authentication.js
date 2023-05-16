import AuthForm from '../components/AuthForm';
import {json, redirect} from "react-router-dom";

function AuthenticationPage() {
    return <AuthForm/>;
}

export default AuthenticationPage;

export const action = async ({request, params}) => {
    const searchParams = new URL(request.url).searchParams;
    const mode = searchParams.get('mode') || 'login';

    if (mode !== 'login' && mode !== 'signup') {
        throw json({ message: 'Unsupported mode' }, {
            status: 422
        });
    }

    const data = await request.formData();
    const authData = {
        email: data.get('email'),
        password: data.get('password')
    };

    const response = await fetch('http://localhost:8080/' + mode, {
        method: request.method,
        headers: {
            'Content-Type': 'application/JSON'
        },
        body: JSON.stringify(authData)
    });

    if (response.status === 422 || response.status === 401) {
        return response;
    }

    if (response.ok === false) {
        throw json({ message: 'Could not auth user!' }, {
            status: 500
        });
    }

    // Later: Manage token

    return redirect('/');
}
