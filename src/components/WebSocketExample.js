
import { useEffect } from 'react';


const WebSocketExample = () => {
    useEffect(() => {

        window.Echo.private('messanger.25740ec4-2433-3bc9-a7ef-b767ba15db47')
            .listen('.private_msg', (e) => {
                console.log(e.data);
                alert(e.data.message);
            })
    }, []);
};

export default WebSocketExample;