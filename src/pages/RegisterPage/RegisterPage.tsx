import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ISuccess, IError, IUser } from "../../shared/types/types";

import "./RegisterPage.css";

interface IForm {
    username: string
    email: string
    password: string
}

export function RegisterPage() {
    const [success, setSuccess] = useState(false)
    const { register, handleSubmit, formState, setError } = useForm<IForm>({ mode: "onSubmit" })

    async function onSubmit(data: IForm) {
        try {
            const res = await fetch("http://localhost:3000/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result: ISuccess<IUser> | IError = await res.json()

            if (result.status === "success") {
                setSuccess(true);
            } else {
                if (result.message === "username already exists") {
                    setError("username", { type: "custom", message: "Username already exists" })
                }
                if (result.message === "email already exists") {
                    setError("email", { type: "custom", message: "Email already exists" })
                }
            }
        } catch (error) {
            console.error("Error during registration:", error)
        }
    }

    return success ? (
        <div className="registerPageSuccess">
            <h1>Account successfully created!</h1>
            <Link id="loginLinkButton" to="/login">Login</Link>
        </div>
    ) : (
        <div className="registerPage">
            <form className="registerForm" onSubmit={handleSubmit(onSubmit)}>
                <h1>Sign Up</h1>
                <div className="inputsForm">
                    <div className="inputDiv">
                        <input className="inputTextForm" placeholder="Username" type="text" {...register("username", {
                            required: { value: true, message: "Username is required" },
                            minLength: { value: 3, message: "Username must be at least 3 characters" },
                            maxLength: { value: 20, message: "Username must be at most 20 characters" },
                        })} />
                        <p className="formError">{formState.errors.username?.message}</p>
                    </div>
                    <div className="inputDiv">
                        <input className="inputTextForm" placeholder="Email" type="text" {...register("email", {
                            required: { value: true, message: "Email is required" },
                        })} />
                        <p className="formError">{formState.errors.email?.message}</p>
                    </div>
                    <div className="inputDiv">
                        <input className="inputTextForm" placeholder="Password" type="password" {...register("password", {
                            required: { value: true, message: "Password is required" },
                            minLength: { value: 6, message: "Password must be at least 6 characters" },
                            maxLength: { value: 20, message: "Password must be at most 20 characters" },
                        })} />
                        <p className="formError">{formState.errors.password?.message}</p>
                    </div>
                </div>
                <button className="registerButton" type="submit">Sign Up</button>
                <p className="loginText">Already have an account? <Link id="loginLinkButton" to="/login">Login</Link></p>
            </form>
        </div>
    );
}