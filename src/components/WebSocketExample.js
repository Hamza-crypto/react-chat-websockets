
import { useEffect } from 'react';


const WebSocketExample = () => {
    useEffect(() => {

        window.Echo.private('messanger.c9ebcafc-34e2-33ce-bfaa-d6baa148d5f6')
            .listen('.private_msg', (e) => {
                console.log(e.data);
                alert(e.data.message);
            })
    }, []);
};

export default WebSocketExample;