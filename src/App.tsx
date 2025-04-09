import { useEffect, useRef, useState } from 'react';
import './App.css';
import { Player } from './gameEngine/Player';
import { Position } from './gameEngine/Position';
import { Controls } from './gameEngine/Controls';
import { Map } from './gameEngine/Map';
import TestMap from './config/maps/testMap';
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
	//20 is the size of hero square
	//replace it with the size of the sprite later
	const initPlayerPosition = new Position(x, y);
	player?.setPosition(initPlayerPosition);
	player?.setCanvas(canvas);
	player?.setContext(context);
	player?.setControls(new Controls());
	player?.setCellSize(cellSize);
	player?.setMapSize(mapSize);

	const map = new Map();
	map.setCanvas(canvas);
	map.setContext(context);
	map.setMap(testMap);
	map.setCellSize(cellSize);

	const animate = () => {
		if (canvas && context && player && map) {
			player.update();
			context.clearRect(0, 0, canvas.width, canvas.height);

			const { x, y } = player.getPosition();

			let drawX = 0;
			let drawY = 0;

			const halfCanvasX = Math.ceil(canvas.width / cellSize / 2);
			const halfCanvasY = Math.floor(canvas.height / cellSize / 2);

			if (x > halfCanvasX) {
				drawX = x - halfCanvasX;
			}

			if (x >= mapSize.x - halfCanvasX) {
				drawX = Math.max(0, mapSize.x - Math.ceil(canvas.width / cellSize));
			}

			if (y > halfCanvasY) {
				drawY = y - halfCanvasY;
			}

			if (y >= mapSize.y - halfCanvasY) {
				drawY = Math.max(0, mapSize.y - Math.floor(canvas.height / cellSize));
			}

			map.drawSimple(drawY, drawX);
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
