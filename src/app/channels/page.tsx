"use client";

import { useEffect, useState } from "react";

export default function ChannelsPage() {
  const [channels, setChannels] = useState<any[]>([]);
  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");
  const [error, setError] = useState<string | null>(null);

  async function loadChannels() {
    const res = await fetch("/api/channels");
    const data = await res.json();
    setChannels(data);
  }

  async function createChannel() {
    setError(null);

    const res = await fetch("/api/channels", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, userId })
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.error);
      return;
    }

    setName("");
    loadChannels();
  }

  useEffect(() => {
    loadChannels();
  }, []);

  return (
    <div>
      <h1>Channels</h1>

      <div style={{ marginBottom: 20 }}>
        <input
          placeholder="Your user ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />

        <input
          placeholder="New channel name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button onClick={createChannel}>Create</button>

        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>

      <ul>
        {channels.map((c) => (
          <li key={c.id}>
            {c.name} — by {c.creator?.displayName}
          </li>
        ))}
      </ul>
    </div>
  );
}