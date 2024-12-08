import { plaidLinkProps } from "@/props/componentProps";
import { Button } from "./ui/button";

import { useCallback, useState, useEffect } from "react";
import { usePlaidLink } from "react-plaid-link";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "@clerk/clerk-react";

const PlaidLink = ({ user, variant }) => {
  const { userId } = useAuth();
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:3000";

  useEffect(() => {
    const getLinkToken = async () => {
      const data = await axios.get(`${apiUrl}/plaid/createLinkToken`, {
        params: {
          userId: user.id,
          userName: user.name,
        },
      });
      setToken(data?.data.linkToken);
    };

    getLinkToken();
  }, [user, variant]);

  const onSuccess = useCallback((public_token, metadata) => {
    // log and save metadata
    // exchange public token (if using Item-based products)
    axios.post(`${apiUrl}/plaid/exchangeToken`, {
      public_token: public_token,
      userId: userId,
    });
    navigate("/home");
  }, []);

  const config = {
    token,
    onSuccess,
  };

  const { open, ready } = usePlaidLink(config);
  return (
    <>
      {variant === "primary" ? (
        <Button
          onClick={() => open()}
          disabled={!ready}
          className="plaidlink-primary"
        >
          Connect Bank
        </Button>
      ) : variant === "ghost" ? (
        <Button>Connect Bank</Button>
      ) : (
        <Button>Connect Bank</Button>
      )}
    </>
  );
};

PlaidLink.propTypes = plaidLinkProps;

export default PlaidLink;
