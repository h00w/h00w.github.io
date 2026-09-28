import type { Metadata } from "next";

const game = "https://fjordfall-uniplay.hendar2-0.chatgpt.site/";
const cover = "https://raw.githubusercontent.com/h00w/fjordfall/main/assets/fjordfall-contest-cover.webp";

export const metadata: Metadata = {
  title: "Play Fjordfall | Hendar Mawan",
  description: "Play Fjordfall, a name-only multiplayer Viking hunt for 1–10 players.",
  openGraph: {
    title: "Fjordfall: The Five Hunts",
    description: "Gather your warband. Hunt across five realms. Face the dragon.",
    images: [cover],
  },
};

export default function FjordfallPage() {
  return (
    <main
      aria-label="Fjordfall multiplayer game"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 2147483647,
        width: "100vw",
        height: "100dvh",
        overflow: "hidden",
        background: "#07131b",
      }}
    >
      <iframe
        title="Fjordfall — The Five Hunts"
        src={game}
        loading="eager"
        allowFullScreen
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          border: 0,
          margin: 0,
          padding: 0,
          background: "#07131b",
        }}
      />
    </main>
  );
}
