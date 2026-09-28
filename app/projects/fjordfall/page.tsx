import type { Metadata } from "next";
import Link from "next/link";

const source = "https://github.com/h00w/fjordfall";
const review = "https://fjordfall-uniplay.hendar2-0.chatgpt.site/";
const cover = "https://raw.githubusercontent.com/h00w/fjordfall/main/assets/fjordfall-contest-cover.webp";

export const metadata: Metadata = {
  title: "Fjordfall | Multiplayer Viking Game | Hendar Mawan",
  description: "A name-only multiplayer Viking hunt for 1–10 players. Explore five realms together, fight server-controlled monsters or duel other players, and face the dragon finale.",
  openGraph: {
    title: "Fjordfall: The Five Hunts",
    description: "Gather your warband. Hunt across five realms. Face the dragon.",
    images: [cover],
  },
};

const realms = [
  ["01", "Raven Shore", "Island hunt · Mossling"],
  ["02", "The Hanging Falls", "Waterfall sky islands · Storm Troll"],
  ["03", "The Whale Road", "Sea crossing · Deepjaw"],
  ["04", "The Sunken Hall", "Underwater ruins · Abyss Warden"],
  ["05", "Dragon's Roost", "Finale · Fjordwyrm"],
];

export default function FjordfallPage() {
  return <>
    <header className="nav"><div className="shell nav-inner"><Link href="/" className="brand">HENDAR<span>.</span></Link><nav className="nav-links"><Link href="/">Portfolio</Link><Link href="/#projects">Projects</Link><a href={source} target="_blank" rel="noreferrer">Source ↗</a></nav></div></header>
    <main>
      <section className="hero" style={{minHeight:0,padding:"136px 0 56px"}}><div className="shell"><div className="kicker">UNIPLAY HACKATHON · MULTIPLAYER WEB GAME</div><h1 className="display" style={{fontSize:"clamp(3.5rem,9vw,7rem)",lineHeight:.94,margin:"16px 0"}}>Fjordfall</h1><div className="hero-role">The Five Hunts</div><p className="muted" style={{maxWidth:830,fontSize:"1.1rem",lineHeight:1.8}}>Enter your Viking name, share a six-character room code, and choose your battle. Bring up to ten players through five realms of monsters and Rune Gates, or challenge your friends in a last-Viking-standing duel.</p><div className="hero-actions"><a className="btn btn-primary" href={review} target="_blank" rel="noreferrer">Open owner-private demo ↗</a><a className="btn btn-ghost" href={source} target="_blank" rel="noreferrer">Explore source ↗</a><a className="btn btn-ghost" href={`${source}/blob/main/README.md#how-to-play`} target="_blank" rel="noreferrer">How to play ↗</a></div><p className="muted" style={{fontSize:13,maxWidth:780,marginTop:18}}>The playable review build currently requires the project owner&apos;s access. The game itself asks players only for a name; public game access awaits release approval.</p></div></section>

      <section style={{paddingBottom:55}}><div className="shell"><img src={cover} alt="Fjordfall Vikings confront the dragon beyond island and waterfall realms" style={{display:"block",width:"100%",height:"auto",borderRadius:20,boxShadow:"0 24px 70px rgba(30,47,66,.20)"}} /></div></section>

      <section className="section section-soft"><div className="shell"><div className="section-heading"><div><div className="section-index">01</div><div className="kicker">Choose your battle</div></div><h2 className="section-title">One room. Two ways to fight.</h2></div><div className="card-grid" style={{gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))"}}><article className="glass card"><div className="kicker">Crew vs AI · 1–10 Vikings</div><h3>Hunt together</h3><p className="muted" style={{lineHeight:1.8}}>Pick Slow or Medium monsters, rescue downed teammates, draw strength from Viking allies, and defeat the dragon as a crew.</p></article><article className="glass card"><div className="kicker">Player duel · 2–10 Vikings</div><h3>Challenge your rivals</h3><p className="muted" style={{lineHeight:1.8}}>Close the distance, land validated strikes, watch health and scores update for everyone, and become the last Viking standing.</p></article></div></div></section>

      <section className="section"><div className="shell"><div className="section-heading"><div><div className="section-index">02</div><div className="kicker">The five hunts</div></div><h2 className="section-title">From the shore to the dragon.</h2></div><div className="card-grid" style={{gridTemplateColumns:"repeat(auto-fit,minmax(210px,1fr))"}}>{realms.map(([number,name,detail])=><div className="glass card" key={name}><div className="section-index">{number}</div><h3>{name}</h3><p className="muted">{detail}</p></div>)}</div></div></section>

      <section className="section section-soft"><div className="shell"><div className="section-heading"><div><div className="section-index">03</div><div className="kicker">Play and verify</div></div><h2 className="section-title">Shared state from room code to leaderboard.</h2></div><div className="glass card" style={{padding:32}}><p className="muted" style={{fontSize:"1.02rem",lineHeight:1.85,maxWidth:960}}>Create or join a room with a name. Use WASD, arrow keys or the on-screen pad to move; Space or F to fight; R to revive; E to enter an open Rune Gate. The server owns movement, enemy AI, damage, points, progression and replay. Everyone receives the same canonical room snapshot, and the final leaderboard totals strikes, revives and scores.</p><p className="muted" style={{lineHeight:1.8,maxWidth:960}}>Automated route tests cover room joining, ten-player capacity, five realm progression, combat scoring, revival, duels and repeated replay. A separate-device playtest remains part of the release checklist.</p><div className="hero-actions"><a className="btn btn-primary" href={review} target="_blank" rel="noreferrer">Private review ↗</a><a className="btn btn-ghost" href={`${source}/blob/main/docs/TESTING.md`} target="_blank" rel="noreferrer">Acceptance checklist ↗</a><a className="btn btn-ghost" href={source} target="_blank" rel="noreferrer">GitHub repository ↗</a></div></div></div></section>
    </main>
  </>;
}
