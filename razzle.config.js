const nodeExternals = require('webpack-node-externals');
const fs = require('fs');

module.exports = {
  modifyBabelOptions() {
    return {
      presets: ['razzle/babel']
    };
  },
  modify: (config, { target, dev }, webpack) => {
    const babelRuleIndex = config.module.rules.findIndex(
      (rule) => rule.use && rule.use[0].loader && rule.use[0].loader.includes('babel-loader')
    );
    config.module.rules[babelRuleIndex] = Object.assign(config.module.rules[babelRuleIndex], {
      include: [
        ...config.module.rules[babelRuleIndex].include,
        fs.realpathSync('./node_modules/culturetrip-ui')
      ],
    });
    config.externals =
      target === 'node'
        ? [
          nodeExternals({
            whitelist: [
              dev ? 'webpack/hot/poll?300' : null,
              /\.(woff2|svg|png|jpg|jpeg|gif|ico|webp)$/,
              /^culturetrip-ui/,
            ].filter(Boolean),
          }),
        ]
        : [];

    if (target === 'web') {
      config.output.filename = dev
        ? 'static/js/[name].js'
        : 'static/js/[name].[hash:8].js';

      config.externals.push({
        react: {
          root: 'React',
          commonjs: 'react',
          commonjs2: 'react'
        },
        'react-dom': {
          root: 'ReactDOM',
          commonjs2: 'react-dom',
          commonjs: 'react-dom',
          amd: 'react-dom'
        },
        'styled-components': {
          commonjs: "styled-components",
          commonjs2: "styled-components",
          root: "styled"
        }
      });
      config.output.libraryTarget = 'umd';
    }
    return config;
  }
};
