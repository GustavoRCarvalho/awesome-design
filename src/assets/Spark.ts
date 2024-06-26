// make by https://codepen.io/lucasdellabella/pen/RwMyzRd

let styleSheet: any = null;

const SPARK_ELEMENT_WIDTH = 30;
const DISTANCE = 40;

const RANDOMNESS_ON = true;

export const AddSpark = (e: any) => {
  const center = { x: e.pageX, y: e.pageY };
  makeBurst(center);
};

function createTransformSteps(props: any) {
  const inputSteps = props;
  const outputSteps = [inputSteps.shift()];
  inputSteps.forEach((step: any, i: any) => {
    outputSteps.push(`${outputSteps[i]} ${step}`);
  });

  return outputSteps;
}

const makeBurst = (center: any) => {
  for (let i = 0; i < 8; i++) {
    const randomSpace = RANDOMNESS_ON
      ? Math.floor(-17 + Math.random() * 34)
      : 0;
    makeSpark(center, 45 * i + randomSpace);
  }
};

const makeSpark = (center: any, rotation: any) => {
  const div = document.createElement('div');

  // div.appendChild([Plus])
  const aniName = `disappear_${rotation}`;
  dynamicAnimation(aniName, rotation);

  div.setAttribute(
    'style',
    `
    position: absolute;
    width: 30px;
    height: 8px;
    border-radius: 3px;
  
    background-color: #ffffff66;
    transform: none;

    left: ${center.x}px;
    top: ${center.y}px;
    animation: ${aniName} 500ms ease-out both;
  `
  );
  document.body.append(div);
  setTimeout(() => {
    document.body.removeChild(div);
  }, 1000);
};

const dynamicAnimation = (name: any, rotation: any) => {
  if (!styleSheet) {
    styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    document.head.appendChild(styleSheet);
  }

  const randomDist = RANDOMNESS_ON
    ? Math.floor((Math.random() - 0.5) * DISTANCE * 0.7)
    : 0;

  const [s1, s2, s3] = createTransformSteps([
    `translate(-50%, -50%) rotate(${rotation}deg) translate(10px, 0px)`,
    `translate(${DISTANCE + randomDist}px, 0px) scale(0.5, 0.5)`,
    `translate(${SPARK_ELEMENT_WIDTH / 2}px, 0) scale(0, 0)`,
  ]);

  // todo some axis would be good here.
  styleSheet.sheet.insertRule(
    `@keyframes ${name} {
     0% {
       transform: ${s1};
     }
     70% {
       transform: ${s2};
     }
     100% {
       transform: ${s3};
     }
  }`,
    styleSheet.length
  );
};
