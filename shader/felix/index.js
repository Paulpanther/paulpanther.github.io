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

let image;

const loadImage = () => {
    image = new Image();
    image.src = "felix-why.jpg";  // MUST BE SAME DOMAIN!!!
    image.onload = () => {
        loadGL();
    };
};

let positionAttribLocation;
let texCoordAttribLocation;
let imageSizeUniformLocation;
let resolutionUniformLocation;
let timeUniformLocation;
let positionBuffer;
let texCoordBuffer;
let texture;
let program;

const loadGL = () => {
    const vertexShader = createShader(gl, gl.VERTEX_SHADER, document.getElementById("vertex-shader").text);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, document.getElementById("fragment-shader").text);

    program = createProgram(gl, vertexShader, fragmentShader);

    positionAttribLocation = gl.getAttribLocation(program, "a_position");
    texCoordAttribLocation = gl.getAttribLocation(program, "a_texCoord");
    imageSizeUniformLocation = gl.getUniformLocation(program, "u_imageSize");
    resolutionUniformLocation = gl.getUniformLocation(program, "u_resolution");
    timeUniformLocation = gl.getUniformLocation(program, "u_time");

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

    texCoordBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
        0.0, 0.0,
        1.0, 0.0,
        0.0, 1.0,
        0.0, 1.0,
        1.0, 0.0,
        1.0, 1.0]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(texCoordAttribLocation);
    gl.vertexAttribPointer(texCoordAttribLocation, 2, gl.FLOAT, false, 0, 0);

    texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);

    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);

    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);

    startRendering();
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
    gl.uniform2fv(imageSizeUniformLocation, [image.width, image.height]);
    gl.uniform1f(timeUniformLocation, (startTime - lastTime) / 1000);

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
};

loadImage();