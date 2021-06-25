import React, { useState } from "react";
import { NativeBaseProvider, Box, Button, Text } from "native-base";

export default function App() {
  const [isTextVisible, setIsTextVisible] = useState(false);

  const handlePress = () => {
    setIsTextVisible(!isTextVisible);
  };

  return (
    <NativeBaseProvider>
      <Box margin={"10%"}>
        <Button width={40} onPress={handlePress}>
          Hello World
        </Button>
        {isTextVisible && <Text>Hey there</Text>}
      </Box>
    </NativeBaseProvider>
  );
}
