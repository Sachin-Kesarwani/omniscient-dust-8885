import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Text,
  BeatLoader,
} from "@chakra-ui/react";
import { background } from "@chakra-ui/styled-system";
import axios from "axios";
import React, { useState } from "react";

let userdata=JSON.parse(localStorage.getItem("userdata"));
let accountdata =userdata.data

const PersonelInfo = () => {
  let [edit, setEdit] = useState(false);
  let [data, setData] = useState(accountdata);
  console.log(data)
  let [loading, setLoading] = useState(false);
  async function handleEdit() {
    setLoading(true);
    await axios({
      url: `https://helpful-free-baroness.glitch.me/Users/${accountdata.id}`,
      method: "patch",
      data: data,
    }).then((res) => {
      localStorage.setItem("accountdata", JSON.stringify(res.data));
      setLoading(false);
      setEdit(false);
    });
  }
  // accountdata = JSON.parse(localStorage.getItem("accountdata")) || { id: 1 };

  return (
    <Box color={"black"}>
      <Heading marginLeft={"20px"}>Personal Information </Heading>

      {edit ? (
        <div style={{ width: "100px", marginLeft: "20px", padding: "5px" ,color:"black" }}>
          <label>
            Name :
            <input
              name="name"
              type="text"
              style={{ border: "1px solid teal", padding: "2px 15px" }}
              value={data.name}
              onChange={(e) =>
                setData({ ...data, [e.target.name]: e.target.value })
              }
            />
          </label>
          <label>
            Email :
            <input
              name="email"
              type="text"
              style={{ border: "1px solid teal", padding: "2px 15px" }}
              value={data.email}
              onChange={(e) =>
                setData({ ...data, [e.target.name]: e.target.value })
              }
            />
            
          </label>
          <label>
            City :
            <input
              name="city"
              type="text"
              style={{ border: "1px solid teal", padding: "2px 15px" }}
              value={data._id}
              onChange={(e) =>
                setData({ ...data, [e.target.name]: e.target.value })
              }
            />
          </label>
          <label>
            Phone :
            <input
              name="phone"
              type="text"
              style={{ border: "1px solid teal", padding: "2px 15px" }}
              value={data.phone}
              onChange={(e) =>
                setData({ ...data, [e.target.name]: e.target.value })
              }
            />
          </label>
          {loading ? (
            <Button
              isLoading
              loadingText="Editting"
              colorScheme="teal"
              variant="outline"
              spinnerPlacement="start"
            >
              Editting
            </Button>
          ) : (
            <Button
              onClick={() => {
                handleEdit();
              }}
            >
              Save
            </Button>
          )}
        </div>
      ) : (
        <div
          style={{
            border: "1px solid black",
            width: "400px",
            height: "160px",
            marginLeft: "20px",
            padding: "5px",
            color:"black",
            borderRadius:"20px",
            backgroundColor:"#00bbc6"
          }}
        >
          <Flex justifyContent={"start"}>
            <Box margin={"5px"}>
              <Avatar name={"https://t4.ftcdn.net/jpg/01/97/15/87/360_F_197158744_1NBB1dEAHV2j9xETSUClYqZo7SEadToU.jpg"} />
            </Box>
            <Box p={2} display={"flex"} justifyContent={"start"} flexDirection={"column"}>
              <Text fontWeight={"bold"}>Name : {accountdata.first_name}</Text>
              <Text>Email : {data.email}</Text>
              <Text>Mobile : {data.mobile}</Text>
              <Text>City : {data.city}</Text>
              <Button
                onClick={() => {
                  setEdit(true);
                }}
              >
                Edit
              </Button>
            </Box>
          </Flex>
        </div>
      )}
    </Box>
  );
};

export default PersonelInfo;
