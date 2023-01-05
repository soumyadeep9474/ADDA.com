import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Room = () => {
    const {roomID} = useParams();
    console.log(roomID);
    const meeting = async(element) =>{
        const appID= 421762336;
        const serverSecret= "dc515b04b607f26c9fd5a555a8120f78";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret,roomID,Date.now().toString(),"Soumya");
        const zp = ZegoUIKitPrebuilt.create(kitToken);

        zp.joinRoom({
            container: element,
            scenario:{
                mode:ZegoUIKitPrebuilt.GroupCall,
            },
        });
    };

    return <div ref={meeting} style={{width:"100vw",height:"100vh"}}></div>;
};

export default Room;