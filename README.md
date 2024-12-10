![Doodle Cord](https://github.com/NisargPatel14/doodlecord/blob/master/Doodle%20cord.png)

# A seamless communication platform. Collaborative, secure, and connected across all channels.

## 🚀 Features

- 💬 Real-time messaging using **Socket.io**
- 📎 Send attachments as messages using **UploadThing**
- ✏️ Delete & Edit messages in real time for all users
- 🎙️ Create **Text, Audio, and Video call Channels**
- 🔗 1:1 conversation between members
- 📹 1:1 video calls between members
- 👥 Member management (Kick, Role change Guest / Moderator)
- 🎟️ Unique invite link generation & full working invite system
- 🖍️ Collaborative whiteboard with a virtual hand-drawn style
- 🔄 Infinite loading for messages in batches of 10 with **@tanstack/query**
- 🛠️ Server creation and customization
- 🌗 Light / Dark mode
- 📱 Full responsivity and mobile UI

## 🛠 Tools and Technologies

- 🎨 Beautiful UI using **TailwindCSS** and **ShadcnUI**
- 🔁 WebSocket fallback with **Polling** and alerts
- 🗄️ ORM using **Prisma**
- 🗃️ MySQL database using **NeonDB**
- 🔑 Authentication with **Clerk**
- ✏️ TLDraw For **whiteboard**

## 🛠 Steps to Build the project

- Clone the repository using git clone command or directly download the zip file from github.
- Install dependencies by running the following command : <code>npm i</code>
- Add your own secret keys for the project by creating env file.
- After installing all the dependencies, run the project by using following command : <code>npm run dev</code>

## 🛠 Env file contents: 

- NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<!yourSecretKey>
- CLERK_SECRET_KEY=<!yourSecretKey>
- NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
- NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
- NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
- NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

- DATABASE_URL="<!yourSecretKey>"
  
- UPLOADTHING_SECRET='<!yourSecretKey>'
- UPLOADTHING_APP_ID='<!yourSecretKey>'
  
- LIVEKIT_API_KEY  = <!yourSecretKey>
- LIVEKIT_API_SECRET  = <!yourSecretKey>
- NEXT_PUBLIC_LIVEKIT_URL  = <!yourSecretKey>
