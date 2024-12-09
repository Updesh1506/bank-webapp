import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth, useUser } from "@clerk/clerk-react";
import PlaidLink from "@/components/PlaidLink";
import { useEffect } from "react";

export default function IndexPage() {
  const navigate = useNavigate();

  const { userId, isSignedIn } = useAuth();
  const { user } = useUser();

  useEffect(() => {
    //if (userId) navigate("/home");
  }, userId);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 gap-3">
      <h1 className="text-3xl font-bold mb-6">Welcome to Our Platform</h1>
      <button
        className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600"
        onClick={() => navigate("/sign-in")}
      >
        Get Started
      </button>
      {isSignedIn && (
        <div className="flex flex-col gap-4">
          <PlaidLink
            user={{ id: userId, name: user.fullName }}
            variant="primary"
          />
        <Button onClick={()=> navigate("/home")}>Go to Home</Button>
        </div>
      )}
    </div>
  );
}
