import dynamic from 'next/dynamic';
const GameTheoryDashboard = dynamic(() => import('../components/App'), { ssr: false });
export default function Home() { return <GameTheoryDashboard />; }
