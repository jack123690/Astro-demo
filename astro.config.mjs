import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    //配置网站域名和路径
    site: 'https://jack123690.github.io',
    base: 'Astro-demo',
    //配置服务器渲染模式 按需渲染
    output: 'hybrid',

});
