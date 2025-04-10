import { useEffect, useRef, useState } from 'react';
import './App.css';
import { Player } from './gameEngine/Player';
import { Position } from './gameEngine/Position';
import { Controls } from './gameEngine/Controls';
import { Map } from './gameEngine/Map';
import TestMap from './config/maps/testMap';
import { Game } from './gameEngine/Game';
function App() {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);

	const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);
	const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
	const [player, setPlayer] = useState<Player | null>(null);

	useEffect(() => {
		if (canvasRef.current) {
			canvasRef!.current!.width = window.innerWidth;
			canvasRef!.current!.height = window.innerHeight;

			addEventListener('resize', () => {
				canvasRef!.current!.width = window.innerWidth;
				canvasRef!.current!.height = window.innerHeight;
			});

			setCanvas(canvasRef.current);
			setContext(canvasRef.current.getContext('2d'));

			setPlayer(new Player());
		}
	}, []);

	const { x, y } = TestMap.heroStart;
	const { cellSize, map: testMap } = TestMap;
	const mapSize = { x: testMap[0].length, y: testMap.length };
	const initPlayerPosition = new Position(x, y);

	player?.setPosition(initPlayerPosition);
	player?.setCanvas(canvas);
	player?.setContext(context);
	player?.setControls(new Controls());
	player?.setCellSize(cellSize);
	player?.setMapSize(mapSize);
	player?.setSpeed(2);

	const map = new Map();
	map.setCanvas(canvas);
	map.setContext(context);
	map.setMap(testMap);
	map.setCellSize(cellSize);

	const game = new Game();
	game.setPlayer(player);
	game.setMapSize(mapSize);
	game.setMap(map);
	game.setContext(context);
	game.setCanvas(canvas);
	game.setCellSize(cellSize);

	const animate = () => {
		if (canvas && context && player && map) {
			context.clearRect(0, 0, canvas.width, canvas.height);

			game.run();
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
