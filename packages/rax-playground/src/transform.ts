/**
 * set specific version rax compiler/runtime
 * @param v version
 */
export async function setVersion(version: string) {
  const compilerUrl = `https://unpkg.com/rax-app@${version}/dist/compiler-sfc.esm-browser.js`;
  const runtimeUrl = `https://unpkg.com/rax-app@${version}/dist/runtime-dom.esm-browser.js`;
  const [compiler] = await Promise.all([
    import(/* @vite-ignore */ compilerUrl),
    import(/* @vite-ignore */ runtimeUrl),
  ]);
  SFCCompiler = compiler;
  vueRuntimeUrl.value = runtimeUrl;
  console.info(`Now using Vue version: ${version}`);
}
