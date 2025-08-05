"use client";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Link from "next/link";
import GlobalApi from "@/app/_utils/GlobalApi";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Loader } from "lucide-react";

function SignInPage() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const router = useRouter();
  const [loader, setLoader] = useState();

  useEffect(() => {
    const jwt = sessionStorage.getItem("jwt");
    if (jwt) {
      router.push("/");
    }
  }, []);

  const onSignIn = () => {
    setLoader(true);
    GlobalApi.signIn(email, password).then(
      (res) => {
        sessionStorage.setItem("user", JSON.stringify(res.data.user));
        sessionStorage.setItem("jwt", res.data.jwt);
        toast("Login Successfully");
        router.push("/");
        setLoader(false);
      },
      (e) => {
        toast(e?.response?.data?.error.message);
        setLoader(false);
      }
    );
  };
  return (
    <div className="flex items-baseline justify-center my-10">
      <div className="flex flex-col items-center justify-center p-10 bg-slate-100 border border-gray-200">
        <Image src="/logo.png" alt="logo" width={200} height={200} />
        <h2 className="font-bold text-3xl">Sign In to your Account</h2>
        <p className="text-gray-500">
          Enter your Email and Password to Sign In
        </p>
        <div className="w-full flex flex-col gap-5 mt-7">
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
          <Button disabled={!email || !password} onClick={() => onSignIn()}>
            {loader ? <Loader className="animate-spin" /> : "Sign In"}
          </Button>
          <p>
            Don't have an account?{" "}
            <Link href="/create-account" className="text-primary">
              Click here to Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
