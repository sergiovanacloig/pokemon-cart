import { useState } from "react";
import { Button, Stack, Text } from "@chakra-ui/react";

export interface IncrementInputProps {
  value?: number;
  onChange: (value: number) => void;
}

const IncrementInput = ({ value = 0, onChange }: IncrementInputProps) => {
  const [number, setNumber] = useState(value);

  const handleIncrement = () => {
    const newValue = number + 1;
    setNumber(newValue);
    onChange(newValue);
  };

  const handleDecrement = () => {
    if (number <= 0) return;
    const newValue = number - 1;
    setNumber(newValue);
    onChange(newValue);
  };

  const renderButton = (
    label: string,
    callback: React.MouseEventHandler<HTMLButtonElement>
  ) => (
    <Button
      size="sm"
      bg="tomato"
      variant="solid"
      w="30%"
      borderRadius="none"
      fontSize="20px"
      color="white"
      _hover={{ bg: "#fc9783" }}
      _focus={{
        boxShadow: "none",
      }}
      onClick={callback}
    >
      {label}
    </Button>
  );

  return (
    <Stack direction="row" align="center" w="100%" bg="#f0f0f0">
      {renderButton("-", handleDecrement)}
      <Text w="40%" align="center">
        {number}
      </Text>
      {renderButton("+", handleIncrement)}
    </Stack>
  );
};

export default IncrementInput;
