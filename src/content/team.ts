/**
 * Team profiles. PLACEHOLDER PROFILES — names are dummies and avatars are illustrations.
 * Replace with real team members (with their consent) and set `photo` to /public/team/<file>.jpg.
 */
export type Avatar = { skin: string; hair: string; style: "short" | "long" | "bun" | "curly" | "hijab" | "buzz"; shirt: string };

export type Member = { name: string; role: string; photo: string | null; avatar: Avatar; placeholder: boolean };

export const team: Member[] = [
  { name: "Alex Morgan", role: "Chief Executive Officer", photo: null, placeholder: true, avatar: { skin: "#e8b48f", hair: "#2b1d14", style: "short", shirt: "#015146" } },
  { name: "Sara Khan", role: "Chief Technology Officer", photo: null, placeholder: true, avatar: { skin: "#c98e66", hair: "#3d6b62", style: "hijab", shirt: "#0a6455" } },
  { name: "Omar Siddiqui", role: "Head of Engineering", photo: null, placeholder: true, avatar: { skin: "#b67a52", hair: "#121212", style: "buzz", shirt: "#013d35" } },
  { name: "Emily Carter", role: "Lead UI/UX Designer", photo: null, placeholder: true, avatar: { skin: "#f1c7a6", hair: "#8a5a2b", style: "long", shirt: "#12796a" } },
  { name: "Daniel Reyes", role: "Senior Mobile Developer", photo: null, placeholder: true, avatar: { skin: "#d39d73", hair: "#2a1a10", style: "curly", shirt: "#015146" } },
  { name: "Ayesha Malik", role: "Project Manager", photo: null, placeholder: true, avatar: { skin: "#c58b62", hair: "#24150d", style: "bun", shirt: "#0a6455" } },
  { name: "James Lee", role: "Senior Backend Developer", photo: null, placeholder: true, avatar: { skin: "#eac09a", hair: "#151515", style: "short", shirt: "#013d35" } },
  { name: "Hira Ahmed", role: "QA Lead", photo: null, placeholder: true, avatar: { skin: "#b9805a", hair: "#1a100b", style: "long", shirt: "#12796a" } },
];
