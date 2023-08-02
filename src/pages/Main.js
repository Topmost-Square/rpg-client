import {useEffect, useRef, useState} from "react";
import {Environment} from "../gameEngine/Environment";

export const Game = () => {
    const canvasRef = useRef(null);

    const [canvas, setCanvas] = useState(null)
    const [context, setContext] = useState(null)

    useEffect(() => {
        if (canvasRef.current) {
            setCanvas(canvasRef.current);
        }
    },[canvasRef]);

    useEffect(() => {
        if (canvas) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            setContext(canvas.getContext('2d'));
        }
    },[canvas]);

    useEffect(() => {
        if (context) {
            const env = new Environment();
            env.setCanvas(canvas);
            env.setContext(context);
            env.init();
        }
    }, [context, canvas]);

    useEffect(() => {
        const handleResize = () => {
            if (canvas) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }

        }
        window.addEventListener('resize', handleResize)

        return _=> window.removeEventListener('resize', handleResize);
    })

    return (
        <div className='game-container'>
            <h1>GAME</h1>
            <canvas ref={canvasRef} width="352" height="198"></canvas>
        </div>
    );
}