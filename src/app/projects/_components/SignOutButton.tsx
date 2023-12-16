// TODO: 4. Call the signOut() function when the button is clicked
// hint: You may want to change the first line of this file
"use client";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { publicEnv } from "@/lib/env/public";
import { Button } from "@/components/ui/button";

export default function SignOutButton() {
  const { data: session } = useSession();
  const router = useRouter();

  const sigh_out_function = () => {
    if (session) {
      signOut({ callbackUrl: publicEnv.NEXT_PUBLIC_BASE_URL });
    }
    router.push("/");
  }
  return <Button data-testid="sign-out-button" variant={"outline"} onClick={sigh_out_function}>Sign Out</Button>;
}
// TODO: 4. end

