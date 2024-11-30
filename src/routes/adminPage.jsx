
import  { useState } from "react";
import { Table, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AdminPage = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", balance: 5000, banks: ["Bank A", "Bank B"] },
    { id: 2, name: "Jane Smith", balance: 3000, banks: ["Bank C"] },
  ]);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Admin Dashboard</h1>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Balance</TableCell>
            <TableCell>Banks</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>${user.balance}</TableCell>
              <TableCell>{user.banks.join(", ")}</TableCell>
              <TableCell>
                <Link to={`/edit-user/${user.id}`}>
                  <Button>Edit</Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminPage;

