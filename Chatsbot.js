import React from 'react'
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';


const steps = [
	{
		id: '0',
		message: 'Hey Learner!',

		// This calls the next id
		// i.e. id 1 in this case
		trigger: '1',
	}, {
		id: '1',
		// This message appears in
		// the bot chat bubble
		message: 'Please write your username',
		trigger: '2'
	}, {
		id: '2',
		// Here we want the user
		// to enter input
		user: true,
		trigger: '3',
	}, {
		id: '3',
		message: " Hi {previousValue}, how can I help you?",
		trigger: 4
	}, {
		id: '4',
		options: [	
			// When we need to show a number of
			// options to choose we create alist
			// like this
			{ value: 1, label: 'View Courses' },
			{ value: 2, label: 'About Us' },
			{ value: 3, label: 'Contact Us'},
			{ value: 4, label: 'Recruitment'}
		],
		end: true
	}
];

// Creating our own theme
const theme = {
	background: '#000000',
	headerBgColor: 'black',
	headerFontSize: '20px',
	botBubbleColor: '#FFFF00',
	headerFontColor: 'white',
	botFontColor: 'black',
	userBubbleColor: 'grey',
	userFontColor: 'white',
};

// Set some properties of the bot
const config = {
	botAvatar: "img.png",
	floating: true,
};


const Chatsbot = () => {
  return (
    <div>
        <ThemeProvider theme={theme}>
				<ChatBot
					// This appears as the header
					// text for the chat bot
					headerTitle="SahayataBot"
					steps={steps}
					{...config}

				/>
			</ThemeProvider>
    </div>
  )
}

export default Chatsbot;


