import { HStack, Switch, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        whiteSpace="nowrap"
      >
        Dark Mode
      </Switch>
    </HStack>
  );
};

export default ColorModeSwitch;
