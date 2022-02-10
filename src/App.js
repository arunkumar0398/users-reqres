import "./styles.css";

import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableContainer from "@mui/material/TableContainer";
import { useEffect, useState } from "react";

export default function App() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const res = await fetch("https://reqres.in/api/users");
    const JSONusers = await res.json();
    setUsers(JSONusers.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="App">
      <Container maxWidth="sm" className="tableContainer">
        <Stack spacing={2} direction="row" sx={{ justifyContent: "flex-end" }}>
          <Button variant="contained" startIcon={<AddIcon />}>
            Add
          </Button>
        </Stack>
        <Box sx={{ mt: 2 }}>
          <Grid container>
            <Grid item xs={12}>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Id</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>First Name</TableCell>
                      <TableCell>Last Name</TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {users.length &&
                      users.map((user) => (
                        <TableRow key={user.id}>
                          <TableCell>{user.id}</TableCell>

                          <TableCell>{user.email}</TableCell>
                          <TableCell>{user.first_name}</TableCell>
                          <TableCell>{user.last_name}</TableCell>
                          <TableCell>
                            <IconButton aria-label="delete" color="primary">
                              <EditIcon />
                            </IconButton>
                          </TableCell>
                          <TableCell>
                            <IconButton aria-label="delete" color="error">
                              <DeleteIcon />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
