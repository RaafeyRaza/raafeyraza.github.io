let SimplexNoise = window.SimplexNoise || window.simplexNoise;

function _toArray(r) { return _arrayWithHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableRest(); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var hueBase = 60;
var hueRange = 160;
var segmentCount = 60;
var bubbleCount = 500;
var segmentLengthBase = 5;
var fadeIn = function fadeIn(t, m) {
  return t / m;
};
var fadeOut = function fadeOut(t, m) {
  return (m - t) / m;
};
var fadeInOut = function fadeInOut(t, m) {
  var hm = 0.5 * m;
  return abs((t + hm) % m - hm) / hm;
};
var angle = function angle(x1, y1, x2, y2) {
  return atan2(y2 - y1, x2 - x1);
};
var buffer;
var canvas;
var creature;
var bubbles;
var center;
var simplex;
var AttributeArray = /*#__PURE__*/function () {
  "use strict";

  function AttributeArray(count, attrs) {
    _classCallCheck(this, AttributeArray);
    this.count = count;
    this.attrs = attrs;
    this.spread = attrs.length;
    this.values = new Float32Array(count * this.spread);
  }
  return _createClass(AttributeArray, [{
    key: "length",
    get: function get() {
      return this.values.length;
    }
  }, {
    key: "set",
    value: function set(a, i) {
      var normalize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      normalize && (i *= this.spread);
      this.values.set(a, i);
    }
  }, {
    key: "get",
    value: function get(i) {
      var normalize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      normalize && (i *= this.spread);
      return this.values.slice(i, i + this.spread);
    }
  }, {
    key: "forEach",
    value: function forEach(cb) {
      var i = 0;
      var j = 0;
      for (; i < this.length; i += this.spread, j++) {
        cb(this.get(i), j, this);
      }
    }
  }, {
    key: "map",
    value: function map(cb) {
      var i = 0;
      var j = 0;
      for (; i < this.length; i += this.spread, j++) {
        this.set(cb(this.get(i), j, this), i);
      }
    }
  }, {
    key: "reverseMap",
    value: function reverseMap(cb) {
      var i = this.length - this.spread;
      var j = this.count - 1;
      for (; i >= 0; i -= this.spread, j--) {
        this.set(cb(this.get(i), j, this), i);
      }
    }
  }]);
}();
var Bubbles = /*#__PURE__*/function (_AttributeArray) {
  "use strict";

  function Bubbles(count) {
    var _this;
    _classCallCheck(this, Bubbles);
    _this = _callSuper(this, Bubbles, [count, ['x', 'y', 'vx', 'vy', 's', 'd', 'h', 'l', 'ttl']]);
    _this.initPoints();
    _this.repelTarget = null;
    _this.repelThreshold = 200;
    return _this;
  }
  _inherits(Bubbles, _AttributeArray);
  return _createClass(Bubbles, [{
    key: "setRepelTarget",
    value: function setRepelTarget() {
      var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      this.repelTarget = target;
    }
  }, {
    key: "initPoints",
    value: function initPoints() {
      this.map(function () {
        return [random(-0.25 * windowWidth, windowWidth * 1.25), random(windowHeight * 1.25), random(-2, 2), random(-4, -1), random(2, 6), random(2, 6), random(180, 240), random(0, 200), random(500, 1000)];
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      return [random(-0.25 * windowWidth, windowWidth * 1.25), random(windowHeight * 1.25), 0, random(-4, -1), random(2, 6), random(2, 6), random(180, 240), 0, random(500, 1000)];
    }
  }, {
    key: "drawParticle",
    value: function drawParticle(x, y, d, h, l, ttl) {
      var ld = fadeInOut(l, ttl);
      buffer.stroke(h, 50, 100, 0.5 * ld);
      buffer.strokeWeight(1 + d * ld);
      buffer.point(x, y);
    }
  }, {
    key: "update",
    value: function update() {
      var _this2 = this;
      this.map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 9),
          x = _ref2[0],
          y = _ref2[1],
          vx = _ref2[2],
          vy = _ref2[3],
          s = _ref2[4],
          d = _ref2[5],
          h = _ref2[6],
          l = _ref2[7],
          ttl = _ref2[8];
        var n = simplex.noise3D(x * 0.0015, y * 0.0015, frameCount * 0.0015) * TAU;
        vx = lerp(vx, cos(n) * s, 0.15);
        vy = lerp(vy, (sin(n) + 2) * -s, 0.15);
        if (_this2.repelTarget && dist.apply(void 0, [x, y].concat(_toConsumableArray(_this2.repelTarget))) < _this2.repelThreshold) {
          var theta = angle.apply(void 0, [x, y].concat(_toConsumableArray(_this2.repelTarget)));
          vx = lerp(vx, vx - cos(theta) * s, 0.275);
          vy = lerp(vy, vy - sin(theta) * s, 0.275);
        }
        x = lerp(x, x + vx, 0.125);
        y = lerp(y, y + vy, 0.125);
        l++;
        _this2.drawParticle(x, y, d, h, l, ttl);
        if (l > ttl || x > windowWidth + d || x < -d || y < -d) {
          return _this2.reset();
        }
        return [x, y, vx, vy, s, d, h, l, ttl];
      });
    }
  }]);
}(AttributeArray);
var Chain = /*#__PURE__*/function (_AttributeArray2) {
  "use strict";

  function Chain(x, y, segmentNum, baseLength, baseDirection) {
    var _this3;
    var additionalAttrs = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];
    _classCallCheck(this, Chain);
    _this3 = _callSuper(this, Chain, [segmentNum, ['x1', 'y1', 'x2', 'y2', 'l', 'd'].concat(_toConsumableArray(additionalAttrs))]);
    _this3.position = [x, y];
    _this3.target = [x, y];
    _this3.baseLength = baseLength;
    _this3.baseDirection = baseDirection;
    return _this3;
  }
  _inherits(Chain, _AttributeArray2);
  return _createClass(Chain, [{
    key: "segmentNum",
    get: function get() {
      return this.count;
    }
  }, {
    key: "setTarget",
    value: function setTarget(arg) {
      if (typeof arg === 'function') {
        this.target = arg(this.target);
      } else {
        this.target = arg;
      }
    }
  }, {
    key: "setPosition",
    value: function setPosition(arg) {
      if (typeof arg === 'function') {
        this.position = arg(this.position);
      } else {
        this.position = arg;
      }
    }
  }, {
    key: "mapSegments",
    value: function mapSegments(cb) {
      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'forward';
      if (direction === 'backward') {
        this.reverseMap(cb);
      } else {
        this.map(cb);
      }
    }
  }, {
    key: "updateSegments",
    value: function updateSegments(cb) {
      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'forward';
      var target = this.position;
      this.mapSegments(function (_ref3, i) {
        var _ref4 = _toArray(_ref3),
          x1 = _ref4[0],
          y1 = _ref4[1],
          x2 = _ref4[2],
          y2 = _ref4[3],
          l = _ref4[4],
          d = _ref4[5],
          _rest = _arrayLikeToArray(_ref4).slice(6);
        x1 = target[0];
        y1 = target[1];
        var _cb = cb([x1, y1, x2, y2, l, d].concat(_toConsumableArray(_rest)), i),
          _cb2 = _toArray(_cb),
          t = _cb2[0],
          rest = _arrayLikeToArray(_cb2).slice(1);
        var _d = isNaN(t) ? d : t;
        x2 = x1 + l * cos(_d);
        y2 = y1 + l * sin(_d);
        target = [x2, y2];
        return [x1, y1, x2, y2, l, _d].concat(_toConsumableArray(rest));
      }, direction);
    }
  }]);
}(AttributeArray);
var Creature = /*#__PURE__*/function (_Chain) {
  "use strict";

  function Creature() {
    var _this4;
    _classCallCheck(this, Creature);
    _this4 = _callSuper(this, Creature, [center[0], center[1], segmentCount, segmentLengthBase, 0, ['h']]);
    _this4.follow = false;
    _this4.initSegments();
    return _this4;
  }
  _inherits(Creature, _Chain);
  return _createClass(Creature, [{
    key: "initSegments",
    value: function initSegments() {
      var _this5 = this;
      var x1, y1, x2, y2, l, d, h;
      l = this.baseLength;
      d = this.baseDirection;
      this.mapSegments(function (_, i) {
        x1 = x2 || _this5.position[0];
        y1 = y2 || _this5.position[1];
        x2 = x1 - l * cos(d);
        y2 = y1 - l * sin(d);
        d += 0.1;
        l *= 1.01;
        h = hueBase + fadeOut(i, _this5.segmentNum) * hueRange;
        return [x1, y1, x2, y2, l, d, h];
      });
    }
  }, {
    key: "updateTarget",
    value: function updateTarget() {
      if (!this.follow) {
        var t = simplex.noise3D(this.target[0] * 0.005, this.target[1] * 0.005, frameCount * 0.005) * TAU;
        this.setTarget([lerp(this.target[0], this.target[0] + 20 * (cos(t) + cos(frameCount * 0.05)), 0.25), lerp(this.target[1], this.target[1] + 20 * (sin(t) + sin(frameCount * 0.05)), 0.25)]);
      }
      if (this.position[0] > windowWidth + 500 || this.position[0] < -500 || this.position[1] > windowHeight + 500 || this.position[1] < -500) {
        this.setTarget(_toConsumableArray(center));
      }
    }
  }, {
    key: "update",
    value: function update() {
      var _this6 = this;
      this.setPosition([lerp(this.position[0], this.target[0], 0.015), lerp(this.position[1], this.target[1], 0.015)]);
      this.updateTarget();
      this.updateSegments(function (_ref5, i) {
        var _ref6 = _slicedToArray(_ref5, 7),
          x1 = _ref6[0],
          y1 = _ref6[1],
          x2 = _ref6[2],
          y2 = _ref6[3],
          l = _ref6[4],
          d = _ref6[5],
          h = _ref6[6];
        var n;
        n = simplex.noise3D(x1 * 0.005, y1 * 0.005, (i + frameCount) * 0.005);
        d = angle(x1, y1, x2, y2) + n * 0.075;
        _this6.drawSegment(x1, y1, x2, y2, h, n, d, i);
        return [d];
      }, 'backward');
    }
  }, {
    key: "drawSegment",
    value: function drawSegment(x1, y1, x2, y2, h, n, tn, i) {
      var arcWidth = 6 + 30 * fadeIn(i, this.segmentNum);
      var lineLength = 1.35 * arcWidth;
      var lineLeftX = x1 + lineLength * cos(tn + 0.85 + n);
      var lineLeftY = y1 + lineLength * sin(tn + 0.85 + n);
      var lineRightX = x1 + lineLength * cos(tn - 0.85 - n);
      var lineRightY = y1 + lineLength * sin(tn - 0.85 - n);
      var nubWidth = arcWidth * 0.35;
      buffer.strokeWeight(1 + fadeIn(i, this.segmentNum) * 4);
      buffer.stroke(h, 100, 100, 0.1);
      buffer.noFill();
      buffer.line(x1, y1, lineLeftX, lineLeftY);
      buffer.ellipse(lineLeftX, lineLeftY, nubWidth);
      buffer.line(x1, y1, lineRightX, lineRightY);
      buffer.ellipse(lineRightX, lineRightY, nubWidth);
      buffer.line(x2, y2, x1, y1);
      buffer.ellipse(x1, y1, arcWidth);
    }
  }]);
}(Chain);
function setup() {
  buffer = createGraphics(windowWidth, windowHeight);
  buffer.colorMode(HSB);
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.mouseOver(mouseOver);
  canvas.mouseOut(mouseOut);
  frameRate(60);
  simplex = new SimplexNoise.default();
  center = [0.5 * windowWidth, 0.5 * windowHeight];
  creature = new Creature();
  bubbles = new Bubbles(bubbleCount);
}
function drawGlow() {
  drawingContext.save();
  drawingContext.filter = 'blur(6px) brightness(200%)';
  image(buffer, 0, 0);
  drawingContext.restore();
}
function drawImage() {
  drawingContext.save();
  drawingContext.globalCompositeOperation = 'lighter';
  image(buffer, 0, 0);
  drawingContext.restore();
}
function draw() {
  buffer.background(220, 70, 2);
  try {
    creature.update();
    bubbles.setRepelTarget(creature.position);
    bubbles.update();
    drawGlow();
    drawImage();
  } catch (e) {
    console.error(e);
    noLoop();
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  buffer.resizeCanvas(windowWidth, windowHeight);
  center = [0.5 * windowWidth, 0.5 * windowHeight];
}
function mouseMoved() {
  creature.setTarget([mouseX, mouseY]);
}
function mouseOut() {
  creature.follow = false;
}
function mouseOver() {
  creature.follow = true;
}
