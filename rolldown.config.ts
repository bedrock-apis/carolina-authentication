import { RolldownOptions } from 'rolldown';
import { dts } from 'rolldown-plugin-dts';

export default {
    input: {
        "main":"./src/main.ts",
    },
    plugins: [dts({oxc: true })],
    output:{
        cleanDir: true,
        dir: "dist"
    },
    treeshake: true,
} satisfies RolldownOptions;
