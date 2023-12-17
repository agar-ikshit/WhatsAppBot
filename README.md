#WhatsAppBot
A whatsApp bot created using openai API and what-appweb pack, written in node.js

#Description
This bot leverages the whatsapp-web.js library to interact with WhatsApp's platform programmatically. It uses OpenAI's API to generate responses based on incoming messages. The bot engages in conversation by providing AI-generated replies.

#Features
WhatsApp Interaction: Utilizes whatsapp-web.js to send and receive messages on WhatsApp.
OpenAI Integration: Uses OpenAI's API for AI-powered conversation generation.
Environment Variable Management: Utilizes dotenv for managing environment variables.

#Dependencies
npm install whatsapp-web.js qrcode-terminal openai dotenv

This single command installs all the necessary packages:

whatsapp-web.js: Library for WhatsApp interaction. 
qrcode-terminal: Package for generating QR codes in the terminal. 
openai: SDK for interacting with OpenAI's API. dotenv: 
Package for managing environment variables from a .env file.

#Usage
Run the bot:
node index.js
Scan the QR code generated in the terminal to authenticate your bot with WhatsApp.

Start conversing with the bot on WhatsApp.

