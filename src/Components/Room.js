import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Room = () => {
  const { roomID } = useParams();
  console.log(roomID);
  const meeting = async (element) => {
    const appID = 934663546;
    const serverSecret = "e0d08c63e6d5df448a06f382fa9f6074";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      Date.now().toString(),
      "Ujjwal"
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall,
      }
    })
  };

  return <div ref={meeting} style={{width: "100vw", height: "100vh"}}></div>;
};

export default Room;
