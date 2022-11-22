import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { TextField, Checkbox } from "@mui/material";
import Link from "next/link";
import Switch from "@mui/material/Switch";
import { UsersType } from "../types/types";
import { IndeterminateCheckBox } from "@mui/icons-material";

const label = { inputProps: { "aria-label": "Switch demo" } };
const UserTable: React.FC<{ userList: UsersType[] }> = ({ userList }) => {
  const [searchKey, setSearchKey] = useState<string>("");
  const [checked, setChecked] = React.useState(true);
  let BlockedData = Array(userList.length).fill(false);
  let InittopUser = [1];
  const [block, setblock] = useState<boolean[]>(BlockedData);
  const [topUser, settopUser] = useState<Number[]>(InittopUser);

  const handleTopUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  // const handleClick = (e: any) => {
  //   const { id } = e.currentTarget.dataset;
  //   console.log("click", id);
  // };
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: Number
  ) => {
    const filterdata = block.map((val: boolean, i) => {
      // if(val)setTimeout(alertFunc(i,val), 3000);
      if (i === index) val = !val;
     
      return val;
      
    });

    setblock(filterdata);
    localStorage.setItem("blockedUsers", JSON.stringify(block));
  };
  const alertFunc=(i,val)=>{
    console.log("hi",val)
  }

  const handleChange1 = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: Number
  ) => {
    var index1 = topUser.indexOf(index);
    console.log(index1, "hi");
    if (index1 == -1) {
      settopUser((current) => [...current, index]);
    } else {
      settopUser((current) =>
        current.filter((element) => {
          return element !== index;
        })
      );
    }
  };

  // console.log(BlockedData,block,block[0])

  useEffect(() => {
    const userblk = JSON.parse(localStorage.getItem("blockedUsers"));

    if (userblk) {
      setblock(userblk);
    }
    const usertop = JSON.parse(localStorage.getItem("topUsers") || "[]");
    if (usertop) {
      settopUser(usertop);
    }
  }, []);

  useEffect(() => {
    if (block !== BlockedData)
      localStorage.setItem("blockedUsers", JSON.stringify(block));
  }, [block]);

  useEffect(() => {
    if (topUser !== InittopUser)
      localStorage.setItem("topUsers", JSON.stringify(topUser));
  }, [topUser]);

  return (
    <>
      <Box
        component="form"
        sx={{
          m: 1,
          width: "50%",
          display: "flex",
          justifyContent: "center",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          fullWidth
          id="outlined-basic"
          label="Search User"
          variant="outlined"
          onChange={(e) => setSearchKey(e.target.value)}
          sx={{ boxShadow: "1px 1px 2px 0px #00000030", textAlign: "center" }}
        />
        <div className="searchList">
          {userList
            .filter((val) => {
              if (searchKey == "") {
                return null;
              } else if (
                val.name.toLowerCase().includes(searchKey.toLowerCase())
              ) {
                return val;
              } else {
                return null;
              }
            })
            .map((val, key) => {
              return (
                <Table>
                  <TableHead>
                    <Link href={`/user/${val.id}`}>
                      <TableRow data-id={val.id}>
                        <TableCell>{val.name}</TableCell>
                      </TableRow>
                    </Link>
                  </TableHead>
                </Table>
              );
            })}
        </div>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Top User</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Blocked</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userList.map((row, index) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">
                  <Checkbox
                    checked={topUser.includes(row.id)}
                    onChange={(e) => handleChange1(e, row.id)}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                </TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">
                  {" "}
                  <Switch
                    checked={block[index]}
                    onChange={(e) => handleChange(e, index)}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default UserTable;
