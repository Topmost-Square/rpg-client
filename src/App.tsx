import { useEffect, useRef, useState } from 'react';
import './App.css';
import { Player } from './gameEngine/Player';
import { Position } from './gameEngine/Position';
import { Controls } from './gameEngine/Controls';

function App() {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);

	const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);
	const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
	const [player, setPlayer] = useState<Player | null>(null);

	useEffect(() => {
		if (canvasRef.current) {
			setCanvas(canvasRef.current);
			setContext(canvasRef.current.getContext('2d'));

			setPlayer(new Player());
		}
	}, []);

	const initPlayerPosition = new Position(50, 50);
	player?.setPosition(initPlayerPosition);
	player?.setCanvas(canvas);
	player?.setContext(context);
	player?.setControls(new Controls());

	const animate = () => {
		if (canvas && context && player) {
			player.update();
			player.draw();
		}
		requestAnimationFrame(animate);
	};

	animate();
	return (
		<>
			<canvas ref={canvasRef}></canvas>
		</>
	);
}

export default App;
