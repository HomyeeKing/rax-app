import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  extract: {
    // A common use case is scanning files from the root directory
    include: ['**/*.{tsx,jsx}'],
    // if you are excluding files, make sure you always include node_modules and .git
    exclude: ['node_modules', '.git', 'build', 'lib', '.rax'],
  },
});
