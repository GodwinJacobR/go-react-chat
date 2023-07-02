var socket = new WebSocket('ws://localhost:9000/ws')

let connect = (cb) => {
    console.log("connecting")

    socket.onopen = () => {
        console.log("successfully connected")
    }

    socket.onmessage = (msg) => {
        console.log("message from webscoket", msg)
    }

    socket.onclose = (event) => {
        console.log("socket closed conn", event)
    }

    socket.onclose = (error) => {
        console.log("socket error", error)
    }
    
}

let sendMsg = (msg) => {
    console.log("sending message", msg)
    socket.send(msg)
}

export { connect, sendMsg };
