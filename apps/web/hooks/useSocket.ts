import { useEffect, useState } from "react";
import { WS_URL } from "../app/config";

export function useSocket() {
  const [loading, setLoading] = useState(true);
  const [socket, setSocket] = useState<WebSocket>();

  useEffect(() => {
    const ws = new WebSocket(
      `${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJiNWQxOTJlYy01MGExLTRlNWUtODE5Ny1iY2YwZWY0YThiMjkiLCJpYXQiOjE3NDcyMzU2ODN9.WdrQCQDl7_laz7XteZhzI6v2x81_ZUwBv3pRZNaLeVQ`
    );
    ws.onopen = () => {
      setLoading(false);
      setSocket(ws);
    };
  }, []);

  return {
    socket,
    loading,
  };
}
