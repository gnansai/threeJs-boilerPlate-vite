import { RGBELoader } from "../../../../node_modules/three/examples/jsm/loaders/RGBELoader.js";

import { EquirectangularReflectionMapping, sRGBEncoding } from "three";
import { TextureLoader } from "three";

async function hdriLoad() {
  const hdriLoader = new RGBELoader().setPath("assets/hdri/");
  const textureLoader = new TextureLoader().setPath("assets/hdri/");

  const [background1, hdri1] = await Promise.all([
    textureLoader.loadAsync("lythwood_room_1k.jpg"),
    hdriLoader.loadAsync("lythwood_room_1k.hdr"),
  ]);

  background1.encoding = sRGBEncoding;
  background1.mapping = EquirectangularReflectionMapping;
  hdri1.mapping = EquirectangularReflectionMapping;

  return { background1, hdri1 };
}

export { hdriLoad };