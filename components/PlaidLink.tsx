import React, { useCallback, useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
  PlaidLinkOnSuccess,
  PlaidLinkOptions,
  usePlaidLink,
} from "react-plaid-link";
import { useRouter } from "next/navigation";
import {
  createLinkToken,
  exchangePublicToken,
} from "@/lib/actions/user.actions";

const PlaidLink = ({ user, variant }: PlaidLinkProps) => {
  const router = useRouter();

  const [token, setToken] = useState("");

  useEffect(() => {
    const getLinkToken = async () => {
      const data = await createLinkToken(user);
      console.log("🔍 Frontend received token:", data); // Debugging log
      setToken(data?.link_token || "");
    };

    getLinkToken();
  }, [user]);

  const onSuccess = useCallback<PlaidLinkOnSuccess>(
    async (public_token: string) => {
      await exchangePublicToken({ publicToken: public_token, user });

      router.push("/");
    },
    [user, router]
  );

  const config: PlaidLinkOptions = {
    token,
    onSuccess,
  };

  const { open, ready } = usePlaidLink(
    token ? config : ({} as PlaidLinkOptions)
  );

  console.log("Current Token State:", token);
  console.log("Plaid Link Ready State:", ready);

  return (
    <>
      {variant === "primary" ? (
        <Button
          onClick={() => open()}
          disabled={!ready}
          className="plaidlink-primary"
        >
          {" "}
          Connect bank{" "}
        </Button>
      ) : variant === "ghost" ? (
        <Button> Connect bank </Button>
      ) : (
        <Button> Connect bank </Button>
      )}{" "}
    </>
  );
};

export default PlaidLink;
