// 生成網站靜態圖片資源（無需任何第三方套件）
// 用法：node scripts/generate-images.mjs
// 會產生 public/icon.png、public/apple-icon.png、public/opengraph-image.png
import { deflateSync } from "node:zlib";
import { writeFileSync } from "node:fs";

function crc32(buf) {
  let table = crc32.table;
  if (!table) {
    table = crc32.table = new Int32Array(256);
    for (let n = 0; n < 256; n++) {
      let c = n;
      for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
      table[n] = c;
    }
  }
  let crc = -1;
  for (let i = 0; i < buf.length; i++) crc = (crc >>> 8) ^ table[(crc ^ buf[i]) & 0xff];
  return (crc ^ -1) >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const typeBuf = Buffer.from(type, "ascii");
  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])));
  return Buffer.concat([len, typeBuf, data, crcBuf]);
}

function makePng(width, height, pixelFn) {
  const sig = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 2; // color type: RGB
  const raw = Buffer.alloc(height * (1 + width * 3));
  let off = 0;
  for (let y = 0; y < height; y++) {
    raw[off++] = 0; // filter: none
    for (let x = 0; x < width; x++) {
      const [r, g, b] = pixelFn(x, y);
      raw[off++] = r;
      raw[off++] = g;
      raw[off++] = b;
    }
  }
  const idat = deflateSync(raw);
  return Buffer.concat([sig, chunk("IHDR", ihdr), chunk("IDAT", idat), chunk("IEND", Buffer.alloc(0))]);
}

const lerp = (a, b, t) => Math.round(a + (b - a) * t);
const skyTop = [2, 132, 199]; // #0284c7
const skyBottom = [14, 165, 233]; // #0ea5e9

function gradient(x, y, w, h) {
  const t = y / (h - 1);
  return [lerp(skyTop[0], skyBottom[0], t), lerp(skyTop[1], skyBottom[1], t), lerp(skyTop[2], skyBottom[2], t)];
}

// 在漸變上畫白色「A」字母（幾何三角形 + 橫樑）
function withA(x, y, w, h, base) {
  const cx = w / 2;
  const yTop = h * 0.22;
  const yBottom = h * 0.8;
  const half = w * 0.22;
  const leftX = (y) => cx + (cx - half - cx) * ((y - yTop) / (yBottom - yTop));
  const rightX = (y) => cx + (cx + half - cx) * ((y - yTop) / (yBottom - yTop));
  const crossY = h * 0.5;
  const crossHalf = w * 0.09;

  if (y >= yTop && y <= yBottom) {
    const l = leftX(y);
    const r = rightX(y);
    if (x >= l && x <= r) {
      const inBar = y > crossY && x >= cx - crossHalf && x <= cx + crossHalf;
      if (!inBar) return [255, 255, 255];
    }
  }
  return base;
}

writeFileSync("public/icon.png", makePng(192, 192, (x, y) => withA(x, y, 192, 192, gradient(x, y, 192, 192))));
writeFileSync("public/apple-icon.png", makePng(180, 180, (x, y) => withA(x, y, 180, 180, gradient(x, y, 180, 180))));
writeFileSync("public/opengraph-image.png", makePng(1200, 630, (x, y) => withA(x, y, 1200, 630, gradient(x, y, 1200, 630))));

console.log("✅ 已生成 public/icon.png、public/apple-icon.png、public/opengraph-image.png");
