import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components.ChatFeed';
import './App.css';

const App = () => {
    return (
        <ChatEngine 
            height="100vh"
            projectID="240c2c9b-7098-405f-99c2-22f5867d0f4b"
            userName="MarcoGonzales"
            userSecret="234234"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    );
}

export default App;