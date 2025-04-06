import { useEffect, useRef, useState } from 'react';
import './App.css';
import { Player } from './gameEngine/Player';
import { Position } from './gameEngine/Position';

function App() {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);

	const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);
	const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
	const [player, setPlayer] = useState<Player | null>(null);

	useEffect(() => {
		console.log({ canvasRef }, 'canvase ref changed');
		if (canvasRef.current) {
			setCanvas(canvasRef.current);
			setContext(canvasRef.current.getContext('2d'));

			setPlayer(new Player());
		}
	}, []);

	const initPlayerPosition = new Position(50, 50);
	player?.setPosition(initPlayerPosition);

	const animate = () => {
		if (canvas && context && player) {
			context?.clearRect(0, 0, canvas.width, canvas.height);
			context.fillStyle = 'red';

			//set random position from -.1 to .1
			const newPlayerPosition = new Position(
				player.getPosition().x + 0.1 * (Math.floor(Math.random() * 3) - 1),
				player.getPosition().y + 0.1 * (Math.floor(Math.random() * 3) - 1)
			);
			player?.setPosition(newPlayerPosition);
			context.fillRect(player.getPosition().x, player.getPosition().y, 20, 20);
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
