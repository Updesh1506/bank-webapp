  
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
const EditUserPage = () => {
  const { userId } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    id: userId,
    name: "Sample User",
    balance: 5000,
    banks: ["Bank A", "Bank B"],
  });

  const updateBalance = (amount) => {
    setUser((prev) => ({
      ...prev,
      balance: prev.balance + amount,
    }));
  };

  const addBank = () => {
    setUser((prev) => ({
      ...prev,
      banks: [...prev.banks, ""],
    }));
  };

  const removeBank = (index) => {
    setUser((prev) => ({
      ...prev,
      banks: prev.banks.filter((_, i) => i !== index),
    }));
  };

  const handleSave = () => {
    console.log("Updated User:", user);
    navigate("/");
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Edit User</h1>
      <Card>
        <CardContent>
          <div className="mb-4">
            <p className="text-lg font-medium">Balance: ${user.balance}</p>
            <div className="flex gap-2 mt-2">
              <Button onClick={() => updateBalance(100)}>Increase $100</Button>
              <Button onClick={() => updateBalance(-100)}>Decrease $100</Button>
            </div>
          </div>
          <div>
            <h2 className="font-medium mb-2">Banks:</h2>
            {user.banks.map((bank, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <Input
                  value={bank}
                  onChange={(e) => {
                    const updatedBanks = [...user.banks];
                    updatedBanks[index] = e.target.value;
                    setUser((prev) => ({ ...prev, banks: updatedBanks }));
                  }}
                />
                <Button variant="destructive" onClick={() => removeBank(index)}>
                  Remove
                </Button>
              </div>
            ))}
            <Button onClick={addBank}>Add Bank</Button>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleSave}>Save Changes</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default EditUserPage;

