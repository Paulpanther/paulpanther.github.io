const canvas = document.getElementById("c");

const gl = canvas.getContext("webgl");
if (!gl) {
    console.log("WebGL is not supported by your browser");
}

const resize = gl => {
    const realToCSSPixels = window.devicePixelRatio;

    const displayWidth  = Math.floor(gl.canvas.clientWidth  * realToCSSPixels);
    const displayHeight = Math.floor(gl.canvas.clientHeight * realToCSSPixels);

    if (gl.canvas.width  !== displayWidth ||
        gl.canvas.height !== displayHeight) {

        gl.canvas.width  = displayWidth;
        gl.canvas.height = displayHeight;
    }
};

const createShader = (gl, type, source) => {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (success) return shader;

    console.log("Error compiling shader: " + gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
};

const createProgram = (gl, vertexShader, fragmentShader) => {
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    const success = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (success) return program;

    console.log("Error linking program: " + gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
};

let positionAttribLocation;
let resolutionUniformLocation;
let timeUniformLocation;
let fieldSizeUniformLocation;
let gameOverUniformLocation;
let timeSinceUpdateUniformLocation;
let updateCountUniformLocation;

let texture;
let positionBuffer;
let program;

const loadGL = () => {
    const vertexShader = createShader(gl, gl.VERTEX_SHADER, document.getElementById("vertex-shader").text);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, document.getElementById("fragment-shader").text);

    program = createProgram(gl, vertexShader, fragmentShader);

    positionAttribLocation = gl.getAttribLocation(program, "a_position");
    resolutionUniformLocation = gl.getUniformLocation(program, "u_resolution");
    timeUniformLocation = gl.getUniformLocation(program, "u_time");
    fieldSizeUniformLocation = gl.getUniformLocation(program, "u_fieldSize");	
    gameOverUniformLocation = gl.getUniformLocation(program, "u_gameOver");
    timeSinceUpdateUniformLocation = gl.getUniformLocation(program, "u_timeSinceUpdate");
	updateCountUniformLocation = gl.getUniformLocation(program, "u_updateCount");
	texture = gl.createTexture();
	gl.bindTexture(gl.TEXTURE_2D, texture);

	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);

    positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
        -1, 1,
        1, 1,
        -1, -1,
        -1, -1,
        1, 1,
        1, -1,
    ]), gl.STATIC_DRAW);

	gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1);

    startRendering();
};

const fieldSize = [100, 60];
const updateInterval = 10;
let ki = true;
let gameOver = false;
let timeAtLastUpdate = Date.now();
let cells = new Uint16Array(fieldSize[0] * fieldSize[1]);
let direction = 0;
let head = [Math.floor(fieldSize[0]/2), Math.floor(fieldSize[1]/2)];
let updateCount = 0;
let kiChangeNotMadeCounter = 0;

document.addEventListener('keypress', event => {
	if (event.key === 'ArrowLeft') direction = 0;
	else if (event.key === 'ArrowUp') direction = 1;
	else if (event.key === 'ArrowRight') direction = 2;
	else if (event.key === 'ArrowDown') direction = 3;
	else if (event.key === 'k') ki = !ki;	

	return false;
});

const headFromDirection = () => {
	if (direction === 0) return [head[0]-1, head[1]];
	else if (direction === 1) return [head[0], head[1]+1];
	else if (direction === 2) return [head[0]+1, head[1]];
	else return [head[0], head[1]-1];
};

const posToIndex = (x, y) => {
	return y * fieldSize[0] + x;
};

const resetGame = () => {
	cells = new Uint16Array(fieldSize[0] * fieldSize[1]);
	head = [Math.floor(fieldSize[0]/2), Math.floor(fieldSize[1]/2)];
	direction = 0;
	updateCount = 0;
	gameOver = false;
};

const kiDirection = () => {
	const relativeDistanceToCenterX = 1 - Math.min(head[0], fieldSize[0] - head[0]) / (fieldSize[0] / 2);
	const relativeDistanceToCenterY = 1 - Math.min(head[1], fieldSize[1] - head[1]) / (fieldSize[1] / 2);
	const relativeDistanceToCenter = Math.max(relativeDistanceToCenterX, relativeDistanceToCenterY);
		
	const changeDir = Math.random() < kiChangeNotMadeCounter / ((1 - relativeDistanceToCenter) * 60); 
	if (changeDir) {
		kiChangeNotMadeCounter = 0;
		const newDir = (Math.floor(Math.random() * 2) * 2 - 1 + direction) % 4;
		return newDir;
	} else {
		kiChangeNotMadeCounter++;
		return direction;
	}
};

const updateTron = () => {
	if (gameOver) resetGame();

	if (ki) direction = kiDirection();

	const nextHead = headFromDirection();

	cells[posToIndex(head[0], head[1])] = updateCount;	

	if (nextHead[0] < 0 || nextHead[1] < 0 || nextHead[1] >= fieldSize[1] || nextHead[0] >= fieldSize[0]) {
		gameOver = true;
		return;
	}
	
	head = nextHead;
	updateCount = updateCount + 1;
	timeAtLastUpdate = Date.now();
};

const startTime = Date.now();
let lastTime = startTime;
let oldLastTime = startTime;
let fps;

const drawScene = () => {
    resize(gl);
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.useProgram(program);

    gl.enableVertexAttribArray(positionAttribLocation);
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.vertexAttribPointer(positionAttribLocation, 2, gl.FLOAT, false, 0, 0);

    oldLastTime = lastTime;
    lastTime = Date.now();
    fps = 1 / (lastTime - oldLastTime);

    gl.uniform2fv(resolutionUniformLocation, [gl.canvas.width, gl.canvas.height]);
    gl.uniform1f(timeUniformLocation, (startTime - lastTime) / 1000);
	gl.uniform2fv(fieldSizeUniformLocation, fieldSize);	
	gl.uniform1f(gameOverUniformLocation, gameOver ? 1 : 0);
	gl.uniform1f(timeSinceUpdateUniformLocation, (lastTime - timeAtLastUpdate) / updateInterval);
	gl.uniform1f(updateCountUniformLocation, updateCount);

	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, fieldSize[0], fieldSize[1], 0, gl.RGBA, gl.UNSIGNED_SHORT_4_4_4_4, cells);

    // Draw the geometry.
    gl.drawArrays(gl.TRIANGLES, 0, 6);
};

let fpsDiv = document.getElementById("fps");


const render = () => {
    drawScene();
};

const updateFps = () => {
    fpsDiv.innerHTML = Math.floor((fps * 1000)).toString()
};

const startRendering = () => {
    setInterval(updateFps, 1000);
    setInterval(render, 15);
	setInterval(updateTron, updateInterval);
};


loadGL();
