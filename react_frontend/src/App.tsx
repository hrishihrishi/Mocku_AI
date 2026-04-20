import "./App.css"
import { useState } from "react";
import axios from "axios";

export default function App() {

  const [inputText, setInputText] = useState("")
  const [responseMsg, setResponseMsg] = useState("")
  const [loading, setLoading] = useState(false);
  

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      console.log("Clicked!, waiting for response...")
      setLoading(true)

      const res = await axios.post("http://localhost:8000/generate", { text:  inputText })
      console.log("Received response!: ",res)
      setResponseMsg(res.data.text)
    } catch (error) {
      console.error("Error generating text:", error);
    } finally {
      setLoading(false)
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-300">
    <form onSubmit={handleSubmit} className="flex gap-2 p-18">
      <input 
      type="text" 
      className="border-2 border-black p-2 "
      onChange={(e)=>setInputText(e.target.value)}
      value={inputText}
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">Send</button>
    </form>
    {loading && <p>Loading...</p>}
    {!loading && <p id="message">{responseMsg}</p>}
    </div>

  )
}