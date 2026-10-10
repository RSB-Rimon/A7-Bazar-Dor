import React from 'react';

const SignInPage = () => {
    return (
        <div>
            <form  >

         <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
       

       
        <label className="label">Email</label>
        <input name="email" type="email" className="input" placeholder="Email" />

        <label className="label">Password</label>
        <input name="password" type="password" className="input" placeholder="Password" />

        <button type="submit" className="btn btn-neutral mt-4 cursor-pointer">SignIn</button>
      </fieldset>
     </form>
        </div>
    );
};

export default SignInPage;