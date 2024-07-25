import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value.trim(),
    });
    /**trim is to remove the
     * white space from the
     * input fields in case a user press space bar */
  };

  /**
   * Since we are making request to the backend port 3000, then we need to change the proxy from vite config file
   *
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return setErrorMessage("Please all fields are required");
    }

    try {
      setLoading(true);
      setErrorMessage(false);
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success === false) {
        setErrorMessage(data.message);
        setLoading(false);
      }

      if (res.ok) {
        navigate("/");
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen mt-20">
      <div className=" flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left to make the flex equal width flex-1 */}
        <div className=" flex-1">
          <Link to={"/"} className="font-bold   dark:text-white text-4xl">
            <span className="px-2 p-y-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              TobildCode
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            This is a blog page for web developers. You can sign in with your
            email and password or with Google.
          </p>
        </div>
        {/* right */}
        <div className=" flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="Your Email" />
              <TextInput
                type="email"
                placeholder="name@company.com"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Your Password" />
              <TextInput
                type="password"
                placeholder="********"
                id="password"
                onChange={handleChange}
              />
            </div>
            <Button
              gradientDuoTone={"purpleToPink"}
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3">Loading...</span>
                </>
              ) : (
                " Sign In"
              )}
            </Button>
          </form>
          <div className="flex mt-4 text-sm gap-2">
            <span>Don&apos;t have an account?</span>
            <Link to={"/sign-up"} className="text-blue-500">
              Sign Up
            </Link>
          </div>
          <div className="">
            {errorMessage && (
              <Alert className="mt-4" color={"failure"}>
                {errorMessage}
              </Alert>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
