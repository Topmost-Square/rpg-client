import {useEffect, useRef, useState} from "react";

export const Main = () => {
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
        <div>
            <h1>MAIN</h1>
            <canvas ref={canvasRef}></canvas>
        </div>
    );
}