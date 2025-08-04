"use client";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import GlobalApi from "@/app/_utils/GlobalApi";

import { toast } from "sonner";
import { useRouter } from "next/navigation";
function CreateAccountPage() {
  const [userName, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const router = useRouter();

  const onCreateAccount = () => {
    GlobalApi.registerUser(userName, email, password).then(
      (res) => {
        console.log(res.data.user);
        console.log(res.data.jwt);
        sessionStorage.setItem("user", JSON.stringify(res.data.user));
        sessionStorage.setItem("jwt", res.data.jwt);
        toast("Account Created Successfully");
        router.push("/");
      },
      (e) => {
        toast("Error while creating account.");
      }
    );
  };

  return (
    <div className="flex items-baseline justify-center my-10">
      <div className="flex flex-col items-center justify-center p-10 bg-slate-100 border border-gray-200">
        <Image src="/logo.png" alt="logo" width={200} height={200} />
        <h2 className="font-bold text-3xl">Create an Account</h2>
        <p className="text-gray-500">
          Enter your Email and Password to Create an account
        </p>
        <div className="w-full flex flex-col gap-5 mt-7">
          <Input
            className={"bg-slate-50"}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            className={"bg-slate-50"}
            placeholder="youremail@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            className={"bg-slate-50"}
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            disabled={!userName || !email || !password}
            onClick={() => onCreateAccount()}
          >
            Create an Account
          </Button>
          <p>
            Already have an account?{" "}
            <Link href="/sign-in" className="text-primary">
              Click here to Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CreateAccountPage;
