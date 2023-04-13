import vue from '@vitejs/plugin-vue'
import path from 'path';
export default {
    base: path.resolve(__dirname, '/'),
    server: {
        port: 9001,
        host: '0.0.0.0'
    },
    plugins: [vue()]
};
