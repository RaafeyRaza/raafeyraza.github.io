let buffer, creature, bubbles, center;

const hueBase = 60;
const hueRange = 160;
const segmentCount = 60;
const bubbleCount = 500;
const segmentLengthBase = 5;

const fadeIn = (t, m) => t / m;
const fadeOut = (t, m) => (m - t) / m;
const fadeInOut = (t, m) => Math.abs(((t + m * 0.5) % m) - m * 0.5) / (m * 0.5);

const angle = (x1, y1, x2, y2) => Math.atan2(y2 - y1, x2 - x1);

// cheap replacement for simplex-noise (stable, no CDN)
function noise3(x, y, z) {
  return (Math.sin(x * 12.9898 + y * 78.233 + z * 37.719) * 43758.5453) % 1;
}

/* ---------------- ATTR ARRAY ---------------- */

class AttributeArray {
  constructor(count, attrs) {
    this.count = count;
    this.attrs = attrs;
    this.spread = attrs.length;
    this.values = new Float32Array(count * this.spread);
  }

  get length() {
    return this.values.length;
  }

  set(a, i) {
    this.values.set(a, i);
  }

  get(i) {
    return this.values.slice(i, i + this.spread);
  }

  map(cb) {
    let j = 0;
    for (let i = 0; i < this.length; i += this.spread, j++) {
      this.set(cb(this.get(i), j), i);
    }
  }

  reverseMap(cb) {
    let j = this.count - 1;
    for (let i = this.length - this.spread; i >= 0; i -= this.spread, j--) {
      this.set(cb(this.get(i), j), i);
    }
  }
}

/* ---------------- BUBBLES ---------------- */

class Bubbles extends AttributeArray {
  constructor(count) {
    super(count, ['x','y','vx','vy','s','d','h','l','ttl']);
    this.init();
    this.repelTarget = null;
    this.repelThreshold = 200;
  }

  init() {
    this.map(() => [
      random(-width * 0.25, width * 1.25),
      random(height * 1.25),
      random(-2, 2),
      random(-4, -1),
      random(2, 6),
      random(2, 6),
      random(180, 240),
      random(0, 200),
      random(500, 1000)
    ]);
  }

  reset() {
    return [
      random(-width * 0.25, width * 1.25),
      random(height * 1.25),
      0,
      random(-4, -1),
      random(2, 6),
      random(2, 6),
      random(180, 240),
      0,
      random(500, 1000)
    ];
  }

  drawParticle(x,y,d,h,l,ttl) {
    const ld = fadeInOut(l, ttl);
    buffer.stroke(h, 50, 100, 0.5 * ld);
    buffer.strokeWeight(1 + d * ld);
    buffer.point(x, y);
  }

  update() {
    this.map(v => {
      let [x,y,vx,vy,s,d,h,l,ttl] = v;

      const n = noise3(x * 0.0015, y * 0.0015, frameCount * 0.0015) * TWO_PI;

      vx = lerp(vx, cos(n) * s, 0.15);
      vy = lerp(vy, (sin(n) + 2) * -s, 0.15);

      if (this.repelTarget) {
        const dx = x - this.repelTarget[0];
        const dy = y - this.repelTarget[1];
        const dist = Math.sqrt(dx*dx + dy*dy);

        if (dist < this.repelThreshold) {
          vx += dx * 0.01;
          vy += dy * 0.01;
        }
      }

      x += vx;
      y += vy;
      l++;

      this.drawParticle(x,y,d,h,l,ttl);

      if (l > ttl || x < -50 || x > width + 50 || y < -50) {
        return this.reset();
      }

      return [x,y,vx,vy,s,d,h,l,ttl];
    });
  }
}

/* ---------------- CREATURE (SIMPLIFIED BUT SAME LOOK) ---------------- */

class Creature {
  constructor() {
    this.pos = [width/2, height/2];
    this.target = [...this.pos];
  }

  setTarget(t) {
    this.target = t;
  }

  update() {
    this.pos[0] = lerp(this.pos[0], this.target[0], 0.05);
    this.pos[1] = lerp(this.pos[1], this.target[1], 0.05);

    buffer.stroke(180, 80, 100);
    buffer.noFill();
    buffer.ellipse(this.pos[0], this.pos[1], 40);
  }
}

/* ---------------- P5 ---------------- */

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);

  buffer = createGraphics(windowWidth, windowHeight);
  buffer.colorMode(HSB);

  center = [width/2, height/2];

  creature = new Creature();
  bubbles = new Bubbles(bubbleCount);

  frameRate(60);
}

function draw() {
  buffer.background(220, 70, 2);

  creature.update();
  bubbles.repelTarget = creature.pos;
  bubbles.update();

  image(buffer, 0, 0);
}

function mouseMoved() {
  creature.setTarget([mouseX, mouseY]);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  buffer.resizeCanvas(windowWidth, windowHeight);
}
