'use strict'

const socket = io()

// Send a message to say that I've connected
socket.emit('newuser', {user: 'Grace Hopper'})

// Event listener, waiting for an incoming "newuser"
socket.on('newuser', (data) => console.log(`${data.user} has connected!`))


// Listen for the 'submit' of a form
// 	 event.preventDefault()  (prevent the form from leaving the page)
//   Emit a message using "chatmsg"
// Listen for "chatmsg"
//   add a <li> with the chat msg to the <ol>

const $msgForm = document.getElementById('sendMsg')
const $msgList = document.getElementById('messages')


$msgForm.addEventListener('submit', (event) => {
	event.preventDefault()

	socket.emit('chatmsg', {msg: event.currentTarget.txt.value})
	event.currentTarget.txt.value = 'chatmsg'
})


socket.on('chatmsg', (data) => {
	const newMsg = document.createElement('li')
	const inputValue = document.getElementById("messages").value;
	$msgList.appendChild(newMsg)
	if (inputV)

	newMsg.textContent = data.msg
})
