import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ISuccess, IError, IUser } from "../../shared/types/types";

import "./LoginPage.css";

interface IForm {
    email: string;
    password: string;
}

export function LoginPage() {
    const [success, setSuccess] = useState(false);
    const { register, handleSubmit, formState, setError } = useForm<IForm>({ mode: "onSubmit" });

    async function onSubmit(data: IForm) {
        try {
            const res = await fetch("http://localhost:3000/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result: ISuccess<IUser> | IError = await res.json();

            if (result.status === "success") {
                setSuccess(true);
            } else {
                if (result.message === "user not found") {
                    setError("email", { type: "custom", message: "User does not exist" });
                }
                if (result.message === "password incorrect") {
                    setError("password", { type: "custom", message: "Incorrect password" });
                }
            }
        } catch (error) {
            console.error("Error during login:", error);
        }
    }

    return success ? (
        <div className="loginPageSuccess">
            <h1>Successfully logged in!</h1>
        </div>
    ) : (
        <div className="loginPage">
            <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
                <h1>Login</h1>
                <div className="inputsForm">
                    <div className="inputDiv">
                        <input className="inputTextForm" placeholder="Email" type="text" {...register("email", {
                            required: { value: true, message: "Email is required" },
                        })} />
                        <p className="formError">{formState.errors.email?.message}</p>
                    </div>
                    <div className="inputDiv">
                        <input className="inputTextForm" placeholder="Password" type="password" {...register("password", {
                            required: { value: true, message: "Password is required" },
                        })} />
                        <p className="formError">{formState.errors.password?.message}</p>
                    </div>
                </div>
                <button className="loginButton" type="submit">Login</button>
                <p className="registerText">Don't have an account? <Link id="registerLinkButton" to="/register">Sign Up</Link></p>
            </form>
        </div>
    );
}