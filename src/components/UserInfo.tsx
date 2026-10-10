'use client'

import { authClient } from "@/lib/auth-client";
import Link from "next/link";

const UserInfo = () => {
    const {data: session} = authClient.useSession();
    const user = session?.user
    console.log(user,'session for user')
    const hendleSignOut = async () => {
           await authClient.signOut();
    }   
  return (
  
    <div>
        {
            user ? <div className="flex flex-col  items-center gap-2">
                <span className="text-sm font-medium text-gray-700">Welcome, {user.name}</span>
             <button onClick={hendleSignOut} className="btn btn-secondary">SignOut</button>
            </div>:<div className="flex items-center gap-2">
       <Link href="/sign-up">
        <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 font-medium text-sm hover:bg-gray-100 transition">
          সাইন আপ
        </button>
       </Link>

        <button className="px-4 py-2 rounded-lg bg-[#05893e] text-white font-medium text-sm hover:bg-[#057b38] shadow-sm transition">
          সাইন ইন
        </button>
      </div>
        }
      
    </div>
  );
};

export default UserInfo;
