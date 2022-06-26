import { Button } from "@chakra-ui/react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import React from "react";

export default function GoBackButton() {
  return (
    <Button
      borderRadius={"full"}
      variant="outlined"
      borderColor={"#F4Ac45"}
      borderWidth={2}
      position={"absolute"}
      top={"10"}
      left={"10"}
      onClick={() => (window.location.href = "/catalogue")}
    >
      <AiOutlineArrowLeft color={"#F4Ac45"} />
    </Button>
  );
}
